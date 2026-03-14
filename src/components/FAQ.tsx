import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this a subscription or a one-time purchase?",
      answer: "BECOMING is a one-time purchase of $7.99. You get lifetime access to the tracker and the free ebook. No hidden fees, no recurring charges."
    },
    {
      question: "What platform is the tracker built on?",
      answer: "The tracker is a digital product designed to work seamlessly with Notion. You'll receive a template link immediately after purchase that you can duplicate into your own workspace."
    },
    {
      question: "Do I need a paid Notion account?",
      answer: "No. BECOMING works perfectly on Notion's free plan. You don't need to pay for any additional software to use this system."
    },
    {
      question: "How do I access the free ebook?",
      answer: "The 50-page ebook 'The Psychology of Discipline' is included as a PDF download in your purchase confirmation email alongside the tracker link."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes. We offer a 14-day money-back guarantee. If you don't find value in the system, simply email our support team and we'll refund your purchase, no questions asked."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-becoming-black">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6"
          >
            Frequently Asked <span className="text-white/40">Questions.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white/90">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-becoming-teal transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-white/60 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
