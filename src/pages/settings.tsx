import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  // Personal Info
  personalName: z.string().min(2, "Name must be at least 2 characters"),
  personalPhone: z.string().min(10, "Please enter a valid phone number"),
  personalEmail: z.string().email("Please enter a valid email"),
  // Bar Info
  barName: z.string().min(2, "Bar name must be at least 2 characters"),
  barPhone: z.string().min(10, "Please enter a valid phone number"),
  barEmail: z.string().email("Please enter a valid email"),
  // Banking Info
  accountName: z.string().min(2, "Account name must be at least 2 characters"),
  accountNumber: z.string().min(8, "Please enter a valid account number"),
  routingNumber: z.string().min(9, "Please enter a valid routing number"),
  ein: z.string().min(9, "Please enter a valid EIN")
});

type FormValues = z.infer<typeof formSchema>;

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personalName: "",
      personalPhone: "",
      personalEmail: "",
      barName: "",
      barPhone: "",
      barEmail: "",
      accountName: "",
      accountNumber: "",
      routingNumber: "",
      ein: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to update user settings
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Settings updated successfully");
    } catch (error) {
      toast.error("Failed to update settings");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Information</h2>
              <FormField
                control={form.control}
                name="personalName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="personalPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="(555) 555-5555" type="tel" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="personalEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="john@example.com" type="email" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Bar Information Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Bar Information</h2>
              <FormField
                control={form.control}
                name="barName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bar Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="The Local Pub" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="barPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bar Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="(555) 555-5555" type="tel" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="barEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bar Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="contact@localpub.com" type="email" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Banking Information Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Banking Information</h2>
              <FormField
                control={form.control}
                name="accountName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Business Account Name" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="••••••••••••" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="routingNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Routing Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="•••••••••" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ein"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EIN (Employer Identification Number)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="XX-XXXXXXX" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#276100] hover:bg-[#276100]/90"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}