import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "I lost 9 kg in 8 weeks following the SlimFlow program. The video lessons are clear, practical, and easy to follow — even for someone with a busy schedule like mine.",
    name: "Emma Richardson",
    role: "Student, United Kingdom",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "I tried many diets before — nothing stuck. SlimFlow finally helped me understand why. The mindset module alone was worth the price. I'm down 12 kg and feel amazing.",
    name: "Marco Fernández",
    role: "Student, Spain",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The combination of nutrition guidance and workouts is brilliant. I did everything from home, lost 7 kg, and my energy levels are through the roof. Highly recommend!",
    name: "Aiko Tanaka",
    role: "Student, Japan",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Real student results</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't take our word for it — hear from people who've transformed their lives with SlimFlow.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}