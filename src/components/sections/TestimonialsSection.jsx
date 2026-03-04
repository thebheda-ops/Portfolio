import { FaQuoteLeft } from "react-icons/fa6";

export function TestimonialsSection({ items }) {
  return (
    <section id='testimonials' className='section'>
      <p className='section-label'>Testimonials</p>
      <h2>
        What Clients <span className='accent'>Say</span>
      </h2>
      <div className='testimonial-grid'>
        {items.map((item) => (
          <article key={item.by} className='panel testimonial-card'>
            <span className='testimonial-icon' aria-hidden='true'>
              <FaQuoteLeft />
            </span>
            <p className='quote'>&quot;{item.quote}&quot;</p>
            <p className='meta'>{item.by}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
