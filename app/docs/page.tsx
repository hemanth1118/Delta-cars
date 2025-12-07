import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, AlertCircle, FileText, Shield, CreditCard, Clock } from "lucide-react"

const requiredDocuments = [
  {
    name: "Driver's License",
    description: "Valid, non-expired driver's license",
    required: true
  },
  {
    name: "Insurance Card",
    description: "Proof of insurance with minimum 50K/100K liability coverage",
    required: true
  },
  {
    name: "Proof of Address",
    description: "Utility bill, lease agreement, or other official document showing your current address",
    required: true
  },
  {
    name: "School Enrollment (If Student)",
    description: "Verification of enrollment from your educational institution",
    required: false
  },
  {
    name: "Employment Verification (If Worker)",
    description: "Employment letter or recent pay stubs",
    required: false
  }
]

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      
      <main className="flex-1 py-12 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] via-transparent to-amber-500/[0.02] blur-3xl" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Documentation Requirements</h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about required documents, terms, and conditions
            </p>
          </div>

          {/* Required Documents */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle>Required Documents</CardTitle>
              </div>
              <CardDescription>
                Please ensure you have all required documents ready before submitting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                    {doc.required ? (
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{doc.name}</h3>
                        {doc.required && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Insurance Requirements */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Insurance Coverage Requirements</CardTitle>
              </div>
              <CardDescription>
                Minimum insurance coverage required for all leased vehicles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Minimum Liability Coverage</h3>
                  <p className="text-sm text-muted-foreground">
                    You must maintain minimum liability coverage of <strong>50K/100K</strong> throughout the lease period.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Additional Insured</h3>
                  <p className="text-sm text-muted-foreground">
                    Delta Cars must be listed as an additional insured on your policy.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Policy Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    You must provide a copy of your insurance card before vehicle pick-up.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
              <CardDescription>
                Please read and understand our terms before signing the lease agreement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="rent-rules">
                  <AccordionTrigger>Rent Rules</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Minimum lease period: <strong>1 month</strong></span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Monthly mileage limit: <strong>1,200 miles</strong></span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Overage charges: <strong>$0.25 per mile</strong> over the monthly limit</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Lease payments are due on the same date each month</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Early termination may be subject to fees</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="late-fees">
                  <AccordionTrigger>Late Fees</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-muted rounded-lg">
                        <p>
                          <strong>Late Payment Fee:</strong> $25 for payments received after the due date
                        </p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p>
                          <strong>Grace Period:</strong> 3 days after the due date before late fees apply
                        </p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p>
                          <strong>Repeated Late Payments:</strong> May result in lease termination
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-methods">
                  <AccordionTrigger>Payment Methods</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Zelle</p>
                          <p className="text-muted-foreground">car.delta@yahoo.com (Preferred - No fees)</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Credit/Debit Card</p>
                          <p className="text-muted-foreground">3% processing fee applies</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Cash</p>
                          <p className="text-muted-foreground">Accepted at pick-up location only</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vehicle-maintenance">
                  <AccordionTrigger>Vehicle Maintenance & Damage</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Lessee is responsible for regular maintenance (oil changes, tire rotations, etc.)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Any damage beyond normal wear and tear will be charged to the lessee</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Report any accidents or damage immediately</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Vehicle must be returned in the same condition as received (minus normal wear)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prohibited-uses">
                  <AccordionTrigger>Prohibited Uses</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>No smoking in the vehicle</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>No illegal activities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>No towing without written permission</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>No modifications to the vehicle without approval</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Vehicle cannot be used for commercial purposes (rideshare, delivery, etc.)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-6 w-6" />
                <CardTitle>Important Notes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="mt-1">•</span>
                  <span>All documents must be submitted via email to car.delta@yahoo.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1">•</span>
                  <span>Document review typically takes 2-3 business days</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1">•</span>
                  <span>Reservation fee ($100) will be applied to your first month's payment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1">•</span>
                  <span>Keep copies of all submitted documents for your records</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1">•</span>
                  <span>Contact us immediately if you have any questions or concerns</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}

