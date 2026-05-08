import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast.error(error?.message || 'Failed to send message. Please try again.');
      setIsSubmitting(false);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return;
    }

    setIsSubmitting(true);
    await contactMutation.mutateAsync({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
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
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-foreground/70 mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:info@triohub.site" className="text-purple-600 hover:text-purple-700 transition-colors">
                    info@triohub.site
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Website</h3>
                  <a href="https://triohub.site" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                    triohub.site
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Support</h3>
                  <p className="text-foreground/70">24/7 support available</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-xl border-glow bg-white/80 backdrop-blur-sm">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-foreground">Average Response Time:</span> Under 15 minutes for priority inquiries
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="p-8 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-white"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-white"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-white resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg gradient-purple text-white font-semibold hover:glow-purple transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-xs text-foreground/60 text-center">
                    We'll get back to you as soon as possible. Your information is secure and will not be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Why Reach Out?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">?</span>
              </div>
              <h3 className="font-semibold mb-2">Questions About Services</h3>
              <p className="text-foreground/70 text-sm">
                Learn more about our AI, automation, and cybersecurity solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">💼</span>
              </div>
              <h3 className="font-semibold mb-2">Business Inquiries</h3>
              <p className="text-foreground/70 text-sm">
                Discuss partnerships, integrations, or custom solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Get Started</h3>
              <p className="text-foreground/70 text-sm">
                Ready to transform your business? Let's get started today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
