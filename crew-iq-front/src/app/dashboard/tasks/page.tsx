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
import { DatePicker } from '@mui/x-date-pickers';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import axios from 'axios';
import dayjs from 'dayjs';

import { DataTable } from '@/components/dashboard/customer/customers-table';

export default function TaskPage(): React.JSX.Element {
  const [tasks, setTasks] = React.useState<any[]>([]);
  const [totalTasks, setTotalTasks] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [newTask, setNewTask] = React.useState({
    id: '',
    description: '',
    status: 'PENDING',
    role: 'ADMIN',
    taskStartDate: dayjs().format('YYYY-MM-DD'),
    taskEndDate: dayjs().format('YYYY-MM-DD'),
  });

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [taskToDelete, setTaskToDelete] = React.useState<any>(null);

  const columns = [
    { key: 'description', label: 'Description' },
    { key: 'status', label: 'Status' },
    { key: 'role', label: 'Role' },
    { key: 'taskStartDate', label: 'Start Date' },
    { key: 'taskEndDate', label: 'End Date' },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleEditTask(row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteTask(row)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  React.useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/tasks', {
          params: { page: page + 1, size: rowsPerPage },
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
        });

        const { items, meta } = response.data.payload;
        const fetchedTasks = items.map((task: any) => ({
          id: task.id.toString(),
          description: task.description,
          status: task.status,
          role: task.role,
          taskStartDate: dayjs(task.taskStartDate).format('YYYY-MM-DD'),
          taskEndDate: dayjs(task.taskEndDate).format('YYYY-MM-DD'),
        }));

        setTasks(fetchedTasks);
        setTotalTasks(meta.totalItems);
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    };

    fetchTasks();
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
    setNewTask({
      id: '',
      description: '',
      status: 'PENDING',
      role: 'ADMIN',
      taskStartDate: dayjs().format('YYYY-MM-DD'),
      taskEndDate: dayjs().format('YYYY-MM-DD'),
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewTask({
      id: '',
      description: '',
      status: 'PENDING',
      role: 'ADMIN',
      taskStartDate: dayjs().format('YYYY-MM-DD'),
      taskEndDate: dayjs().format('YYYY-MM-DD'),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const getToken = () => localStorage.getItem('accessToken');

  const handleCreateTask = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/tasks', newTask, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Task created successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to create task', error);
    }
  };

  const handleEditTask = (task: any) => {
    setNewTask({
      id: task.id,
      description: task?.description || '',
      status: task?.status || 'PENDING',
      role: task?.role || 'ADMIN',
      taskStartDate: task?.taskStartDate || '',
      taskEndDate: task?.taskEndDate || '',
    });
    setIsEditMode(true);
    setModalOpen(true);
  };

  const handleUpdateTask = async () => {
    try {
      await axios.patch(`http://localhost:8000/api/v1/tasks/${newTask.id}`, newTask, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Task updated successfully!');
      setSnackbarOpen(true);
      handleCloseModal();
    } catch (error) {
      console.error('Failed to update task', error);
    }
  };

  const handleDeleteTask = (task: any) => {
    setTaskToDelete(task);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteTask = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/tasks/${taskToDelete.id}`, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setSnackbarMessage('Task deleted successfully!');
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setTaskToDelete(null);
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDateChange = (date: any, fieldName: string) => {
    setNewTask((prevTask) => ({ ...prevTask, [fieldName]: dayjs(date).format('YYYY-MM-DD') }));
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Tasks</Typography>
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
            Add
          </Button>
        </div>
      </Stack>

      <DataTable
        columns={columns}
        rows={tasks}
        count={totalTasks}
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
          <Typography variant="h6" component="h2">
            {isEditMode ? 'Edit Task' : 'Create Task'}
          </Typography>

          <TextField
            label="Description"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />

          <TextField
            label="Role"
            name="role"
            value={newTask.role}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />

          <DatePicker
            label="Start Date"
            value={dayjs(newTask.taskStartDate)}
            onChange={(date) => handleDateChange(date, 'taskStartDate')}
            renderInput={(params) => <TextField {...params} />}
          />

          <DatePicker
            label="End Date"
            value={dayjs(newTask.taskEndDate)}
            onChange={(date) => handleDateChange(date, 'taskEndDate')}
            renderInput={(params) => <TextField {...params} />}
          />

          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button variant="contained" onClick={isEditMode ? handleUpdateTask : handleCreateTask}>
              {isEditMode ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Stack>
      </Modal>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this task?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button color="error" onClick={confirmDeleteTask}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
