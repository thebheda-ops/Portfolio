export function SiteFooter({ brand }) {
  const year = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <p className='footer-copy'>
        {brand.toUpperCase()} - {year} - Freelance MERN Developer
      </p>
    </footer>
  );
}
