import { motion } from "framer-motion";
import { type Industry, type Affinity, INDUSTRIES, AFFINITIES, type LoanYear, LOAN_YEARS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface FilterBarProps {
  selectedIndustries: Industry[];
  selectedAffinities: Affinity[];
  selectedLoanYears?: LoanYear[]; 
  onToggleIndustry: (industry: Industry) => void;
  onToggleAffinity: (affinity: Affinity) => void;
  onToggleLoanYear?: (year: LoanYear) => void; 
  onClearFilters: () => void;
}

export function FilterBar({ 
  selectedIndustries, 
  selectedAffinities, 
  selectedLoanYears = [],
  onToggleIndustry, 
  onToggleAffinity,
  onToggleLoanYear, 
  onClearFilters
}: FilterBarProps) {
  const hasFilters =
    selectedIndustries.length > 0 ||
    selectedAffinities.length > 0 ||
    selectedLoanYears.length > 0;

  return (
    <div className="space-y-6">
      {/* Industries */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-black">Industries</h4>
        <div className="flex flex-wrap gap-2 pl-2">
          {(Object.keys(INDUSTRIES) as Industry[]).map((industry) => {
            const isSelected = selectedIndustries.includes(industry);
            const color = INDUSTRIES[industry];
            
            return (
              <button
                key={industry}
                onClick={() => onToggleIndustry(industry)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                  isSelected 
                    ? "border-transparent text-white shadow-md transform scale-105" 
                    : "bg-white border-border hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                )}
                style={{ 
                  backgroundColor: isSelected ? color : undefined,
                  borderColor: !isSelected ? undefined : color
                }}
              >
                {industry}
              </button>
            );
          })}
        </div>
      </div>

      {/* Affinities */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-black">Affinities</h4>
        <div className="flex flex-wrap gap-2 pl-2">
          {(Object.keys(AFFINITIES) as Affinity[]).map((affinity) => {
            const isSelected = selectedAffinities.includes(affinity);
            const color = AFFINITIES[affinity];
            
            return (
              <button
                key={affinity}
                onClick={() => onToggleAffinity(affinity)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 border flex items-center gap-1.5",
                  isSelected 
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm" 
                    : "bg-white border-border hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                )}
              >
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: color }}
                />
                {affinity}
              </button>
            );
          })}
        </div>
      </div>

      {/* Loan Year */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-black">Loan Year</h4>
        <div className="flex flex-wrap gap-2 pl-2">
          {(LOAN_YEARS as readonly LoanYear[]).map((year) => {
            const isSelected = selectedLoanYears.includes(year);

            return (
              <button
                key={year}
                onClick={() => onToggleLoanYear?.(year)} 
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm transform scale-105"
                    : "bg-white border-border hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                )}
              >
                {year}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filters Summary & Clear */}
      <div className="h-8 flex items-center justify-between">
        <div className="text-sm text-black">
          {hasFilters ? (
            <span className="animate-in fade-in slide-in-from-left-2 duration-300">
              Showing filtered results
            </span>
          ) : (
            <span>Showing all businesses</span>
          )}
        </div>
        
        {hasFilters && (
          <button
            onClick={onClearFilters}
            className="text-xs flex items-center gap-1 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <X className="w-3 h-3" /> Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
