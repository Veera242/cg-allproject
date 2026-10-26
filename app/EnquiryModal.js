"use client";

import { useEffect, useState } from "react";

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function EnquiryModal({ isOpen, onClose, title = "Get Project Details Instantly", projectName = "" }) {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setSent(false);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="enquiry-modal-backdrop"
      data-lenis-prevent
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry Form"
    >
      <div className="enquiry-modal-card" data-lenis-prevent>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        {sent ? (
          <div className="enquiry-modal-success">
            <div className="enquiry-success-badge">
              <CheckIcon />
            </div>
            <h2>Request Submitted!</h2>
            <p>
              Thank you for your interest. Our Casagrand property consultant will contact you shortly with floor plans, pricing sheets, and site visit details.
            </p>
            {projectName && (
              <div className="enquiry-project-tag">
                Project: <strong>Casagrand {projectName}</strong>
              </div>
            )}
            <button
              type="button"
              className="btn btn-gold enquiry-success-btn"
              onClick={onClose}
            >
              Back to Properties
            </button>
          </div>
        ) : (
          <form className="enquiry-modal-form" onSubmit={handleSubmit}>
            <div className="enquiry-input-group">
              <label htmlFor="modal-name">Full Name *</label>
              <input
                id="modal-name"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="enquiry-input-group">
              <label htmlFor="modal-phone">Phone Number *</label>
              <div className="enquiry-phone-wrap">
                <span className="phone-country-code">+91</span>
                <input
                  id="modal-phone"
                  required
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="enquiry-input-group">
              <label htmlFor="modal-email">Email Address (Optional)</label>
              <input
                id="modal-email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

              <button type="submit" className="btn btn-gold enquiry-submit-btn">
                <span>Submit Enquiry</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </button>

              <p className="enquiry-security-note">
                🔒 100% Privacy Guaranteed. No spam. Direct developer connect.
              </p>
            </form>
        )}
      </div>
    </div>
  );
}
