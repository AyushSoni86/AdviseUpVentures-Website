import React from 'react';
import './Newsletter.css';
// import 'font-awesome/css/font-awesome.min.css';

const Newsletter = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="social-links">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/adviseup-ventures/about/"><i className="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Adviseup Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Newsletter;
