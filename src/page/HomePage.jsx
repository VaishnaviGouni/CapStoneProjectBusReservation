import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/travel_1.jpg";
import travel_2 from "../images/seats.jpg";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      {/* Hero Section */}
      <section className="py-5" style={{ background: "linear-gradient(180deg, var(--brand-primary) 0%, var(--brand-primary-700) 100%)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 text-white">
              <h1 className="display-5 fw-bold mb-3">Seamless Bus Reservations</h1>
              <p className="lead mb-4">Discover routes, compare options, and book securely in seconds. Travel planning made simple and reliable.</p>
              <Link to="/user/login" className="btn btn-light btn-lg me-3">Get Started</Link>
              <Link to="/view/journey/all" className="btn btn-outline-light btn-lg">Browse Journeys</Link>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <img src={travel_2} alt="Travel" className="img-fluid rounded-card" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Real-time Availability</h5>
                <p className="card-text">Check live seats and schedules across routes to plan your journey with confidence.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Instant Confirmation</h5>
                <p className="card-text">Receive immediate booking confirmation with secure transactions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Easy Management</h5>
                <p className="card-text">View bookings, manage journeys, and track wallet in a unified dashboard.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <img src={travel_1} alt="Travel" className="img-fluid rounded-card" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">Plan, Book, and Go</h2>
            <p>From searching routes to final booking, experience a smooth flow with helpful guidance at every step.</p>
            <Link to="/user/login" className="btn btn-primary me-3">Login</Link>
            <Link to="/user/passenger/register" className="btn btn-outline-primary">Register</Link>
          </div>
        </div>
      </div>

      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
