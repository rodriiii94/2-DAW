"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Search, Bell, User } from "lucide-react"

export default function HideOnScrollPage() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up or at the top
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header that hides on scroll down */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b bg-white shadow-sm transition-transform duration-300 dark:border-slate-700 dark:bg-slate-800 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Ocultar Menú al Desplazarse</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Inicio", "Productos", "Servicios", "Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white">
              <Bell className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white">
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
      <main className="container mx-auto px-4 pt-24">
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Ocultar Menú al Desplazarse</h2>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Este ejemplo muestra una barra de navegación que se oculta al desplazarse hacia abajo y aparece al
            desplazarse hacia arriba. Intenta desplazarte hacia abajo en esta página para ver el efecto.
          </p>
          <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
            <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Detalles de Implementación</h3>
            <ul className="list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
              <li>Utiliza los hooks de estado y efecto de React para rastrear la posición de desplazamiento</li>
              <li>Transiciones CSS suaves para mostrar/ocultar la navegación</li>
              <li>Muestra la navegación al desplazarse hacia arriba o en la parte superior de la página</li>
              <li>Oculta la navegación al desplazarse hacia abajo</li>
              <li>Diseño totalmente responsive que funciona en todos los tamaños de pantalla</li>
            </ul>
          </div>
        </div>

        {/* Additional content to enable scrolling */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="mt-6 rounded-lg border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
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

