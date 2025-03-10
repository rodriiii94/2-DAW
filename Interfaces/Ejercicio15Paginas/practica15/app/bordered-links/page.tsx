import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function BorderedLinksPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="flex h-16 items-center justify-between border-b bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Enlaces con Bordes</h1>
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
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Enlaces de Navegación con Efectos de Borde
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">Efectos de Subrayado</h3>

              <div className="flex flex-wrap gap-6">
                <a href="#" className="group relative text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span>Crecer desde el centro</span>
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-600 transition-all group-hover:left-0 group-hover:w-full dark:bg-blue-400"></span>
                </a>

                <a href="#" className="group relative text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span>De izquierda a derecha</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full dark:bg-blue-400"></span>
                </a>

                <a href="#" className="group relative text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span>De derecha a izquierda</span>
                  <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full dark:bg-blue-400"></span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">Efectos de Borde</h3>

              <div className="flex flex-wrap gap-6">
                <a
                  href="#"
                  className="relative px-4 py-2 text-lg font-medium text-slate-700 before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:border-b-2 before:border-blue-600 before:transition-all hover:before:h-full hover:before:border-b-0 hover:before:border-l-2 hover:before:border-r-2 hover:before:border-t-2 dark:text-slate-300 dark:before:border-blue-400"
                >
                  <span className="relative z-10">Contorno</span>
                </a>

                <a href="#" className="group relative px-4 py-2 text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span className="relative z-10">Bordes en esquinas</span>
                  <span className="absolute bottom-0 left-0 h-0 w-0 border-b-2 border-l-2 border-blue-600 transition-all group-hover:h-full group-hover:w-full dark:border-blue-400"></span>
                  <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-t-2 border-blue-600 transition-all group-hover:h-full group-hover:w-full dark:border-blue-400"></span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">Efectos de Relleno</h3>

              <div className="flex flex-wrap gap-6">
                <a href="#" className="group relative px-4 py-2 text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span className="relative z-10 transition-colors group-hover:text-white dark:group-hover:text-slate-900">
                    Rellenar hacia arriba
                  </span>
                  <span className="absolute bottom-0 left-0 h-0 w-full bg-blue-600 transition-all group-hover:h-full dark:bg-blue-400"></span>
                </a>

                <a href="#" className="group relative px-4 py-2 text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span className="relative z-10 transition-colors group-hover:text-white dark:group-hover:text-slate-900">
                    Rellenar hacia la derecha
                  </span>
                  <span className="absolute bottom-0 left-0 h-full w-0 bg-blue-600 transition-all group-hover:w-full dark:bg-blue-400"></span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">Efectos Especiales</h3>

              <div className="flex flex-wrap gap-6">
                <a href="#" className="group relative px-4 py-2 text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span className="relative z-10">Magnético</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:via-blue-400"></span>
                </a>

                <a href="#" className="group relative px-4 py-2 text-lg font-medium text-slate-700 dark:text-slate-300">
                  <span className="relative z-10 transition-transform group-hover:-translate-y-1">Elevación</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-blue-400"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
            <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Detalles de Implementación</h3>
            <ul className="list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
              <li>Utiliza transiciones CSS y pseudo-elementos para animaciones suaves</li>
              <li>Implementa varios efectos de borde y relleno</li>
              <li>Aprovecha la funcionalidad group-hover de Tailwind</li>
              <li>Todos los efectos son accesibles y navegables por teclado</li>
              <li>Compatible con modo oscuro con ajustes de color apropiados</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

