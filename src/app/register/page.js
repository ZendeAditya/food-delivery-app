"use client";
import { Josefin_Sans } from "next/font/google";
import { useState } from "react";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(true);
  const [userCreated, setUsercreated] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
    setCreatingUser(false);
  };
  return (
    <>
      <section className="mt-4">
        <h1 className="text-center text-red-600 text-4xl font-semibold p-3">
          Register Page
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col p-5"
        >
          <input
            type="email"
            disabled={creatingUser}
            placeholder="Enter your email addresss"
            className="py-2 px-2 w-80 rounded-md outline-none border-2 border-gray-400 m-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            disabled={creatingUser}
            placeholder="Enter your password"
            className="py-2 px-2 w-80 rounded-md outline-none border-2 border-gray-400 m-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit  "
            className="py-2 px-8 bg-red-600 text-white rounded-md m-2 w-80"
          >
            Register
          </button>
          <div className="my-4 text-xl text-gray-500">
            <p>Or login with provider</p>
          </div>
          <button
            type="submit"
            className="py-2 px-8 w-80 bg-red-600 text-white rounded-md m-2 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-google-filled text-yellow-300"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            Login with google
          </button>
        </form>
      </section>
    </>
  );
};

export default RegisterPage;
