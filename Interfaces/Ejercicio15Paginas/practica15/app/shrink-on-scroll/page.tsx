"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Search, Bell, User } from "lucide-react"

export default function ShrinkOnScrollPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header that shrinks on scroll */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b bg-white shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 ${
          isScrolled ? "h-14" : "h-20"
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <div className="flex items-center">
            <h1
              className={`font-bold text-slate-900 transition-all dark:text-white ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              Reducir Menú al Desplazarse
            </h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Inicio", "Productos", "Servicios", "Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`text-slate-600 transition-all hover:text-slate-900 dark:text-slate-300 dark:hover:text-white ${
                      isScrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              className={`rounded-full p-2 text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className={`rounded-full p-2 text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              className={`rounded-full p-2 text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Back to home link (fixed position) */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="/"
          className="flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-md hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <ChevronRight className="mr-1 h-4 w-4" />
          Volver al Inicio
        </Link>
      </div>

      {/* Content with enough height to enable scrolling */}
      <main className="container mx-auto px-4 pt-28">
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Reducir Menú al Desplazarse</h2>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Este ejemplo muestra una barra de navegación que se reduce de tamaño al desplazarse hacia abajo en la
            página. Intenta desplazarte hacia abajo en esta página para ver el efecto.
          </p>
          <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
            <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Detalles de Implementación</h3>
            <ul className="list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
              <li>Utiliza los hooks de estado y efecto de React para rastrear la posición de desplazamiento</li>
              <li>Transiciones CSS suaves para redimensionar la navegación</li>
              <li>Ajusta tamaños de fuente y escalas de elementos según la posición de desplazamiento</li>
              <li>Mantiene la visibilidad de la navegación mientras reduce su espacio</li>
              <li>Diseño totalmente responsive que funciona en todos los tamaños de pantalla</li>
            </ul>
          </div>
        </div>

        {/* Additional content to enable scrolling */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="mb-6 mt-6 rounded-lg border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Sección {index + 1}</h3>
            <p className="mb-3 text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        ))}
      </main>
    </div>
  )
}

