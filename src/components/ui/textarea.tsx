import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        `
        flex w-full min-h-20 rounded-2xl
        bg-card text-foreground placeholder:text-muted-foreground
        border border-border/40
        px-4 py-3
        shadow-concave
        focus:outline-none focus:ring-2 focus:ring-primary
        disabled:cursor-not-allowed disabled:opacity-50
        transition-all
        md:text-sm
        `,
        className,
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
