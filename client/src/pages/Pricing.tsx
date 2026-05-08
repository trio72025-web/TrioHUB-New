import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Link } from 'wouter';

export default function Pricing() {
  const monthlyPlans = [
    {
      name: 'Starter Chatbot',
      price: '$149',
      period: '/month',
      description: 'Small businesses looking to automate FAQs',
      features: [
        'Basic NLP Chatbot',
        'FAQ automation',
        'Email support',
        'Up to 1,000 conversations/month',
      ],
    },
    {
      name: 'Interactive Avatar Pro',
      price: '$499',
      period: '/month',
      description: 'Mid-market companies wanting a "face" for their brand',
      features: [
        'Interactive AI Avatar',
        'Real-time meeting booking',
        'Lead capture',
        'Calendly integration',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Maintenance Tier 1',
      price: '$250',
      period: '/month',
      description: 'Managing Data, updates and Performances of Basic Interactive AI, Chatbot',
      features: [
        'Data management',
        'Performance monitoring',
        'Regular updates',
        'Basic analytics',
        'Email support',
      ],
    },
    {
      name: 'Maintenance Tier 2',
      price: '$750',
      period: '/month',
      description: 'Premium Interactive AI, Chatbot, CRM, Intake, Reports and Analysis',
      features: [
        'All Tier 1 features',
        'CRM integration',
        'Advanced analytics',
        'Custom reporting',
        'Priority 24/7 support',
        'Intake form automation',
      ],
    },
    {
      name: 'Endpoint Security',
      price: '$149',
      period: '/month (per user)',
      description: 'Companies requiring robust anti-virus protection',
      features: [
        'Advanced threat detection',
        'Real-time monitoring',
        'Endpoint management',
        'Security reports',
        '24/7 monitoring',
      ],
    },
    {
      name: 'Remote Technical Support',
      price: '$149',
      period: '/month (Unlimited)',
      description: 'Unlimited Support for 3 devices (PC or Mobile)',
      features: [
        'Unlimited incidents',
        '3 device coverage',
        'Priority response',
        'Remote assistance',
        'Issue tracking',
      ],
    },
    {
      name: 'Web Management Premium',
      price: '$199',
      period: '/month',
      description: 'Monthly updates, security patches, and SEO maintenance',
      features: [
        'Monthly updates',
        'Security patches',
        'SEO optimization',
        'Performance monitoring',
        'Backup management',
      ],
    },
  ];

  const oneTimeFees = [
    {
      name: 'AI Setup Fee - Basic',
      price: '$1,500 - $2,500',
      description: 'Standard high-quality avatar setup',
      features: [
        'Standard high-quality avatar',
        'Knowledge base setup (5-10 documents)',
        'Lead capture (Email/Phone)',
        'Basic Calendly integration',
      ],
    },
    {
      name: 'AI Setup Fee - Premium',
      price: '$5,000 - $10,000',
      description: 'Custom Digital Twin with advanced integrations',
      features: [
        'Custom "Digital Twin" avatar',
        'Complex API integrations',
        'Advanced multi-turn logic',
        'CRM integration (HubSpot, Salesforce)',
        'Custom training data',
      ],
    },
    {
      name: 'System Automation',
      price: 'From $199/flow',
      description: 'Depends on complexity of automations',
      features: [
        'Zapier/Make.com integration',
        'CRM sync',
        'Lead routing',
        'Custom workflows',
      ],
    },
    {
      name: 'Remote Technical Support',
      price: '$89/hour',
      description: 'Mostly resolve in 1 hour if only basic issue',
      features: [
        'On-demand support',
        'Remote diagnostics',
        'Issue resolution',
        'Technical consultation',
      ],
    },
    {
      name: 'Web Builder Lite',
      price: '$2,500',
      description: 'Fast-paced landing pages and small business sites',
      features: [
        '7-8 Landing pages',
        'Mobile responsive',
        'SEO optimized',
        'Fast loading',
      ],
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
            <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Flexible plans for businesses of all sizes. No hidden fees, all pricing is transparent and agreed upon in our Service Level Agreement.
          </p>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="gradient-text">Monthly Plans</span>
            </h2>
            <p className="text-center text-foreground/70">
              Flexible monthly subscriptions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monthlyPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl border-glow-hover transition-all duration-300 animate-slide-up ${
                  plan.highlighted
                    ? 'bg-gradient-purple text-white shadow-2xl scale-105 md:scale-100'
                    : 'bg-white/80 backdrop-blur-sm hover:bg-white'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : ''}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/80' : 'text-foreground/70'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'gradient-text'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-foreground/70'}`}>
                      {plan.period}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full block text-center py-2 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                      plan.highlighted
                        ? 'bg-white text-purple-600 hover:shadow-lg'
                        : 'gradient-purple text-white hover:glow-purple'
                    }`}
                  >
                    Get Started
                  </Link>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-purple-600'}`} />
                        <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-foreground/70'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Fees */}
      <section className="py-20 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="gradient-text">One-Time Setup & Services</span>
            </h2>
            <p className="text-center text-foreground/70">
              Custom solutions with transparent, upfront pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneTimeFees.map((fee, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold mb-2">{fee.name}</h3>
                <p className="text-foreground/70 text-sm mb-4">{fee.description}</p>

                <div className="mb-6">
                  <p className="text-2xl font-bold gradient-text">{fee.price}</p>
                </div>

                <ul className="space-y-2">
                  {fee.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Pricing FAQ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">What currency do you bill in?</h3>
              <p className="text-foreground/70 text-sm">
                We typically bill in USD for global clients, but can accommodate local billing for PH companies.
              </p>
            </div>

            <div className="p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">Are there any hidden fees?</h3>
              <p className="text-foreground/70 text-sm">
                No, all pricing is transparent and agreed upon in our Service Level Agreement (SLA).
              </p>
            </div>

            <div className="p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">Can I cancel my subscription?</h3>
              <p className="text-foreground/70 text-sm">
                Our monthly plans are flexible, requiring only a 30-day notice for cancellation.
              </p>
            </div>

            <div className="p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">Do you offer a free trial?</h3>
              <p className="text-foreground/70 text-sm">
                We offer live demos of our AI agents so you can see them in action before committing.
              </p>
            </div>
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
            Choose the perfect plan for your business or contact us for a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-white text-purple-600 font-semibold hover:glow-purple transition-all duration-300 transform hover:scale-105"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
