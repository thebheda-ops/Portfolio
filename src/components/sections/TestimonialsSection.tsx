import type { Testimonial } from "../../app/types";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section id='testimonials' className='section'>
      <p className='section-label'>Testimonials</p>
      <h2>What Clients Say</h2>
      <div className='testimonial-grid'>
        {items.map((item) => (
          <article key={item.by} className='panel'>
            <p className='quote'>&quot;{item.quote}&quot;</p>
            <p className='meta'>{item.by}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

