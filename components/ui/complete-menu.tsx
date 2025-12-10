"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

export default function NavMenu() {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-linear-to-r from-blue-400 via-blue-400 to-blue-600">
      <div className="container mx-auto px-4 py-4">
        <NavigationMenu className="max-w-none justify-between flex-wrap">
          <NavigationMenuList className="flex-wrap gap-6 md:gap-10">
            <NavigationMenuItem>
              <a href="/" className="flex items-center cursor-pointer transition-transform duration-200 hover:scale-125">
              <h2 className="bitcount-prop-single-ocebots text-white text-5xl inline-block">9033</h2>
                <Avatar className="h-12 w-12 md:h-14 md:w-14 ml-2">
                  <AvatarImage src="/ocebot-no-gear-stroke.png"></AvatarImage>'
                  <AvatarFallback className="bg-transparent"></AvatarFallback>
                </Avatar>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem className="focus:bg-blue-800">
              <NavigationMenuTrigger className="text-base md:text-lg h-12 bg-blue-300 hover:bg-[#f0e9d2] data-[state=open]:bg-[#f0e9d2] data-[state=open]:hover:bg-[#f0e9d2]">About</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-blue-300">
                <ul className="grid gap-3 p-4 sm:w-[250px] md:w-[300px] md:grid-cols-1 lg:w-[350px]">
                  <ListItem key="About Us" title="About Us" href="/about"> About the Ocebots </ListItem>
                  <ListItem key="Donate" title="Donate" href="/donate"> Donate to the Ocebots </ListItem>
                  <ListItem key="Contact" title="Contact" href="/contact"> Contact the Ocebots </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base md:text-lg h-12 bg-blue-300 hover:bg-[#f0e9d2] data-[state=open]:bg-[#f0e9d2] data-[state=open]:hover:bg-[#f0e9d2]">Robots</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-blue-300">
                <ul className="grid gap-3 p-4 sm:w-[250px] md:w-[300px] md:grid-cols-1 lg:w-[350px]">
                  <ListItem key="Bunnybots 2025: Félicette" title="Bunnybots 2025: Félicette" href="/bbots2025"></ListItem>
                  <ListItem key="Reefscape: Stuart" title="Reefscape: Stuart" href="/frc2025"></ListItem>
                  <ListItem key="Crescendo: Stainless G" title="Crescendo: Stainless G" href="/frc2024"></ListItem>
                  <ListItem key="Charged Up: Tim" title="Charged Up: Tim" href="/frc2023"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="bg-blue-300 hover:bg-[#f0e9d2]" asChild>
                <Link href="/first" className="font-medium text-base md:text-lg inline-flex items-center h-12">What is First?</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="bg-blue-300 hover:bg-[#f0e9d2]" asChild>
                <Link href="/outreach" className="font-medium text-base md:text-lg inline-flex items-center h-12">Outreach</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
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
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-200 hover:text-blue-900 focus:bg-blue-200 focus:text-blue-900">
          <div className="text-base leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}