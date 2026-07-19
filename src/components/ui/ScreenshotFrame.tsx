import Image from "next/image";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
}

export function ScreenshotFrame({ src, alt, label, priority }: ScreenshotFrameProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-soft-alt bg-white shadow-2xl">
      {label && (
        <div className="flex items-center gap-1.5 border-b border-soft-alt bg-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          <span className="ml-3 text-xs font-medium text-muted">{label}</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={1463}
        height={775}
        priority={priority}
        className="h-auto w-full object-cover object-top"
      />
    </div>
  );
}
