'use client';

import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
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
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import axios from 'axios';

import { DataTable } from '@/components/dashboard/customer/customers-table';

export default function Page(): React.JSX.Element {
  const [notifications, setNotifications] = React.useState<any[]>([]);
  const [totalNotifications, setTotalNotifications] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  // Modal state for creating notifications
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [newNotification, setNewNotification] = React.useState({
    id: '',
    message: '',
    isRead: false,
  });

  // Snackbar state for notifications
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  // Dialog state for delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [notificationToDelete, setNotificationToDelete] = React.useState<any>(null);

  // Define columns for the DataTable
  const columns = [
    {
      key: 'message',
      label: 'Message',
      render: (row: any) => (
        <Typography
          sx={{
            fontWeight: row.isRead ? 'normal' : 'bold',
          }}
        >
          {row.message}
        </Typography>
      ),
    },
    {
      key: 'createdAt',
      label: 'Date',
      render: (row: any) => new Date(row.createdAt).toLocaleDateString(),
    },
    {
      key: 'isRead',
      label: 'Status',
      render: (row: any) => (row.isRead ? 'Read' : 'Unread'),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleMarkAsRead(row)} disabled={row.isRead}>
            <MarkEmailReadIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleDeleteNotification(row);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  // Fetch notifications from the API
  React.useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/notifications', {
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

        const notifications = response.data.payload;
        setNotifications(notifications);
        setTotalNotifications(notifications.length);
      } catch (error) {
        console.error('Failed to fetch notifications', error);
      }
    };

    fetchNotifications();
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
    setNewNotification({ id: '', message: '', isRead: false });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewNotification({ id: '', message: '', isRead: false });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewNotification((prev) => ({ ...prev, [name]: value }));
  };

  const getToken = () => {
    const token = localStorage.getItem('accessToken');
    return token || '';
  };

  const handleCreateNotification = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/notifications', newNotification, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Notification created successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to create notification', error);
    }
  };

  const handleMarkAsRead = async (notification: any) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/v1/notifications/${notification.id}`,
        {},
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setSnackbarMessage('Notification marked as read!');
      setSnackbarOpen(true);
      // Refresh notifications
      const updatedNotifications = notifications.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n));
      setNotifications(updatedNotifications);
    } catch (error) {
      console.error('Failed to mark notification as read', error);
    }
  };

  const handleDeleteNotification = (notification: any) => {
    setNotificationToDelete(notification);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteNotification = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/notifications/${notificationToDelete.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Notification deleted successfully!');
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setNotificationToDelete(null);
      // Refresh notifications
      const updatedNotifications = notifications.filter((n) => n.id !== notificationToDelete.id);
      setNotifications(updatedNotifications);
    } catch (error) {
      console.error('Failed to delete notification', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Notifications</Typography>
        </Stack>
        <div>
          <Button
            startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
            variant="contained"
            onClick={handleOpenModal}
          >
            Add Notification
          </Button>
        </div>
      </Stack>

      {/* DataTable for Notifications */}
      <DataTable
        columns={columns}
        rows={notifications}
        count={totalNotifications}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {/* Modal for creating a notification */}
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
          <Typography variant="h6">Create New Notification</Typography>
          <TextField
            label="Message"
            name="message"
            value={newNotification.message}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
          />
          <Button variant="contained" onClick={handleCreateNotification}>
            Create
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
            Are you sure you want to delete this notification? This action cannot be undone.
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
          <Button onClick={confirmDeleteNotification} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
