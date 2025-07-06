"use client"

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Agent, FilterState } from "../types"

interface AgentState {
  agents: Agent[]
  filteredAgents: Agent[]
  filters: FilterState
  isLoading: boolean
}

const initialState: AgentState = {
  agents: [],
  filteredAgents: [],
  filters: {
    searchQuery: "",
    selectedStatuses: [],
    selectedCategories: [],
    selectedPricingModel: "",
  },
  isLoading: false,
}

const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload
      state.filteredAgents = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload
      agentSlice.caseReducers.applyFilters(state)
    },
    setSelectedStatuses: (state, action: PayloadAction<string[]>) => {
      state.filters.selectedStatuses = action.payload
      agentSlice.caseReducers.applyFilters(state)
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.filters.selectedCategories = action.payload
      agentSlice.caseReducers.applyFilters(state)
    },
    setSelectedPricingModel: (state, action: PayloadAction<string>) => {
      state.filters.selectedPricingModel = action.payload
      agentSlice.caseReducers.applyFilters(state)
    },
    clearAllFilters: (state) => {
      state.filters = {
        searchQuery: "",
        selectedStatuses: [],
        selectedCategories: [],
        selectedPricingModel: "",
      }
      state.filteredAgents = state.agents
    },
    applyFilters: (state) => {
      let filtered = state.agents

      // Search filter
      if (state.filters.searchQuery) {
        const query = state.filters.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (agent) => agent.name.toLowerCase().includes(query) || agent.description.toLowerCase().includes(query),
        )
      }

      // Status filter
      if (state.filters.selectedStatuses.length > 0) {
        filtered = filtered.filter((agent) => state.filters.selectedStatuses.includes(agent.status))
      }

      // Category filter
      if (state.filters.selectedCategories.length > 0) {
        filtered = filtered.filter((agent) => state.filters.selectedCategories.includes(agent.category))
      }

      // Pricing model filter
      if (state.filters.selectedPricingModel) {
        filtered = filtered.filter((agent) => agent.pricingModel === state.filters.selectedPricingModel)
      }

      state.filteredAgents = filtered
    },
  },
})

export const {
  setAgents,
  setSearchQuery,
  setSelectedStatuses,
  setSelectedCategories,
  setSelectedPricingModel,
  clearAllFilters,
} = agentSlice.actions

export default agentSlice.reducer
