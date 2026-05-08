import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with technology.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Our 24/7 support ensures your business never stops.',
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
            <span className="gradient-text">About TrioHUB</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A fast-paced technology solutions provider dedicated to helping businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Founded in 2022, TrioHUB emerged from a vision to democratize access to enterprise-grade technology solutions. We recognized that businesses of all sizes needed innovative, reliable, and affordable tech solutions to compete in the modern marketplace.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Today, we proudly serve over 500+ companies worldwide, delivering cutting-edge AI, automation, and cybersecurity solutions that transform how businesses operate.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Milestones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">2022: TrioHUB Founded with focus on AI and automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">2023: Expanded to 200+ clients globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">2024: Reached 500+ companies served milestone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">Present: Continuing innovation and global expansion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl blur-2xl opacity-30" />
              <div className="relative p-8 rounded-2xl border-glow bg-white/80 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-32 rounded-lg gradient-purple opacity-20" />
                  <div className="h-24 rounded-lg gradient-purple opacity-15" />
                  <div className="h-20 rounded-lg gradient-purple opacity-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 animate-slide-up">
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Our Mission</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                To empower businesses of all sizes with innovative, accessible, and reliable technology solutions that drive growth, efficiency, and success in the digital economy.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Our Vision</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the leading global provider of AI-powered automation and cybersecurity solutions, trusted by businesses worldwide to transform their operations and achieve extraordinary results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Core Values</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg gradient-purple flex items-center justify-center text-white group-hover:glow-purple transition-all">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-purple-dark text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Makes TrioHUB Unique
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Global Expertise</h3>
              <p className="text-white/80">
                Operating across all time zones with 24/7 support for clients worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Proven Track Record</h3>
              <p className="text-white/80">
                500+ companies trust us with their most critical technology needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cutting-Edge Technology</h3>
              <p className="text-white/80">
                We stay ahead of the curve with the latest AI, automation, and security innovations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Flexible Solutions</h3>
              <p className="text-white/80">
                Custom solutions tailored to your specific business needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
