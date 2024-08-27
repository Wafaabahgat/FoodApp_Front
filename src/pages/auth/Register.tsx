import React, { FC, FormEvent, useEffect, useState } from "react";
import { Label } from "../../components/Ui/Label";
import { Button } from "../../components/Ui/Button";
import headerImg from "../../assets/hero.jpg";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import Input from "../../components/Ui/Input";
import { registerUser } from "../../slice/Auth/register/registerAction";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const dispatch = useDispatch();
  const { loading, errors, success, msg } = useSelector(
    (state: any) => state.register
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setPassword_confirmation] =
    useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleregister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await dispatch(
        registerUser({ email, password, name, username, password_confirmation })
      );
    } catch (error) {
      console.error("Register failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  useEffect(() => {
    if (success && msg) {
      toast.success(msg);
      window.location.href = "/";
    } else if (!success && msg) {
      toast.error(msg);
    }
  }, [success, msg]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="w-full mt-5"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${headerImg})`,
      }}
    >
      <div className="flex items-center justify-center min-h-screen mt-10">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-3xl font-bold text-center text-red-500">
            Register
          </h2>
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          <form onSubmit={handleregister}>
            <div className="mb-4">
              <Label className="block text-gray-700">Name</Label>
              <Input
                type="text"
                id="name"
                className="w-full p-2 mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors?.name}
              />
            </div>
            <div className="mb-4">
              <Label className="block text-gray-700">Username</Label>
              <Input
                type="text"
                id="username"
                className="w-full p-2 mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={errors?.username}
              />
            </div>
            <div className="mb-4">
              <Label className="block text-gray-700">Email</Label>
              <Input
                type="email"
                id="email"
                className="w-full p-2 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors?.email}
              />
            </div>
            <div className="mb-6">
              <Label className="block text-gray-700">Password</Label>
              <Input
                type="password"
                id="password"
                className="w-full p-2 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors?.password}
              />
              {/* {errors?.password && (
                <p className="mb-4 text-red-500">
                  {errors.password}
                </p>
              )} */}
            </div>
            <div className="mb-6">
              <Label className="block text-gray-700">
                Password Confirmation
              </Label>
              <Input
                type="password"
                id="password_confirmation"
                className="w-full p-2 mt-1"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
                error={errors?.password_confirmation}
              />
              {errors?.password_confirmation && (
                <p className="mb-4 text-red-500">
                  {errors.password_confirmation}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
