"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import {
  setSearchQuery,
  setSelectedStatuses,
  setSelectedCategories,
  setSelectedPricingModel,
  clearAllFilters,
} from "@/lib/store/agentSlice"
import { Search, Filter, X, ChevronDown } from "lucide-react"

const statusOptions = ["Active", "Beta", "Archived"]
const categoryOptions = [
  "Customer Service",
  "Operations",
  "Marketing",
  "Data Analysis",
  "Development",
  "Human Resources",
  "Finance",
  "Legal",
]
const pricingOptions = ["Free Tier", "Subscription", "Per-Use"]

export function SearchFilters() {
  const dispatch = useAppDispatch()
  const { filters, filteredAgents, agents } = useAppSelector((state) => state.agents)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const handleStatusChange = (status: string, checked: boolean) => {
    const newStatuses = checked
      ? [...filters.selectedStatuses, status]
      : filters.selectedStatuses.filter((s) => s !== status)
    dispatch(setSelectedStatuses(newStatuses))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.selectedCategories, category]
      : filters.selectedCategories.filter((c) => c !== category)
    dispatch(setSelectedCategories(newCategories))
  }

  const handleClearFilters = () => {
    dispatch(clearAllFilters())
  }

  const activeFiltersCount =
    (filters.searchQuery ? 1 : 0) +
    filters.selectedStatuses.length +
    filters.selectedCategories.length +
    (filters.selectedPricingModel ? 1 : 0)

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search agents by name or description..."
          value={filters.searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="pl-10"
        />
      </div>

      {/* Filter Toggle and Results Count */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFiltersCount}
              </Badge>
            )}
            <ChevronDown className={`h-4 w-4 transition-transform ${isFiltersOpen ? "rotate-180" : ""}`} />
          </Button>

          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Clear all
            </Button>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          Showing {filteredAgents.length} of {agents.length} agents
        </div>
      </div>

      {/* Active Filters Display */}
      <AnimatePresence>
        {activeFiltersCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2"
          >
            {filters.searchQuery && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>Search: {filters.searchQuery}</span>
                <X className="h-3 w-3 cursor-pointer" onClick={() => dispatch(setSearchQuery(""))} />
              </Badge>
            )}
            {filters.selectedStatuses.map((status) => (
              <Badge key={status} variant="secondary" className="flex items-center space-x-1">
                <span>Status: {status}</span>
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleStatusChange(status, false)} />
              </Badge>
            ))}
            {filters.selectedCategories.map((category) => (
              <Badge key={category} variant="secondary" className="flex items-center space-x-1">
                <span>Category: {category}</span>
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleCategoryChange(category, false)} />
              </Badge>
            ))}
            {filters.selectedPricingModel && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>Pricing: {filters.selectedPricingModel}</span>
                <X className="h-3 w-3 cursor-pointer" onClick={() => dispatch(setSelectedPricingModel(""))} />
              </Badge>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsible Filters */}
      <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
        <CollapsibleContent>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filter Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Status Filter */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Status</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {statusOptions.map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <Checkbox
                          id={`status-${status}`}
                          checked={filters.selectedStatuses.includes(status)}
                          onCheckedChange={(checked) => handleStatusChange(status, checked as boolean)}
                        />
                        <Label htmlFor={`status-${status}`} className="text-sm cursor-pointer">
                          {status}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Category</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {categoryOptions.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={filters.selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Model Filter */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Pricing Model</Label>
                  <RadioGroup
                    value={filters.selectedPricingModel}
                    onValueChange={(value) => dispatch(setSelectedPricingModel(value))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="pricing-all" />
                      <Label htmlFor="pricing-all" className="text-sm cursor-pointer">
                        All Pricing Models
                      </Label>
                    </div>
                    {pricingOptions.map((pricing) => (
                      <div key={pricing} className="flex items-center space-x-2">
                        <RadioGroupItem value={pricing} id={`pricing-${pricing}`} />
                        <Label htmlFor={`pricing-${pricing}`} className="text-sm cursor-pointer">
                          {pricing}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
