"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

export default function NavMenu() {
  const isMobile = useIsMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null)

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false)
        setActiveSubmenu(null)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  return (
    <nav className="w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
              aria-label="Ocebots Home"
            >
              <h2 className="outfit-heading text-white text-4xl md:text-5xl inline-block">9033</h2>
              <Avatar className="h-10 w-10 md:h-14 md:w-14 ml-2">
                 <Image
                   src="/ocebot-no-gear-stroke.svg"
                   alt="Ocebots Logo"
                   fill
                   className="object-cover"
                   priority
                   sizes="56px" // h-14/w-14 ~ 56px
                 />
                 <AvatarFallback className="bg-transparent">OB</AvatarFallback>
               </Avatar>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2 lg:gap-3">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base lg:text-lg h-10 lg:h-12 px-4 lg:px-5 bg-transparent text-white hover:bg-white/10 data-[state=open]:bg-white/20 transition-colors duration-200 border-0">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-blue-500">
                    <ul className="grid gap-2 p-3 w-[280px] lg:w-[320px]">
                      <DesktopListItem title="About Us" href="/about" />
                      <DesktopListItem title="Donate" href="/donate" />
                      <DesktopListItem title="Contact" href="/contact" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base lg:text-lg h-10 lg:h-12 px-4 lg:px-5 bg-transparent text-white hover:bg-white/10 data-[state=open]:bg-white/20 transition-colors duration-200 border-0">
                    Robots
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-blue-500">
                    <ul className="grid gap-2 p-3 w-[280px] lg:w-[320px]">
                      <DesktopListItem title="Bunnybots 2025: Félicette" href="/bbots2025" />
                      <DesktopListItem title="Reefscape: Stuart" href="/frc2025" />
                      <DesktopListItem title="Crescendo: Stainless G" href="/frc2024" />
                      <DesktopListItem title="Charged Up: Tim" href="/frc2023" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/first" className="font-medium text-base lg:text-lg text-white inline-flex items-center h-10 lg:h-12 px-4 lg:px-5 rounded-md hover:bg-white/10 transition-colors duration-200">
                      What is FIRST?
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/outreach" className="font-medium text-base lg:text-lg text-white inline-flex items-center h-10 lg:h-12 px-4 lg:px-5 rounded-md hover:bg-white/10 transition-colors duration-200">
                      Outreach
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`mobile-menu-container md:hidden absolute left-0 right-0 top-full bg-blue-400 shadow-2xl transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? 'max-h-[calc(100vh-80px)] opacity-100'
                : 'max-h-0 opacity-0 pointer-events-none'
            } overflow-y-auto`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {/* About Menu */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => toggleSubmenu('about')}
                    className="w-full text-left px-4 py-3 text-white font-medium text-lg hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center justify-between"
                  >
                    About
                    <span className={`transform transition-transform duration-200 ${activeSubmenu === 'about' ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeSubmenu === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pt-2 space-y-1">
                      <MobileMenuItem href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileMenuItem>
                      <MobileMenuItem href="/donate" onClick={() => setMobileMenuOpen(false)}>Donate</MobileMenuItem>
                      <MobileMenuItem href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileMenuItem>
                    </div>
                  </div>
                </div>

                {/* Robots Menu */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => toggleSubmenu('robots')}
                    className="w-full text-left px-4 py-3 text-white font-medium text-lg hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center justify-between"
                  >
                    Robots
                    <span className={`transform transition-transform duration-200 ${activeSubmenu === 'robots' ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeSubmenu === 'robots' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pt-2 space-y-1">
                      <MobileMenuItem href="/bbots2025" onClick={() => setMobileMenuOpen(false)}>Bunnybots 2025: Félicette</MobileMenuItem>
                      <MobileMenuItem href="/frc2025" onClick={() => setMobileMenuOpen(false)}>Reefscape: Stuart</MobileMenuItem>
                      <MobileMenuItem href="/frc2024" onClick={() => setMobileMenuOpen(false)}>Crescendo: Stainless G</MobileMenuItem>
                      <MobileMenuItem href="/frc2023" onClick={() => setMobileMenuOpen(false)}>Charged Up: Tim</MobileMenuItem>
                    </div>
                  </div>
                </div>

                {/* Direct Links */}
                <MobileMenuItem href="/first" onClick={() => setMobileMenuOpen(false)}>What is FIRST?</MobileMenuItem>
                <MobileMenuItem href="/outreach" onClick={() => setMobileMenuOpen(false)}>Outreach</MobileMenuItem>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function DesktopListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <Link
        href={href}
        className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
      >
        {title}
      </Link>
    </li>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-blue-200 hover:text-blue-900 focus:bg-blue-200 focus:text-blue-900 focus:ring-2 focus:ring-blue-500"
        >
          <div className="text-base leading-none font-semibold">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function MobileMenuItem({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
    >
      {children}
    </Link>
  )
}
