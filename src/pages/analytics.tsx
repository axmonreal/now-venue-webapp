import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const passData = [
  { name: 'Mon', cover: 4, lineSkip: 2, sales: 240 },
  { name: 'Tue', cover: 3, lineSkip: 1, sales: 160 },
  { name: 'Wed', cover: 2, lineSkip: 3, sales: 200 },
  { name: 'Thu', cover: 6, lineSkip: 2, sales: 320 },
  { name: 'Fri', cover: 8, lineSkip: 4, sales: 480 },
  { name: 'Sat', cover: 9, lineSkip: 5, sales: 560 },
  { name: 'Sun', cover: 3, lineSkip: 2, sales: 200 },
];

const passTypeData = [
  { name: 'Cover Passes', value: 35 },
  { name: 'Line Skip Passes', value: 19 },
];

const COLORS = ['#276100', '#9c2b2e'];

const timeSpans = [
  { label: 'Last 7 Days', value: '7d' },
  { label: 'Last 30 Days', value: '30d' },
  { label: 'Last 3 Months', value: '3m' },
  { label: 'Last Year', value: '1y' },
];

const AnalyticsPage = () => {
  const [timeSpan, setTimeSpan] = useState('7d');

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 space-y-6 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            <Select value={timeSpan} onValueChange={setTimeSpan}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time span" />
              </SelectTrigger>
              <SelectContent>
                {timeSpans.map((span) => (
                  <SelectItem key={span.value} value={span.value}>
                    {span.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Pass Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={passData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" fill="#276100" name="Sales ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pass Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={passTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {passTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Passes Sold by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={passData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="cover" fill="#276100" name="Cover Passes" />
                      <Bar dataKey="lineSkip" fill="#9c2b2e" name="Line Skip Passes" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AnalyticsPage;