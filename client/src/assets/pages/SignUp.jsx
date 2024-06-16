import React from "react";

const SignUp = () => {
  return (
    <div>
      <form className="flex flex-col justify-center items-center max-w-md mx-auto my-auto ">
        <div className="text-4xl m-7 font-semibold text-slate-700 text-center  ">
          SignUp
        </div>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className=" w-full bg-slate-600 hover:bg-slate-500 text-white font-bold mb-4 py-3 px-8 rounded hover:transition duration-100">
          Sign Up
        </button>
        <p className="self-start">
          already have an account{" "}
          <a
            href="/signIn"
            className="text-blue-600 underline hover:text-violet-800 transition duration-100"
          >
            signIn
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
