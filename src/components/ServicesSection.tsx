import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const modules = [
  {
    icon: "Apple",
    title: "Nutrition Fundamentals",
    description: "Learn how food works with your body — not against it. Calorie balance, macros, and meal timing explained simply.",
  },
  {
    icon: "Dumbbell",
    title: "Movement & Exercise",
    description: "Beginner-friendly workouts you can do at home or at the gym. Video guides for every fitness level.",
  },
  {
    icon: "Brain",
    title: "Mindset & Habits",
    description: "Build lasting habits and overcome emotional eating. The psychology behind sustainable weight loss.",
  },
  {
    icon: "LineChart",
    title: "Progress & Results",
    description: "Track your journey, understand your body's signals, and stay motivated through every stage.",
  },
]

export function ServicesSection() {
  return (
    <section id="modules" className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            What's inside
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            4 core modules combining video lessons, guides, and practical assignments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary/30 rounded-3xl p-8 flex flex-col h-[220px] transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={mod.icon} size={24} className="text-primary" fallback="BookOpen" />
              </div>
              <h3 className="font-sans text-left text-lg font-semibold text-foreground mb-2">{mod.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}