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
  "2024-04-15": {
    cover: { quantity: 2, price: 29.99, remaining: 1 },
    lineSkip: { quantity: 1, price: 19.99, remaining: 1 }
  },
  "2024-04-20": {
    cover: { quantity: 1, price: 29.99, remaining: 0 },
    lineSkip: { quantity: 2, price: 19.99, remaining: 2 }
  },
  "2024-04-25": {
    cover: { quantity: 3, price: 29.99, remaining: 2 },
    lineSkip: { quantity: 0, price: 19.99, remaining: 0 }
  },
  "2024-12-20": {
    cover: { quantity: 0, price: 29.99, remaining: 0 },
    lineSkip: { quantity: 2, price: 19.99, remaining: 1 }
  }
};

const HomePage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const navigate = useNavigate();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  const getSelectedDatePasses = () => {
    if (!date) return null;
    const formattedDate = date.toISOString().split('T')[0];
    return passesData[formattedDate];
  };

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 space-y-6 p-6 pt-4">
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
                  onSelect={handleDateSelect}
                  className="rounded-md border w-full h-[72vh]"
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
                    cell: "relative h-20 w-full p-0 text-center hover:bg-accent hover:text-accent-foreground focus-within:relative focus-within:z-20",
                    day: "h-20 w-full p-0 font-normal aria-selected:opacity-100",
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
                                {passes.cover.quantity > 0 && (
                                  <div className="text-xs text-[#276100]">Cover ({passes.cover.remaining})</div>
                                )}
                                {passes.lineSkip.quantity > 0 && (
                                  <div className="text-xs text-[#FF6B6B]">Skip ({passes.lineSkip.remaining})</div>
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
                  {date && getSelectedDatePasses() ? (
                    <>
                      {getSelectedDatePasses()?.cover.quantity > 0 && (
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">Cover Pass</p>
                            <div className="h-2 w-2 bg-[#276100] rounded-full" />
                          </div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p>Price: ${getSelectedDatePasses()?.cover.price}</p>
                            <p>Total Quantity: {getSelectedDatePasses()?.cover.quantity}</p>
                            <p>Remaining: {getSelectedDatePasses()?.cover.remaining}</p>
                          </div>
                        </div>
                      )}
                      {getSelectedDatePasses()?.lineSkip.quantity > 0 && (
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">Line Skip Pass</p>
                            <div className="h-2 w-2 bg-[#FF6B6B] rounded-full" />
                          </div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p>Price: ${getSelectedDatePasses()?.lineSkip.price}</p>
                            <p>Total Quantity: {getSelectedDatePasses()?.lineSkip.quantity}</p>
                            <p>Remaining: {getSelectedDatePasses()?.lineSkip.remaining}</p>
                          </div>
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