import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: '' },
  { key: 'rooms', title: 'Rooms', href: paths.dashboard.rooms, icon: 'bed-double' },
  { key: 'bookings', title: 'Bookings', href: paths.dashboard.bookings, icon: 'calendar' },
  { key: 'schedule', title: 'Schedule', href: paths.dashboard.schedule, icon: '' },
  { key: 'users', title: 'Users', href: paths.dashboard.users, icon: '' },
  { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: '' },
  { key: 'incidents', title: 'Incidents', href: paths.dashboard.incidents, icon: 'alert-circle' },
  { key: 'licenses', title: 'Licenses', href: paths.dashboard.licenses, icon: 'license' },
  { key: 'tasks', title: 'Tasks', href: paths.dashboard.tasks, icon: 'tasks' },
  { key: 'notifications', title: 'Notifications', href: paths.dashboard.notifications, icon: 'bell' },
  { key: 'chat', title: 'Chat', href: paths.dashboard.chat, icon: 'chat-left' },
] satisfies NavItemConfig[];
