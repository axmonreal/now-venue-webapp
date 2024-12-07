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
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B5F1A]">
                <path d="M10,20.5c0,0.829-0.672,1.5-1.5,1.5S7,21.329,7,20.5S7.672,19,8.5,19S10,19.671,10,20.5z M3.5,19C2.672,19,2,19.671,2,20.5S2.672,22,3.5,22S5,21.329,5,20.5S4.328,19,3.5,19z M21.5,19c-0.828,0-1.5,0.671-1.5,1.5s0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5S22.328,19,21.5,19z M12,2C6.486,2,2,6.486,2,12c0,4.864,3.494,8.914,8.12,9.8c0.012-0.004,0.024-0.006,0.035-0.01c0.277-0.098,0.575-0.159,0.885-0.159c1.471,0,2.666,1.195,2.666,2.666c0,0.24-0.033,0.472-0.092,0.693C19.779,23.862,24,19.579,24,12C24,6.486,19.514,2,12,2z"/>
              </svg>
            </div>
            <div className="mt-2 text-[#2B5F1A] font-medium">NOW</div>
          </div>

          {/* Welcome Text */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">Welcome Onboard</h2>
            <p className="mt-2 text-sm text-gray-600">
              Log In to your venue account.
              <br />
              Don't have an account?{" "}
              <Link to="/register" className="text-[#2B5F1A] hover:underline">
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
              className="w-full bg-[#2B5F1A] hover:bg-[#234D15] text-white py-6"
            >
              LOG IN
            </Button>

            <div className="text-center">
              <Link to="/forgot-password" className="text-sm text-[#2B5F1A] hover:underline">
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