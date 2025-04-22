"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-green transition-colors"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col pt-20 px-6">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-gray-700 hover:text-green transition-colors"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>

          <div className="flex items-center justify-center mb-8">
            <Image src="/mascote.png" alt="Dreams Tech Logo" width={60} height={60} className="w-15 h-15" />
            <span className="text-2xl font-bold text-purple ml-3">Dreams Tech</span>
          </div>

          <nav className="flex flex-col gap-6 text-center">
            <Link
              href="#about"
              onClick={closeMenu}
              className="text-xl text-gray-700 hover:text-green transition-colors py-2"
            >
              Sobre
            </Link>
            <Link
              href="#courses"
              onClick={closeMenu}
              className="text-xl text-gray-700 hover:text-green transition-colors py-2"
            >
              Cursos
            </Link>
            <Link
              href="#testimonials"
              onClick={closeMenu}
              className="text-xl text-gray-700 hover:text-green transition-colors py-2"
            >
              Depoimentos
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="text-xl text-gray-700 hover:text-green transition-colors py-2"
            >
              Contato
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="bg-green text-white px-6 py-3 rounded-full hover:bg-green/90 transition-colors mt-4"
            >
              Agendar Visita
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
