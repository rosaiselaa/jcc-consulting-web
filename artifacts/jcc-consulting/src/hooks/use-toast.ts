import { useState, useEffect } from "react"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

export interface ToastActionType {
  type: string
  toast: ToastProps
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ToastState = {
  toasts: ToastProps[]
}

const listeners: Array<(state: ToastState) => void> = []

let memoryState: ToastState = { toasts: [] }

function dispatch(action: ToastActionType) {
  memoryState = {
    ...memoryState,
    toasts:
      action.type === "ADD_TOAST"
        ? [action.toast, ...memoryState.toasts].slice(0, 5)
        : action.type === "REMOVE_TOAST"
        ? memoryState.toasts.filter((t) => t.id !== action.toast.id)
        : memoryState.toasts,
  }

  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

export function toast({ ...props }: Omit<ToastProps, "id">) {
  const id = genId()

  const addToast = () =>
    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
      },
    })

  const dismiss = () => dispatch({ type: "REMOVE_TOAST", toast: { id } })

  addToast()

  setTimeout(() => {
    dismiss()
  }, 5000)

  return {
    id,
    dismiss,
  }
}

export function useToast() {
  const [state, setState] = useState<ToastState>(memoryState)

  useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
  }
}
