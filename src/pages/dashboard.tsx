import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="min-h-screen flex-1 bg-background p-[2%]">
          <div className="container mx-auto">
            <header className="mb-[8vh]">
              <h1 className="text-3xl font-semibold">New Listing Creation</h1>
            </header>

            <div className="space-y-[1.5vh]">
              <h2 className="text-2xl font-semibold">Select Pass Type</h2>
              
              <div className="grid gap-[2vh] md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Cover Pass</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Allow patrons to pay cover with their phones
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-[1vh]">
                    <button 
                      onClick={() => navigate("/continuous-cover-pass")}
                      className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600"
                    >
                      <div className="text-left">
                        <p className="font-medium">Continuous</p>
                        <p className="text-sm text-gray-600">Offer this pass everyday</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
                      <div className="text-left">
                        <p className="font-medium">Day of Week</p>
                        <p className="text-sm text-gray-600">Offer this pass on a specific day(s) of the week</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
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
                      Allow patrons to skip the line outside of your bar
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-[1vh]">
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
                      <div className="text-left">
                        <p className="font-medium">Continuous</p>
                        <p className="text-sm text-gray-600">Offer this pass everyday</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
                      <div className="text-left">
                        <p className="font-medium">Day of Week</p>
                        <p className="text-sm text-gray-600">Offer this pass on a specific day(s) of the week</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
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
                  <CardContent className="space-y-[1vh]">
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
                      <div className="text-left">
                        <p className="font-medium">Continuous</p>
                        <p className="text-sm text-gray-600">Offer this pass everyday</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
                      <div className="text-left">
                        <p className="font-medium">Day of Week</p>
                        <p className="text-sm text-gray-600">Offer this pass on a specific day(s) of the week</p>
                      </div>
                      <ChevronRight className="text-gray-400 flex-shrink-0" />
                    </button>
                    
                    <button className="w-full p-[2%] bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 hover:border-2 hover:border-green-600">
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
