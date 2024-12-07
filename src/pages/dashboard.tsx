import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const Dashboard = () => {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="min-h-screen flex-1 bg-background p-8">
          <div className="container mx-auto space-y-8">
            <header className="mb-8">
              <h1 className="text-3xl font-semibold">New Listing Creation</h1>
            </header>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Select Pass Type</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Cover Pass</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Allow customers to pay cover with their phones
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Continuous</p>
                        <p className="text-sm text-gray-600">Offer this pass everyday</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Day of Week</p>
                        <p className="text-sm text-gray-600">Offer this pass on a specific day(s) of the week</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Custom</p>
                        <p className="text-sm text-gray-600">Offer this pass on select dates</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Line Skip Pass</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Allow customers to bypass the line outside of your bar
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Continuous</p>
                        <p className="text-sm text-gray-600">Offer this pass everyday</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Day of Week</p>
                        <p className="text-sm text-gray-600">Offer this pass on a specific day(s) of the week</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Custom</p>
                        <p className="text-sm text-gray-600">Offer this pass on select dates</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Custom</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Create a custom pass
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Continuous</p>
                        <p className="text-sm text-gray-600">Offer this pass everyday</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Day of Week</p>
                        <p className="text-sm text-gray-600">Offer this pass on a specific day(s) of the week</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100">
                      <div className="text-left">
                        <p className="font-medium">Custom</p>
                        <p className="text-sm text-gray-600">Offer this pass on select dates</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
