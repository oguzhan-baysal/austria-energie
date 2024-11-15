'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight, Sun, Zap, Droplet, ArrowRight, Home as HomeIcon, HandshakeIcon, Phone, Mail, User, Users, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Sanierung() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
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
                      href={item.href}  // Her zaman tam URL kullanıyoruz
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
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-7xl font-bold text-red-600">Abwicklung</h1>
                  <div className="bg-red-600 p-6 rounded-xl shadow-lg">
                    <Image
                      src="/3__msi___png (2).webp"
                      alt="Sanierung Icon"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-2xl text-gray-700 mb-8">
                  Schnelle und flexible Abwicklung für mehr Energieeffizienz.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center gap-12"
              >
                <div className="md:w-1/2">
                  <Image
                    src="/undraw_business_deal_re_up4u.svg"
                    alt="Sanierung Illustration"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Abwicklung bei AUSTRIA Energie
                  </h2>
                  <h3 className="text-xl font-bold text-red-600 mb-6">
                    IHRE OPTIMIERTE ZUKUNFT
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Sie möchten Energie effizienter nutzen? Wir beraten Sie zu Ihren Möglichkeiten und erstellen einen Umsetzungsplan für Sie. Ob Sie Ihr Nutzungsverhalten ändern möchten, den Energieverbrauch durch die Implementierung eines Smart Home-Systems optimieren wollen oder eine Sanierung ansteht - AUSTRIA Energie ist Ihr zuverlässiger Partner.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Kırmızı Section */}
        <section className="py-20 bg-[#8B1D1D]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl mx-auto text-white"
            >
              <h2 className="text-5xl font-bold mb-12 text-center">
                Ihre Schritte zu einer energieeffizienteren Zukunft:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1. Adım */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-red-700/30 rounded-xl p-8 backdrop-blur-sm hover:bg-red-700/40 transition-all"
                >
                  <div className="text-6xl font-bold mb-6 text-center">1</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Kontaktaufnahme</h3>
                  <p className="text-lg text-center">
                    Die unkomplizierteste Art der Kontaktaufnahme besteht darin, einfach das Kontaktformular auszufüllen.
                  </p>
                </motion.div>

                {/* 2. Adım */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-red-700/30 rounded-xl p-8 backdrop-blur-sm hover:bg-red-700/40 transition-all"
                >
                  <div className="text-6xl font-bold mb-6 text-center">2</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Telefonat</h3>
                  <p className="text-lg text-center">
                    Die telefonische Beratung geht speziell auf Ihre individuellen Bedürfnisse und Fragen ein.
                  </p>
                </motion.div>

                {/* 3. Adım */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-red-700/30 rounded-xl p-8 backdrop-blur-sm hover:bg-red-700/40 transition-all"
                >
                  <div className="text-6xl font-bold mb-6 text-center">3</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Beratung</h3>
                  <p className="text-lg text-center">
                    Ein Fachmann bietet technische Auskünfte an und bereitet eine Analyse Ihrer Immobilie und Möglichkeiten vor.
                  </p>
                </motion.div>

                {/* 4. Adım */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-red-700/30 rounded-xl p-8 backdrop-blur-sm hover:bg-red-700/40 transition-all"
                >
                  <div className="text-6xl font-bold mb-6 text-center">4</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Informieren</h3>
                  <p className="text-lg text-center">
                    Austria Energie unterstützt Sie dabei, sämtliche Ihnen zur Verfügung stehenden Fördermittel in Anspruch zu nehmen.
                  </p>
                </motion.div>

                {/* 5. Adım */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-red-700/30 rounded-xl p-8 backdrop-blur-sm hover:bg-red-700/40 transition-all"
                >
                  <div className="text-6xl font-bold mb-6 text-center">5</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Sanieren</h3>
                  <p className="text-lg text-center">
                    Ihre Vorstellungen werden von uns umgesetzt, sodass Sie Zeit und Nerven sparen können.
                  </p>
                </motion.div>

                {/* 6. Adım */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-red-700/30 rounded-xl p-8 backdrop-blur-sm hover:bg-red-700/40 transition-all"
                >
                  <div className="text-6xl font-bold mb-6 text-center">6</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Kassieren</h3>
                  <p className="text-lg text-center">
                    Die Höhe Ihrer Einsparungen hängt davon ab, für wie viele Bereiche Sie sich entschieden haben.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <Image
                  src="/Logo-AU-Energie__msi___png.webp"
                  alt="Austria Energie Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Lassen Sie sich jetzt beraten
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-8">
                  IHRE OPTIMIERTE ZUKUNFT
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  Kontaktieren Sie uns telefonisch oder online aus ganz Österreich.
                  Wir freuen uns darauf, Sie persönlich zu beraten und Sie auf dem
                  Weg zu mehr Energieeffizienz zu begleiten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="tel:+431997711"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-900 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +43 1 99 77 11
                  </motion.a>
                  <motion.a
                    href="mailto:info@austriaenergie.at"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    E-MAIL
                  </motion.a>
                </div>
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
                <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
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