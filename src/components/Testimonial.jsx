import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      text: "I purchased my Renault Triber from VPS VENTURES in Kurukshetra, and the service was truly impressive. The team guided me well, offered a smooth finance process, and even helped with insurance and registration. Very professional and highly recommended.",
      name: "Sandeep Yadav, Kurukshetra",
      img: "src/public/user.jpg",
    },
    {
      text: "We recently bought an SML Isuzu truck from VPS VENTURES, and the overall experience was excellent. The staff explained everything clearly, provided an easy EMI option, and delivered the vehicle on time. A reliable dealership for commercial vehicles.",
      name: "Ramesh Arora, Shahabad",
      img: "https://www.bits-pilani.ac.in/wp-content/uploads/Profile-pic-2.jpg",
    },
    {
      text: "I purchased a pre-owned Chevrolet Beat from VPS VENTURES, and I am very satisfied. The car was in great condition, paperwork was handled smoothly, and the after-sales service has been dependable. A trustworthy place for buyers in Kurukshetra.",
      name: "Pooja Verma, Thanesar",
      img: "https://randomuser.me/api/portraits/women/15.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-white py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-center space-x-4 mb-9">
          <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-900">
            What Our Customers Are Saying
          </h2>
          <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
        </div>
        <ul
  role="list"
  className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 lg:grid-cols-3 lg:max-w-none"
>
          {testimonials.map((t, idx) => (
            <li key={idx}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 h-auto flex flex-col justify-between hover:shadow-2xl hover:slate-900/10">
                {/* Quote Icon */}
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>

                {/* Quote Text */}
                <blockquote className="relative">
                  <p className="text-base sm:text-lg tracking-tight text-slate-900">
                    {t.text}
                  </p>
                </blockquote>

                {/* Author */}
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-sm sm:text-base text-slate-900">
                      {t.name}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt={t.name}
                      className="h-12 w-12 sm:h-14 sm:w-14 object-cover"
                      src={t.img}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
