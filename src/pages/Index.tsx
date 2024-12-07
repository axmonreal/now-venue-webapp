import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/lovable-uploads/8ed13014-8a06-4c69-9d82-ed47a17c04e9.png"
          alt="Wine glasses"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img 
                src="/lovable-uploads/5a57c9da-c53d-401c-9597-c0463050377a.png"
                alt="NOW Logo"
                className="w-full h-full"
              />
            </div>
            <div className="mt-2 text-[#276100] font-medium">NOW</div>
          </div>

          {/* Welcome Text */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">Welcome Onboard</h2>
            <p className="mt-2 text-sm text-gray-600">
              Log In to your venue account.
              <br />
              Don't have an account?{" "}
              <Link to="/register" className="text-[#276100] hover:underline">
                Register
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#276100] hover:bg-[#276100]/90 text-white py-6"
            >
              LOG IN
            </Button>

            <div className="text-center">
              <Link to="/forgot-password" className="text-sm text-[#276100] hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;