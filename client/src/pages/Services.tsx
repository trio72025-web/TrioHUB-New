import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot, MessageSquare, Zap, Shield, Headphones, Globe, Server, Database, Lightbulb, Cloud } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Interactive AI Avatars',
      description: '24/7 high-fidelity conversational avatars that greet visitors and book meetings in real-time.',
      price: 'From $499/mo',
    },
    {
      icon: MessageSquare,
      title: 'Custom NLP Chatbots',
      description: 'Intelligence-driven text bots trained on your specific business data to handle FAQs and lead capture.',
      price: 'From $149/mo',
    },
    {
      icon: Zap,
      title: 'End-to-End AI Automation',
      description: 'Workflow optimization using Zapier and Make.com to connect your chat leads directly to your CRM.',
      price: 'From $199/flow',
    },
    {
      icon: Shield,
      title: 'Managed Anti-Virus & Endpoint Security',
      description: 'Enterprise-grade threat detection and real-time monitoring to protect your digital assets.',
      price: 'From $149/mo',
    },
    {
      icon: Headphones,
      title: '24/7 Remote Technical Support',
      description: 'Instant troubleshooting and IT assistance for global teams via secure remote access.',
      price: 'From $89/hour',
    },
    {
      icon: Globe,
      title: 'Custom Website Building',
      description: 'High-performance, SEO-optimized websites built on Framer, Webflow, or WordPress.',
      price: 'From $2,500',
    },
    {
      icon: Server,
      title: 'Managed Web Hosting',
      description: 'Ultra-fast, secure server management with 99.9% uptime guarantees for business-critical sites.',
      price: 'From $199/mo',
    },
    {
      icon: Database,
      title: 'CRM & System Integration',
      description: 'Seamlessly syncing your sales tools (HubSpot, Salesforce, etc.) with your website and AI agents.',
      price: 'Custom Quote',
    },
    {
      icon: Lightbulb,
      title: 'AI Strategy Consulting',
      description: 'Expert guidance on how to implement automation to reduce overhead and increase conversion.',
      price: 'Custom Quote',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Scaling and securing your cloud environments (AWS, Azure, Google Cloud) for global operation.',
      price: 'Custom Quote',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-violet-100/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10" />

        <div className="container text-center space-y-6 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white group-hover:glow-purple transition-all">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{service.description}</p>

                  {/* Price */}
                  <div className="pt-4 border-t border-purple-200/50">
                    <p className="text-sm font-semibold gradient-text">{service.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-20 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Why Choose Our Services?</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We deliver more than just solutions—we deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Expert Team', desc: 'Seasoned professionals with years of industry experience' },
              { title: 'Custom Solutions', desc: 'Tailored to your specific business needs and goals' },
              { title: '24/7 Support', desc: 'Round-the-clock assistance across all time zones' },
              { title: 'Proven Results', desc: '500+ satisfied clients worldwide' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-purple-dark text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Let's discuss which services are right for your business and create a custom solution.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-white text-purple-600 font-semibold hover:glow-purple transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
