/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MessageCircle, 
  Code2, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  ExternalLink, 
  CheckCircle2, 
  Globe, 
  Zap,
  ArrowRight,
  Play,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Music2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const whatsappNumber = "+8801979983155";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;
  const logoUrl = "https://i.ibb.co/C57gNKdz/Blue-Black-and-White-Cartoon-Illustrative-Software-Developer-Logo-1.png";
  const companyLogoUrl = "https://i.ibb.co/vCnxbNZz/IMG-7266-1.png";
  const userPhotoUrl = "https://i.ibb.co/zhLF9xyx/645476945-1303910355119648-6826087729693887982-n.jpg";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={logoUrl} 
              alt="Taksid Logo" 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = 'https://picsum.photos/seed/taksid/100/100';
                e.currentTarget.className = 'w-10 h-10 rounded-lg bg-emerald-500 p-1';
              }}
            />
            <span className="font-display font-bold text-xl tracking-tight text-white">Prof<span className="text-emerald-400">WHT</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#google-play" className="hover:text-white transition-colors">Google Play</a>
            <a href="https://taksid.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              Portfolio <ExternalLink size={14} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-full transition-all flex items-center gap-2">
              <MessageCircle size={16} />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} />
              CEO & Senior Developer
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 relative">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.2)] mx-auto">
                <img 
                  src={userPhotoUrl} 
                  alt="Walid Hasan" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-2 right-1/2 translate-x-16 md:translate-x-20 w-6 h-6 bg-emerald-500 rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Walid Hasan <span className="text-gradient">Taksid</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
              CEO of <span className="text-white font-medium">Dev Spark Soft Limited</span>. 
              A Licensed IT Company in the <span className="text-emerald-400">USA & Bangladesh</span>, serving clients worldwide with a 100% money-back guarantee.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <MessageCircle className="animate-float" />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="py-12 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">100% Guarantee</h3>
              <p className="text-zinc-500 text-sm">Money back on all projects</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Global Reach</h3>
              <p className="text-zinc-500 text-sm">Online based global company</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">BBA in English</h3>
              <p className="text-zinc-500 text-sm">Running Study at PU</p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Role */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">Leadership & <span className="text-emerald-400">Expertise</span></h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              As the CEO of Dev Spark Soft Limited, I lead a team of dedicated developers and designers to build cutting-edge software solutions. My dual role as a Senior Developer and Team Leader ensures that every project meets the highest technical standards.
            </p>
            
            <div className="space-y-4">
              {[
                "CEO IT & Software Development",
                "Senior Developer & Team Leader",
                "Licensed IT Company (USA & Bangladesh)",
                "Global Project Management",
                "Worldwide Service Operations",
                "Custom Software Architecture"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass p-8 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 overflow-hidden border border-white/10">
                <img 
                  src={companyLogoUrl} 
                  alt="Dev Spark Soft Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dev Spark Soft Limited</h3>
              <p className="text-zinc-500 mb-6">Your Trusted Partner in Digital Transformation</p>
              <div className="w-full h-px bg-white/10 mb-6" />
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-2xl bg-white/5">
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Success Rate</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5">
                  <div className="text-2xl font-bold text-emerald-400">Global</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Operations</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Google Play Developer Account Section */}
      <section id="google-play" className="py-24 px-6 bg-emerald-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Play size={200} className="text-emerald-500" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
                <CheckCircle2 size={20} />
                <span>PREMIUM SERVICE</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Google Play Developer Account <span className="text-emerald-400">✅</span>
              </h2>
              <p className="text-zinc-300 text-xl mb-8 leading-relaxed">
                Get the best market price for your vintage developer accounts. Secure, fast, and 100% confidential. We provide high-quality, aged accounts ready for your next big app launch.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold">100% Secure</h4>
                    <p className="text-zinc-500 text-sm">Verified and safe transfer process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold">Fast Delivery</h4>
                    <p className="text-zinc-500 text-sm">Get your account details instantly</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="text-sm text-emerald-400 font-bold uppercase tracking-widest mb-1">Direct Line</div>
                  <div className="text-2xl font-mono font-bold">{whatsappNumber}</div>
                </div>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-black py-5 px-10 rounded-2xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.4)] text-lg"
                >
                  <MessageCircle size={24} />
                  GET ACCOUNT NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6 group inline-flex">
                <img 
                  src={logoUrl} 
                  alt="Taksid Logo" 
                  className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://picsum.photos/seed/taksid/100/100';
                    e.currentTarget.className = 'w-10 h-10 rounded-lg bg-emerald-500 p-1';
                  }}
                />
                <span className="font-display font-bold text-xl tracking-tight text-white">Prof<span className="text-emerald-400">WHT</span></span>
              </a>
              <p className="text-zinc-500 max-w-sm mb-6">
                Leading digital transformation through Dev Spark Soft Limited. Licensed in USA & Bangladesh, serving the world.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://DevSparkSoft.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1">
                  DevSparkSoft.com <ExternalLink size={14} />
                </a>
                <a href="https://DevSparkSoft.Org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1">
                  DevSparkSoft.Org <ExternalLink size={14} />
                </a>
                <a href="https://taksid.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1">
                  Taksid.com <ExternalLink size={14} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Verification</h4>
              <a 
                href="https://www.alaskacompanydir.com/companies/dev-spark-soft-limited/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold group-hover:text-emerald-400 transition-colors">Alaska Directory</div>
                  <div className="text-xs text-zinc-500">Official Company Listing</div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Social</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#1877F2] hover:text-white transition-all" title="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://TikTok.com/@profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-black hover:text-white transition-all" title="TikTok">
                  <Music2 size={20} />
                </a>
                <a href="https://Instagram.com/Profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#E4405F] hover:text-white transition-all" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://Youtube.com/Profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#FF0000] hover:text-white transition-all" title="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="https://t.me/profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#24A1DE] hover:text-white transition-all" title="Telegram">
                  <Send size={20} />
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-black transition-all" title="WhatsApp">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm">
              © 2026 ProfWHT. All rights reserved.
            </div>
            <div className="flex gap-8 text-xs text-zinc-600">
              <span>USA Licensed</span>
              <span>Bangladesh Licensed</span>
              <span>Worldwide Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-2xl z-50 animate-bounce"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
