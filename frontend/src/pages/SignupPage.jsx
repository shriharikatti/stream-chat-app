import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit= (e) =>{
    e.preventDefault();

    setErrors({});

    const newErrors = {};

    if(!username.trim()){
      newErrors.username = 'Usernmae is required';
    }

    if(!email.trim()){
      newErrors.email = 'Email is required';
    } else if(!/\S+@\S+\.\S+/.test(email)){
        newErrors.email = 'Email address is invalid';
    }

    if(!password){
      newErrors.password = 'Password is required';
    }else if(password.length < 6){
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if(!confirmPassword){
      newErrors.confirmPassword = 'Confirm Password is required';
    }else if (password!== confirmPassword){
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0) {
      console.log('Form data is valid! Submitting...');
      console.log({ username, email, password});      
    } else {
      console.log('Form has validation errors:', newErrors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Your Account
        </h2>
        <form onSubmit = {handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Username
            </label>
            <Input
              type="text"
              id="username"
              placeholder="Your unique username"
              className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors duration-200"
          >
            Sign Up
          </Button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
