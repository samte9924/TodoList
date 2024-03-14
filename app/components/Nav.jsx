"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  const isUserLoggedIn = true;

  useEffect(() => {}, []);

  return (
    <nav className="w-full flex justify-between items-center p-4 mb-4">
      <Link className="flex gap-2 justify-center" href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>
      {isUserLoggedIn ? (
        <div className="flex gap-3">
          <form action="/auth/signout" method="POST">
            <button className="outline_black" type="submit">
              Disconnetti
            </button>
          </form>
          <Link
            className="btn_black flex justify-center items-center"
            href="/profile"
          >
            Profilo
          </Link>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Nav;
