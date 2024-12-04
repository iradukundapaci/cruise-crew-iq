'use client';

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import moment from 'moment';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import axios from 'axios';

// Configure the localizer
const localizer = momentLocalizer(moment);

// Interface for Schedule
interface Schedule {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  fromDateTime: string;
  toDateTime: string;
  location: string;
}

// Interface for Validation Errors
interface ValidationErrors {
  location?: string;
  fromDateTime?: string;
  toDateTime?: string;
  general?: string;
}

export default function BoatScheduleCalendar() {
  const [schedules, setSchedules] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Schedule | null>(null);
  const [eventDetailsOpen, setEventDetailsOpen] = useState(false);
  const [eventFormOpen, setEventFormOpen] = useState(false);
  const [currentView, setCurrentView] = useState(Views.MONTH);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<Schedule>({
    fromDateTime: '',
    toDateTime: '',
    location: '',
  });

  const getToken = () => localStorage.getItem('accessToken');

  // Validation Function
  const validateSchedule = (): boolean => {
    const errors: ValidationErrors = {};
    const now = moment();

    // Location validation
    if (!formData.location || formData.location.trim() === '') {
      errors.location = 'Location is required';
    }

    // Date validations
    if (!formData.fromDateTime) {
      errors.fromDateTime = 'Start date and time are required';
    }

    if (!formData.toDateTime) {
      errors.toDateTime = 'End date and time are required';
    }

    // Ensure dates are valid
    const fromDate = moment(formData.fromDateTime);
    const toDate = moment(formData.toDateTime);

    if (fromDate.isValid() && toDate.isValid()) {
      // Check if dates are in the past
      if (fromDate.isBefore(now)) {
        errors.fromDateTime = 'Start date cannot be in the past';
      }

      // Check if end date is before start date
      if (toDate.isBefore(fromDate)) {
        errors.toDateTime = 'End date must be after start date';
      }

      // Check maximum schedule duration (e.g., 7 days)
      const duration = moment.duration(toDate.diff(fromDate));
      if (duration.asDays() > 7) {
        errors.general = 'Schedule cannot be longer than 7 days';
      }
    }

    // Update validation errors
    setValidationErrors(errors);

    // Return validation status
    return Object.keys(errors).length === 0;
  };

  // Fetch Schedules
  const fetchSchedules = async () => {
    try {
      const response = await axios.get<{
        message: string;
        payload: {
          items: Schedule[];
          meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
          };
        };
      }>('http://localhost:8000/api/v1/schedule', {
        params: {
          page: 1,
          size: 10,
        },
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const calendarEvents = response.data.payload.items.map((schedule) => ({
        ...schedule,
        title: `${schedule.location}`,
        start: new Date(schedule.fromDateTime),
        end: new Date(schedule.toDateTime),
      }));

      setSchedules(calendarEvents);
    } catch (error) {
      console.error('Failed to fetch boat schedules', error);
    }
  };

  // Create Schedule
  const createSchedule = async () => {
    // Validate before submission
    if (!validateSchedule()) return;

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/schedule',
        {
          fromDateTime: formData.fromDateTime,
          toDateTime: formData.toDateTime,
          location: formData.location,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      // Refresh schedules after creating
      fetchSchedules();

      // Close the form and reset
      setEventFormOpen(false);
      setFormData({
        fromDateTime: '',
        toDateTime: '',
        location: '',
      });
      setValidationErrors({});
    } catch (error) {
      console.error('Failed to create schedule', error);
      setValidationErrors({
        general: 'Failed to create schedule. Please try again.',
      });
    }
  };

  // Update Schedule
  const updateSchedule = async () => {
    if (!selectedEvent?.id) return;

    // Validate before submission
    if (!validateSchedule()) return;

    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/schedule/${selectedEvent.id}`,
        {
          fromDateTime: formData.fromDateTime,
          toDateTime: formData.toDateTime,
          location: formData.location,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      // Refresh schedules after updating
      fetchSchedules();

      // Close the form and reset
      setEventDetailsOpen(false);
      setEventFormOpen(false);
      setSelectedEvent(null);
      setFormData({
        fromDateTime: '',
        toDateTime: '',
        location: '',
      });
      setValidationErrors({});
    } catch (error) {
      console.error('Failed to update schedule', error);
      setValidationErrors({
        general: 'Failed to update schedule. Please try again.',
      });
    }
  };

  // Delete Schedule
  const deleteSchedule = async () => {
    if (!selectedEvent?.id) return;

    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/schedule/${selectedEvent.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });

      // Refresh schedules after deleting
      fetchSchedules();

      // Close all dialogs and reset
      setEventDetailsOpen(false);
      setEventFormOpen(false);
      setSelectedEvent(null);
    } catch (error) {
      console.error('Failed to delete schedule', error);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const handleSelectEvent = (event: any) => {
    setSelectedEvent(event);
    setEventDetailsOpen(true);

    // Populate form data for potential update
    setFormData({
      fromDateTime: event.fromDateTime,
      toDateTime: event.toDateTime,
      location: event.location,
    });
  };

  const handleCloseEventDetails = () => {
    setEventDetailsOpen(false);
    setSelectedEvent(null);
  };

  const handleOpenCreateForm = () => {
    setEventFormOpen(true);
    setSelectedEvent(null);
    setFormData({
      fromDateTime: '',
      toDateTime: '',
      location: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ValidationErrors];
        return newErrors;
      });
    }
  };

  return (
    <Stack spacing={3}>
      <Typography variant="h4">Docking Schedule</Typography>

      {/* View Selector Buttons */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box></Box>
        <Button variant="contained" color="primary" onClick={handleOpenCreateForm}>
          Add New Schedule
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Calendar
            localizer={localizer}
            events={schedules}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
            view={currentView}
            onView={(view) => setCurrentView(view)}
          />
        </CardContent>
      </Card>

      {/* Event Details Dialog */}
      <Dialog open={eventDetailsOpen} onClose={handleCloseEventDetails} maxWidth="sm" fullWidth>
        {selectedEvent && (
          <>
            <DialogTitle>{selectedEvent.location}</DialogTitle>
            <DialogContent>
              <Stack spacing={2}>
                <Typography>
                  <strong>From:</strong> {moment(selectedEvent.fromDateTime).format('MMMM Do, YYYY - h:mm a')}
                </Typography>
                <Typography>
                  <strong>To:</strong> {moment(selectedEvent.toDateTime).format('MMMM Do, YYYY - h:mm a')}
                </Typography>
                <Typography>
                  <strong>Created:</strong> {moment(selectedEvent.createdAt).format('MMMM Do, YYYY - h:mm a')}
                </Typography>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setEventFormOpen(true)} color="primary">
                Edit
              </Button>
              <Button onClick={deleteSchedule} color="error">
                Delete
              </Button>
              <Button onClick={handleCloseEventDetails}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Event Form Dialog (Create/Update) */}
      <Dialog
        open={eventFormOpen}
        onClose={() => {
          setEventFormOpen(false);
          setSelectedEvent(null);
          setValidationErrors({});
        }}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{selectedEvent ? 'Edit Schedule' : 'Create New Schedule'}</DialogTitle>
        <DialogContent>
          {validationErrors.general && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {validationErrors.general}
            </Alert>
          )}
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              name="location"
              label="Location"
              fullWidth
              value={formData.location}
              onChange={handleInputChange}
              error={!!validationErrors.location}
              helperText={validationErrors.location}
            />
            <TextField
              name="fromDateTime"
              label="Start Date and Time"
              type="datetime-local"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.fromDateTime ? moment(formData.fromDateTime).format('YYYY-MM-DDTHH:mm') : ''}
              onChange={handleInputChange}
              error={!!validationErrors.fromDateTime}
              helperText={validationErrors.fromDateTime}
            />
            <TextField
              name="toDateTime"
              label="End Date and Time"
              type="datetime-local"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.toDateTime ? moment(formData.toDateTime).format('YYYY-MM-DDTHH:mm') : ''}
              onChange={handleInputChange}
              error={!!validationErrors.toDateTime}
              helperText={validationErrors.toDateTime}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          {selectedEvent ? (
            <Button onClick={updateSchedule} color="primary">
              Update
            </Button>
          ) : (
            <Button onClick={createSchedule} color="primary">
              Create
            </Button>
          )}
          <Button
            onClick={() => {
              setEventFormOpen(false);
              setSelectedEvent(null);
              setValidationErrors({});
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
