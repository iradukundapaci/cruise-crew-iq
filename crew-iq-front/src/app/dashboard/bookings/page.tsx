'use client';

import * as React from 'react';
import { FileDownload } from '@mui/icons-material/';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import axios from 'axios';

import { DataTable } from '@/components/dashboard/customer/customers-table';

enum ReportType {
  weekly = 'weekly',
  monthly = 'monthly',
}

enum ReportFormat {
  xlsx = 'xlsx',
  pdf = 'pdf',
}

export default function Page(): React.JSX.Element {
  const [bookings, setBookings] = React.useState<any[]>([]);
  const [totalBookings, setTotalBookings] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [reportType, setReportType] = React.useState<ReportType>(ReportType.weekly);
  const [reportFormat, setReportFormat] = React.useState<ReportFormat>(ReportFormat.xlsx);
  const [isDownloading, setIsDownloading] = React.useState(false);

  // Modal state for creating/updating bookings
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [newBooking, setNewBooking] = React.useState({
    id: '',
    customerNames: '',
    checkIn: null,
    checkOut: null,
  });

  // Snackbar state for notifications
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  // Dialog state for delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [bookingToDelete, setBookingToDelete] = React.useState<any>(null);

  // Date formatting function
  const formatDate = (date: string | null) => {
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Define columns for the DataTable
  const columns = [
    { key: 'customerNames', label: 'Customer Names' },
    {
      key: 'checkIn',
      label: 'Check-In Date',
      render: (row: any) => formatDate(row.checkIn),
    },
    {
      key: 'checkOut',
      label: 'Check-Out Date',
      render: (row: any) => formatDate(row.checkOut),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleEditBooking(row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteBooking(row)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const getToken = () => {
    const token = localStorage.getItem('accessToken');
    return token || '';
  };

  React.useEffect(() => {
    fetchBookings();
  }, [page, rowsPerPage]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/bookings', {
        params: {
          page: page + 1,
          size: rowsPerPage,
        },
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const { items, meta } = response.data.payload;
      const fetchedBookings = items.map((booking: any) => ({
        id: booking.id.toString(),
        customerNames: booking.customer.names,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
      }));

      setBookings(fetchedBookings);
      setTotalBookings(meta.totalItems);
    } catch (error) {
      console.error('Failed to fetch bookings', error);
      setSnackbarMessage('Failed to fetch bookings');
      setSnackbarOpen(true);
    }
  };

  const handleDownloadReport = async () => {
    try {
      setIsDownloading(true);
      const response = await axios.get(
        `http://localhost:8000/api/v1/bookings/report?type=${reportType}&format=${reportFormat}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
          responseType: 'blob',
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `booking-report-${reportType}-${new Date().toISOString()}.${reportFormat}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setSnackbarMessage('Report downloaded successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Failed to download report', error);
      setSnackbarMessage('Failed to download report');
      setSnackbarOpen(true);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    setIsEditMode(false);
    setNewBooking({ id: '', customerNames: '', checkIn: null, checkOut: null });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewBooking({ id: '', customerNames: '', checkIn: null, checkOut: null });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
  };

  const handleEditBooking = (booking: any) => {
    setIsEditMode(true);
    setNewBooking({
      id: booking.id,
      customerNames: booking.customerNames,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
    });
    setModalOpen(true);
  };

  const handleCreateBooking = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/bookings', newBooking, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Booking created successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
      fetchBookings();
    } catch (error) {
      console.error('Failed to create booking', error);
      setSnackbarMessage('Failed to create booking');
      setSnackbarOpen(true);
    }
  };

  const handleUpdateBooking = async () => {
    try {
      await axios.patch(`http://localhost:8000/api/v1/bookings/${newBooking.id}`, newBooking, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Booking updated successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
      fetchBookings();
    } catch (error) {
      console.error('Failed to update booking', error);
      setSnackbarMessage('Failed to update booking');
      setSnackbarOpen(true);
    }
  };

  const handleDeleteBooking = (booking: any) => {
    setBookingToDelete(booking);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteBooking = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/bookings/${bookingToDelete.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Booking deleted successfully!');
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setBookingToDelete(null);
      fetchBookings();
    } catch (error) {
      console.error('Failed to delete booking', error);
      setSnackbarMessage('Failed to delete booking');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Hotel Bookings</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <FormControl sx={{ minWidth: 120, mr: 1 }}>
              <InputLabel id="report-type-label">Report Type</InputLabel>
              <Select
                labelId="report-type-label"
                value={reportType}
                label="Report Type"
                onChange={(e) => setReportType(e.target.value as ReportType)}
                size="small"
              >
                <MenuItem value={ReportType.weekly}>Weekly</MenuItem>
                <MenuItem value={ReportType.monthly}>Monthly</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120, mr: 1 }}>
              <InputLabel id="report-format-label">Format</InputLabel>
              <Select
                labelId="report-format-label"
                value={reportFormat}
                label="Format"
                onChange={(e) => setReportFormat(e.target.value as ReportFormat)}
                size="small"
              >
                <MenuItem value={ReportFormat.xlsx}>Excel</MenuItem>
                <MenuItem value={ReportFormat.pdf}>PDF</MenuItem>
              </Select>
            </FormControl>
            <Button
              color="inherit"
              startIcon={<FileDownload />}
              onClick={handleDownloadReport}
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Download Report'}
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button
            startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
            variant="contained"
            onClick={handleOpenModal}
          >
            Add Booking
          </Button>
        </div>
      </Stack>

      <DataTable
        columns={columns}
        rows={bookings}
        count={totalBookings}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Stack
          spacing={2}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'background.paper',
            borderRadius: 2,
            padding: 4,
            boxShadow: 24,
            minWidth: 300,
          }}
        >
          <Typography variant="h6">{isEditMode ? 'Edit Booking' : 'Create Booking'}</Typography>
          <TextField
            label="Customer Names"
            name="customerNames"
            value={newBooking.customerNames}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Check-In Date"
            name="checkIn"
            type="date"
            value={newBooking.checkIn || ''}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Check-Out Date"
            name="checkOut"
            type="date"
            value={newBooking.checkOut || ''}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="contained" onClick={isEditMode ? handleUpdateBooking : handleCreateBooking}>
              {isEditMode ? 'Update' : 'Create'}
            </Button>
          </Stack>
        </Stack>
      </Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this booking?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDeleteDialogOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={confirmDeleteBooking} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
