import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { type Business, INDUSTRIES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const industryColor = INDUSTRIES[business.industry];

  const handleFlip = () => setIsFlipped(!isFlipped);

  // Fallback for missing logos
  const hasLogo = business.logo && business.logo.length > 0;

  return (
    <div 
      className="group relative h-64 w-full cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative h-full w-full preserve-3d shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-white border border-border/50 flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Industry Banner Top */}
          <div 
            className="absolute top-0 left-0 right-0 h-2 w-full" 
            style={{ backgroundColor: industryColor }}
          />

          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            {hasLogo ? (
              <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                <img 
                  src={business.logo} 
                  alt={`${business.name} logo`}
                  className="max-w-full max-h-full object-contain drop-shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-muted', 'rounded-full', 'p-4');
                  }}
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-2 text-3xl font-display font-bold text-muted-foreground/50">
                {business.name.charAt(0)}
              </div>
            )}
            
            <h3 className="font-display font-bold text-lg leading-tight line-clamp-2">
              {business.name}
            </h3>
            
            <Badge variant="secondary" className="text-xs font-normal bg-muted/50 text-muted-foreground">
              {business.industry}
            </Badge>
          </div>
          
          <div className="mt-auto pt-2">
            <span className="text-xs text-muted-foreground/70 font-medium uppercase tracking-wider">
              Click to details
            </span>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-white border border-border/50 p-6 flex flex-col shadow-inner"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <div 
            className="absolute top-0 left-0 right-0 h-1 w-full opacity-50" 
            style={{ backgroundColor: industryColor }}
          />
          
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-display font-bold text-lg leading-tight text-left">
              {business.name}
            </h3>
            {/* Industry Dot */}
            <div 
              className="w-3 h-3 rounded-full shrink-0 mt-1.5"
              style={{ backgroundColor: industryColor }} 
              title={business.industry}
            />
          </div>

          <p className="text-sm text-muted-foreground mb-6 italic leading-relaxed">
            "{business.tagline}"
          </p>

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {business.affinities.map((affinity) => (
                <Badge 
                  key={affinity} 
                  variant="outline" 
                  className="text-[10px] px-1.5 py-0.5 h-auto border-dashed"
                >
                  {affinity}
                </Badge>
              ))}
            </div>

            {business.website && (
              <Button 
                asChild 
                className="w-full gap-2 text-xs h-8 bg-slate-900 hover:bg-slate-800 text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={business.website} target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
