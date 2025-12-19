"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavLink = {
  label: string
  href: string
}

const LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Committees", href: "/committees" },
  { label: "Secretariat", href: "/secretariat" },
  { label: "Schedule", href: "/schedule" },
  { label: "Sponsor", href: "/sponsor" },
]

function useScrollHide(): { scrolled: boolean; hidden: boolean } {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 2)
      const goingDown = y - lastY.current > 2
      setHidden(y > 80 && goingDown)
      lastY.current = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return { scrolled, hidden }
}

const DesktopLinks = ({
  pathname,
}: {
  pathname: string
}) => {
  const [hovered, setHovered] = useState<string | null>(null)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <ul className="hidden md:flex items-center gap-6 text-sm">
      {LINKS.map((item) => {
        const active = isActive(item.href)
        return (
          <li
            key={item.href}
            onMouseEnter={() => setHovered(item.href)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Link href={item.href} className="transition-colors">
              {item.label}
            </Link>
            <AnimatePresence>
              {(hovered === item.href || active) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-foreground/90"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.5 }}
                />
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

const MobileMenu = ({ pathname }: { pathname: string }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0 },
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="p-4 border-b">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="font-semibold text-lg">
              GCI MUN
            </Link>
          </motion.div>
        </div>
        <motion.ul
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.05, delayChildren: 0.05 }}
          className="flex flex-col p-2"
        >
          {LINKS.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <motion.li key={item.href} variants={itemVariants}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base transition-colors",
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </motion.li>
            )
          })}
        </motion.ul>
      </SheetContent>
    </Sheet>
  )
}

export default function Navbar() {
  const pathname = usePathname() || "/"
  const { scrolled, hidden } = useScrollHide()

  const navClass = useMemo(
    () =>
      cn(
        "sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled ? "border-b shadow-sm" : "border-b border-transparent",
        "border-border"
      ),
    [scrolled]
  )

  return (
    <motion.nav
      className={navClass}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className="font-semibold tracking-tight text-lg">
            GCI MUN
          </Link>
        </motion.div>

        <DesktopLinks pathname={pathname} />
        <MobileMenu pathname={pathname} />
      </div>
    </motion.nav>
  )
}
