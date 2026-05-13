"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  role: string;
  description: string;
  icon: React.ReactNode;
}

const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  ({ role, description, icon, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative bg-card border border-border/50 rounded-2xl p-6 md:p-8 overflow-hidden h-full flex flex-col",
          className
        )}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-5">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-success rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-success/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-success/20 transition-all duration-300">
                {icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight">
                {role}
              </h3>
            </div>
          </div>
          
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    );
  }
);

TeamCard.displayName = "TeamCard";

export { TeamCard };