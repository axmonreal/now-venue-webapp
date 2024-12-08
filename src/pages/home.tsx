import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration - in a real app, this would come from your backend
const passesData = {
  "2024-04-15": 2,
  "2024-04-20": 1,
  "2024-04-25": 3,
};

const HomePage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const navigate = useNavigate();

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 space-y-8 p-8 pt-6">
          <div className="flex items-center justify-end">
            <Button 
              onClick={() => navigate("/dashboard")}
              className="bg-[#276100] hover:bg-[#276100]/90"
            >
              Create Pass
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 lg:col-span-5">
              <CardHeader>
                <CardTitle>Pass Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full h-[60vh]"
                  classNames={{
                    day: "h-12 w-12 text-lg font-medium p-0 aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    cell: "relative h-12 w-12 p-0",
                  }}
                  components={{
                    Day: ({ date, ...props }) => {
                      const formattedDate = date.toISOString().split('T')[0];
                      const hasPass = passesData[formattedDate];
                      return (
                        <div className="relative w-full h-full">
                          <div
                            {...props}
                            className={`${props.className} relative`}
                          >
                            {date.getDate()}
                            {hasPass && (
                              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <div className="h-1.5 w-1.5 bg-[#276100] rounded-full" />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card className="col-span-3 lg:col-span-2">
              <CardHeader>
                <CardTitle>Today's Passes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    No passes scheduled for today
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default HomePage;