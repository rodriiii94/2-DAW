import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Ejemplos de Navegación</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Una colección de diferentes técnicas de navegación y estilos de menú implementados con Next.js, Tailwind CSS
            y JavaScript.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Barra Lateral Animada",
              description: "Una barra lateral de navegación con animaciones suaves al abrir y cerrar.",
              href: "/animated-sidebar",
            },
            {
              title: "Barra Lateral con Opacidad",
              description: "Una barra lateral que aparece con un efecto de opacidad.",
              href: "/opacity-sidebar",
            },
            {
              title: "Botones de Navegación",
              description: "Barra lateral con botones interactivos y efectos al pasar el cursor.",
              href: "/navigation-buttons",
            },
            {
              title: "Barra Lateral con Iconos",
              description:
                "Una barra lateral compacta que utiliza iconos con información emergente para la navegación.",
              href: "/icon-sidebar",
            },
            {
              title: "Menú Desplazable Horizontal",
              description: "Un menú con desplazamiento horizontal para dispositivos táctiles y de escritorio.",
              href: "/horizontal-menu",
            },
            {
              title: "Menú Desplazable Vertical",
              description: "Un menú con desplazamiento vertical con secciones y categorías.",
              href: "/vertical-menu",
            },
            {
              title: "Enlaces con Bordes",
              description: "Enlaces de navegación con animaciones creativas de bordes y efectos.",
              href: "/bordered-links",
            },
            {
              title: "Ocultar Menú al Desplazarse",
              description:
                "Una barra de navegación que se oculta al desplazarse hacia abajo y aparece al desplazarse hacia arriba.",
              href: "/hide-on-scroll",
            },
            {
              title: "Reducir Menú al Desplazarse",
              description: "Una barra de navegación que se reduce de tamaño al desplazarse hacia abajo en la página.",
              href: "/shrink-on-scroll",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mb-4 flex-1 text-slate-600 dark:text-slate-300">{item.description}</p>
              <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400">
                <span className="mr-2">Ver ejemplo</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

