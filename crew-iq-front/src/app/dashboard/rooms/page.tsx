/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Alert,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  MenuItem,
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

// Define TypeScript interfaces
interface Room {
  id: number;
  roomNumber: string;
  roomType: RoomType;
  capacity: number;
  price: number;
  occupied: boolean;
}

enum RoomType {
  SINGLE = 'SINGLE',
  DOUBLE = 'DOUBLE',
  SUITE = 'SUITE',
}

interface ApiResponse {
  message: string;
  payload: {
    items: Room[];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  };
}

export default function Page(): React.JSX.Element {
  const [rooms, setRooms] = React.useState<Room[]>([]);
  const [totalRooms, setTotalRooms] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  const [assignDialogOpen, setAssignDialogOpen] = React.useState(false);
  const [roomToAssign, setRoomToAssign] = React.useState<Room | null>(null);
  const [userEmail, setUserEmail] = React.useState('');

  // Modal state for creating/updating rooms
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [newRoom, setNewRoom] = React.useState<Partial<Room>>({
    roomNumber: '',
    roomType: RoomType.SINGLE,
    capacity: 1,
    price: 0,
    occupied: false,
  });

  // Snackbar state for notifications
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');

  // Dialog state for delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [roomToDelete, setRoomToDelete] = React.useState<Room | null>(null);

  // Define columns for the DataTable
  const columns = [
    { key: 'roomNumber', label: 'Room Number' },
    { key: 'roomType', label: 'Room Type' },
    {
      key: 'capacity',
      label: 'Capacity',
      render: (row: Room) => `${row.capacity} person${row.capacity > 1 ? 's' : ''}`,
    },
    {
      key: 'price',
      label: 'Price',
      render: (row: Room) => `$${row.price.toFixed(2)}`,
    },
    {
      key: 'occupied',
      label: 'Status',
      render: (row: Room) => (
        <Chip label={row.occupied ? 'Occupied' : 'Available'} color={row.occupied ? 'error' : 'success'} size="small" />
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: Room) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleEditRoom(row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteRoom(row)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => handleAssignRoom(row)}>
            <PlusIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const getToken = () => localStorage.getItem('accessToken');

  React.useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:8000/api/v1/rooms', {
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

        setRooms(response.data.payload.items);
        setTotalRooms(response.data.payload.meta.totalItems);
      } catch (error) {
        console.error('Failed to fetch rooms', error);
        showNotification('Failed to fetch rooms', 'error');
      }
    };

    fetchRooms();
  }, [page, rowsPerPage]);

  const showNotification = (message: string, severity: 'success' | 'error') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
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
    setNewRoom({
      roomNumber: '',
      roomType: RoomType.SINGLE,
      capacity: 1,
      price: 0,
      occupied: false,
    });
  };

  const handleAssignRoom = (room: Room) => {
    setRoomToAssign(room);
    setAssignDialogOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      [name]: name === 'capacity' || name === 'price' ? Number(value) : value,
    }));
  };

  const confirmAssignRoom = async () => {
    if (!roomToAssign || !userEmail) return;

    try {
      await axios.patch(
        'http://localhost:8000/api/v1/rooms',
        { roomId: roomToAssign.id, userEmail },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      showNotification(`Room ${roomToAssign.roomNumber} assigned to ${userEmail}`, 'success');
      setAssignDialogOpen(false);
      setUserEmail('');
      setRoomToAssign(null);
      setPage(page);
    } catch (error) {
      console.error('Failed to assign room', error);
      showNotification('Failed to assign room', 'error');
    }
  };

  const handleCreateRoom = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/rooms', newRoom, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      showNotification('Room created successfully!', 'success');
      handleCloseModal();
      // Refresh the rooms list
      setPage(0);
    } catch (error) {
      console.error('Failed to create room', error);
      showNotification('Failed to create room', 'error');
    }
  };

  const handleEditRoom = (room: Room) => {
    setNewRoom(room);
    setIsEditMode(true);
    setModalOpen(true);
  };

  const handleUpdateRoom = async () => {
    try {
      await axios.patch(`http://localhost:8000/api/v1/rooms/${newRoom.id}`, newRoom, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      showNotification('Room updated successfully!', 'success');
      handleCloseModal();
      // Refresh the rooms list
      setPage(page);
    } catch (error) {
      console.error('Failed to update room', error);
      showNotification('Failed to update room', 'error');
    }
  };

  const handleDeleteRoom = (room: Room) => {
    setRoomToDelete(room);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteRoom = async () => {
    if (!roomToDelete) return;

    try {
      await axios.delete(`http://localhost:8000/api/v1/rooms/${roomToDelete.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      showNotification('Room deleted successfully!', 'success');
      setDeleteDialogOpen(false);
      setRoomToDelete(null);
      // Refresh the rooms list
      setPage(0);
    } catch (error) {
      console.error('Failed to delete room', error);
      showNotification('Failed to delete room', 'error');
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Hotel Rooms</Typography>
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
            Add Room
          </Button>
        </div>
      </Stack>

      <DataTable
        columns={columns}
        rows={rooms}
        count={totalRooms}
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
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            padding: 4,
          }}
        >
          <Typography variant="h6">{isEditMode ? 'Edit Room' : 'Create New Room'}</Typography>
          <TextField
            label="Room Number"
            name="roomNumber"
            value={newRoom.roomNumber}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            select
            label="Room Type"
            name="roomType"
            value={newRoom.roomType}
            onChange={handleInputChange}
            fullWidth
          >
            {Object.values(RoomType).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Capacity"
            name="capacity"
            type="number"
            value={newRoom.capacity}
            onChange={handleInputChange}
            fullWidth
            inputProps={{ min: 1 }}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={newRoom.price}
            onChange={handleInputChange}
            fullWidth
            inputProps={{ min: 0, step: 0.01 }}
          />
          <Button variant="contained" onClick={isEditMode ? handleUpdateRoom : handleCreateRoom}>
            {isEditMode ? 'Update' : 'Create'}
          </Button>
        </Stack>
      </Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete Room {roomToDelete?.roomNumber}? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmDeleteRoom} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={assignDialogOpen} onClose={() => setAssignDialogOpen(false)}>
        <DialogTitle>Assign Room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Assign room {roomToAssign?.roomNumber} to a user. Please enter the user's email address.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="User Email"
            type="email"
            fullWidth
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAssignDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmAssignRoom} color="primary">
            Assign
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
