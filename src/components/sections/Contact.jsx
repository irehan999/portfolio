import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaCopy, FaCheck } from 'react-icons/fa';
import { FiSend, FiAlertTriangle } from 'react-icons/fi';
import Container from '../common/Container';

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'irehan094@gmail.com',
      href: 'mailto:irehan094@gmail.com',
      copyValue: 'irehan094@gmail.com',
      ariaLabel: 'Send an email to Rehan Irfan'
    },
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      value: '+1 (234) 567-890', // Replace with your display phone number
      href: 'tel:+1234567890',    // Replace with your actual tel: phone number
      copyValue: '+1234567890', // Replace with your actual phone number for copying
      ariaLabel: 'Call Rehan Irfan'
    }
  ];

  const profileLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/irehan999',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/rehan-irfan-183465280/',
      label: 'LinkedIn',
    }
  ];

  const copyToClipboard = (text, itemLabel) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemLabel);
    setNotificationMessage(`${itemLabel} copied to clipboard!`);
    setSubmitSuccess(true);
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
      setCopiedItem(null);
    }, 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Rehan Irfan",
          time: new Date().toLocaleString()
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setNotificationMessage("Message sent successfully!");
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setNotificationMessage("Failed to send. Please try again.");
      setSubmitSuccess(false);
    } finally {
      setShowNotification(true);
      setIsSubmitting(false);
      setTimeout(() => setShowNotification(false), 3500);
    }
  };

  const inputBaseClass = "w-full bg-transparent border-b-2 border-[var(--color-slate-dark)] py-3 text-[var(--color-white)] placeholder-[var(--color-slate)] focus:outline-none focus:border-[var(--color-accent-base)] transition-colors duration-300 ease-out text-sm";
  const labelBaseClass = "block text-[var(--color-slate-lightest)] text-xs font-mono uppercase tracking-wider mb-1";

  return (
    <section id="contact" className="section-theme-contact relative py-20 md:py-28 overflow-hidden">
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 bg-[var(--color-navy-light)] text-[var(--color-white)] px-5 py-3.5 rounded-lg border border-[var(--color-accent-base)] shadow-xl z-[200] flex items-center text-sm"
        >
          {submitSuccess ? <FaCheck className="text-[var(--color-accent-base)] mr-2.5" size={16} /> : <FiAlertTriangle className="text-yellow-400 mr-2.5" size={18} />}
          {notificationMessage}
        </motion.div>
      )}

      <Container className="relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-mono text-[var(--color-accent-base)] text-base md:text-lg tracking-wider mb-3">
            // Let's Collaborate
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-white)] mb-4">
            Get In Touch<span className="text-[var(--color-accent-base)]">.</span>
          </h2>
          <div className="w-20 h-1.5 bg-[var(--color-accent-base)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[var(--color-slate-light)] text-lg leading-relaxed">
              Have a project in mind, a question, or just want to connect? I'm always open to discussing new opportunities and ideas. Feel free to reach out.
            </p>

            {contactMethods.map((method) => (
              <motion.div 
                key={method.label}
                initial={{ opacity: 0, y:15 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration:0.5, delay: 0.1 + (contactMethods.indexOf(method) * 0.1) }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-[var(--color-accent-tint)] uppercase tracking-wider">{method.label}</span>
                  <button
                    onClick={() => copyToClipboard(method.copyValue, method.label)}
                    className="text-[var(--color-slate-light)] hover:text-[var(--color-accent-base)] transition-colors duration-200 p-1 -mr-1"
                    aria-label={`Copy ${method.label}`}
                  >
                    {copiedItem === method.label ? <FaCheck size={14} /> : <FaCopy size={14} />}
                  </button>
                </div>
                <a
                  href={method.href}
                  aria-label={method.ariaLabel}
                  className="flex items-center text-base sm:text-lg text-[var(--color-white)] hover:text-[var(--color-accent-base)] transition-colors duration-200 group/link"
                >
                  <method.icon className="mr-3 text-[var(--color-accent-base)] transition-colors flex-shrink-0" size={18} />
                  <motion.span 
                    className="truncate group-hover/link:underline"
                    whileHover={{ letterSpacing: "0.2px" }}
                    transition={{ duration: 0.2 }}
                  >
                    {method.value}
                  </motion.span>
                </a>
              </motion.div>
            ))}
            
            <hr className="border-[var(--color-slate-dark)]/50 my-6" />

            <div>
                <h4 className="text-xs font-mono text-[var(--color-slate-lightest)] uppercase tracking-wider mb-3">
                    Find me on
                </h4>
                <div className="flex items-center space-x-5">
                    {profileLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-[var(--color-slate-light)] hover:text-[var(--color-accent-base)] transition-all duration-300 ease-out"
                            initial={{ opacity:0, y:10 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:0.4, delay: 0.4 + index * 0.1}}
                            viewport={{ once: true, amount: 0.5 }}
                            whileHover={{ scale: 1.15, y: -2 }}
                        >
                            <link.icon size={22} />
                        </motion.a>
                    ))}
                </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-[var(--color-navy-light)]/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[var(--color-navy-lightest)]/20 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelBaseClass}>Your Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className={inputBaseClass} placeholder="John Doe"/>
                </div>
                <div>
                  <label htmlFor="email" className={labelBaseClass}>Your Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className={inputBaseClass} placeholder="john@example.com"/>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={labelBaseClass}>Subject</label>
                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required className={inputBaseClass} placeholder="What's this about?"/>
              </div>
              <div>
                <label htmlFor="message" className={labelBaseClass}>Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className={`${inputBaseClass} resize-none`} placeholder="Hello Rehan, I'd like to talk about..."></textarea>
              </div>
              <motion.button
                type="submit"
                className={`w-full flex items-center justify-center font-semibold py-3.5 px-6 rounded-lg shadow-lg transition-all duration-300 group text-sm
                            ${isSubmitting ? 'bg-[var(--color-slate-dark)] text-[var(--color-slate-light)] cursor-not-allowed' : 'bg-[var(--color-accent-base)] text-[var(--color-navy-darkest)] hover:bg-[var(--color-accent-shade)] hover:shadow-xl'}`}
                whileHover={!isSubmitting ? { y: -3 } : {}}
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (<>Send Message <FiSend className="ml-2.5 transition-transform group-hover:translate-x-1" size={16}/></>)}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;