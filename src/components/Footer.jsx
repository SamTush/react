const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <p>
        Copyright &copy;
        {date.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
