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
  const [customers, setCustomers] = React.useState<any[]>([]);
  const [totalCustomers, setTotalCustomers] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  // Modal state for creating/updating customers
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [newCustomer, setNewCustomer] = React.useState({
    id: '',
    names: '',
    email: '',
    phoneNumber: '',
  });

  // Snackbar state for notifications
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  // Dialog state for delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [customerToDelete, setCustomerToDelete] = React.useState<any>(null);

  // Define columns for the DataTable
  const columns = [
    { key: 'names', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phoneNumber', label: 'Phone Number' },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => {
              handleEditCustomer(row);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleDeleteCustomer(row);
            }}
          >
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
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/customers', {
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
        const fetchedCustomers = items.map((customer: any) => ({
          id: customer.id.toString(),
          names: customer.names,
          email: customer.email,
          phoneNumber: customer.phoneNumber,
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
    setNewCustomer({ id: '', names: '', email: '', phoneNumber: '' });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewCustomer({ id: '', names: '', email: '', phoneNumber: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
  };

  const handleCreateCustomer = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/customers', newCustomer, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Customer created successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to create customer', error);
    }
  };

  const handleEditCustomer = (customer: any) => {
    setNewCustomer({
      id: customer.id,
      names: customer.names || '',
      email: customer.email || '',
      phoneNumber: customer.phoneNumber || '',
    });
    setIsEditMode(true);
    setModalOpen(true);
  };

  const handleUpdateCustomer = async () => {
    try {
      await axios.patch(`http://localhost:8000/api/v1/customers/${newCustomer.id}`, newCustomer, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Customer updated successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to update customer', error);
    }
  };

  const handleDeleteCustomer = (customer: any) => {
    setCustomerToDelete(customer);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteCustomer = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/customers/${customerToDelete.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Customer deleted successfully!');
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setCustomerToDelete(null);
    } catch (error) {
      console.error('Failed to delete customer', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Hotel Customers</Typography>
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
            onClick={handleOpenModal}
          >
            Add Customer
          </Button>
        </div>
      </Stack>

      {/* DataTable for Hotel Customers */}
      <DataTable
        columns={columns}
        rows={customers}
        count={totalCustomers}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {/* Modal for creating/updating a customer */}
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
          <Typography variant="h6">{isEditMode ? 'Edit Customer' : 'Create New Customer'}</Typography>
          <TextField label="Name" name="names" value={newCustomer.names} onChange={handleInputChange} fullWidth />
          <TextField label="Email" name="email" value={newCustomer.email} onChange={handleInputChange} fullWidth />
          <TextField
            label="Phone"
            name="phoneNumber"
            value={newCustomer.phoneNumber}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="contained" onClick={isEditMode ? handleUpdateCustomer : handleCreateCustomer}>
            {isEditMode ? 'Update' : 'Create'}
          </Button>
        </Stack>
      </Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
        }}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete customer {customerToDelete?.names}? This action cannot be undone.
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
          <Button onClick={confirmDeleteCustomer} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
