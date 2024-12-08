import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";

const CustomCoverPass = () => {
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Custom cover pass has been created",
    });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="min-h-screen flex-1 bg-background p-8">
          <div className="container mx-auto max-w-5xl">
            <header className="mb-8">
              <h1 className="text-3xl font-semibold">Cover Pass Listing</h1>
              <p className="text-muted-foreground">Custom - offer this pass on select dates</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-semibold mb-6">Pass Description</h2>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Pass Description</label>
                            <Textarea
                              placeholder="Pay for cover here instead of with cash. No refunds. Must be over the age of 21."
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="min-h-[100px]"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Pass Instructions</label>
                            <Textarea
                              placeholder="Show this pass to the doorman. Do not redeem prior to speaking with the doorman."
                              value={instructions}
                              onChange={(e) => setInstructions(e.target.value)}
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Price</label>
                          <Input
                            type="number"
                            placeholder="$10"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Quantity</label>
                          <Input
                            type="number"
                            placeholder="50"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold mb-6">Pass Schedule</h2>
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Available Dates</label>
                      <Calendar
                        mode="multiple"
                        selected={selectedDates}
                        onSelect={setSelectedDates as any}
                        className="rounded-md border"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-[#2B5219] hover:bg-[#1E3A12] text-white px-8">
                  CREATE AND LIST PASS
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CustomCoverPass;