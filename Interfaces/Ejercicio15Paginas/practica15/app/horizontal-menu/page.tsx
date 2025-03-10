"use client"

import { useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HorizontalMenuPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  const menuItems = [
    "Inicio",
    "Productos",
    "Servicios",
    "Nosotros",
    "Blog",
    "Recursos",
    "Precios",
    "Contacto",
    "Soporte",
    "FAQ",
    "Socios",
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="flex h-16 items-center justify-between border-b bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Menú Desplazable Horizontal</h1>
        <Link
          href="/"
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <ChevronRight className="mr-1 h-4 w-4" />
          Volver al Inicio
        </Link>
      </header>

      <div className="relative border-b bg-white dark:border-slate-700 dark:bg-slate-800">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-md bg-white/80 p-2 text-slate-600 shadow-md backdrop-blur-sm hover:bg-white hover:text-slate-900 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto py-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex px-12 space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-md bg-white/80 p-2 text-slate-600 shadow-md backdrop-blur-sm hover:bg-white hover:text-slate-900 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Menú Desplazable Horizontal</h2>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Este ejemplo muestra un menú con desplazamiento horizontal para dispositivos táctiles y de escritorio.
            Utiliza los botones de flecha a cada lado para desplazarte por los elementos del menú, o desliza/desplázate
            horizontalmente.
          </p>
          <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
            <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Detalles de Implementación</h3>
            <ul className="list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
              <li>Utiliza referencias de React para controlar el comportamiento de desplazamiento</li>
              <li>Desplazamiento suave con CSS y JavaScript</li>
              <li>Botones de navegación para mejor usabilidad en escritorio</li>
              <li>Barras de desplazamiento ocultas para una interfaz más limpia</li>
              <li>Diseño responsive que funciona en todos los tamaños de pantalla</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

