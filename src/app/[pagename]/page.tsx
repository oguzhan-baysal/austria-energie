'use client'

import { Menu, X, Sun, Zap, Droplet, Home as HomeIcon, HandshakeIcon, Phone, Mail, User, Users, BookOpen } from 'lucide-react'
import { useParams } from 'next/navigation'

interface PageProps {
  params: {
    pagename: string
  }
}

export default function DynamicPage({ params }: PageProps) {
  const { pagename } = params

  return (
    <div>
      <h1>Dynamic Page: {pagename}</h1>
      {/* Diğer sayfa içeriği buraya gelecek */}
    </div>
  )
}