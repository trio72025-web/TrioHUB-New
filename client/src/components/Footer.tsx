import { Link } from 'wouter';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-purple-dark py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-black">
                T
              </div>
              <span className="font-bold text-lg text-black">TrioHUB</span>
            </div>
            <p className="text-black text-sm">
              Innovative tech solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-black hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black hover:text-purple-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-black hover:text-purple-600 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-black hover:text-purple-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-purple-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@triohub.site" className="text-black hover:text-purple-600 transition-colors">
                  Email Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:info@triohub.site" className="flex items-center gap-2 text-black hover:text-purple-600 transition-colors text-sm">
                <Mail size={16} />
                info@triohub.site
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-black hover:text-purple-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-black hover:text-purple-600 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-black hover:text-purple-600 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black/60">
            <p>&copy; {currentYear} TrioHUB. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-black hover:text-purple-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-black hover:text-purple-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
