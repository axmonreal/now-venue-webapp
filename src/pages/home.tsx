import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DayProps } from "react-day-picker";

// Mock data for demonstration - in a real app, this would come from your backend
const passesData = {
  "2024-04-15": { cover: 2, lineSkip: 1 },
  "2024-04-20": { cover: 1, lineSkip: 2 },
  "2024-04-25": { cover: 3, lineSkip: 0 },
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
                  className="rounded-md border w-full h-[80vh]"
                  classNames={{
                    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                    month: "space-y-4 w-full",
                    caption: "flex justify-center pt-1 relative items-center mb-4",
                    caption_label: "text-xl font-medium",
                    nav: "space-x-1 flex items-center",
                    nav_button: "h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100",
                    table: "w-full border-collapse",
                    head_row: "flex w-full",
                    head_cell: "text-muted-foreground rounded-md w-full font-normal text-base",
                    row: "flex w-full mt-4",
                    cell: "relative h-24 w-full p-0 text-center hover:bg-accent hover:text-accent-foreground focus-within:relative focus-within:z-20",
                    day: "h-24 w-full p-0 font-normal aria-selected:opacity-100",
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    day_today: "bg-accent text-accent-foreground",
                    day_outside: "text-muted-foreground opacity-50",
                    day_disabled: "text-muted-foreground opacity-50",
                    day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                    day_hidden: "invisible",
                  }}
                  components={{
                    Day: ({ date, ...props }: DayProps & { className?: string }) => {
                      const formattedDate = date.toISOString().split('T')[0];
                      const passes = passesData[formattedDate];
                      return (
                        <div className="relative w-full h-full">
                          <div
                            {...props}
                            className={`${props.className || ''} relative flex flex-col items-center justify-start pt-2 w-full h-full`}
                          >
                            <span className="text-lg font-medium">{date.getDate()}</span>
                            {passes && (
                              <div className="mt-2 flex flex-col items-center gap-1">
                                {passes.cover > 0 && (
                                  <div className="text-xs text-[#276100]">Cover ({passes.cover})</div>
                                )}
                                {passes.lineSkip > 0 && (
                                  <div className="text-xs text-[#FF6B6B]">Skip ({passes.lineSkip})</div>
                                )}
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
                  {date && passesData[date.toISOString().split('T')[0]] ? (
                    <>
                      {passesData[date.toISOString().split('T')[0]].cover > 0 && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">Cover Pass</p>
                            <p className="text-sm text-gray-600">Available: {passesData[date.toISOString().split('T')[0]].cover}</p>
                          </div>
                          <div className="h-2 w-2 bg-[#276100] rounded-full" />
                        </div>
                      )}
                      {passesData[date.toISOString().split('T')[0]].lineSkip > 0 && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">Line Skip Pass</p>
                            <p className="text-sm text-gray-600">Available: {passesData[date.toISOString().split('T')[0]].lineSkip}</p>
                          </div>
                          <div className="h-2 w-2 bg-[#FF6B6B] rounded-full" />
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No passes scheduled for selected date
                    </p>
                  )}
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