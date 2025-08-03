// src/components/ContactModal/ContactModal.js
import React, { useState, useEffect } from 'react';
import './ContactModal.css';

function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const sheetData = {
    data: {
      Name: formData.name,
      Phone: formData.mobile,
      Email: formData.email,
      Message: formData.message
    }
  };

  try {
    const response = await fetch("https://sheetdb.io/api/v1/ruzmah988g1lb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sheetData)
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', mobile: '', email: '', message: '' });
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again later.");
  }
};

  // Reset form when modal is closed
  useEffect(() => {
    const modalEl = document.getElementById('contactModal');
    const handleHidden = () => {
      setFormData({ name: '', mobile: '', email: '', message: '' });
      setSubmitted(false);
    };
    modalEl?.addEventListener('hidden.bs.modal', handleHidden);
    return () => {
      modalEl?.removeEventListener('hidden.bs.modal', handleHidden);
    };
  }, []);

  return (
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header bg-dark-green text-white d-flex justify-content-between align-items-center py-2 px-3">
            <h5 className="modal-title fs-6 mb-0">Contact Dry Pandas</h5>
            <button type="button" className="btn-close btn-close-white m-0 p-1" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0">
            <div className="container-fluid">
              <div className="row g-0 flex-column flex-lg-row">
                {/* Left: Contact Info */}
                <div className="col-12 col-lg-7 contact-info-section p-4">
                  <h6 className="text-dark-green mb-2"><i className="bi bi-info-circle-fill me-1"></i>Our Info</h6>
                  <div className="contact-item bg-light-green p-2 rounded mb-2">
                    <i className="bi bi-telephone-fill text-dark-green fs-6"></i>
                    <span className="fs-6">+91 7708509046 <br /><span>+91 8220353966</span></span>
                  </div>
                  <div className="contact-item bg-light-green p-2 rounded mb-2">
                    <i className="bi bi-envelope-fill text-dark-green fs-6"></i>
                    <span className="fs-6">drypandafoods@gmail.com</span>
                  </div>
                  <div className="contact-item bg-light-green p-2 rounded mb-2">
                    <i className="bi bi-geo-alt-fill text-dark-green fs-6"></i>
                    <span className="fs-6">Visakhapatnam, AP</span>
                  </div>
                  <div className="map-container mt-2 rounded overflow-hidden border border-light-green">
                    <iframe
                      src="https://maps.google.com/maps?q=Visakhapatnam&output=embed"
                      loading="lazy"
                      className="w-100"
                      height="120"
                      style={{ border: 0 }}
                      title="Map"
                    ></iframe>
                  </div>
                </div>

                {/* Right: Contact Form */}
                <div className="col-12 col-lg-5 p-3">
                  <h6 className="text-dark-green mb-2"><i className="bi bi-send-fill me-1"></i>Send Message</h6>
                  {submitted ? (
                    <div className="alert alert-success py-2 small text-center" role="alert">
                      ✅ Message sent successfully!
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-sm border-light-green"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="tel"
                          name="mobile"
                          pattern="\d{10}"
                          className="form-control form-control-sm border-light-green"
                          placeholder="Mobile Number"
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="email"
                          name="email"
                          pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
                          className="form-control form-control-sm border-light-green"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <textarea
                          name="message"
                          className="form-control form-control-sm border-light-green"
                          rows="2"
                          placeholder="Message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-dark-green w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                        <i className="bi bi-send-fill"></i>
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
