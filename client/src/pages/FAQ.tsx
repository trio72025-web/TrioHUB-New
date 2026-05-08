import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronDown, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  items: FAQItem[];
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const faqData: FAQCategory[] = [
    {
      name: 'General & Global',
      items: [
        {
          question: 'Who is Triohub?',
          answer: 'A fast-paced technology solutions provider established in 2022, specializing in AI, automation, and cybersecurity.',
        },
        {
          question: 'Where are you located?',
          answer: 'We are based in the Philippines but operate globally, serving clients across all time zones.',
        },
        {
          question: 'How many companies do you serve?',
          answer: 'We currently support over 500+ companies worldwide.',
        },
        {
          question: 'How can I contact support?',
          answer: 'You can reach us via our website (triohub.site) or email at info@triohub.site.',
        },
        {
          question: 'Are your services available 24/7?',
          answer: 'Yes, both our AI agents and our technical support teams operate 24 hours a day.',
        },
      ],
    },
    {
      name: 'Conversational AI & Chatbots',
      items: [
        {
          question: 'What is an Interactive AI Avatar?',
          answer: 'It is a digital "human" that speaks and reacts to your website visitors in real-time to assist and book calls.',
        },
        {
          question: 'Can the AI book meetings on my calendar?',
          answer: 'Yes, we integrate with Calendly, TidyCal, and other scheduling tools.',
        },
        {
          question: 'Does the AI capture lead information?',
          answer: 'Absolutely. It is designed to capture names, emails, and phone numbers before handoffs.',
        },
        {
          question: 'Is the AI "smart" enough to answer specific questions?',
          answer: 'Yes, we train each bot on your specific PDFs, URLs, and company data.',
        },
        {
          question: 'What languages does the AI speak?',
          answer: 'Our agents support over 120 languages, making them perfect for global brands.',
        },
        {
          question: 'How long does it take to set up an AI agent?',
          answer: 'A standard setup typically takes 3 to 7 business days.',
        },
        {
          question: 'Can I use my own face for the avatar?',
          answer: 'Yes, we offer "Digital Twin" services where we clone your likeness and voice.',
        },
        {
          question: 'Do I need coding skills to use it?',
          answer: 'No, Triohub handles the installation. You just paste a simple code snippet we provide.',
        },
      ],
    },
    {
      name: 'Systems & AI Automation',
      items: [
        {
          question: 'What is AI Automation?',
          answer: 'It\'s the process of using software to handle repetitive tasks, like moving data from a chat to your CRM.',
        },
        {
          question: 'Which CRMs do you support?',
          answer: 'We support HubSpot, Salesforce, ConnectWise, Pipedrive, and many others.',
        },
        {
          question: 'How does automation save me money?',
          answer: 'It reduces the need for manual data entry and prevents lead leakage.',
        },
      ],
    },
    {
      name: 'Cybersecurity (Anti-virus)',
      items: [
        {
          question: 'What anti-virus solutions do you provide?',
          answer: 'We provide managed endpoint detection and response (EDR) that goes beyond basic scanning.',
        },
        {
          question: 'Can you help if I\'ve already been hacked?',
          answer: 'Yes, we offer emergency remediation and system hardening services.',
        },
        {
          question: 'Is your security software heavy on PC performance?',
          answer: 'No, our enterprise solutions are designed to be "lightweight" yet powerful.',
        },
      ],
    },
    {
      name: 'Technical Support',
      items: [
        {
          question: 'How does remote support work?',
          answer: 'We use secure, encrypted software to access your device and fix issues while you watch.',
        },
        {
          question: 'What is your response time for IT issues?',
          answer: 'Priority clients typically receive a response in under 15 minutes.',
        },
        {
          question: 'Do you support both Mac and Windows?',
          answer: 'Yes, our remote support and security tools are cross-platform.',
        },
      ],
    },
    {
      name: 'Website Management',
      items: [
        {
          question: 'What website builders do you use?',
          answer: 'We specialize in Framer, Webflow, and WordPress.',
        },
        {
          question: 'Can you manage my existing website?',
          answer: 'Yes, we offer management plans to keep your current site secure and updated.',
        },
        {
          question: 'Is SEO included in website builds?',
          answer: 'Every Triohub site is built with technical SEO best practices from day one.',
        },
      ],
    },
    {
      name: 'Billing & Operations',
      items: [
        {
          question: 'What currency do you bill in?',
          answer: 'We typically bill in USD for global clients, but can accommodate local billing for PH companies.',
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, all pricing is transparent and agreed upon in our Service Level Agreement (SLA).',
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Our monthly plans are flexible, requiring only a 30-day notice for cancellation.',
        },
        {
          question: 'Do you offer a free trial?',
          answer: 'We offer live demos of our AI agents so you can see them in action before committing.',
        },
        {
          question: 'Where can I see your portfolio?',
          answer: 'Please visit triohub.site to see our latest work and client testimonials.',
        },
      ],
    },
  ];

  // Search functionality
  const filteredFAQ = useMemo(() => {
    if (!searchTerm.trim()) return faqData;

    const term = searchTerm.toLowerCase();
    return faqData
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(term) ||
            item.answer.toLowerCase().includes(term)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchTerm]);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-violet-100/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10" />

        <div className="container text-center space-y-6 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and support.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-purple-300 focus:border-purple-600 focus:outline-none transition-colors bg-white"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl">
          {filteredFAQ.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">
                No results found for "{searchTerm}". Try a different search term.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQ.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.05}s` }}>
                  <h2 className="text-2xl font-bold mb-6 gradient-text">{category.name}</h2>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const itemId = `${categoryIndex}-${itemIndex}`;
                      const isExpanded = expandedItems.has(itemId);

                      return (
                        <div
                          key={itemId}
                          className="rounded-lg border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleExpanded(itemId)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                          >
                            <h3 className="font-semibold text-foreground pr-4">{item.question}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-6 pb-6 border-t border-purple-200/50 animate-slide-down">
                              <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Still Need Help?</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg gradient-purple text-white font-semibold hover:glow-purple transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
