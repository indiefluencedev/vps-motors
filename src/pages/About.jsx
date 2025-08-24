import React from 'react'
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import car from '../public/about.webp'
// import {ImageRipple} from '../components/ui/image-ripple' 
// import {ImageCursorTrail} from '../components/ui/image-ripple'

const About = () => {
  const features = ["Expert guidance at every step", "Competitive financing options", "Comprehensive warranty coverage"]
  return (
    <>
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
      <img
            
              src={car}
              alt="Red sports car in showroom"
              className="w-full h-auto object-cover rounded-lg"
            />
          
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold">
              Most Popular Product
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-primary font-semibold">Professional Company</div>
              <h2 className="text-4xl font-bold text-card-foreground">You're Perfect With Tasteful Car Choices</h2>
              <p className="text-muted-foreground leading-relaxed">
                At VPS Motors, we understand that choosing the perfect car is more than just a purchase—it's about
                finding a vehicle that matches your lifestyle, preferences, and dreams. Our extensive collection
                features premium vehicles that combine performance, luxury, and reliability.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-card-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground">Learn More</Button>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default About