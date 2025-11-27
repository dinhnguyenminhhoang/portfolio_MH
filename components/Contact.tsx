'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      // Sign up at https://www.emailjs.com/ and replace these with your credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'minhhoang.detdev@gmail.com',
      link: 'mailto:minhhoang.detdev@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+843337923340',
      link: 'tel:+843337923340'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Thủ Đức, Hồ Chí Minh, Vietnam',
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/dinhnguyenminhhoang'
    }
  ]

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions. Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group block glass rounded-2xl p-6 hover:glow-box transition-all magnetic"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      <div className="font-medium group-hover:gradient-text transition-all">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: '💼', name: 'LinkedIn', link: 'https://www.linkedin.com/in/dinhnguyenminhhoang' },
                  { icon: '🐙', name: 'GitHub', link: 'https://github.com/dinhnguyenminhhoang' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center text-2xl hover:glow-box magnetic transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">Available for Work</span>
              </div>
              <p className="text-sm text-gray-400">
                Currently accepting new projects and collaborations.
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl focus:outline-none transition-all ${focusedField === 'name'
                    ? 'border-primary glow-box'
                    : 'border-gray-700'
                    }`}
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl focus:outline-none transition-all ${focusedField === 'email'
                    ? 'border-primary glow-box'
                    : 'border-gray-700'
                    }`}
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl focus:outline-none transition-all ${focusedField === 'subject'
                    ? 'border-primary glow-box'
                    : 'border-gray-700'
                    }`}
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl focus:outline-none transition-all resize-none ${focusedField === 'message'
                    ? 'border-primary glow-box'
                    : 'border-gray-700'
                    }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="glass rounded-xl p-4 border border-green-500/50 bg-green-500/10">
                  <p className="text-green-400 text-sm flex items-center gap-2">
                    <span>✅</span>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="glass rounded-xl p-4 border border-red-500/50 bg-red-500/10">
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <span>❌</span>
                    <span>Failed to send message. Please try again or email me directly.</span>
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/50 transition-all magnetic disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>🚀</span>
                  </>
                )}
              </button>

              {/* EmailJS Setup Note */}
              <p className="text-xs text-gray-500 text-center">
                💡 To enable email sending, configure EmailJS in Contact.tsx
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 mb-4">
            Designed & Built by <span className="gradient-text font-semibold">Minh Hoàng</span>
          </p>
        </div>
      </div>
    </section>
  )
}
