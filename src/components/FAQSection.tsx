import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need any prior experience or equipment?",
      answer:
        "None at all. SlimFlow is designed for complete beginners. The workouts can be done at home with no equipment. All you need is motivation and 20–30 minutes a day.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most students notice changes within the first 2–3 weeks — improved energy, better sleep, and visible body changes. Significant weight loss typically shows by week 4–6.",
    },
    {
      question: "Is this a diet program?",
      answer:
        "No crash diets here. SlimFlow teaches you how to eat in a way that's flexible, satisfying, and sustainable. You'll never feel starved or deprived.",
    },
    {
      question: "What if I have a medical condition?",
      answer:
        "We always recommend consulting your doctor before starting any new health program. SlimFlow's guidelines are science-backed and safe, but personal health always comes first.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "Lifetime access. Once you enroll, all materials — including future updates — are yours forever. Learn at your own pace, revisit any lesson any time.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes! VIP Coaching includes a 90-day success guarantee. If you follow the program and don't see results, we'll refund you — no questions asked.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know before joining SlimFlow.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}