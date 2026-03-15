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
      answer: "This tracker is a premium digital product designed to work seamlessly with Google Sheets. Immediately after purchase, you'll receive a direct link to copy the template straight into your own Google Drive."
    },
    {
      question: "Are there any hidden software costs?",
      answer: "Absolutely not. The BECOMING system is engineered to run flawlessly on a standard, free Google account. Zero recurring fees, zero extra software required. Just duplicate and execute."
    },
    {
      question: "How do I access the BECOMING system after purchase?",
      answer: "Upon successful payment, you will be instantly redirected to a secure access page to download your 12-page Deployment Protocol. This streamlined guide contains your exact setup instructions and the embedded links to unlock your Google Sheets trackers. A secondary confirmation email will also be dispatched to your inbox to ensure you have permanent, lifetime access."
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
