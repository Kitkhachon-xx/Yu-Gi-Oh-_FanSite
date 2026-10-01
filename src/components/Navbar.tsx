"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ink/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image
            src="/img/logo.jpg"
            alt=""
            width={120}
            height={40}
            className="h-9 w-auto rounded"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors hover:text-gold-soft ${
                  isActive(l.href) ? "text-gold" : "text-muted"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gold" />
                )}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full border border-gold/50 px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold hover:text-ink"
            >
              My Profile
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-gold md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink/95 px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`block rounded-lg px-3 py-3 text-base ${
                  isActive(l.href) ? "text-gold" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-3 text-base text-muted"
            >
              My Profile
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
