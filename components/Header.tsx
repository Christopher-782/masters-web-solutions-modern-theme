"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["Solutions", "#solutions"],
  ["Transformation", "#transformation"],
  ["Systems", "#systems"],
  ["Process", "#process"],
  ["Contact", "#contact"]
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="nav-wrap shell">
        <Link className="brand" href="#home" aria-label="MASTER'S WEB SOLUTIONS home">
          <Image
            src="/masters-web-solutions-logo.png"
            alt="MASTER'S WEB SOLUTIONS"
            width={384}
            height={307}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <a
          className="nav-cta"
          href="https://wa.me/2348072011614?text=Hello%20MASTER%27S%20WEB%20SOLUTIONS%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20business%20system%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Consultation <span aria-hidden="true">→</span>
        </a>

        <button
          className={`menu-button ${open ? "menu-button--open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav shell ${open ? "mobile-nav--open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav__inner">
          <div className="mobile-nav__label">Navigate</div>
          {links.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} style={{ "--menu-index": index } as React.CSSProperties}>
              {label}
            </Link>
          ))}
          <a
            className="mobile-nav__cta"
            href="https://wa.me/2348072011614?text=Hello%20MASTER%27S%20WEB%20SOLUTIONS%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20business%20system%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            Book a Free Consultation →
          </a>
        </div>
      </div>
    </header>
  );
}
