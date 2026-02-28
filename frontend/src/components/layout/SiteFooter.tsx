type SiteFooterProps = { brand: string };

export function SiteFooter({ brand }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <p className='footer-copy'>
        {brand.toUpperCase()} - {year} - Freelance MERN Developer
      </p>
    </footer>
  );
}
