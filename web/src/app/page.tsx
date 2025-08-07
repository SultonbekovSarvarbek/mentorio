"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Brain, 
  FileText, 
  Users, 
  ChartBar, 
  Rocket, 
  CheckCircle2,
  ArrowRight,
  Mail,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LanguageSwitcher } from "@/components/language-switcher";
import { translations, type Language } from "@/lib/i18n";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [startup, setStartup] = useState("");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [activeTab, setActiveTab] = useState("feedback");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const t = translations[lang];

  type PricingPlan = typeof t.pricing.plans[number];

  const handleCheckout = async (plan: PricingPlan, index: number) => {
    // Hide Stripe payment for now - all plans go to waitlist
    setIsWaitlistOpen(true);
    return;
    
    /* Commented out Stripe checkout for later implementation
    // Only enable checkout for Solo plan (index 1)
    if (index !== 1) {
      setIsWaitlistOpen(true);
      return;
    }

    setIsProcessingPayment(true);
    
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planName: plan.name,
          planPrice: isYearly ? plan.yearlyPrice : plan.price,
          isYearly,
          locale: lang,
        }),
      });

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert(lang === 'ru' ? 'Ошибка при создании заказа' : 'Error creating order');
    } finally {
      setIsProcessingPayment(false);
    }
    */
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use Formspree for form submission
      const response = await fetch("https://formspree.io/f/meozpzld", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          email, 
          name, 
          startup,
          language: lang,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsWaitlistOpen(false);
          setIsSuccess(false);
          setEmail("");
          setName("");
          setStartup("");
        }, 2000);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        alert(lang === 'ru' 
          ? 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.' 
          : 'An error occurred while submitting. Please try again.');
      }
    } catch (error) {
      console.error("Error:", error);
      alert(lang === 'ru' 
        ? 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.' 
        : 'An error occurred while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const featureIcons = [Brain, Lightbulb, ChartBar, FileText, Rocket, Users];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-600 opacity-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700">
            <Sparkles className="mr-1 h-3 w-3" />
            {t.hero.badge}
          </Badge>
          
          <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
            {t.hero.brand}
          </h1>
          
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
            {t.hero.title}
          </h2>
          
          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsWaitlistOpen(true)}>
              {t.hero.cta1}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsDemoOpen(true)}>
              {t.hero.cta2}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Difference from GPT Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-blue-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.difference.title}
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-300">
              {t.difference.subtitle}
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {t.difference.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.features.title}
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-300">
              {t.features.subtitle}
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="mb-2 h-8 w-8 text-blue-600" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.examples.title}
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              {t.examples.subtitle}
            </p>
          </div>
          
          <div className="flex justify-center flex-wrap mb-8 gap-2">
            {t.examples.tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === "feedback" && (
              <Card>
                <CardHeader>
                  <CardTitle>{t.examples.feedback.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <p className="font-medium mb-1">You:</p>
                    <p className="text-sm">{t.examples.feedback.user}</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="font-medium mb-1">AI:</p>
                    <p className="text-sm whitespace-pre-line">{t.examples.feedback.ai}</p>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "task" && (
              <Card>
                <CardHeader>
                  <CardTitle>{t.examples.task.title}</CardTitle>
                  <Badge variant="outline">{t.examples.task.level}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t.examples.task.task}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {t.examples.task.description}
                    </p>
                    <ul className="space-y-2">
                      {t.examples.task.steps.map((step, i) => (
                        <li key={i} className="flex items-center">
                          <span className="font-medium mr-2">{i + 1}.</span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "analysis" && (
              <Card>
                <CardHeader>
                  <CardTitle>{t.examples.analysis.title}</CardTitle>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    {t.examples.analysis.score}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm whitespace-pre-line">
                    {t.examples.analysis.feedback}
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.testimonials.title}
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-300">
              {t.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 dark:bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.pricing.title}
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              {t.pricing.subtitle}
            </p>
            
            <div className="inline-flex items-center p-1 bg-gray-200 dark:bg-gray-800 rounded-lg mb-12">
              <Button
                variant={!isYearly ? "default" : "ghost"}
                size="sm"
                onClick={() => setIsYearly(false)}
                className="rounded-md"
              >
                {t.pricing.monthly}
              </Button>
              <Button
                variant={isYearly ? "default" : "ghost"}
                size="sm"
                onClick={() => setIsYearly(true)}
                className="rounded-md"
              >
                {t.pricing.yearly}
              </Button>
            </div>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-4">
            {t.pricing.plans.map((plan, index) => {
              const isPopular = index === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <Card className={`flex flex-col w-full ${isPopular ? 'border-blue-600 shadow-xl' : ''}`}>
                    {isPopular && (
                      <div className="bg-blue-600 text-white text-center py-1 text-sm rounded-t-lg">
                        {t.pricing.popular}
                      </div>
                    )}
                    {/* Hide pre-order badge for now
                    {'badge' in plan && plan.badge && (
                      <div className="bg-green-600 text-white text-center py-1 text-sm">
                        {plan.badge}
                      </div>
                    )}
                    */}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="text-3xl font-bold">
                        {isYearly ? plan.yearlyPrice : plan.price}
                        {plan.price !== "$0" && (
                          <span className="text-base font-normal">
                            {isYearly ? (lang === "ru" ? "/год" : "/year") : (lang === "ru" ? "/мес" : "/mo")}
                          </span>
                        )}
                      </div>
                      {isYearly && 'savings' in plan && plan.savings && (
                        <Badge className="bg-green-100 text-green-700">
                          {t.pricing.save} {plan.savings}
                        </Badge>
                      )}
                      <CardDescription>{plan.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button 
                        className="w-full" 
                        variant={isPopular ? "default" : "outline"}
                        onClick={() => handleCheckout(plan, index)}
                        disabled={isProcessingPayment}
                      >
                        {isProcessingPayment 
                          ? "..." 
                          : t.pricing.ctaWaitlist}
                        {/* Commented out pre-order button for later
                        {isProcessingPayment 
                          ? "..." 
                          : index === 1 
                            ? t.pricing.ctaPreorder 
                            : t.pricing.ctaWaitlist}
                        */}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">
              {t.faq.title}
            </h2>
          </div>
          
          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{item.question}</h3>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.howItWorks.title}
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-300">
              {t.howItWorks.subtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {t.howItWorks.steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold flex-shrink-0 z-10">
                    {index + 1}
                  </div>
                  <div className="ml-4 z-10 bg-gray-50 dark:bg-gray-900">
                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-blue-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            {t.waitlist.title}
          </h2>
          <p className="mb-8 text-blue-100">
            {t.waitlist.subtitle}
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => setIsWaitlistOpen(true)}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t.waitlist.submit}
          </Button>
        </div>
      </section>

      {/* Why it Works Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.whyItWorks.title}
            </h2>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.whyItWorks.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-blue-50 dark:bg-gray-800 p-6"
              >
                <CheckCircle2 className="mb-3 h-6 w-6 text-blue-600" />
                <p className="text-gray-700 dark:text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Mentorio</h3>
              <p className="text-gray-400">{t.footer.tagline}</p>
              <p className="text-gray-400 text-sm mt-2">
                <a href="mailto:sarvarbeksultonbekov@gmail.com" className="hover:text-blue-400">
                  sarvarbeksultonbekov@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-wrap space-x-6">
              <a href="#" className="hover:text-blue-400">{t.footer.about}</a>
              <a href="#" className="hover:text-blue-400">{t.footer.blog}</a>
              <a href="#" className="hover:text-blue-400">{t.footer.contacts}</a>
              <a href="#" className="hover:text-blue-400">{t.footer.privacy}</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">{t.footer.rights}</p>
            <p className="text-gray-400 text-sm mt-2">
              {t.footer.email}
            </p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.waitlist.title}</DialogTitle>
            <DialogDescription>{t.waitlist.subtitle}</DialogDescription>
          </DialogHeader>
          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold">
                {lang === "ru" ? "Спасибо! Мы свяжемся с вами!" : "Thank you! We'll be in touch!"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div>
                <Label  className="mb-2 block" htmlFor="modal-name">{t.waitlist.name}</Label>
                <Input
                  id="modal-name"
                  type="text"
                  placeholder={t.waitlist.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label className="mb-2 block" htmlFor="modal-email">{t.waitlist.email} *</Label>
                <Input
                  id="modal-email"
                  type="email"
                  placeholder={t.waitlist.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label className="mb-2 block" htmlFor="modal-startup">{t.waitlist.startup}</Label>
                <Input
                  id="modal-startup"
                  type="text"
                  placeholder={t.waitlist.startupPlaceholder}
                  value={startup}
                  onChange={(e) => setStartup(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "..." : t.waitlist.submit}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Demo Modal */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{lang === "ru" ? "Демо Mentorio" : "Mentorio Demo"}</DialogTitle>
            <DialogDescription>
              {lang === "ru" 
                ? "Посмотрите, как работает AI-ментор для стартапов"
                : "See how the AI mentor for startups works"}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
              <p className="font-semibold mb-2">
                {lang === "ru" ? "Пример диалога:" : "Example dialogue:"}
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-white dark:bg-gray-900 rounded p-2">
                  <span className="font-medium">You:</span> {lang === "ru" ? "Как проверить идею стартапа?" : "How to validate a startup idea?"}
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2">
                  <span className="font-medium">AI:</span> {lang === "ru" 
                    ? "Начни с Customer Development: проведи 20-30 интервью с потенциальными клиентами..."
                    : "Start with Customer Development: conduct 20-30 interviews with potential customers..."}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-3">
                <p className="font-semibold text-sm mb-1">{lang === "ru" ? "Анализ метрик" : "Metrics Analysis"}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {lang === "ru" ? "CAC, LTV, Burn Rate" : "CAC, LTV, Burn Rate"}
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="font-semibold text-sm mb-1">{lang === "ru" ? "Генерация" : "Generation"}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {lang === "ru" ? "Pitch deck, BMC" : "Pitch deck, BMC"}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
