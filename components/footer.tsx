import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-[#030303] border-white/10">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Delta Cars</h3>
            <p className="text-sm text-muted-foreground">
              Premium car leasing services with flexible terms and exceptional customer service.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:car.delta@yahoo.com" className="text-muted-foreground hover:text-foreground">
                  car.delta@yahoo.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p className="font-medium">Garage</p>
                  <p>1030 US 30, Aurora, IL 60503</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p className="font-medium">Home</p>
                  <p>4107 Chinaberry Lane, Naperville, IL 60564</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Delta Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

