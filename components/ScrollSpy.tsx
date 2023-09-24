"use client";

import { useState, useEffect } from "react";

type Props = {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export function ScrollSpy({ children, to, onClick }: Props) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (history.replaceState) {
      history.replaceState(null, "", hash);
    } else {
      window.location.hash = hash;
    }
  }, [hash]);

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      let top = window.scrollY;
      let currentSection: string = "";

      sections.forEach((section) => {
        const { offsetTop, offsetHeight, id } = section;

        let offSetTop = offsetTop - offsetHeight / 3;
        let insideSection = top >= offSetTop && top <= offSetTop + offsetHeight;

        if (insideSection) {
          currentSection = id === "home" ? "/" : `#${id}`;
          setHash(currentSection);

          document.title = `ScrollSpy | ${
            id?.charAt(0)?.toUpperCase() + id?.slice(1)
          }`;
        }
      });

      navLinks.forEach((navlink: any) => {
        let newSection = currentSection === "/" ? "#home" : currentSection;

        if (navlink.hash.includes(newSection)) {
          navlink.classList.add("active");
        } else {
          navlink.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e: any, section: string) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={`#${to}`}
      onClick={(e) => scrollToSection(e, to)}
      className={`${to === "home" ? "active" : ""}`}
    >
      {children}
    </a>
  );
}
