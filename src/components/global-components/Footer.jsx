import React from 'react'
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer id="contact" className="bg-sidebar py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Subscribe To The Newsletter</h3>
            <div className="flex gap-2">
              {/* <Input placeholder="Enter your email" className="bg-background border-sidebar-border" /> */}
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-12 h-12 p-0 flex-shrink-0">
                →
              </Button>
            </div>
          </div>

          {/* Buying & Selling */}
          <div>
            <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Buying & Selling</h3>
            <ul className="space-y-2 text-sm text-sidebar-foreground">
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Find a Car
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Listings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Sell Your Car
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Compare
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-sidebar-foreground">
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">About</h3>
            <ul className="space-y-2 text-sm text-sidebar-foreground">
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sidebar-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-sidebar-foreground">© 2024 VPS Motors. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer