import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Car, FileText, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with new geometric design */}
        <section className="relative">
          <HeroGeometric 
            title="Delta Cars"
            quote="Premium car leasing with flexible terms. Your journey starts here."
          />
          <div className="absolute bottom-24 md:bottom-32 left-0 right-0 z-20 flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="/cars">
                View Available Cars
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/5">
              <Link href="/process">
                Learn the Process
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-[#030303] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />
          <div className="relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Delta Cars?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We make car leasing simple, transparent, and affordable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Car className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Wide Selection</CardTitle>
                  <CardDescription>
                    Browse our extensive inventory of quality vehicles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <Link href="/cars">
                      View Cars <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Clear Process</CardTitle>
                  <CardDescription>
                    Step-by-step guide to make leasing easy and transparent
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <Link href="/process">
                      See Process <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Expert Support</CardTitle>
                  <CardDescription>
                    Our team is here to help you every step of the way
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <Link href="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-16 px-4 bg-[#030303] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] via-transparent to-amber-500/[0.02] blur-3xl" />
          <div className="relative z-10 container mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow our simple process to reserve your car today. All documentation requirements are clearly outlined.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg">
                <Link href="/process">
                  Start Your Journey
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/docs">
                  View Requirements
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

