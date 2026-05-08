import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
    // Close mobile menu
    setIsOpen(false);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-glow">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" onClick={handleNavClick} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center text-white font-bold text-sm group-hover:glow-purple transition-all">
            T
          </div>
          <span className="font-bold text-lg gradient-text hidden sm:inline">TrioHUB</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          onClick={handleNavClick}
          className="hidden md:inline-block px-6 py-2 rounded-lg gradient-purple text-white font-medium text-sm hover:glow-purple transition-all duration-300"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-glow bg-background/98 backdrop-blur-sm animate-slide-down">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg gradient-purple text-white font-medium text-sm text-center"
              onClick={handleNavClick}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
