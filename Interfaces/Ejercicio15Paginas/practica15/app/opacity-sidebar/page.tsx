"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Settings, Users, BarChart, Mail, ChevronRight } from "lucide-react"

export default function OpacitySidebarPage() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-64 transform bg-white shadow-lg transition-all duration-300 ease-in-out dark:bg-slate-800 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Navegación</h2>
          <button
            onClick={toggleSidebar}
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-4 px-2">
          {[
            { name: "Panel", icon: Home, href: "#" },
            { name: "Analíticas", icon: BarChart, href: "#" },
            { name: "Usuarios", icon: Users, href: "#" },
            { name: "Mensajes", icon: Mail, href: "#" },
            { name: "Configuración", icon: Settings, href: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="mb-1 flex items-center rounded-md px-4 py-3 text-slate-600 transition-opacity hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              <item.icon className="mr-3 h-5 w-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-30 bg-slate-900/50 transition-opacity" onClick={toggleSidebar}></div>}

      {/* Main content */}
      <div className="min-h-screen">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-4 rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Barra Lateral con Opacidad</h1>
          </div>
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
              Barra Lateral con Efecto de Opacidad
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Este ejemplo muestra una barra lateral de navegación con un efecto de opacidad al aparecer. Haz clic en el
              botón de menú en la esquina superior izquierda para alternar la barra lateral.
            </p>
            <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Detalles de Implementación</h3>
              <ul className="list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
                <li>Combina transiciones de traslación y opacidad para un efecto suave</li>
                <li>Utiliza el estado de React para rastrear el estado abierto/cerrado de la barra lateral</li>
                <li>Incluye una superposición con transición de opacidad</li>
                <li>Diseño responsive con animaciones limpias</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

