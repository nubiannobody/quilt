import { motion } from "framer-motion";
import { Business } from "@/lib/data";
import { BusinessCard } from "./BusinessCard";

interface QuiltGridProps {
  businesses: Business[];
}

export function QuiltGrid({ businesses }: QuiltGridProps) {
  if (businesses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-display font-bold text-slate-800">No businesses found</h3>
        <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
          Try adjusting your filters to see more results from our community.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
      {businesses.map((business, index) => (
        <motion.div
          key={business.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          layout
        >
          <BusinessCard business={business} />
        </motion.div>
      ))}
    </div>
  );
}
