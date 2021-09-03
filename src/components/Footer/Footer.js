import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerpic">
        <img src="assets/images/footer2.jpeg" />
      </div>
      <div className="footerText">
        <p>Elevate your style.</p>
        <p>Sign up & get started today. </p>
        <button className="footerButton"> SHOP THE FEED</button>
      </div>
      <div className="footerpic footerimage2">
        <img src="assets/images/footer3.jpeg" />
      </div>
    </div>
  );
};

export default Footer;
