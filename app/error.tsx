"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bot, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <Bot className="h-16 w-16 text-destructive mx-auto" />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Something went wrong!</h1>
          <p className="text-muted-foreground">We encountered an error while loading the AI agents catalog.</p>
        </div>
        <Button onClick={reset} className="inline-flex items-center space-x-2">
          <RefreshCw className="h-4 w-4" />
          <span>Try again</span>
        </Button>
      </div>
    </div>
  )
}
