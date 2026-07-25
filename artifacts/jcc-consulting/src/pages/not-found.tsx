import { useEffect } from "react"
import { useLocation } from "wouter"

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  const [location] = useLocation()

  useEffect(() => {
    console.error(
      `404 Error: User attempted to access non-existent route: ${location}`
    )
  }, [location])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-xl max-w-md w-full">
        <AlertCircle className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-3xl font-display font-bold text-white mb-2">404</h1>
        <h2 className="text-xl font-medium text-white/90 mb-6">Página no encontrada</h2>
        <p className="text-muted-foreground mb-8">
          La página que está buscando no existe o ha sido movida.
        </p>
        <Button asChild className="w-full">
          <a href="/">Volver al Inicio</a>
        </Button>
      </div>
    </div>
  )
}
