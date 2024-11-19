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

import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { DataTable } from '@/components/dashboard/customer/customers-table';

export default function Page(): React.JSX.Element {
  const [customers, setCustomers] = React.useState<any[]>([]);
  const [totalCustomers, setTotalCustomers] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  // Modal state for creating/updating users
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [newUser, setNewUser] = React.useState({ id: '', names: '', email: '', role: '', password: '' });

  // Snackbar state for notifications
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  // Dialog state for delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [userToDelete, setUserToDelete] = React.useState<any>(null);

  // Define columns for the DataTable
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => {
              handleEditUser(row);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleDeleteUser(row);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  // Fetch users from the API
  React.useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users', {
          params: {
            role: 'ADMIN',
            page: page + 1,
            size: rowsPerPage,
          },
        });

        const { items, meta } = response.data.payload;
        const fetchedCustomers = items.map((user: any) => ({
          id: user.id.toString(),
          name: user.names,
          email: user.email,
          role: user.role,
        }));

        setCustomers(fetchedCustomers);
        setTotalCustomers(meta.totalItems);
      } catch (error) {
        console.error('Failed to fetch customers', error);
      }
    };

    fetchCustomers();
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
    setNewUser({ id: '', names: '', email: '', role: '', password: '' }); // Reset user state
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewUser({ id: '', names: '', email: '', role: '', password: '' }); // Reset user state
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const getToken = () => {
    const token = localStorage.getItem('accessToken');
    return token;
  };

  const handleCreateUser = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/users', newUser, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      setSnackbarMessage('User created successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to create user', error);
    }
  };

  const handleEditUser = (user: any) => {
    setNewUser({
      id: user.id, // Set the ID for the user being edited
      names: user?.name || '',
      email: user?.email || '',
      role: user?.role || '',
      password: '',
    });
    setIsEditMode(true);
    setModalOpen(true);
  };

  const handleUpdateUser = async () => {
    try {
      await axios.patch(`http://localhost:8000/api/v1/users/${newUser.id}`, newUser, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('User updated successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to update user', error);
    }
  };

  const handleDeleteUser = (user: any) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/users/${userToDelete.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('User deleted successfully!');
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setUserToDelete(null); // Clear the selected user
    } catch (error) {
      console.error('Failed to delete user', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Users</Typography>
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
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <DataTable
        columns={columns}
        rows={customers}
        count={totalCustomers}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {/* Modal for creating/updating a user */}
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
          <Typography variant="h6">{isEditMode ? 'Edit User' : 'Create New User'}</Typography>
          <TextField label="Name" name="names" value={newUser.names} onChange={handleInputChange} fullWidth />
          <TextField label="Email" name="email" value={newUser.email} onChange={handleInputChange} fullWidth />
          <TextField label="Role" name="role" value={newUser.role} onChange={handleInputChange} fullWidth />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={newUser.password}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="contained" onClick={isEditMode ? handleUpdateUser : handleCreateUser}>
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
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {userToDelete?.name}? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmDeleteUser} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
