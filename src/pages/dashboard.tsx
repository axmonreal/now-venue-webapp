import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Welcome back</span>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Bar Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                View and manage your bar's information
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operating Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage your bar's operating schedule
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Banking Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                View your payment and banking details
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;