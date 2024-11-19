/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';

const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

interface AnalyticsOutput {
  customers: number;
  rooms: number;
  bookings: number;
  incidents: number;
  tasks: { pending: number; completed: number };
  bookingsGroupedByReservationMonth: { date: string; count: number }[];
  roomsGroupedOccupation: { occupied: number; vacant: number };
}

interface Notification {
  id: number;
  createdAt: string; // ISO date string
  message: string;
  isRead: boolean;
}

export default function Page(): React.JSX.Element {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsOutput | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]); // New state for notifications

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const response = await fetch('http://localhost:8000/api/v1/analytics');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: AnalyticsOutput = await response.json();

        // Fill missing months with zero bookings
        const currentYear = dayjs().year();
        const filledBookings = Array.from({ length: 12 }, (_, i) => {
          const month = dayjs(`${currentYear}-${i + 1}`, 'YYYY-MM').format('YYYY-MM');
          const bookingData = data.bookingsGroupedByReservationMonth.find((entry) => entry.date === month);
          return { date: month, count: bookingData ? bookingData.count : 0 };
        });

        setAnalyticsData({ ...data, bookingsGroupedByReservationMonth: filledBookings });
      } catch (error) {
        console.error('Failed to fetch analytics data:', error);
      }
    }

    async function fetchNotifications() {
      try {
        const response = await fetch('http://localhost:8000/api/v1/notifications');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setNotifications(data.payload); // Update to match the API response structure
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    }

    fetchAnalytics();
    fetchNotifications(); // Fetch notifications on component mount
  }, []);

  if (!analyticsData) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={3}>
      {/* Budget */}
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value={`${analyticsData.incidents}`} />
      </Grid>

      {/* Total Customers */}
      <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value={`${analyticsData.customers}`} />
      </Grid>

      {/* Tasks Progress */}
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress
          sx={{ height: '100%' }}
          value={(analyticsData.tasks.completed / (analyticsData.tasks.completed + analyticsData.tasks.pending)) * 100}
        />
      </Grid>

      {/* Total Profit */}
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: '100%' }} value={`${analyticsData.bookings}`} />
      </Grid>

      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            {
              name: 'Bookings',
              data: analyticsData.bookingsGroupedByReservationMonth.map((entry) => entry.count),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>

      <Grid lg={4} md={6} xs={12}>
        <Traffic
          chartSeries={[analyticsData.roomsGroupedOccupation.occupied, analyticsData.roomsGroupedOccupation.vacant]}
          labels={['Occupied', 'Vacant']}
          sx={{ height: '100%' }}
        />
      </Grid>

      <Grid lg={4} md={6} xs={12}>
        {/* Replace LatestProducts with notifications display */}
        <LatestProducts
          products={notifications.map((notification) => ({
            id: String(notification.id), // Ensure id is a string
            name: notification.message, // Use the notification message as the product name
            image: '/assets/product-5.png', // Use a placeholder image or adjust as needed
            updatedAt: dayjs(notification.createdAt).toDate(), // Convert createdAt to Date object
          }))}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
