"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Settings, Users, BarChart, Mail, ChevronRight } from "lucide-react"

export default function IconSidebarPage() {
const [activeItem, setActiveItem] = useState("Panel")
const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Icon Sidebar */}
      <div className="fixed left-0 top-0 z-40 flex h-full w-16 flex-col items-center border-r bg-white py-4 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
          <span className="text-xl font-bold">N</span>
        </div>
        <nav className="flex flex-1 flex-col items-center space-y-4">
          {[
            { name: "Panel", icon: Home, href: "#" },
            { name: "Analíticas", icon: BarChart, href: "#" },
            { name: "Usuarios", icon: Users, href: "#" },
            { name: "Mensajes", icon: Mail, href: "#" },
            { name: "Configuración", icon: Settings, href: "#" },
          ].map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => setActiveItem(item.name)}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                  activeItem === item.name
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
              </button>
              {hoveredItem === item.name && (
                <div className="absolute left-full ml-2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-white dark:bg-slate-700">
                  {item.name}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-16 min-h-screen">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Barra Lateral con Iconos</h1>
          <Link
            href="/"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
          >
            <ChevronRight className="mr-1 h-4 w-4" />
            Volver al Inicio
          </Link>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Navegación con Barra Lateral de Iconos
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Este ejemplo muestra una barra lateral compacta que utiliza iconos con información emergente para la
              navegación. Pasa el cursor sobre cualquier icono para ver su etiqueta, y haz clic para seleccionarlo.
            </p>
            <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Detalles de Implementación</h3>
              <ul className="list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
                <li>Diseño eficiente en espacio utilizando solo iconos</li>
                <li>Información emergente aparece al pasar el cursor para mejor usabilidad</li>
                <li>Indicadores visuales para el estado activo</li>
                <li>Barra lateral de posición fija que permanece visible en todo momento</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

