'use client';

import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Modal,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import axios from 'axios';

export default function Page(): React.JSX.Element {
  const [licenses, setLicenses] = React.useState<any[]>([]); // Ensure licenses is initialized as an empty array
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [newLicense, setNewLicense] = React.useState({
    id: '',
    title: '',
    description: '',
    url: '',
    issueDate: '',
    file: null as File | null,
  });

  // Snackbar state for notifications
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  // Dialog state for delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [licenseToDelete, setLicenseToDelete] = React.useState<any>(null);

  // Loading state for fetch process
  const [loading, setLoading] = React.useState<boolean>(false);

  // Fetch licenses from the API
  const fetchLicenses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/api/v1/license', {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      const fetchedLicenses = response.data.items || [];
      setLicenses(fetchedLicenses);
    } catch (error) {
      console.error('Failed to fetch licenses', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchLicenses();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
    setIsEditMode(false);
    setNewLicense({ id: '', title: '', description: '', url: '', issueDate: '', file: null });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewLicense({ id: '', title: '', description: '', url: '', issueDate: '', file: null });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewLicense((prevLicense) => ({ ...prevLicense, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewLicense((prevLicense) => ({ ...prevLicense, file }));
  };

  const getToken = () => {
    const token = localStorage.getItem('accessToken');
    return token || '';
  };

  const handleCreateLicense = async () => {
    const formData = new FormData();
    formData.append('title', newLicense.title);
    formData.append('description', newLicense.description);
    formData.append('url', newLicense.url);
    formData.append('issueDate', newLicense.issueDate);
    if (newLicense.file) {
      formData.append('file', newLicense.file);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/license', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const { message } = response.data;
      setSnackbarMessage(message || 'License created successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
      // Refresh the licenses list
      fetchLicenses();
    } catch (error) {
      console.error('Failed to create license', error);
    }
  };

  const handleEditLicense = (license: any) => {
    setNewLicense({
      id: license.id,
      title: license.title || '',
      description: license.description || '',
      url: license.documentUrl || '',
      issueDate: license.issueDate || '',
      file: null, // Reset file as it cannot be edited directly
    });
    setIsEditMode(true);
    setModalOpen(true);
  };

  const handleUpdateLicense = async () => {
    const formData = new FormData();
    formData.append('title', newLicense.title);
    formData.append('description', newLicense.description);
    formData.append('url', newLicense.url);
    formData.append('issueDate', newLicense.issueDate);
    if (newLicense.file) {
      formData.append('file', newLicense.file);
    }

    try {
      const response = await axios.patch(`http://localhost:8000/api/v1/license/${newLicense.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const { message } = response.data;
      setSnackbarMessage(message || 'License updated successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
      fetchLicenses();
    } catch (error) {
      console.error('Failed to update license', error);
    }
  };

  const handleDeleteLicense = (license: any) => {
    setLicenseToDelete(license);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteLicense = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/license/${licenseToDelete.id}`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('License deleted successfully!');
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setLicenseToDelete(null); // Clear the selected license
      // Refresh the licenses list
      fetchLicenses();
    } catch (error) {
      console.error('Failed to delete license', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDownloadLicense = (documentUrl: string) => {
    window.location.href = `http://localhost:8000/api/v1/license/download/${documentUrl}`;
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Hotel Licenses</Typography>
        </Stack>
        <div>
          <Button
            startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
            variant="contained"
            onClick={handleOpenModal} // Trigger modal
          >
            Add License
          </Button>
        </div>
      </Stack>

      {/* Display List of Licenses */}
      <Stack spacing={2}>
        {loading ? (
          <CircularProgress />
        ) : Array.isArray(licenses) && licenses.length > 0 ? (
          licenses.map((license) => (
            <Stack key={license.id} direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <Typography variant="body1">{license.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {license.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {new Date(license.issueDate).toLocaleDateString()}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleDownloadLicense(license.documentUrl)} // Trigger download
              >
                Download
              </Button>
              <Stack direction="row" spacing={1}>
                <IconButton onClick={() => handleEditLicense(license)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteLicense(license)}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Stack>
          ))
        ) : (
          <Typography>No licenses available.</Typography>
        )}
      </Stack>

      {/* Modal for creating/updating a license */}
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
          <Typography variant="h6">{isEditMode ? 'Edit License' : 'Create New License'}</Typography>
          <TextField label="Title" name="title" value={newLicense.title} onChange={handleInputChange} fullWidth />
          <TextField
            label="Description"
            name="description"
            value={newLicense.description}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Issue Date"
            name="issueDate"
            value={newLicense.issueDate}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="outlined" component="label">
            Upload Document
            <input hidden accept="image/*,.pdf,.doc,.docx" type="file" name="file" onChange={handleFileChange} />
          </Button>
          <DialogActions>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="contained" onClick={isEditMode ? handleUpdateLicense : handleCreateLicense}>
              {isEditMode ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Stack>
      </Modal>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Dialog for delete confirmation */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the license titled &quot;{licenseToDelete?.title}&quot;? This action cannot
            be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDeleteLicense} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
