import Image from "next/image";
import Link from "next/link";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-darkest text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <Link href="/" className="mb-4 flex items-center">
            <Image
              src="/brand/logo-wordmark.png"
              alt="Pravaro"
              width={327}
              height={86}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <a href={footer.contact.phoneHref} className="transition-colors hover:text-primary">
              {footer.contact.phone}
            </a>
            <a href={footer.contact.emailHref} className="transition-colors hover:text-primary">
              {footer.contact.email}
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
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
