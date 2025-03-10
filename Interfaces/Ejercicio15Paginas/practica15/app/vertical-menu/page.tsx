"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react"

export default function VerticalMenuPage() {
  const [openSections, setOpenSections] = useState<string[]>(["Products"])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const menuSections = [
    {
      title: "Productos",
      items: ["Portátiles", "Sobremesas", "Tabletas", "Teléfonos", "Accesorios"],
    },
    {
      title: "Servicios",
      items: ["Soluciones en la Nube", "Consultoría", "Soporte", "Capacitación", "Mantenimiento"],
    },
    {
      title: "Recursos",
      items: ["Documentación", "Tutoriales", "Guías", "Referencia API", "Ejemplos"],
    },
    {
      title: "Empresa",
      items: ["Sobre Nosotros", "Carreras", "Prensa", "Contacto", "Socios"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="flex h-16 items-center justify-between border-b bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Menú Deplazable Horizontal</h1>
        <Link
          href="/"
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <ChevronRight className="mr-1 h-4 w-4" />
          Volver a inicio
        </Link>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">
        <aside className="w-64 border-r bg-white dark:border-slate-700 dark:bg-slate-800">
          <div className="h-full overflow-y-auto p-4">
            {menuSections.map((section) => (
              <div key={section.title} className="mb-2">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {section.title}
                  {openSections.includes(section.title) ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {openSections.includes(section.title) && (
                  <div className="ml-2 mt-1 space-y-1 border-l pl-3 dark:border-slate-600">
                    {section.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Menú Desplazable Vertical con Secciones
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Este ejemplo demuestra un menú desplazable verticalmente con secciones y categorías expandibles. Haz clic en un encabezado de sección para expandirlo o colapsarlo.
            </p>
            <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Implementation Details</h3>
              <ul className="list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
                <li>Usa el estado de React para rastrear qué secciones están expandiéndose</li>
                <li>Animaciones suaves para expandir y colapsar secciones</li>
                <li>Estructura de menú anidada con jerarquía visual clara</li>
                <li>Contenedor desplazable para manejar menús grandes</li>
                <li>Diseño responsivo que se adapta a diferentes tamaños de pantalla</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

