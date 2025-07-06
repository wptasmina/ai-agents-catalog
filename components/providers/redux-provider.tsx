// File: components/providers/redux-provider.tsx
"use client"

import React from "react"
import { Provider } from "react-redux"
import { store } from "@/lib/store/store"


type Props = {
  children: React.ReactNode
}

export const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>
}

