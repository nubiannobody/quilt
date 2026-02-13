import { useState, useMemo } from "react";
import { FilterBar } from "@/components/FilterBar";
import { QuiltGrid } from "@/components/QuiltGrid";
import { BUSINESSES, type Industry, type Affinity, type LoanYear } from "@/lib/data";
import textureBg from "@assets/generated_images/subtle_fabric_texture_pattern.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [selectedAffinities, setSelectedAffinities] = useState<Affinity[]>([]);
  const [selectedLoanYears, setSelectedLoanYears] = useState<LoanYear[]>([]);

  const toggleIndustry = (industry: Industry) => {
    setSelectedIndustries(prev =>
      prev.includes(industry) ? prev.filter(i => i !== industry) : [...prev, industry]
    );
  };

  const toggleAffinity = (affinity: Affinity) => {
    setSelectedAffinities(prev =>
      prev.includes(affinity) ? prev.filter(a => a !== affinity) : [...prev, affinity]
    );
  };

  const toggleLoanYear = (year: LoanYear) => {
    setSelectedLoanYears(prev =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const clearFilters = () => {
    setSelectedIndustries([]);
    setSelectedAffinities([]);
    setSelectedLoanYears([]);
  };

  const filteredBusinesses = useMemo(() => {
    return BUSINESSES.filter(business => {
      const matchesIndustry =
        selectedIndustries.length === 0 ||
        selectedIndustries.includes(business.industry);

      const matchesAffinity =
        selectedAffinities.length === 0 ||
        business.affinities.some(a => selectedAffinities.includes(a));

      const matchesLoanYear =
        selectedLoanYears.length === 0 ||
        (business.loanYear !== undefined &&
          selectedLoanYears.includes(business.loanYear));

      return matchesIndustry && matchesAffinity && matchesLoanYear;
    });
  }, [selectedIndustries, selectedAffinities, selectedLoanYears]);

  return (
    <div className="min-h-screen bg-[#ECE7DF] relative font-sans text-black">
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply"
        style={{ backgroundImage: `url(${textureBg})`, backgroundSize: "400px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-8 self-start max-h-[calc(100vh-4rem)] overflow-y-auto pr-2">
              <FilterBar
                selectedIndustries={selectedIndustries}
                selectedAffinities={selectedAffinities}
                selectedLoanYears={selectedLoanYears}
                onToggleIndustry={toggleIndustry}
                onToggleAffinity={toggleAffinity}
                onToggleLoanYear={toggleLoanYear}
                onClearFilters={clearFilters}
              />
            </div>
          </aside>

          <main className="flex-1">
            <header className="mb-10">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-full">
                  <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-2">
                    <span className="text-[#7FA56B]">Bricks</span>{" "}
                    <span className="text-black">Not</span>{" "}
                    <span className="text-[#FCBD25]">Sticks</span>
                  </h1>
                  <p className="text-lg text-black max-w-2xl mx-auto">
                    At Denkyem /den•CHem/ our mission is rooted in supporting
                    Black-owned businesses. Explore them below: diverse
                    industries, unique stories, and the people who weave our
                    community together.
                  </p>
                </div>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden w-full gap-2">
                      <Filter className="w-4 h-4" /> Filters
                      {(selectedIndustries.length +
                        selectedAffinities.length +
                        selectedLoanYears.length) > 0 && (
                        <span className="bg-[primary] text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                          {selectedIndustries.length +
                            selectedAffinities.length +
                            selectedLoanYears.length}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="overflow-y-auto">
                    <div className="pt-6">
                      <h3 className="font-display font-bold text-xl mb-6">
                        Filters
                      </h3>
                      <FilterBar
                        selectedIndustries={selectedIndustries}
                        selectedAffinities={selectedAffinities}
                        selectedLoanYears={selectedLoanYears}
                        onToggleIndustry={toggleIndustry}
                        onToggleAffinity={toggleAffinity}
                        onToggleLoanYear={toggleLoanYear}
                        onClearFilters={clearFilters}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </header>

            <QuiltGrid businesses={filteredBusinesses} />
          </main>
        </div>
      </div>
    </div>
  );
}
