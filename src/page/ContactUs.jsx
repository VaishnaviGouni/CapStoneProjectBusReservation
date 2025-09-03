const ContactUs = () => {
  return (
    <div className="container page-section">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="form-card p-4">
            <h2 className="mb-3">Contact Us</h2>
            <p className="mb-4">Have questions or need help with a booking? Get in touch.</p>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
