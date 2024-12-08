import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";

const DayOfWeekCoverPass = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8 bg-[#F7FAF7] p-6 rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800">Cover Pass Listing</h1>
        <p className="text-green-700 mt-1">Day of week - offer this pass on a specific day(s) of the week</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Pass Description</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Pass Description</label>
                <Textarea 
                  placeholder="Pay for cover here instead of with cash. No refunds. Must be over the age of 21."
                  className="h-32 bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2">Pass Instructions</label>
                <Textarea 
                  placeholder="Show this pass to the doorman. Do not redeem prior to speaking with the doorman."
                  className="h-32 bg-gray-50"
                />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-2">Price</h3>
              <Input type="number" placeholder="$10" className="bg-gray-50" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <Input type="number" placeholder="50" className="bg-gray-50" />
            </div>
          </section>
        </div>

        <div>
          <section>
            <h2 className="text-xl font-semibold mb-4">Pass Schedule</h2>
            <div className="space-y-6">
              <div>
                <label className="block mb-4">Select Day(s) of the Week</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div
                      key={day}
                      className="flex items-center space-x-2 border rounded-md p-3"
                    >
                      <Checkbox
                        id={day}
                        checked={selectedDays.includes(day)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedDays([...selectedDays, day]);
                          } else {
                            setSelectedDays(selectedDays.filter(d => d !== day));
                          }
                        }}
                      />
                      <label htmlFor={day}>{day}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Available from</label>
                  <div className="relative">
                    <Input type="text" placeholder="MM-DD-YY" className="bg-gray-50 pl-10" />
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2">to</label>
                  <div className="relative">
                    <Input type="text" placeholder="MM-DD-YY" className="bg-gray-50 pl-10" />
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="noEndDate" />
                <label htmlFor="noEndDate">No Pass End Date</label>
              </div>

              <div>
                <label className="block mb-2">Restricted Dates</label>
                <div className="relative">
                  <Input type="text" placeholder="MM-DD-YY" className="bg-gray-50 pl-10" />
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500 mt-2">Passes will not be available for purchase on these dates.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <Button className="bg-green-800 hover:bg-green-900 text-white px-8">
          CREATE AND LIST PASS
        </Button>
      </div>
    </div>
  );
};

export default DayOfWeekCoverPass;
