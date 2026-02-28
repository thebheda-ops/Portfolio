type ContactSectionProps = {
  contact: {
    title: string;
    highlight: string;
    intro: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
  };
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id='contact' className='section'>
      <p className='section-label'>Contact</p>
      <h2>
        {contact.title} <span className='accent'>{contact.highlight}</span>
      </h2>
      <div className='contact-grid'>
        <article className='panel'>
          <h3>Let&apos;s Connect</h3>
          <p>{contact.intro}</p>
          <ul className='contact-list'>
            <li>{contact.email}</li>
            <li>
              <a href={contact.linkedinUrl} target='_blank' rel='noreferrer'>
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a href={contact.githubUrl} target='_blank' rel='noreferrer'>
                GitHub Profile
              </a>
            </li>
          </ul>
        </article>

        <form className='panel contact-form'>
          <input id='name' name='name' type='text' placeholder='Your Name' />
          <input id='email' name='email' type='email' placeholder='Your Email' />
          <textarea
            id='message'
            name='message'
            rows={5}
            placeholder='Your Message'
          />
          <button className='btn btn-primary' type='submit'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
