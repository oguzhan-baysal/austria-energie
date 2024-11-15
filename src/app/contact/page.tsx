'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight, Sun, Zap, Droplet, ArrowRight, Home as HomeIcon, HandshakeIcon, Phone, Mail, User, Users, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header - diğer sayfalardaki gibi */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src="/Logo-AU-Energie__msi___png.webp"
                alt="Austria Energie Logo"
                width={80}
                height={80}
                className="object-contain hover:scale-105 transition-transform"
              />
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex bg-red-600 text-white px-6 py-2 rounded-full font-semibold items-center"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </motion.button>

            <motion.button
              className="text-gray-600 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Menü içeriği */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg z-30"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'HEIZUNG', icon: Droplet, href: '/heizung' },
                  { title: 'PHOTOVOLTAIK', icon: Sun, href: '/photovoltaik' },
                  { title: 'SANIERUNG', icon: HomeIcon, href: '/sanierung' },
                  { title: 'KOSTENOPTIMIERUNG', icon: Zap, href: '/kostenoptimierung' },
                  { title: 'ABWICKLUNG', icon: HandshakeIcon, href: '/abwicklung' },
                  { title: 'TEAM', icon: Users, href: '/team' },
                  { title: 'BLOG', icon: BookOpen, href: '/blog' },
                  { title: 'CONTACT', icon: Phone, href: '/contact' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link 
                      href={item.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-red-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-6 h-6 text-red-600" />
                      <span className="font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12">
              {/* Sol taraf - Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <h1 className="text-6xl font-bold text-red-600 mb-8">Kontaktformular</h1>
                
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Adresse"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="E-Mail*"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  {/* Checkbox group */}
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox text-red-600 rounded" />
                      <span className="text-gray-800 font-medium">Heizung</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox text-red-600 rounded" />
                      <span className="text-gray-800 font-medium">Photovoltaik</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox text-red-600 rounded" />
                      <span className="text-gray-800 font-medium">Sanierung</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox text-red-600 rounded" />
                      <span className="text-gray-800 font-medium">Kostenoptimierung</span>
                    </label>
                  </div>

                  <div>
                    <textarea
                      placeholder="Ihre Nachricht*"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    ></textarea>
                  </div>

                  <div>
                    <input
                      type="file"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <label className="flex items-start space-x-3">
                    <input type="checkbox" className="form-checkbox text-red-600 rounded mt-1" />
                    <span className="text-sm text-gray-600">
                      Es werden personenbezogene Daten übermittelt und für die auf der Datenschutzseite beschriebenen Zwecke verwendet. *
                    </span>
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold"
                  >
                    SENDEN
                  </motion.button>
                </div>
              </motion.div>

              {/* Sağ taraf - İletişim Bilgileri ve Görsel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 space-y-8"
              >
                <div className="text-xl space-y-4">
                  <p className="text-gray-800 font-medium">Salztorgasse 6/5/16</p>
                  <p className="text-gray-800 font-medium">A-1010 Wien</p>
                  <p className="flex items-center text-red-600">
                    <Phone className="w-5 h-5 mr-2" />
                    +43 1 99 77 11
                  </p>
                  <p className="flex items-center text-red-600">
                    <Mail className="w-5 h-5 mr-2" />
                    office@austriaenergie.at
                  </p>
                </div>

                <Image
                  src="/2__msi___png.webp"
                  alt="Contact Illustration"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-red-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Austria Energie</h3>
                <p className="text-white/80">Empowering a sustainable future through innovative energy solutions.</p>
              </div>
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'Contact', 'Privacy Policy'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-white/80 hover:text-white transition-colors">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h4 className="text-xl font-semibold mb-4">Kontakt</h4>
                <p className="text-white/80 mb-2">1234 Energy Street, Vienna, Austria</p>
                <p className="text-white/80 mb-2">Phone: +43 1 234 5678</p>
                <p className="text-white/80 mb-4">Email: info@austriaenergie.at</p>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a key={social} href="#" className="text-white/80 hover:text-white transition-colors">
                      <span className="sr-only">{social}</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/80">&copy; 2023 Austria Energie. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
} 