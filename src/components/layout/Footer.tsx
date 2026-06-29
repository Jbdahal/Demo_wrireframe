import Image from "next/image";
import Link from "next/link";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="#hero" className="mb-4 flex items-center gap-2">
              <Image
                src="/brand/logo-mark.png"
                alt="Pravaro"
                width={36}
                height={36}
                className="h-9 w-9 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold lowercase tracking-tight text-white">
                pravaro
              </span>
            </Link>
            <p className="text-sm text-white/70">{footer.tagline}</p>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest">
            <span className="text-teal">Connect</span>
            <span className="text-white/40"> • </span>
            <span className="text-blue">Empower</span>
            <span className="text-white/40"> • </span>
            <span className="text-purple">Flow</span>
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-teal"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Pravaro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
