import { PlusIcon } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

interface CallToActionProps {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
}

export function CallToAction({
  title = "Ready to move forward with clarity?",
  description = "Lets discuss your situation and see how we can support your next financial decision.",
  buttonText = "Let's Talk"
}: CallToActionProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-6 rounded-3xl border border-white/15 bg-[linear-gradient(135deg,rgba(14,16,26,0.75),rgba(10,12,18,0.85))] px-6 py-10 backdrop-blur-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:px-10">
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-10 size-5 text-strategy-blue/70"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-10 size-5 text-strategy-blue/70"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-10 size-5 text-strategy-blue/70"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-10 size-5 text-strategy-blue/70"
        strokeWidth={1}
      />

      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-white/10" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-white/10" />

      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-white/10" />


      <div className="space-y-4">
        <h2 className="text-center font-accent font-light text-2xl lg:text-4xl tracking-tight text-white leading-[1.1]">
          {title}
        </h2>
        <p className="text-center text-platinum/70 text-base md:text-lg font-body font-light max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <ShinyButton className="text-sm px-6 py-2.5">
          {buttonText}
        </ShinyButton>
      </div>
    </div>
  );
}
