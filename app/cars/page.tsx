"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car } from "@/types"
import { DollarSign, Calendar, Palette, Hash } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>("all")

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching cars:", error)
        setLoading(false)
      })
  }, [])

  const filteredCars = cars.filter((car) => {
    if (filter === "all") return true
    if (filter === "available") return car.status === "Open" && car.category === "Available"
    if (filter === "reserved") return car.status === "Reserved" || car.category === "Reserved"
    return true
  })

  return (
    <div className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      
      <main className="flex-1 py-12 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Available Cars</h1>
            <p className="text-muted-foreground">
              Browse our selection of quality vehicles available for lease
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Cars
            </Button>
            <Button
              variant={filter === "available" ? "default" : "outline"}
              onClick={() => setFilter("available")}
            >
              Available
            </Button>
            <Button
              variant={filter === "reserved" ? "default" : "outline"}
              onClick={() => setFilter("reserved")}
            >
              Reserved
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2 mt-2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No cars found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <Card key={car.vin} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl">
                          {car.year} {car.make} {car.model}
                        </CardTitle>
                        <CardDescription>{car.trim}</CardDescription>
                      </div>
                      <Badge variant={car.status === "Reserved" ? "secondary" : "default"}>
                        {car.status || car.category || "Available"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Hash className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Unit:</span>
                        <span className="font-medium">{car.unit}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Palette className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Color:</span>
                        <span className="font-medium">{car.color}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Year:</span>
                        <span className="font-medium">{car.year}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Monthly:</span>
                        <span className="font-medium">${car.leaseAmount}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground mb-1">VIN:</p>
                      <p className="text-xs font-mono">{car.vin}</p>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link href="/process">Reserve This Car</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

