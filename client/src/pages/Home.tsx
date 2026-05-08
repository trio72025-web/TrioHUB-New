import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Sparkles, Zap, Shield, Headphones, Globe, Code } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Avatars',
      description: '24/7 conversational AI that engages visitors in real-time',
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Streamline workflows and reduce manual overhead',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Protect your business with advanced cybersecurity',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Instant technical assistance for global teams',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serve clients across all time zones seamlessly',
    },
    {
      icon: Code,
      title: 'Custom Solutions',
      description: 'Tailored tech solutions for your unique needs',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 flex-1">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-violet-100/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl -z-10" />

        <div className="container flex flex-col items-center text-center gap-8 animate-slide-up">
          {/* Logo with Glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl blur-2xl opacity-50 animate-glow-pulse" />
            <div className="relative w-20 h-20 rounded-2xl gradient-purple flex items-center justify-center text-white">
              <span className="text-4xl font-bold">T</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Innovative Tech Solutions</span>
              <br />
              <span className="text-foreground">for Modern Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              TrioHUB delivers cutting-edge AI, automation, and cybersecurity solutions to help your business thrive in the digital age.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/services"
              className="px-8 py-3 rounded-lg gradient-purple text-white font-semibold hover:glow-purple transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">500+</div>
              <p className="text-sm text-foreground/60">Companies Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">2022</div>
              <p className="text-sm text-foreground/60">Founded</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <p className="text-sm text-foreground/60">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Why Choose TrioHUB?</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver solutions that transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white group-hover:glow-purple transition-all">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-purple-dark">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Let's discuss how TrioHUB can help you achieve your goals with innovative tech solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-white text-purple-600 font-semibold hover:glow-purple transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
