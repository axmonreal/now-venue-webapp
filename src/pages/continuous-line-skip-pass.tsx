import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const ContinuousLineSkipPass = () => {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="min-h-screen flex-1 bg-background p-8">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8 bg-[#F7FAF7] p-6 rounded-lg">
              <h1 className="text-2xl font-semibold text-gray-800">Line Skip Pass Listing</h1>
              <p className="text-green-700 mt-1">Continuous - offer this pass everyday</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Pass Description Section */}
              <div>
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  Pass Description
                  <div className="flex-1 h-px bg-gray-200 ml-4"></div>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <Label>Pass Description</Label>
                    <Textarea 
                      placeholder="Skip the line instead of waiting. No refunds. Must be over the age of 21."
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Pass Instructions</Label>
                    <Textarea 
                      placeholder="Show this pass to the doorman to skip the line. Do not redeem prior to speaking with the doorman."
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Price</Label>
                      <Input type="number" placeholder="$20" className="mt-2" />
                    </div>
                    <div>
                      <Label>Quantity</Label>
                      <Input type="number" placeholder="25" className="mt-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pass Schedule Section */}
              <div>
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  Pass Schedule
                  <div className="flex-1 h-px bg-gray-200 ml-4"></div>
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Available from</Label>
                      <Input type="date" className="mt-2" />
                    </div>
                    <div>
                      <Label>to</Label>
                      <Input type="date" className="mt-2" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="noEndDate" />
                    <Label htmlFor="noEndDate">No Pass End Date</Label>
                  </div>

                  <div>
                    <Label>Restricted Dates</Label>
                    <Input type="date" className="mt-2" />
                    <p className="text-sm text-gray-500 mt-2">
                      Passes will not be available for purchase on these dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-end">
              <Button className="bg-[#2B5C1B] hover:bg-[#224816] text-white px-8 py-6">
                CREATE AND LIST PASS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ContinuousLineSkipPass;