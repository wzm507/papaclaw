"use client";

import * as React from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface SimpleStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const SimpleStatCard = React.forwardRef<HTMLDivElement, SimpleStatCardProps>(
  ({ title, value, icon, className, ...props }, ref) => {
    const numericPart = value.replace(/[^0-9]/g, '');
    const suffix = value.replace(/[0-9]/g, '');
    const isNumeric = numericPart.length > 0;
    
    const motionValue = useSpring(0, {
      damping: 100,
      stiffness: 100,
    });

    const displayValue = useTransform(motionValue, (latest) =>
      Math.round(latest).toLocaleString()
    );

    React.useEffect(() => {
      if (isNumeric) {
        const controls = animate(motionValue, parseInt(numericPart), {
          duration: 2,
          ease: "easeOut",
        });
        return controls.stop;
      }
    }, [numericPart, isNumeric, motionValue]);

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center text-center gap-3 rounded-xl border bg-card p-6 text-card-foreground shadow",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
          {icon}
        </div>
        
        <div className="flex items-baseline gap-1">
          {isNumeric ? (
            <motion.span className="text-4xl md:text-5xl font-bold tracking-tighter">
              {displayValue}
            </motion.span>
          ) : (
            <span className="text-4xl md:text-5xl font-bold tracking-tighter">
              {value}
            </span>
          )}
          {suffix && (
            <span className="text-xl md:text-2xl font-semibold text-primary">
              {suffix}
            </span>
          )}
        </div>

        <p className="text-base md:text-lg text-gray-400 dark:text-gray-300">{title}</p>
      </div>
    );
  }
);

SimpleStatCard.displayName = "SimpleStatCard";

export { SimpleStatCard };