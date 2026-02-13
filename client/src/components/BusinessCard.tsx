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
  className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-[#ECE7DF] border border-border/50 flex flex-col items-center p-6 text-center"
  style={{ backfaceVisibility: "hidden" }}
>
  {/* Industry Banner Top */}
  <div 
    className="absolute top-0 left-0 right-0 h-2 w-full" 
    style={{ backgroundColor: industryColor }}
  />

  {/* Logo row – improved sizing for readability */}
  <div className="pt-1 flex justify-center items-center" style={{ height: "112px" }}>
    {hasLogo ? (
      <div className="relative w-full h-full flex items-center justify-center px-6">
        <img 
          src={business.logo} 
          alt={`${business.name} logo`}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          style={{ 
            maxHeight: "96px",
            maxWidth: "160px"
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.innerHTML = `<div class="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-3xl font-display font-bold text-muted-foreground/50">${business.name.charAt(0)}</div>`;
            }
          }}
        />
      </div>
    ) : (
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-3xl font-display font-bold text-muted-foreground/50">
        {business.name.charAt(0)}
      </div>
    )}
  </div>

  {/* Name + Industry */}
  <div className="mt-2 flex flex-col items-center gap-2">
    <h3 className="font-display font-bold text-lg leading-tight line-clamp-2 px-2">
      {business.name}
    </h3>

    <Badge
      variant="secondary"
      className="text-xs font-normal bg-[#FCBD25]"
    >
      {business.industry}
    </Badge>
  </div>

  {/* Footer */}
  <div className="mt-auto pt-2 pb-1">
    <span className="text-xs text-[#141414] font-medium uppercase tracking-wider">
      About Us
    </span>
  </div>
</div>


{/* Back of Card */}
<div
  className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-[#F2EFEA] border border-border/50 p-5 flex flex-col shadow-inner"
  style={{
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
  }}
>
  <div
    className="absolute top-0 left-0 right-0 h-1 w-full opacity-50"
    style={{ backgroundColor: industryColor }}
  />

  {/* Header */}
  <div className="flex justify-between items-start gap-3 mb-2">
    <h3 className="font-display font-bold text-base leading-tight text-left line-clamp-2">
      {business.name}
    </h3>

    <div
      className="w-3 h-3 rounded-full shrink-0 mt-1"
      style={{ backgroundColor: industryColor }}
      title={business.industry}
    />
  </div>

  {/* Tagline - fixed height container to prevent jumping */}
  <div className="mb-3" style={{ minHeight: "32px" }}>
    <p className="text-xs text-muted-foreground italic leading-relaxed line-clamp-2">
      {business.tagline}
    </p>
  </div>

  {/* Affinities - fixed height container for consistency */}
  <div className="mb-3" style={{ minHeight: "48px", maxHeight: "48px", overflow: "hidden" }}>
    <div className="flex flex-wrap gap-1.5">
      {business.affinities.slice(0, 6).map((affinity) => (
        <Badge
          key={affinity}
          variant="outline"
          className="text-[10px] px-1.5 py-0.5 h-auto border-dashed"
        >
          {affinity}
        </Badge>
      ))}

      {business.affinities.length > 6 && (
        <Badge
          variant="secondary"
          className="text-[10px] px-1.5 py-0.5 h-auto bg-muted/60 text-muted-foreground"
        >
          +{business.affinities.length - 6}
        </Badge>
      )}
    </div>
  </div>

  {/* CTA pinned, always visible */}
  {business.website && (
    <Button
      asChild
      className="mt-auto w-full gap-2 text-xs h-8 hover:bg-slate-800 text-white"
      onClick={(e) => e.stopPropagation()}
    >
      <a href={business.website} target="_blank" rel="noopener noreferrer">
        Visit Website <ExternalLink className="w-3 h-3" />
      </a>
    </Button>
  )}
</div>
</motion.div>
</div>
);
}