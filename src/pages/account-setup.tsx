import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

type Step = "personal" | "bar" | "hours" | "banking";

const AccountSetup = () => {
  const [currentStep, setCurrentStep] = useState<Step>("personal");
  const [formData, setFormData] = useState({
    // Personal Info
    personalName: "",
    personalPhone: "",
    personalEmail: "",
    // Bar Info
    barName: "",
    barPhone: "",
    barEmail: "",
    barImage: "",
    // Hours
    mondayOpen: "09:00",
    mondayClose: "23:00",
    tuesdayOpen: "09:00",
    tuesdayClose: "23:00",
    wednesdayOpen: "09:00",
    wednesdayClose: "23:00",
    thursdayOpen: "09:00",
    thursdayClose: "23:00",
    fridayOpen: "09:00",
    fridayClose: "23:00",
    saturdayOpen: "09:00",
    saturdayClose: "23:00",
    sundayOpen: "09:00",
    sundayClose: "23:00",
    // Banking Info
    accountName: "",
    accountNumber: "",
    routingNumber: "",
    ein: "",
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload this to your server/storage
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, barImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    const steps: Step[] = ["personal", "bar", "hours", "banking"];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    } else {
      // Handle form submission
      console.log("Form submitted:", formData);
      toast({
        title: "Account setup complete!",
        description: "Your account has been successfully created.",
      });
      navigate("/home"); // Changed from /dashboard to /home
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <div className="space-y-2">
        <Label htmlFor="personalName">Full Name</Label>
        <Input
          id="personalName"
          name="personalName"
          value={formData.personalName}
          onChange={handleInputChange}
          placeholder="John Doe"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="personalPhone">Phone Number</Label>
        <Input
          id="personalPhone"
          name="personalPhone"
          value={formData.personalPhone}
          onChange={handleInputChange}
          placeholder="(555) 555-5555"
          type="tel"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="personalEmail">Email</Label>
        <Input
          id="personalEmail"
          name="personalEmail"
          value={formData.personalEmail}
          onChange={handleInputChange}
          placeholder="john@example.com"
          type="email"
        />
      </div>
    </div>
  );

  const renderBarInfo = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Bar Information</h2>
      <div className="space-y-2">
        <Label htmlFor="barName">Bar Name</Label>
        <Input
          id="barName"
          name="barName"
          value={formData.barName}
          onChange={handleInputChange}
          placeholder="The Local Pub"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="barPhone">Bar Phone Number</Label>
        <Input
          id="barPhone"
          name="barPhone"
          value={formData.barPhone}
          onChange={handleInputChange}
          placeholder="(555) 555-5555"
          type="tel"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="barEmail">Bar Email</Label>
        <Input
          id="barEmail"
          name="barEmail"
          value={formData.barEmail}
          onChange={handleInputChange}
          placeholder="contact@localpub.com"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="barImage">Venue Image</Label>
        <Input
          id="barImage"
          name="barImage"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {formData.barImage && (
          <img
            src={formData.barImage}
            alt="Venue preview"
            className="mt-2 max-w-md rounded-lg"
          />
        )}
      </div>
    </div>
  );

  const renderHours = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Operating Hours</h2>
      {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(
        (day) => (
          <div key={day} className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`${day}Open`}>
                {day.charAt(0).toUpperCase() + day.slice(1)} Open
              </Label>
              <Input
                id={`${day}Open`}
                name={`${day}Open`}
                type="time"
                value={formData[`${day}Open` as keyof typeof formData]}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${day}Close`}>Close</Label>
              <Input
                id={`${day}Close`}
                name={`${day}Close`}
                type="time"
                value={formData[`${day}Close` as keyof typeof formData]}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )
      )}
    </div>
  );

  const renderBankingInfo = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Banking Information</h2>
      <div className="space-y-2">
        <Label htmlFor="accountName">Account Name</Label>
        <Input
          id="accountName"
          name="accountName"
          value={formData.accountName}
          onChange={handleInputChange}
          placeholder="Business Account Name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accountNumber">Account Number</Label>
        <Input
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          type="password"
          placeholder="••••••••••••"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="routingNumber">Routing Number</Label>
        <Input
          id="routingNumber"
          name="routingNumber"
          value={formData.routingNumber}
          onChange={handleInputChange}
          type="password"
          placeholder="•••••••••"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ein">EIN (Employer Identification Number)</Label>
        <Input
          id="ein"
          name="ein"
          value={formData.ein}
          onChange={handleInputChange}
          placeholder="XX-XXXXXXX"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {["personal", "bar", "hours", "banking"].map((step, index) => (
              <div
                key={step}
                className={`h-2 flex-1 ${
                  index === 0 ? "rounded-l-full" : ""
                } ${
                  index === 3 ? "rounded-r-full" : ""
                } ${
                  ["personal", "bar", "hours", "banking"].indexOf(currentStep) >= index
                    ? "bg-[#276100]"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {currentStep === "personal" && renderPersonalInfo()}
        {currentStep === "bar" && renderBarInfo()}
        {currentStep === "hours" && renderHours()}
        {currentStep === "banking" && renderBankingInfo()}

        <div className="mt-8 flex justify-end">
          <Button onClick={handleNext}>
            {currentStep === "banking" ? "Complete Setup" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
