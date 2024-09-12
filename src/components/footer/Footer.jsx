import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <small>&copy;MrovaBizHub {currentYear} || All rights reserved.</small>
    </footer>
  );
};
export default Footer;
