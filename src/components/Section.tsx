import React from "react";
import { Sparkles } from "lucide-react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
  icon?: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  action,
  icon,
}: SectionProps) {
  return (
    <section id={id} className="relative py-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/5" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
              {React.isValidElement<{ className?: string }>(icon)
                ? React.cloneElement(icon, {
                    className: `h-3.5 w-3.5 text-[#981a20] ${icon.props.className ?? ""}`.trim(),
                  })
                : icon ?? <Sparkles className="h-3.5 w-3.5 text-[#981a20]" />}
              <span>{eyebrow}</span>
            </div>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-3 text-gray-600">{description}</p>}
        </div>
        <div className="mt-10">{children}</div>
        {action && <div className="mt-10 flex justify-center">{action}</div>}
      </div>
    </section>
  );
}
