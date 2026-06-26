"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { name: "Landscape Design", href: "/services/landscape-design" },
  { name: "Retaining Walls, Fencing & Screens", href: "/services/retaining-walls" },
  { name: "Garden Maintenance", href: "/services/garden-maintenance" },
  { name: "Lawns & Turf", href: "/services/lawns-turf" },
  { name: "Decking", href: "/services/decking" },
  { name: "Paving & Hardscaping", href: "/services/paving-hardscaping" },
  { name: "Planting & Soft Landscaping", href: "/services/planting-soft-landscaping" },
  { name: "Commercial & Body Corporate", href: "/services/commercial" },
  { name: "Multi-Unit & Commercial Developments", href: "/services/multi-unit-developments" },
];

const navLinks = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Our Work", href: "/our-work" },
  { name: "About", href: "/about" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Work With Us", href: "/work-with-us" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const navBg = isHome
    ? scrolled
      ? "bg-[#1B4332] shadow-lg"
      : "bg-transparent"
    : "bg-[#1B4332] shadow-lg";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Greenworx Landscaping"
              width={160}
              height={60}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button className="text-white/90 hover:text-white text-sm font-medium tracking-wide flex items-center gap-1 transition-colors py-2">
                    {link.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-sm overflow-hidden z-50"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-3 text-sm text-[#1B4332] hover:bg-[#F8F7F4] hover:text-[#5E9A30] transition-colors border-b border-gray-100 last:border-0"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="bg-[#7DC143] hover:bg-[#5E9A30] text-white text-sm font-semibold px-6 py-3 rounded-sm transition-colors tracking-wide uppercase"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F2B1E] border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            <div className="py-2">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-2 pl-3 text-white/80 hover:text-[#7DC143] text-sm transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            {navLinks.filter((l) => !l.hasDropdown).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-white/90 hover:text-[#7DC143] font-medium transition-colors border-t border-white/10"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block text-center bg-[#7DC143] text-white font-semibold py-4 rounded-sm tracking-wide uppercase text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
