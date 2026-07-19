"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, primaryCta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  function closeAll() {
    setOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-soft-alt/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={closeAll}>
          <Image
            src="/brand/logo-wordmark.png"
            alt="Pravaro"
            width={327}
            height={86}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.items ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(link.label)}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-darkest/80 transition-colors hover:text-strong"
                  aria-expanded={desktopDropdown === link.label}
                  onClick={() =>
                    setDesktopDropdown(desktopDropdown === link.label ? null : link.label)
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      desktopDropdown === link.label && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full w-64 pt-2 transition-all duration-150",
                    desktopDropdown === link.label
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <div className="overflow-hidden rounded-2xl border border-soft-alt bg-white p-2 shadow-xl">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-darkest/85 transition-colors hover:bg-soft hover:text-strong"
                        onClick={closeAll}
                      >
                        {item.label}
                        {item.badge && (
                          <span
                            className={cn(
                              "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                              item.badge === "live"
                                ? "bg-primary text-white"
                                : "bg-soft-alt text-muted"
                            )}
                          >
                            {item.badge === "live" ? "Live" : "Soon"}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="rounded-full px-4 py-2 text-sm font-medium text-darkest/80 transition-colors hover:text-strong"
              >
                {link.label}
              </Link>
            )
          )}
          <Button href={primaryCta.href} variant="primary" className="ml-2 px-5 py-2 text-sm">
            {primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6 text-darkest" /> : <Menu className="h-6 w-6 text-darkest" />}
        </button>
      </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 top-[65px] z-40 overflow-y-auto bg-white transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-2 p-6">
          {navLinks.map((link) =>
            link.items ? (
              <div key={link.label} className="border-b border-soft-alt py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-lg font-medium text-darkest"
                  aria-expanded={mobileDropdown === link.label}
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      mobileDropdown === link.label && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>
                {mobileDropdown === link.label && (
                  <div className="flex flex-col gap-1 pb-3 pl-3">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between gap-3 py-2 text-base text-darkest/80"
                        onClick={closeAll}
                      >
                        {item.label}
                        {item.badge && (
                          <span
                            className={cn(
                              "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                              item.badge === "live"
                                ? "bg-primary text-white"
                                : "bg-soft-alt text-muted"
                            )}
                          >
                            {item.badge === "live" ? "Live" : "Soon"}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="border-b border-soft-alt py-4 text-lg font-medium text-darkest"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            )
          )}
          <Button href={primaryCta.href} variant="primary" className="mt-4" onClick={closeAll}>
            {primaryCta.label}
          </Button>
        </div>
      </div>
    </>
  );
}
