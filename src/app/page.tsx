'use client';

import { useState } from 'react';
import './page.css';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: false, password: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({
      username: username.trim() === '',
      password: password.trim() === '',
    });
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center"
    style={{ backgroundImage: 'url(/bg.avif)' }} >
      <form
  onSubmit={handleSubmit}
  className="relative bg-[#174117] p-8 rounded-xl shadow-xl w-96 space-y-8 login-box"
>
   <span className="tracer-line"></span>
<span className="tracer-line second"></span>

        <h2 className="text-2xl text-blue-400 font-bold font-sans text-center">Sign In</h2>

        {/* Username */}
        <div className="relative mt-6 input-container">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=" "
            className="peer floating-input"
            required
          />
          <label htmlFor="username" className="floating-label">
            Username
          </label>
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">Please fill out this field</p>
          )}
        </div>

        {/* Password */}
        <div className="relative mt-6 input-container">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className="peer floating-input"
            required
          />
          <label htmlFor="password" className="floating-label">
            Password
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">Please fill out this field</p>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="block w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
        >
          Login
        </button>

        {/* Forgot Password / Sign Up Links */}
        <div className="flex justify-between text-sm mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">
            Forgot Password?
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
