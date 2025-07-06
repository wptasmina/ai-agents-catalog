"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Agent } from "@/lib/types"
import { Bot, Zap, Archive, DollarSign } from "lucide-react"

interface AgentCardProps {
  agent: Agent
  index: number
}

const statusColors = {
  Active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Beta: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Archived: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
}

const pricingColors = {
  "Free Tier": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  Subscription: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Per-Use": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
}

const getAgentIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "customer service":
      return <Bot className="h-8 w-8 text-blue-600" />
    case "marketing":
      return <Zap className="h-8 w-8 text-purple-600" />
    case "development":
      return <Archive className="h-8 w-8 text-green-600" />
    default:
      return <Bot className="h-8 w-8 text-gray-600" />
  }
}

export function AgentCard({ agent, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {getAgentIcon(agent.category)}
              <div>
                <CardTitle className="text-lg font-semibold line-clamp-1">{agent.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{agent.category}</p>
              </div>
            </div>
            <Badge variant="secondary" className={statusColors[agent.status]}>
              {agent.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <CardDescription className="flex-1 text-sm leading-relaxed mb-4">{agent.description}</CardDescription>
          <div className="flex items-center justify-between pt-2 border-t">
            <Badge variant="outline" className={`${pricingColors[agent.pricingModel]} border-0`}>
              <DollarSign className="h-3 w-3 mr-1" />
              {agent.pricingModel}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
