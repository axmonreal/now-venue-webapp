import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/account-setup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-[5%] py-[3vh]">
      <div className="w-full max-w-md space-y-[2vh]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-[#276100]">NOW</h1>
        </div>

        {/* Form */}
        <form className="mt-[2vh] space-y-[1.5vh]" onSubmit={handleSubmit}>
          <div className="space-y-[1vh]">
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
                className="mt-[0.5vh]"
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
                className="mt-[0.5vh]"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#276100] hover:bg-[#276100]/90 text-white py-[1.5vh]"
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
  );
};

export default Index;