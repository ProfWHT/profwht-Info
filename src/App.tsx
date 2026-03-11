/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  Music2,
  Mail,
  Languages,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = translations[lang];

  const whatsappNumber = "+8801979983155";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;
  const logoUrl = "https://i.ibb.co/C57gNKdz/Blue-Black-and-White-Cartoon-Illustrative-Software-Developer-Logo-1.png";
  const companyLogoUrl = "https://i.ibb.co/vCnxbNZz/IMG-7266-1.png";
  const userPhotoUrl = "https://i.ibb.co/zhLF9xyx/645476945-1303910355119648-6826087729693887982-n.jpg";

  // Dynamic SEO Update
  useEffect(() => {
    document.title = lang === 'ru' 
      ? "Купить Аккаунт Google Play Console | Продажа и Аренда | ProfWHT"
      : lang === 'en'
      ? "Buy Google Play Console Account | Sale & Rent | ProfWHT"
      : lang === 'zh'
      ? "购买 Google Play Console 帐户 | 销售与租赁 | ProfWHT"
      : "গুগল প্লে কনসোল অ্যাকাউন্ট কিনুন | বিক্রয় এবং ভাড়া | ProfWHT";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.footer.desc);
    }
    
    document.documentElement.lang = lang;
  }, [lang, t]);

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

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'bn', label: 'বাংলা', flag: '🇧🇩' },
  ];

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
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
              <a href="#google-play" className="hover:text-white transition-colors">{t.nav.services}</a>
              <a href="https://taksid.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                {t.nav.portfolio} <ExternalLink size={14} />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium"
              >
                <Languages size={16} className="text-emerald-400" />
                <span className="hidden sm:inline">{languages.find(l => l.code === lang)?.label}</span>
                <span className="sm:hidden">{languages.find(l => l.code === lang)?.flag}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-40 glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[60]"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-emerald-500/10 ${lang === l.code ? 'text-emerald-400 bg-emerald-500/5' : 'text-zinc-400'}`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden sm:flex bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-full transition-all items-center gap-2 text-sm font-bold">
              <MessageCircle size={16} />
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* Google Play Developer Account Section */}
      <section id="google-play" className="relative pt-32 pb-24 px-6 bg-emerald-500/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[2rem] p-8 md:p-16 relative overflow-hidden border border-emerald-500/20">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Play size={200} className="text-emerald-500" />
            </div>
            
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
                <CheckCircle2 size={20} />
                <span>{t.googlePlay.badge}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {t.googlePlay.title} <span className="text-emerald-400">{t.googlePlay.titleAccent}</span>
              </h2>
              
              <div className="mb-12">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {t.googlePlay.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="mt-1 p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.googlePlay.farming}</h4>
                    <p className="text-zinc-500 text-sm">{t.googlePlay.farmingDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="mt-1 p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.googlePlay.publishing}</h4>
                    <p className="text-zinc-500 text-sm">{t.googlePlay.publishingDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="mt-1 p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.googlePlay.quality}</h4>
                    <p className="text-zinc-500 text-sm">{t.googlePlay.qualityDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="mt-1 p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.googlePlay.price}</h4>
                    <p className="text-zinc-500 text-sm">{t.googlePlay.priceDesc}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-auto">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="text-sm text-emerald-400 font-bold uppercase tracking-widest mb-1">{t.googlePlay.whatsapp}</div>
                      <div className="text-xl font-mono font-bold">{whatsappNumber}</div>
                    </div>
                    <div>
                      <div className="text-sm text-emerald-400 font-bold uppercase tracking-widest mb-1">{t.googlePlay.email}</div>
                      <a href="mailto:WHT@ProfWHT.info" className="text-lg font-mono font-bold hover:text-emerald-400 transition-colors">WHT@ProfWHT.info</a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="text-sm text-emerald-400 font-bold uppercase tracking-widest mb-1">{t.googlePlay.telegramId}</div>
                      <a href="https://t.me/profwht" target="_blank" rel="noopener noreferrer" className="text-xl font-mono font-bold hover:text-emerald-400 transition-colors">@profwht</a>
                    </div>
                    <div>
                      <div className="text-sm text-emerald-400 font-bold uppercase tracking-widest mb-1">{t.googlePlay.telegramGroup}</div>
                      <a href="https://t.me/profwhtservice" target="_blank" rel="noopener noreferrer" className="text-lg font-mono font-bold hover:text-emerald-400 transition-colors">@profwhtservice</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full lg:w-auto">
                  <a 
                    href="https://t.me/profwht" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-black py-5 px-10 rounded-2xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.4)] text-lg"
                  >
                    <Send size={24} />
                    <span>{t.googlePlay.contactTelegram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section (My Info) */}
      <section className="relative py-24 px-6 overflow-hidden">
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
              {t.hero.role}
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
              {t.hero.name} <span className="text-gradient">{t.hero.surname}</span>
              <span className="block text-2xl md:text-3xl text-emerald-500 mt-2 font-mono tracking-widest">ProfWHT</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
              {t.hero.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <MessageCircle className="animate-float" />
                <span>{t.hero.whatsapp}</span>
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
              <h3 className="font-bold text-lg">{t.stats.guarantee}</h3>
              <p className="text-zinc-500 text-sm">{t.stats.guaranteeDesc}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t.stats.global}</h3>
              <p className="text-zinc-500 text-sm">{t.stats.globalDesc}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t.stats.study}</h3>
              <p className="text-zinc-500 text-sm">{t.stats.studyDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Role */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">{t.about.title} <span className="text-emerald-400">{t.about.titleAccent}</span></h2>
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              {t.about.desc1}
            </p>
            <p className="text-zinc-500 text-base mb-8 leading-relaxed italic">
              {t.about.desc2}
            </p>
            
            <div className="space-y-4">
              {t.about.items.map((item, i) => (
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
                  alt="Dev Spark Soft Limited" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.about.companyTitle}</h3>
              <p className="text-zinc-500 mb-6">{t.about.companyDesc}</p>
              <div className="w-full h-px bg-white/10 mb-6" />
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-2xl bg-white/5">
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.about.success}</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5">
                  <div className="text-2xl font-bold text-emerald-400">Global</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.about.operations}</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Section */}
      <section className="py-12 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{t.whatsappChat.title}</h3>
                <p className="text-zinc-500">{t.whatsappChat.desc}</p>
              </div>
            </div>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.2)]"
            >
              <MessageCircle size={20} />
              {t.whatsappChat.button}
            </a>
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
                {t.footer.desc}
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
              <div className="mt-6 flex items-center gap-3 text-zinc-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{t.footer.contactSupport}</div>
                  <a href="mailto:WHT@ProfWHT.info" className="text-white hover:text-emerald-400 transition-colors font-mono">WHT@ProfWHT.info</a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">{t.footer.verification}</h4>
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
                  <div className="text-sm font-bold group-hover:text-emerald-400 transition-colors">{t.footer.directory}</div>
                  <div className="text-xs text-zinc-500">{t.footer.listing}</div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">{t.footer.social}</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#1877F2] hover:text-white transition-all" title="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://tiktok.com/@prof.wht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-black hover:text-white transition-all" title="TikTok">
                  <Music2 size={20} />
                </a>
                <a href="https://Instagram.com/Profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#E4405F] hover:text-white transition-all" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://Youtube.com/Profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#FF0000] hover:text-white transition-all" title="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="https://t.me/profwht" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#24A1DE] hover:text-white transition-all" title="Telegram ID">
                  <Send size={20} />
                </a>
                <a href="https://t.me/profwhtservice" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#24A1DE] hover:text-white transition-all" title="Telegram Group">
                  <Globe size={20} />
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-black transition-all" title="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href="mailto:WHT@ProfWHT.info" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all" title="Email Support">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm">
              © 2026 ProfWHT. {t.footer.rights}
            </div>
            <div className="flex gap-8 text-xs text-zinc-600">
              <span>{t.footer.usaLicense}</span>
              <span>{t.footer.bdLicense}</span>
              <span>{t.footer.globalService}</span>
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
