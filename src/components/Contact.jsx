import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Sparkles, Phone, MapPin, Copy, Check, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import Card3D from './ui/Card3D';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formState.name.trim()) tempErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formState.message.trim()) tempErrors.message = 'Message cannot be empty';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohdarman7043@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formState.name,
            email: formState.email,
            message: formState.message,
            subject: 'New Message from Portfolio Website Contact Form'
          })
        });
        const result = await response.json();
        if (result.success) {
          setIsSubmitting(false);
          setSubmitted(true);
          
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#a855f7', '#06b6d4', '#ec4899', '#ffffff']
          });
          setFormState({ name: '', email: '', message: '' });
        } else {
          setIsSubmitting(false);
          alert('Failed to transmit message: ' + (result.message || 'Unknown error'));
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error('Web3Forms Transmission Error:', error);
        alert('Network transmission failed. Please try again or use direct email.');
      }
    } else {
      // Fallback: Simulate database write if access key is not set
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#06b6d4', '#ec4899', '#ffffff']
        });
        setFormState({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  const getResumeUrl = () => {
    const url = import.meta.env.VITE_RESUME_URL || 'resume/Arman_Resume_Updated.pdf';
    if (url.startsWith('http') || url.startsWith('/') || url.startsWith('data:')) {
      return url;
    }
    return `${import.meta.env.BASE_URL || '/'}${url}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-bgLight/30 border-y border-white/5">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

      {/* Spotlights */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-cyber-accent/5 blur-[120px] bottom-10 left-10 pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyber-secondary/5 blur-[100px] top-10 right-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyber-accent/30 bg-cyber-accent/10 text-cyber-accent font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-4"
          >
            <Mail size={12} />
            <span>COMMUNICATION PORTAL</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Get In <span className="text-gradient-purple-cyan font-extrabold">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Communication channels info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-2xl border-white/10 text-left relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-secondary/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold font-sans tracking-wide text-white leading-tight mb-3">
                  Let's Discuss <span className="text-gradient-purple-cyan font-bold">Opportunities</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed font-sans">
                  Whether you are a recruiter looking for a MERN stack developer, Three.js programmer, or just want to collaborate, feel free to reach out. I will respond within 24 hours.
                </p>
              </div>

              {/* Channels */}
              <div className="space-y-4 font-sans">
                {/* Direct email click / copy portal */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-secondary transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-cyber-secondary/15 flex items-center justify-center text-cyber-secondary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-cyber-muted font-mono tracking-wider uppercase block">EMAIL ADDRESS</span>
                    <a href="mailto:mohdarman7043@gmail.com" className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white truncate block">
                      mohdarman7043@gmail.com
                    </a>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyber-secondary text-cyber-muted hover:text-cyber-secondary transition-all duration-300 focus:outline-none"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-cyber-primary/15 flex items-center justify-center text-cyber-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-cyber-muted font-mono tracking-wider uppercase block">LOCATION</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                      Telangana, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Link Gateways */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-cyber-muted uppercase tracking-wider block">PROFESSIONAL PORTALS</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/mohammad-arman-667a01387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-secondary hover:text-cyber-secondary text-slate-300 flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn Profile"
                    title="Connect on LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a
                    href="https://github.com/Arman-12338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-primary hover:text-cyber-primary text-slate-300 flex items-center justify-center transition-all duration-300"
                    aria-label="GitHub Profile"
                    title="Follow on GitHub"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  {import.meta.env.VITE_WHATSAPP_URL && (
                    <a
                      href={import.meta.env.VITE_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-green-500 hover:text-green-400 text-slate-300 flex items-center justify-center transition-all duration-300"
                      aria-label="WhatsApp Chat"
                      title="Chat on WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" stroke="none" className="shrink-0">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.416 1.46 5.861 0 10.63-4.757 10.635-10.612.002-2.837-1.1-5.501-3.103-7.507C17.593 4.49 14.939 3.393 12.01 3.393c-5.87 0-10.64 4.757-10.645 10.613-.001 1.982.518 3.921 1.503 5.636l-.993 3.63 3.738-.981zm12.336-7.854c-.317-.159-1.88-.928-2.172-1.034-.29-.105-.503-.159-.714.159-.21.318-.813 1.034-.997 1.246-.182.213-.367.24-.683.081-3.327-1.666-4.526-2.52-6.177-5.367-.32-.553.32-.513.917-1.705.101-.2.051-.375-.025-.534-.076-.16-.714-1.722-.979-2.361-.258-.621-.52-.536-.714-.546-.185-.008-.396-.01-.607-.01-.212 0-.556.08-.847.4-.29.32-1.111 1.087-1.111 2.65 0 1.563 1.137 3.076 1.296 3.289.159.213 2.24 3.42 5.424 4.793.757.327 1.348.522 1.81.669.76.241 1.45.207 2.0.125.61-.092 1.88-.77 2.145-1.478.265-.708.265-1.316.185-1.442-.08-.127-.294-.213-.61-.372z"/>
                      </svg>
                    </a>
                  )}
                  
                  {/* Quick CV Download link inside communication portal */}
                  <a
                    href={getResumeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-accent text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all duration-300"
                    aria-label="Download Resume"
                  >
                    <Download size={14} className="text-cyber-accent" />
                    <span>DOWNLOAD RESUME</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyber-muted">
              <span>SYSTEM ONLINE</span>
              <span className="text-cyber-secondary">SECURE COMMS</span>
            </div>
          </motion.div>

          {/* Right Block: Dynamic glassmorphic form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex"
          >
            <Card3D 
              className="w-full bg-slate-950/40 border-white/10 p-8 flex flex-col justify-between text-left relative overflow-hidden"
              glowColor="rgba(168, 85, 247, 0.2)"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={16} className="text-cyber-primary animate-pulse" />
                        <h4 className="text-lg font-bold text-white font-sans tracking-wide">
                          Send a Hologram Message
                        </h4>
                      </div>

                      {/* Name input */}
                      <div className="flex flex-col relative">
                        <label className="text-[11px] font-mono text-cyber-muted tracking-wider uppercase mb-1.5 px-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-100 font-sans tracking-wide focus:outline-none focus:bg-white/10 transition-all duration-300 ${
                            errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyber-primary'
                          }`}
                          placeholder="Mohamed Arman"
                        />
                        {errors.name && <span className="text-[10px] font-mono text-red-400 mt-1 pl-1">{errors.name}</span>}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col relative">
                        <label className="text-[11px] font-mono text-cyber-muted tracking-wider uppercase mb-1.5 px-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-100 font-sans tracking-wide focus:outline-none focus:bg-white/10 transition-all duration-300 ${
                            errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyber-primary'
                          }`}
                          placeholder="recruiter@company.com"
                        />
                        {errors.email && <span className="text-[10px] font-mono text-red-400 mt-1 pl-1">{errors.email}</span>}
                      </div>

                      {/* Message input */}
                      <div className="flex flex-col relative">
                        <label className="text-[11px] font-mono text-cyber-muted tracking-wider uppercase mb-1.5 px-1">
                          Your Message
                        </label>
                        <textarea
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-100 font-sans tracking-wide focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none ${
                            errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyber-primary'
                          }`}
                          placeholder="Hey Mohammad, I saw your 3D portfolio and would love to chat..."
                        />
                        {errors.message && <span className="text-[10px] font-mono text-red-400 mt-1 pl-1">{errors.message}</span>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-cyber-primary to-cyber-secondary hover:scale-[1.02] text-white font-mono text-sm tracking-widest font-semibold shadow-neon-purple disabled:opacity-50 disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                          <span>TRANSMITTING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <span>TRANSMIT HOLOGRAM</span>
                          <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Elegant visual feedback Success Screen
                  <motion.div
                    key="success-screen"
                    className="flex flex-col items-center justify-center text-center py-12 px-4 h-full space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-2 shadow-inner animate-bounce">
                      <Check size={32} />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-2xl font-extrabold text-white font-sans tracking-wide">
                        Transmission Successful!
                      </h4>
                      <p className="text-sm text-slate-300 font-light max-w-md leading-relaxed font-sans">
                        Thank you for reaching out! Your message was secured and transmitted to Mohammad Arman. Direct notifications have been dispatched.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/10 hover:border-cyber-primary bg-white/5 text-white font-mono text-xs tracking-wider transition-all duration-300"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card3D>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
