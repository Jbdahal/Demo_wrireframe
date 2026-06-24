"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-alt/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-mark.png"
            alt="Pravaro"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="text-xl font-bold lowercase tracking-tight text-navy">
            pravaro
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#" className="text-sm font-medium text-navy/80 hover:text-blue">
            Login
          </Link>
          <Button variant="primary" className="px-5 py-2 text-sm">
            Sign Up
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-[65px] z-40 bg-white transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-navy"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#" className="text-lg font-medium text-navy" onClick={() => setOpen(false)}>
            Login
          </Link>
          <Button variant="primary">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
