import { Button } from "@/components/ui/3d-button"
import Icon from "@/components/ui/icon"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Flame" size={18} className="text-primary-foreground" />
            </div>
            <span className="font-serif">SlimFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#modules" className="text-sm text-foreground hover:text-primary transition-colors">
              Modules
            </a>
            <a href="#process" className="text-sm text-foreground hover:text-primary transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-foreground hover:text-primary transition-colors">
              Results
            </a>
          </nav>

          <Button className="rounded-full px-6">Enroll Now</Button>
        </div>
      </div>
    </header>
  )
}