'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Menu, X, Sun, Zap, Droplet, ArrowRight, Home as HomeIcon, HandshakeIcon, Phone, Mail, User, Users, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const blob = document.getElementById('blob')
      window.onpointermove = event => {
        const { clientX, clientY } = event

        if (blob) {
          blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
          }, { duration: 3000, fill: "forwards" })
        }
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home">
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
                      href={item.href || `#${item.title === 'CONTACT' ? 'contact' : item.title.toLowerCase()}`}
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
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          <div
            id="blob"
            className="absolute w-[500px] h-[500px] bg-red-400 opacity-30 blur-[100px] rounded-full"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          />
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-10 md:mb-0"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                  <span className="text-red-600">AUSTRIA</span> ENERGIE
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Ihre Energieberatung mit Erfahrung. Ihre optimierte Zukunft.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nutzen Sie Ihr Zuhause oder Ihre Betriebsräume energieeffizient und sparen Sie bares Geld!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold flex items-center group"
                  onClick={() => {
                    document.getElementById('mehr')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  MEHR ERFAHREN
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ y: parallaxY }}
                className="md:w-1/2"
              >
                <div className="relative w-full h-[400px] bg-gradient-to-br from-red-400 to-red-600 rounded-2xl overflow-hidden shadow-2xl">
                  <motion.div
                    animate={{
                      y: [-15, 15],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src="/3__msi___png.webp"
                      alt="Energy Image"
                      width={200}
                      height={200}
                      className="object-contain drop-shadow-xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="mehr" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Energieberatung in Österreich</h2>
                <h3 className="text-2xl font-bold text-red-600 mb-6">AUSTRIA Energie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Energie ist ein wertvolles Gut, das bei gedankenloser Nutzung auch teuer werden kann.
                  Wir sind Ihre Ansprechpartner, wenn Sie den Energieverbrauch optimieren wollen,
                  energetische Sanierungen anstehen oder Sie selbst Strom produzieren möchten.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Unser erfahrenes Team berät Sie zu aktuellen Förderungen in Österreich und erstellt
                  für Sie klare Analysen zu Potenzialen der Einsparung, gezielter Sanierung und mehr.
                  Rufen Sie uns an und vereinbaren Sie Ihren Termin, wenn Sie weniger Energie fürs
                  Wohnen oder Arbeiten einsetzen möchten.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <Image
                  src="/undraw_smart_home_re_orvn1.svg"
                  alt="Smart Home Illustration"
                  width={500}
                  height={500}
                  className="object-contain w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Wir begleiten Sie durch alle Bereiche</h2>
                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  Informieren | sanieren | kassieren
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Austria Energie fungiert als Beratungsstelle und bietet umfassende
                  Unterstützung für Haushalte in Österreich, indem ihre Mitarbeiter
                  individuelle Beratungsdienstleistungen für Fördermöglichkeiten im
                  Bereich Energieeffizienz und erneuerbare Energien bereitstellen.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold flex items-center group"
                  onClick={() => {
                    document.getElementById('themenbereiche')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  THEMENBEREICHE
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/undraw_join_re_w1lh.svg"
                    alt="Team Illustration"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-red-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Austria Energie
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
                Wir helfen Österreich
              </h3>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Ihr verlässlicher Partner auf dem Weg zu einer energieeffizienten und
                nachhaltigen Zukunft in Österreich! Wir setzen uns leidenschaftlich
                für eine umweltfreundliche Energieberatung ein, die nicht nur Ihre
                Kosten senkt, sondern auch die Umwelt schützt.
              </p>

              <div className="absolute left-0 right-0 bottom-0 h-20 bg-white/5 transform -skew-y-3" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white overflow-hidden">
          <motion.div
            animate={{
              x: [0, -3600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-36 items-center"
          >
            {/* İlk set logolar */}
            <div className="flex gap-36 items-center">
              {[
                {
                  src: "/Logo_Energie_Beratung_amt-der-no88-landesregierung-gruppe-energie__msi___png.webp",
                  alt: "Energie Beratung"
                },
                {
                  src: "/Wien_logo.svg__msi___png.webp",
                  alt: "Wien Logo"
                },
                {
                  src: "/1200px-Logo_Vorarlberg.svg__msi___png.webp",
                  alt: "Vorarlberg Logo"
                },
                {
                  src: "/LandTirol.svg__msi___png.webp",
                  alt: "Land Tirol"
                },
                {
                  src: "/Logo_Land_Steiermark.svg__msi___png.webp",
                  alt: "Land Steiermark"
                },
                {
                  src: "/oberoesterreich-logo-1100x825_web.webp",
                  alt: "Oberösterreich"
                },
                {
                  src: "/images__msi___png.webp",
                  alt: "Partner Logo"
                },
                {
                  src: "/logo__msi___png.webp",
                  alt: "Partner Logo"
                },
                {
                  src: "/logo-krnten__msi___jpg.webp",
                  alt: "Kärnten Logo"
                }
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-[150px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={80}
                    className="object-contain h-16 w-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* İkinci set logolar (sonsuz döngü için tekrar) */}
            <div className="flex gap-36 items-center">
              {[
                {
                  src: "/Logo_Energie_Beratung_amt-der-no88-landesregierung-gruppe-energie__msi___png.webp",
                  alt: "Energie Beratung"
                },
                {
                  src: "/Wien_logo.svg__msi___png.webp",
                  alt: "Wien Logo"
                },
                {
                  src: "/1200px-Logo_Vorarlberg.svg__msi___png.webp",
                  alt: "Vorarlberg Logo"
                },
                {
                  src: "/LandTirol.svg__msi___png.webp",
                  alt: "Land Tirol"
                },
                {
                  src: "/Logo_Land_Steiermark.svg__msi___png.webp",
                  alt: "Land Steiermark"
                },
                {
                  src: "/oberoesterreich-logo-1100x825_web.webp",
                  alt: "Oberösterreich"
                },
                {
                  src: "/images__msi___png.webp",
                  alt: "Partner Logo"
                },
                {
                  src: "/logo__msi___png.webp",
                  alt: "Partner Logo"
                },
                {
                  src: "/logo-krnten__msi___jpg.webp",
                  alt: "Kärnten Logo"
                }
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-[150px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={80}
                    className="object-contain h-16 w-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="themenbereiche" className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-red-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <Droplet className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Heizung</h3>
                <p className="mb-6">
                  Die optimale Heizung trägt viel zur Energieoptimierung bei. Wir beraten Sie individuell und stellen Ihnen aktuelle Fördermöglichkeiten vor.
                </p>
                <Link href="/heizung">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold inline-flex items-center"
                  >
                    MEHR DAZU
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-red-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <Sun className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Photovoltaik</h3>
                <p className="mb-6">
                  Sie möchten ein Stromkraftwerk auf dem Dach oder den Außenanlagen errichten? Wir informieren Sie zu den Förderungen von Bund und Ländern.
                </p>
                <Link href="/photovoltaik">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold inline-flex items-center"
                  >
                    MEHR DAZU
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-red-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">
                    <HomeIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sanierung</h3>
                  <p className="mb-6">
                    Energetische Sanierungen, barrierefreie Gestaltung und Modernisierungen lassen sich unter gewissen Umständen fördern. Wir beraten Sie.
                  </p>
                  <Link href="/sanierung">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold inline-flex items-center"
                  >
                    MEHR DAZU
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </Link>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-red-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <Zap className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Kostenoptimierung</h3>
                <p className="mb-6">
                  Unser erfahrenes Team ist Ihr Ansprechpartner, wenn es um die Senkung von Energiekosten für Private und Unternehmen geht.
                </p>
                <Link href="/kostenoptimierung">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold inline-flex items-center"
                  >
                    MEHR DAZU
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </Link>
                </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-red-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <HandshakeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Abwicklung</h3>
                <p className="mb-6">
                  Wir bieten eine einfache Abwicklung der individuellen Beratung mit klaren Vorschlägen für die Umsetzung nach Ihren Wünschen. Die Beratung ist unverbindlich und kostenlos.
                </p>
                <Link href="/abwicklung">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold inline-flex items-center"
                  >
                    MEHR DAZU
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </Link>
                </motion.div>
            </div>
          </div>
        </section>

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
      </main>

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
                  <a key={social} href="https://www.facebook.com/austria.energie" className="text-white/80 hover:text-white transition-colors">
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
    </div>
  )
}