'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-center rounded-full",
    {
        variants: {
            variant: {
                default: "bg-strategy-blue/5 hover:bg-strategy-blue/0 border-strategy-blue/20 text-white hover:border-strategy-blue/40",
                solid: "bg-electric-blue hover:bg-blue-hover text-white border-transparent hover:border-foreground/50 transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-surface-border hover:bg-white/10 text-white",
            },
            size: {
                default: "px-7 py-1.5 ",
                sm: "px-4 py-0.5 ",
                lg: "px-10 py-2.5 ",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface NeonButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { 
    neon?: boolean 
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-strategy-blue to-transparent hidden", neon && "block")} />
                {children}
                <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-strategy-blue to-transparent hidden", neon && "block")} />
            </button>
        );
    }
)

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants as neonButtonVariants };

