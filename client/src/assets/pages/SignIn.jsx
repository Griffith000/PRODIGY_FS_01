import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center max-w-md mx-auto my-auto "
      >
        <div className="text-4xl m-7 font-semibold text-slate-700 text-center  ">
          Sign In
        </div>
       
        <input
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="Password"
        />
        <button
          disabled={loading}
          className=" w-full bg-slate-600 hover:bg-slate-500 text-white font-bold mb-4 py-3 px-8 rounded hover:transition duration-100 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <p className="self-start">
          Dont have an account{" "}
          <Link
            to="/signUp"
            className="text-blue-600 underline hover:text-violet-800 transition duration-100"
          >
            sign up
          </Link>
        </p>
      </form>
      <p className="text-red-600 m-3 text-center">
        {error && "Something went wrong!"}
      </p>
    </div>
  );
};

export default SignIp;
