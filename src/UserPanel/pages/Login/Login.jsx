import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/images/loginNew.png";
import { MainContent } from "../../../constants/mainContent";
import Swal from "sweetalert2";
import { helpingLogin } from "../../../api/user.api";
import { setUser } from "../../../store/slice/userSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../../Component/LoadingSpinner";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import img1 from "../../../assets/images/register.jpg";
const Login = () => {
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await helpingLogin(formData);
      setLoading(false);

      if (response?.success) {

        const userData = {
          id: response?.user?._id,
          name: response?.user?.name,
          phone: response?.user?.phone,
          email: response?.user?.email,
          token: response?.token, // root me hota hai
        };

        Swal.fire({
          title: "Login Successful!",
          text: `Welcome ${userData?.name}`,
          icon: "success",
          confirmButtonColor: "#248398",
        }).then(() => {
          dispatch(setUser(userData));
          localStorage.setItem("token", userData.token);
          navigate("/user-dashboard");
        });

      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
          text: response?.message || "User not found or password incorrect",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error?.response?.data?.message || "Something went wrong",
      });
    }
  };


  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-8 sm:w-[25rem] w-[20rem] sm:px-[1rem] px-[1rem] bg-white/30 backdrop-blur-md rounded-3xl border shadow-lg flex flex-col items-center">
        <Link to="/">
          <img
            src={MainContent?.logo1}
            alt="Bionova Logo"
            className="w-[6rem]"
          />
        </Link>

        <h2 className="text-xl font-bold text-gray-700 text-center mb-4 mt-2">
         Rich Helping Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 w-full">
          {/* Email */}
          <div className="relative w-full">
            <input
              name="emailOrPhone"
              placeholder="Email Or Phone"
              value={formData?.emailOrPhone}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData?.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg outline-none pr-10"
              required
            />
            <span
              className="absolute right-2 top-2.5 cursor-pointer text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <MdRemoveRedEye size={20} /> : <FaEyeSlash size={20} />}
            </span>
          </div>

          <div className="mt-2 text-end">
            <Link to="/forgot-password">
              <p className="text-sm text-gray-900 hover:text-green-800">
                Forgot Password ?
              </p>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg transition"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Login"}
          </button>

          <div className="mt-2 text-center">
            <Link to="/register">
              <p className="text-sm">
                Don't have an account?
                <span className="text-green-700 cursor-pointer"> Register</span>
              </p>
            </Link>
          </div>
          <Link to="/">
            <p className="mt-2 font-extrabold text-center text-sm text-gray-900 hover:text-green-800 cursor-pointer">
              Back to Home
            </p>
          </Link>

        </form>
      </div>
    </div>
  );
};

export default Login;
