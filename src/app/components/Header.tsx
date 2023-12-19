"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const session = useSession();
  const status = session.status;
  return (
    <>
      <header className="flex items-center justify-between">
        <Link href="/" className="text-red-500 font-semibold text-2xl ">
          Pizza
        </Link>
        <nav className="flex gap-8 text-gray-500 font-semibold items-center">
          <Link href="/">Home</Link>
          <Link href="/">Menu</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </nav>
        <nav>
          {status === "authenticated" && (
            <button
              className="m-2  text-black border-2 border-gray-200 px-6 py-2 rounded-md"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          )}
          {status !== "authenticated" && (
            <>
              <Link
                href={"/login"}
                className="bg-red-600 text-white px-6 py-2 rounded-md"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="m-2  text-black border-2 border-gray-200 px-6 py-2 rounded-md"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
