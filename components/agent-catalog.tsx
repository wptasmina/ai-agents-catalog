"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { setAgents } from "@/lib/store/agentSlice"
import { AgentCard } from "./agent-card"
import { SearchFilters } from "./search-filters"
import type { Agent } from "@/lib/types"
import { Bot } from "lucide-react"

interface AgentCatalogProps {
  initialAgents: Agent[]
}

export function AgentCatalog({ initialAgents }: AgentCatalogProps) {
  const dispatch = useAppDispatch()
  const { filteredAgents } = useAppSelector((state) => state.agents)

  useEffect(() => {
    dispatch(setAgents(initialAgents))
  }, [dispatch, initialAgents])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">ArkLab AI Agents Catalog</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover and explore our comprehensive catalog of AI agents designed to enhance your business operations
            across various domains.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Search and Filters */}
          <SearchFilters />

          {/* Agent Grid */}
          <AnimatePresence mode="wait">
            {filteredAgents.length > 0 ? (
              <motion.div
                key="agent-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredAgents.map((agent, index) => (
                  <AgentCard key={agent.id} agent={agent} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No agents found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or clearing some filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
