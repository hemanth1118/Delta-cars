"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, ExternalLink, Mail, CreditCard } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const steps = [
  {
    step: 1,
    title: "Finalize Car Selection",
    description: "Choose the car that best fits your needs",
    details: [
      "Browse our available cars on the Cars page",
      "Review specifications, pricing, and availability",
      "Contact us if you have any questions about a specific vehicle",
      "Confirm your selection before proceeding"
    ]
  },
  {
    step: 2,
    title: "Make Reservation Payment",
    description: "Secure your car with a $100 reservation fee",
    details: [
      "Send $100 via Zelle to: car.delta@yahoo.com",
      "Include your name and the car unit number in the payment notes",
      "Keep the Zelle confirmation for your records",
      "Reservation fee will be applied to your first month's payment"
    ]
  },
  {
    step: 3,
    title: "Shop for Insurance",
    description: "Obtain the required insurance coverage",
    details: [
      "You need minimum liability coverage: 50K/100K",
      "Shop around for the best rates using these resources:",
      "• Progressive: https://www.progressive.com",
      "• Geico: https://www.geico.com",
      "• State Farm: https://www.statefarm.com",
      "• Allstate: https://www.allstate.com",
      "Make sure to add Delta Cars as an additional insured",
      "Get a quote and prepare your insurance documents"
    ]
  },
  {
    step: 4,
    title: "Submit Required Documents",
    description: "Provide all necessary documentation",
    details: [
      "Driver's License (valid, not expired)",
      "Insurance card with 50K/100K liability coverage",
      "Proof of address (utility bill, lease agreement, etc.)",
      "If you're a student: School enrollment verification",
      "If you're a worker: Employment verification or pay stubs",
      "Email all documents to: car.delta@yahoo.com",
      "Allow 2-3 business days for document review"
    ]
  },
  {
    step: 5,
    title: "Schedule Pick-up",
    description: "Finalize arrangements and pick up your car",
    details: [
      "Once documents are approved, we'll contact you to schedule pick-up",
      "Pick-up locations:",
      "• Garage: 1030 US 30, Aurora, IL 60503",
      "• Home: 4107 Chinaberry Lane, Naperville, IL 60564",
      "Bring your driver's license and insurance card to pick-up",
      "Review and sign the lease agreement",
      "Complete final payment (first month + security deposit if applicable)",
      "Inspect the vehicle and note any existing damage",
      "Drive away in your new car!"
    ]
  }
]

export default function ProcessPage() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStep = (step: number) => {
    setCompletedSteps(prev =>
      prev.includes(step)
        ? prev.filter(s => s !== step)
        : [...prev, step]
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      
      <main className="flex-1 py-12 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Leasing Process</h1>
            <p className="text-muted-foreground text-lg">
              Follow these 5 simple steps to lease your car
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={step.step} className="relative">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => toggleStep(step.step)}
                        className="mt-1"
                      >
                        {completedSteps.includes(step.step) ? (
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                        ) : (
                          <Circle className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
                        )}
                      </button>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Step {step.step}
                        </span>
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 ml-12">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {step.step === 2 && (
                    <div className="mt-6 ml-12 p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Zelle Payment</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Send $100 to: <strong>car.delta@yahoo.com</strong>
                      </p>
                    </div>
                  )}

                  {step.step === 3 && (
                    <div className="mt-6 ml-12 p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <ExternalLink className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Insurance Resources</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <a href="https://www.progressive.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          Progressive →
                        </a>
                        <a href="https://www.geico.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          Geico →
                        </a>
                        <a href="https://www.statefarm.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          State Farm →
                        </a>
                        <a href="https://www.allstate.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          Allstate →
                        </a>
                      </div>
                    </div>
                  )}

                  {step.step === 4 && (
                    <div className="mt-6 ml-12 p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Submit Documents</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Email all documents to: <strong>car.delta@yahoo.com</strong>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Ready to Start?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  View our documentation requirements to ensure you have everything ready
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/docs">View Documentation Requirements</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

