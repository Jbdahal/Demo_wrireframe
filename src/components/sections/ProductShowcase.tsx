import Image from "next/image";
import { Calendar, ClipboardCheck, ShieldCheck, Smartphone } from "lucide-react";
import { rosterProduct } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";

const highlights = [
  { icon: Calendar, label: "Shift management" },
  { icon: ShieldCheck, label: "Compliance & Monitoring" },
  { icon: ClipboardCheck, label: "SCHADS-aware payrun" },
  { icon: Smartphone, label: "Staff mobile app" },
];

function DeviceMockup() {
  const [primaryScreenshot] = rosterProduct.screenshots;

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-strong/10 blur-2xl" />
      <div className="relative">
        <ScreenshotFrame
          src={primaryScreenshot.src}
          alt={primaryScreenshot.alt}
          label={primaryScreenshot.label}
          priority
        />
      </div>

      <div className="absolute -bottom-8 -right-6 w-28 overflow-hidden rounded-2xl border border-soft-alt bg-white shadow-2xl sm:w-32">
        <div className="border-b border-soft-alt bg-soft px-3 py-1.5">
          <div className="mx-auto h-1 w-8 rounded-full bg-soft-alt" />
        </div>
        <div className="relative aspect-[9/19.5] w-full">
          <Image
            src="/screenshots/mobile-login.png"
            alt="Pravaro Staff App sign-in screen"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section id="live-product" className="bg-soft/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Badge variant="live" className="mb-5">
              Now Live
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-darkest md:text-4xl">
              Roster &amp; Scheduling Platform
            </h2>
            <p className="font-body mt-4 max-w-xl text-lg leading-relaxed text-muted">
              The first product in the Pravaro Suite. Shift management, compliance
              monitoring, SCHADS-aware payrun, and a staff mobile app, all in one connected
              platform.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-darkest">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-soft text-primary">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/products/roster" variant="primary">
                Explore Roster &amp; Scheduling
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <DeviceMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
