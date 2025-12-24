'use client'

import React, { useState } from "react"
import { redirect } from "next/navigation"

const page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  
  const handleLogin = (e : React.FormEvent) => {
    // Handle login logic here
    e.preventDefault();
    setLoading(true);
  }

  const redirSignup = (e : React.MouseEvent) => {
    // Redirect to signup page
    e.preventDefault()
    redirect("/signup")
  }

  return (
    <form onSubmit={handleLogin} className="min-h-screen flex bg-gray-300 items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 border-2 border-blue-500 bg-white rounded shadow">
        <h2 className="text-xl text-black font-bold text-start">Log in to your account</h2>

        <div>
          <h4>Email</h4>

          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded w-full p-2 mt-1"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <h4>Password</h4>
            
            <button className="text-sm text-blue-600 underline cursor-pointer float-right">
              Forgot password?
            </button>
          </div>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded w-full p-2 mt-1"
          />
        </div>

        <button 
          className="w-full border-2 border-blue-500 bg-blue-500 text-white rounded-md p-2 cursor-pointer hover:bg-white hover:text-blue-500 hover:font-bold" 
          type="submit"
          onClick={() => redirect("/home")}
        >
          Sign in
        </button>

        <div className="flex justify-center">
          <span className="text-sm text-gray-700">
            Don't have an account?{' '}
            <button onClick={redirSignup} className="text-sm text-blue-600 underline cursor-pointer">
              Sign up
            </button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default page