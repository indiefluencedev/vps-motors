// import React from 'react'
// import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// import { Facebook, Twitter, Instagram } from "lucide-react"

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-sidebar py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Newsletter */}
//           {/* <div className="lg:col-span-1">
//             <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Subscribe To The Newsletter</h3>
//             <div className="flex gap-2">
//               {/* <Input placeholder="Enter your email" className="bg-background border-sidebar-border" /> */}
//               {/* <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-12 h-12 p-0 flex-shrink-0"> */}
//                 {/* → */}
//               {/* </Button> */}
//             {/* </div> */}
//           {/* </div> */}

//           {/* Buying & Selling */}
//           <div>
//             <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Buying & Selling</h3>
//             <ul className="space-y-2 text-sm text-sidebar-foreground">
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Find a Car
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Listings
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Sell Your Car
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Compare
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Resources</h3>
//             <ul className="space-y-2 text-sm text-sidebar-foreground">
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Guides
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Help Center
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">About</h3>
//             <ul className="space-y-2 text-sm text-sidebar-foreground">
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Company
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-sidebar-primary transition-colors">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-sidebar-border mt-12 pt-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="text-sm text-sidebar-foreground">© 2024 VPS Motors. All rights reserved.</div>
//             <div className="flex items-center gap-4">
//               <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import React from "react";
// import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-12">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Logo (Text) */}
//           <div className="flex justify-center md:justify-start"> {/* Aligned to the left on medium and larger screens */}
//              <div className="text-2xl font-bold text-white">VPS MOTORS</div>
//           </div>

//           {/* Service Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Service</h3>
//             <p className="text-sm text-gray-400 mb-6">
//               Quality vehicles for commercial and personal needs.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram size={20} />
//               </a>
//                <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Mail size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter size={20} /> {/* Using Twitter icon as a substitute for X */}
//               </a>
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <div className="space-y-4 text-sm text-gray-400">
//               <div>
//                 <h4 className="font-semibold text-white">BHARAT RENAULT</h4>
//                 <p>Phone number: 9254022252</p>
//                 <p>Address: 145, 146, sec-2, Kurukshetra Haryana 136118</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white">CHEVROLET</h4>
//                 <p>Phone number: 9254022252</p>
//                 <p>Address: 145, 146, sec-2, Kurukshetra Haryana 136118</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white">MANISH SML</h4>
//                 <p>Phone number: 9254022252</p>
//                 <p>Address: Jammu - Delhi Road, Khanpur Kolian, Haryana 136118</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
//           © 2025. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Two columns on medium and larger screens */}

          {/* Left Column: Logo and Service */}
          <div>
            {/* VPS MOTORS (Logo) */}
            <div className="flex justify-center md:justify-start mb-6"> {/* Align left on medium and larger screens */}
               <div className="text-2xl font-bold text-white">VPS MOTORS</div>
            </div>

            {/* Service Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service</h3>
              <p className="text-sm text-gray-400">
                Quality vehicles for commercial and personal needs.
              </p>
            </div>
          </div>

          {/* Right Column: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <h4 className="font-semibold text-white">BHARAT RENAULT</h4>
                <p>Phone number: 9254022252</p>
                <p>Address: 145, 146, sec-2, Kurukshetra Haryana 136118</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">CHEVROLET</h4>
                <p>Phone number: 9254022252</p>
                <p>Address: 145, 146, sec-2, Kurukshetra Haryana 136118</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">MANISH SML</h4>
                <p>Phone number: 9254022252</p>
                <p>Address: Jammu - Delhi Road, Khanpur Kolian, Haryana 136118</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Social Icons */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2025. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} /> {/* Using Twitter icon as a substitute for X */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
