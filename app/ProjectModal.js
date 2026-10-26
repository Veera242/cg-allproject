"use client";

import { useEffect, useState } from "react";

// Luxury Icons
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E7529" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SchoolIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9E7529" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L3 7l9 5 9-5-9-5z" />
    <path d="M6 9.5v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" />
    <path d="M21 7v6" />
  </svg>
);

const ClinicIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9E7529" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M10 9h4M12 7v4" />
  </svg>
);

const TechParkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9E7529" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
    <path d="M12 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" />
    <line x1="8" y1="12" x2="8.01" y2="12" strokeWidth="2" />
    <line x1="16" y1="12" x2="16.01" y2="12" strokeWidth="2" />
  </svg>
);

export default function ProjectModal({ project, onClose, onEnquire }) {
  const [imgIndex, setImgIndex] = useState(0);

  const images = project?.images && project.images.length > 0 ? project.images : [project?.image];

  useEffect(() => {
    // Lock scroll on mount
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImgIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setImgIndex((i) => (i - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose]);

  if (!project) return null;

  // Split meta into amenities and bhk configuration
  const [amenitiesFull = "", bhkFull = ""] = (project.meta || "").split(" · ");
  const amenParts = amenitiesFull.trim().split(" ");
  const amenCount = amenParts[0] || "100+";
  const amenLabel = amenParts.slice(1).join(" ") || "Lifestyle Amenities";

  const landmarks = project.landmarks || [
    { type: "school", name: "The PSBB Millennium School", dist: "- 9 Mins away" },
    { type: "clinic", name: "Kamatchi Clinic", dist: "- 2.2 KM" },
    { type: "tech", name: "Softrate Tech Park", dist: "- 7.5 KM" },
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % images.length);
  };

  const getLandmarkIcon = (type) => {
    switch (type) {
      case "school":
        return <SchoolIcon />;
      case "clinic":
        return <ClinicIcon />;
      case "tech":
      default:
        return <TechParkIcon />;
    }
  };

  return (
    <div className="project-modal-backdrop" data-lenis-prevent onClick={onClose}>
      <div className="project-modal-card" data-lenis-prevent onClick={(e) => e.stopPropagation()}>
        {/* Top-Right Close Button for consistent positioning across desktop & mobile */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        {/* Left Column: Image with gallery arrows & badges */}
        <div className="modal-gallery">
          <div className="modal-gallery-badge-top">
            <span className="modal-badge-verified">✓ Casagrand Verified</span>
            {images.length > 1 && (
              <span className="modal-photo-count">{imgIndex + 1} / {images.length} Photos</span>
            )}
          </div>

          <img
            src={images[imgIndex]}
            alt={`${project.name} preview ${imgIndex + 1}`}
            onError={(e) => {
              if (images[imgIndex] !== project.image) {
                e.currentTarget.src = project.image;
              }
            }}
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="modal-gallery-btn prev"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                className="modal-gallery-btn next"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ArrowRight />
              </button>

              <div className="modal-gallery-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`modal-gallery-dot ${i === imgIndex ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setImgIndex(i);
                    }}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Column: Project Details & Connectivity */}
        <div className="modal-info">

          {/* Luxury Header */}
          <div className="modal-header-block">
            <span className="luxury-eyebrow">
              PREMIER RESIDENCE • {project.region ? `${project.region.toUpperCase()} CHENNAI` : "CHENNAI"}
            </span>
            <div className="modal-title-row">
              <h2 className="modal-title">{project.name}</h2>
              {bhkFull && <span className="modal-bhk-badge">{bhkFull}</span>}
            </div>

            {/* Location with Pin */}
            <div className="modal-location-row">
              <MapPinIcon />
              <span>{project.location}</span>
            </div>

            {/* Premium Price Box */}
            <div className="modal-price-card">
              <div className="modal-price-info">
                <span className="modal-price-label">STARTING PRICE</span>
                <span className="modal-price-val">{project.price}*</span>
              </div>
              <span className="modal-price-tag">Direct Developer Price</span>
            </div>
          </div>

          {/* Key highlights & Landmarks */}
          <div className="modal-features-list">
            {/* Amenities badge */}
            <div className="modal-feature-item">
              <div className="modal-feature-icon amenities-icon">
                <span className="modal-amen-count">{amenCount}</span>
              </div>
              <div className="modal-feature-text">
                <div className="modal-feature-name">{amenLabel}</div>
                <div className="modal-feature-sub">Clubhouse, sports, wellness &amp; recreation</div>
              </div>
            </div>

            {/* Landmarks */}
            {landmarks.map((lm, idx) => (
              <div className="modal-feature-item" key={idx}>
                <div className="modal-feature-icon">
                  {getLandmarkIcon(lm.type)}
                </div>
                <div className="modal-feature-text">
                  <div className="modal-feature-name">{lm.name}</div>
                  {lm.dist && (
                    <div className="modal-feature-dist">
                      <span>⏱️ {lm.dist.replace(/^- /, "")}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Enquire CTA */}
          <div className="modal-actions-area">
            <button
              type="button"
              className="btn btn-gold modal-enquire-btn"
              onClick={() => {
                onClose();
                onEnquire && onEnquire(`Enquire About Casagrand ${project.name}`, project.name);
              }}
            >
              <span>Enquire For This Project</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
