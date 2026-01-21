import { useState, useMemo } from "react";
import { FilterBar } from "@/components/FilterBar";
import { QuiltGrid } from "@/components/QuiltGrid";
import { BUSINESSES, type Industry, type Affinity } from "@/lib/data";
import textureBg from "@assets/generated_images/subtle_fabric_texture_pattern.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [selectedAffinities, setSelectedAffinities] = useState<Affinity[]>([]);

  const toggleIndustry = (industry: Industry) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry) 
        : [...prev, industry]
    );
  };

  const toggleAffinity = (affinity: Affinity) => {
    setSelectedAffinities(prev => 
      prev.includes(affinity) 
        ? prev.filter(a => a !== affinity) 
        : [...prev, affinity]
    );
  };

  const clearFilters = () => {
    setSelectedIndustries([]);
    setSelectedAffinities([]);
  };

  const filteredBusinesses = useMemo(() => {
    return BUSINESSES.filter(business => {
      const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(business.industry);
      const matchesAffinity = selectedAffinities.length === 0 || business.affinities.some(a => selectedAffinities.includes(a));
      return matchesIndustry && matchesAffinity;
    });
  }, [selectedIndustries, selectedAffinities]);

  return (
    <div className="min-h-screen bg-slate-50 relative font-sans text-slate-900">
      {/* Texture Background */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply"
        style={{ backgroundImage: `url(${textureBg})`, backgroundSize: '400px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 mb-2">
                Business <span className="text-primary">Quilt</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                A tapestry of local businesses. Discover diverse industries, unique stories, and the people who weave our community together.
              </p>
            </div>
            
            {/* Mobile Filter Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden w-full gap-2">
                  <Filter className="w-4 h-4" /> Filters
                  {(selectedIndustries.length + selectedAffinities.length) > 0 && (
                    <span className="bg-primary text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                      {selectedIndustries.length + selectedAffinities.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto">
                <div className="pt-6">
                  <h3 className="font-display font-bold text-xl mb-6">Filters</h3>
                  <FilterBar 
                    selectedIndustries={selectedIndustries}
                    selectedAffinities={selectedAffinities}
                    onToggleIndustry={toggleIndustry}
                    onToggleAffinity={toggleAffinity}
                    onClearFilters={clearFilters}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 shrink-0 space-y-8 sticky top-8 self-start max-h-[calc(100vh-4rem)] overflow-y-auto pr-2">
             <FilterBar 
                selectedIndustries={selectedIndustries}
                selectedAffinities={selectedAffinities}
                onToggleIndustry={toggleIndustry}
                onToggleAffinity={toggleAffinity}
                onClearFilters={clearFilters}
              />
          </aside>

          {/* Main Grid */}
          <main className="flex-1">
            <QuiltGrid businesses={filteredBusinesses} />
          </main>
        </div>
      </div>
    </div>
  );
}
