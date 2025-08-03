import React from 'react';
import { Modal } from 'react-bootstrap';
import './InternshipModal.css';

const InternshipModal = ({ show, onHide, content }) => {
  const typeColors = {
    'Market Survey': 'primary',
    'Digital Marketing': 'warning',
    'Drying Process Research': 'success',
    'Product Development': 'secondary',
    'Technical Writing': 'info',
    'Accounting & Logistics': 'danger'
  };

  if (!content || !content.title) return null;

  const headerColor = typeColors[content.title] || 'dark';

  // Function to clean bullets/numbers from list content
  const cleanHtmlContent = (html) => {
    return html.replace(/[•▪○◘◙‣⁃]|\d+\.\s*/g, '');
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="internship-modal-title"
      centered
      className="internship-modal fade"
    >
      <Modal.Header closeButton className={`bg-${headerColor} text-white modal-header`}>
        <Modal.Title id="internship-modal-title" className="modal-title">
          {content.title} <span className="modal-code">({content.code})</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        {/* About Section */}
        <section className="modal-section">
          <h6 className="section-title">About the Internship</h6>
          {content.about ? (
            <div className="section-content" dangerouslySetInnerHTML={{ __html: content.about }} />
          ) : (
            <div className="section-content text-muted">Details coming soon.</div>
          )}
        </section>

        {/* Responsibilities */}
        {content.responsibilities?.length > 0 && (
          <section className="modal-section">
            <h6 className="section-title">Key Roles & Responsibilities</h6>
            <ul className="clean-list">
              {content.responsibilities.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: cleanHtmlContent(item) }} />
              ))}
            </ul>
          </section>
        )}

        {/* Details */}
        {content.details && (
          <section className="modal-section">
            <h6 className="section-title">Internship Details</h6>
            <div className="section-details">
              <p className="detail-item">
                <strong className="detail-label">Nature:</strong>
                <span className="detail-value">{content.details.nature}</span>
              </p>
              <p className="detail-item">
                <strong className="detail-label">Duration:</strong>
                <span className="detail-value">{content.details.duration}</span>
              </p>
            </div>
          </section>
        )}

        {/* Qualifications */}
        {content.qualifications?.length > 0 && (
          <section className="modal-section">
            <h6 className="section-title">Qualifications & Requirements</h6>
            <ul className="clean-list">
              {content.qualifications.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: cleanHtmlContent(item) }} />
              ))}
            </ul>
          </section>
        )}

        {/* Offer */}
        {content.offer && (
          <section className="modal-section">
            <h6 className="section-title">What We Offer</h6>
            <div className="section-content" dangerouslySetInnerHTML={{ __html: content.offer }} />
          </section>
        )}

        {/* Application Link */}
        {content.applicationLink && (
          <section className="modal-section apply-section">
            <h6 className="section-title">Application Process</h6>
            <div className="section-content">
              <p className="apply-text">Apply via the form link below:</p>
              <a
                href={content.applicationLink}
                className={`btn btn-${headerColor} apply-btn`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </section>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default InternshipModal;
