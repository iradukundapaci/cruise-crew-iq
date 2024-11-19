export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    rooms: '/dashboard/rooms',
    bookings: '/dashboard/bookings',
    users: '/dashboard/users',
    incidents: '/dashboard/incidents',
    licenses: '/dashboard/licenses',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    notifications: '/dashboard/notifications',
    chat: '/dashboard/chat',
    tasks: '/dashboard/tasks',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
