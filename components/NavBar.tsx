"use client";

import { useState } from "react";
import { ScrollSpy } from "@/components";

const links = ["home", "about", "services", "projects", "contact"];

export function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="container mx-auto flex w-full max-w-6xl items-center justify-between px-6 xl:px-0">
        <a href="#" className="text-xl font-bold uppercase tracking-widest">
          logo
        </a>

        <nav
          className={`${
            menuIsOpen
              ? "relative top-0 duration-500"
              : "relative -top-[100vh] duration-500"
          }`}
        >
          {links.map((link, i) => {
            return (
              <ScrollSpy key={i} to={link} onClick={toggleMenu}>
                {link}
              </ScrollSpy>
            );
          })}

          <button
            className={`absolute right-6 top-4 flex fill-slate-500 text-2xl sm:hidden`}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </nav>

        <button
          className={`flex fill-slate-100 text-2xl sm:hidden`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
