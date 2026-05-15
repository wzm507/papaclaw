import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Briefcase, Star } from 'lucide-react';

interface FounderCardProps {
  name: string;
  title: string;
  experience: string;
  description: string;
  location: string;
  highlight: string;
  index: number;
  imageSrc?: string;
}

export const FounderCard = ({
  name,
  title,
  experience,
  description,
  location,
  highlight,
  index,
  imageSrc,
}: FounderCardProps) => {
  const colors = ['from-primary/20 to-success/20', 'from-accent/20 to-primary/20'];
  const bgColors = ['bg-gradient-to-br from-primary/5 to-success/5', 'bg-gradient-to-br from-accent/5 to-primary/5'];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl ${bgColors[index % 2]} border border-border/50`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6 md:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="relative flex-shrink-0">
            <motion.div
              className={`absolute h-32 w-32 rounded-full bg-gradient-to-br ${colors[index % 2]} md:h-40 md:w-40`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-card shadow-lg md:h-40 md:w-40">
              <img
                src={imageSrc || `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20portrait%20of%20a%20successful%20asian%20${index === 0 ? 'male' : 'male'}%20entrepreneur%20in%20business%20suit%20confident%20pose%20clean%20background%20high%20quality&image_size=square_hd`}
                alt={name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/400x400/eab308/ffffff?text=${encodeURIComponent(name)}`;
                }}
              />
            </div>
            <motion.div
              className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Award className="h-5 w-5" />
            </motion.div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start mb-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                <Star className="w-3 h-3 mr-1" />
                {highlight}
              </Badge>
              <Badge variant="secondary">
                <MapPin className="w-3 h-3 mr-1" />
                {location}
              </Badge>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {name}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {title}
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{experience}</div>
                  <div className="text-xs text-muted-foreground">行业经验</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <Star className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">Top Tier</div>
                  <div className="text-xs text-muted-foreground">资源等级</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index % 2]}`} />
    </motion.div>
  );
};

const Badge = ({ children, className = '', variant = 'default' }: { children: React.ReactNode; className?: string; variant?: string }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  const variants = {
    default: 'bg-primary/10 text-primary',
    secondary: 'bg-muted/50 text-muted-foreground',
  };
  return <span className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</span>;
};