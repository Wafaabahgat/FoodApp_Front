import React, { FC, FormEvent, useEffect, useState } from "react";
import { Label } from "../../components/Ui/Label";
import { Button } from "../../components/Ui/Button";
import headerImg from "../../assets/hero.jpg";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import { loginUser } from "../../slice/Auth/login/loginAction";
import Input from "../../components/Ui/Input";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const { loading, errors, success, msg } = useSelector((state) => state.login);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (success === true && msg) {
      toast.success(msg);
      window.location.href = "/";
      console.log("object");
    }
    if (success === false && msg) {
      toast.error(msg);
      console.log("objechht");
    }
  }, [success, msg]);

  if (loading) {
    return <Loader />;
  }

  return (
<div
  className="flex items-center justify-center w-full h-full mt-5"
  style={{
    minHeight: "100vh", // يغطي كامل الشاشة
    backgroundSize: "cover", // يجعل الصورة تغطي الخلفية بالكامل
    backgroundPosition: "center", // يتمركز الصورة في المنتصف
    backgroundImage: `url(${headerImg})`, // تحديد الصورة الخلفية
  }}
>
  <div className="flex items-center justify-center w-full px-4 mt-10 sm:px-8 md:px-16 lg:px-24">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md sm:p-8 md:p-10">
      <h2 className="mb-6 text-2xl font-bold text-center text-red-500 sm:text-3xl">
        Login
      </h2>
      {error && <p className="mb-4 text-center text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <Label className="block text-gray-700">Email</Label>
          <Input
            type="email"
            id="email"
            className="w-full p-2 mt-1 border rounded"
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
            className="w-full p-2 mt-1 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors?.password}
          />
        </div>
        <Button
          type="submit"
          className="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Login
        </Button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;
