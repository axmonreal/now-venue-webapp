import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("If an account exists with that email, you will receive password reset instructions.");
    setIsLoading(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with image */}
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" 
           style={{ backgroundImage: "url('/wine-bg.jpg')" }}>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-[5%]">
        <div className="max-w-md w-full space-y-[2vh]">
          <div className="text-center">
            <h2 className="mt-[1.5vh] text-3xl font-bold text-gray-900">
              Forgot Password
            </h2>
            <p className="mt-[1vh] text-sm text-gray-600">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>

          <form className="mt-[2vh] space-y-[1.5vh]" onSubmit={handleSubmit}>
            <div className="space-y-[1vh]">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-[0.5vh]"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-[#276100] hover:bg-[#276100]/90"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Instructions"}
              </Button>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="text-sm text-[#276100] hover:text-[#276100]/90"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}