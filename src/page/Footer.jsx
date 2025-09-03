import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Brand and summary */}
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3">Smart Bus Reservation</h5>
            <p className="small mb-3">
              Plan, book, and manage your journeys with ease. A reliable and
              convenient way to travel across cities, designed to save you time
              and provide a smooth experience.
            </p>
            <p className="small mb-1">
              Email: {" "}
              <a
                href="mailto:support@smartbus.com"
                className="link-light text-decoration-none"
              >
                support@smartbus.com
              </a>
            </p>
            <p className="small mb-0">
              Phone: {" "}
              <a
                href="tel:+919876543210"
                className="link-light text-decoration-none"
              >
                +91 98765 43210
              </a>
            </p>
          </div>

          {/* Company links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="text-uppercase small fw-bold mb-3">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="link-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="link-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="link-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services/Actions */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="text-uppercase small fw-bold mb-3">Services</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link
                  to="/view/journey/all"
                  className="link-light text-decoration-none"
                >
                  View Journeys
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/passenger/journey/book"
                  className="link-light text-decoration-none"
                >
                  Book a Journey
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/passenger/journey/booking/all"
                  className="link-light text-decoration-none"
                >
                  My Bookings
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/passenger/wallet"
                  className="link-light text-decoration-none"
                >
                  My Wallet
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-uppercase small fw-bold mb-3">Stay Updated</h6>
            <p className="small mb-3">
              Sign in to receive journey updates, offers, and faster checkout.
            </p>
            <Link to="/user/login" className="btn btn-outline-light btn-sm">
              Log in
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-top border-secondary">
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="small mb-2 mb-md-0">
            © {year} Smart Bus Reservation. All rights reserved.
          </span>
          <div className="d-flex gap-3 small">
            <a href="#" className="link-light text-decoration-none">
              Terms
            </a>
            <a href="#" className="link-light text-decoration-none">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
