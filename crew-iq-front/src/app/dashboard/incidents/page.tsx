/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Modal,
  Snackbar,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import axios from 'axios';

import { DataTable } from '@/components/dashboard/customer/customers-table';

export default function Page(): React.JSX.Element {
  const [incidents, setIncidents] = React.useState<any[]>([]);
  const [totalIncidents, setTotalIncidents] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  // Modal state for creating/updating incidents
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [newIncident, setNewIncident] = React.useState({
    id: '',
    title: '',
    description: '',
    status: '',
    resolution: '',
  });

  // Snackbar state for notifications
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  // Dialog state for delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [incidentToDelete, setIncidentToDelete] = React.useState<any>(null);

  // Define columns for the DataTable
  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'description', label: 'Description' },
    { key: 'status', label: 'Status' },
    { key: 'resolution', label: 'Resolution' },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => {
              handleEditIncident(row);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleDeleteIncident(row);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  // Fetch incidents from the API
  React.useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/incidents', {
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
        const fetchedIncidents = items.map((incident: any) => ({
          id: incident.id.toString(),
          title: incident.title,
          description: incident.description,
          status: incident.status,
          resolution: incident.resolution,
        }));

        setIncidents(fetchedIncidents);
        setTotalIncidents(meta.totalItems);
      } catch (error) {
        console.error('Failed to fetch incidents', error);
      }
    };

    fetchIncidents();
  }, [page, rowsPerPage]);

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
    setNewIncident({ id: '', title: '', description: '', status: '', resolution: '' }); // Reset incident state
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewIncident({ id: '', title: '', description: '', status: '', resolution: '' }); // Reset incident state
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewIncident((prevIncident) => ({ ...prevIncident, [name]: value }));
  };

  const getToken = () => {
    const token = localStorage.getItem('accessToken');
    return token || '';
  };

  const handleCreateIncident = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/incidents', newIncident, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Incident created successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to create incident', error);
    }
  };

  const handleEditIncident = (incident: any) => {
    setNewIncident({
      id: incident.id,
      title: incident?.title || '',
      description: incident?.description || '',
      status: incident?.status || '',
      resolution: incident?.resolution || '',
    });
    setIsEditMode(true);
    setModalOpen(true);
  };

  const handleUpdateIncident = async () => {
    try {
      await axios.patch(`http://localhost:8000/api/v1/incidents/${newIncident.id}`, newIncident, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Incident updated successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to update incident', error);
    }
  };

  const handleDeleteIncident = (incident: any) => {
    setIncidentToDelete(incident);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteIncident = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/incidents/${incidentToDelete.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Incident deleted successfully!');
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setIncidentToDelete(null);
    } catch (error) {
      console.error('Failed to delete incident', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Incidents</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button
            startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
            variant="contained"
            onClick={handleOpenModal} // Trigger modal
          >
            Add Incident
          </Button>
        </div>
      </Stack>

      {/* DataTable for Incidents */}
      <DataTable
        columns={columns}
        rows={incidents}
        count={totalIncidents}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {/* Modal for creating/updating an incident */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Stack
          spacing={2}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            padding: 4,
          }}
        >
          <Typography variant="h6">{isEditMode ? 'Edit Incident' : 'Create New Incident'}</Typography>
          <TextField label="Title" name="title" value={newIncident.title} onChange={handleInputChange} fullWidth />
          <TextField
            label="Description"
            name="description"
            value={newIncident.description}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField label="Status" name="status" value={newIncident.status} onChange={handleInputChange} fullWidth />
          <TextField
            label="Resolution"
            name="resolution"
            value={newIncident.resolution}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="contained" onClick={isEditMode ? handleUpdateIncident : handleCreateIncident}>
            {isEditMode ? 'Update' : 'Create'}
          </Button>
        </Stack>
      </Modal>

      {/* Snackbar for notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Dialog for delete confirmation */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
        }}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {incidentToDelete?.title}? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDeleteDialogOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={confirmDeleteIncident} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
