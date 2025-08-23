import React from 'react'
import a from '../public/gallery/a.jpg'
import b from '../public/gallery/b.jpg'
import c from '../public/gallery/c.jpg'
import d from '../public/gallery/d.jpg'
import e from '../public/gallery/e.jpg'
import f from '../public/gallery/f.jpg'


const Gallery = () => {
  const galleryImages = [
    { src: a, alt: "Family at dealership" },
    { src: b, alt: "Car consultation" },
    { src: c, alt: "Car wheel detail" },
    { src: d, alt: "Sports car rear" },
    { src: e, alt: "Silver SUV" },
    { src: f, alt: "Blue sedan" },
  ]
  return (
    <>
   

  
  <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4">Our Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image.src || {a}}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default Gallery