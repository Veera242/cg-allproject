"use client";

import { useEffect, useState, useRef } from "react";
import { projects, priceFilters, regionTabs, banners, headlines, stats, reviews, faqs } from "./data";
import ProjectModal from "./ProjectModal";
import EnquiryModal from "./EnquiryModal";

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const BedIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 6.9L21.3 11.3l-6.9 2.4L12 20.6l-2.4-6.9L2.7 11.3l6.9-2.4L12 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4h18l-7 8.5V19l-4 2v-8.5z" />
  </svg>
);

const PhoneRingingIcon = () => (
  <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.2 3a8.5 8.5 0 0 1 6.8 6.8" />
    <path d="M14.2 7a4.5 4.5 0 0 1 2.8 2.8" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const PHONE = "+919876543210";
const PHONE_LABEL = "+91 98765 43210";

function EnquiryForm({ title, button = "Request Instant Callback" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="luxury-form-success">
        <div className="success-icon-ring">✓</div>
        <h4>Enquiry Submitted!</h4>
        <p>Thank you for expressing your interest. Our Senior Property Consultant will call you within 15 minutes with complete pricing & brochure details.</p>
        <button
          type="button"
          className="btn-gold-luxury"
          onClick={() => setSent(false)}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      className="luxury-card-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-field-group">
        <label htmlFor="footer-name">Full Name *</label>
        <input
          id="footer-name"
          required
          placeholder="e.g. Anand Kumar"
          name="name"
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="footer-phone">Mobile Number *</label>
        <div className="phone-input-wrap">
          <span className="country-code-pill">🇮🇳 +91</span>
          <input
            id="footer-phone"
            required
            placeholder="98765 43210"
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
          />
        </div>
      </div>

      <div className="form-field-group">
        <label htmlFor="footer-email">Email Address (Optional)</label>
        <input
          id="footer-email"
          placeholder="e.g. anand@gmail.com"
          name="email"
          type="email"
        />
      </div>

      <button className="btn-gold-luxury" type="submit">
        <span>{button}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </form>
  );
}

export default function Landing() {
  const [slide, setSlide] = useState(0);
  const [prices, setPrices] = useState([]); // selected price-band indexes
  const [open, setOpen] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeReviewDot, setActiveReviewDot] = useState(0);
  const [enquiryModal, setEnquiryModal] = useState({ open: false, title: "Get Project Details Instantly", projectName: "" });
  const reviewsSliderRef = useRef(null);

  const openEnquiry = (title = "Get Project Details Instantly", projectName = "") => {
    setEnquiryModal({ open: true, title, projectName });
  };
  const closeEnquiry = () => {
    setEnquiryModal((prev) => ({ ...prev, open: false }));
  };

  const scrollReviews = (direction) => {
    if (reviewsSliderRef.current) {
      const card = reviewsSliderRef.current.querySelector(".testimonial-slide");
      const step = card ? card.offsetWidth + 24 : 360;
      reviewsSliderRef.current.scrollBy({ left: direction * step, behavior: "smooth" });
    }
  };

  const handleReviewsScroll = (e) => {
    const card = e.target.querySelector(".testimonial-slide");
    const step = card ? card.offsetWidth + 24 : 360;
    const idx = Math.round(e.target.scrollLeft / step);
    setActiveReviewDot(Math.min(reviews.length - 1, Math.max(0, idx)));
  };

  const scrollToReview = (i) => {
    if (reviewsSliderRef.current) {
      const card = reviewsSliderRef.current.querySelector(".testimonial-slide");
      const step = card ? card.offsetWidth + 24 : 360;
      reviewsSliderRef.current.scrollTo({ left: i * step, behavior: "smooth" });
      setActiveReviewDot(i);
    }
  };

  const togglePrice = (i) => setPrices((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  const resetFilters = () => setPrices([]);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  const visible = projects.filter(
    (x) =>
      prices.length === 0 || prices.some((i) => x.priceNum >= priceFilters[i].min && x.priceNum < priceFilters[i].max)
  );

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#top"><img className="logo" src="/logo.png" alt="Casagrand - Building Aspirations" /></a>
          <div className="header-actions">
            <a className="header-phone" href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
            <button type="button" className="btn btn-gold" onClick={() => openEnquiry("Request a Callback & Quote")}>Get Quote</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        {banners.map((src, i) => (
          <div key={src} className={`hero-slide ${i === slide ? "active" : ""}`}>
            <img src={src} alt={`Casagrand banner ${i + 1}`} />
          </div>
        ))}
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">{headlines[slide].eyebrow}</p>
            <h1>{headlines[slide].title}</h1>
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-gold hero-cta-btn"
                onClick={() => openEnquiry("Get Project Details Instantly")}
              >
                <span>Enquire Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#projects" className="btn btn-hero-secondary">
                <span>Explore Projects</span>
              </a>
            </div>
            <div className="hero-dots">
              {banners.map((_, i) => (
                <button key={i} aria-label={`Slide ${i + 1}`} className={i === slide ? "active" : ""} onClick={() => setSlide(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-head">
            <p className="projects-eyebrow">EXCLUSIVE RESIDENCES</p>
            <h2>Our Signature Projects</h2>
          </div>
          <div className="projects-bar">
              <div className="bar-right">
                <div className="price-pill">
                  {priceFilters.map((f, i) => (
                    <label className="price-opt" key={f.label}>
                      <input type="checkbox" checked={prices.includes(i)} onChange={() => togglePrice(i)} />
                      {f.label}
                    </label>
                  ))}
                </div>
                <button className="icon-btn" aria-label="Clear filters" title="Clear filters" onClick={() => setPrices([])}><FilterIcon /></button>
                <button className="view-all" onClick={resetFilters}>Reset</button>
              </div>
            </div>
            <div className="project-grid">
              {visible.length === 0 && <p className="empty-state">No projects match these filters.</p>}
              {visible.map((x) => {
                const [amen, bhk] = x.meta.split(" · ");
                const cleanAmen = (amen || "")
                  .replace(/World Class Amenities/gi, "Amenities")
                  .replace(/Lifestyle Amenities/gi, "Amenities")
                  .replace(/Recreational Amenities/gi, "Amenities");
                const cleanBhk = (bhk || "")
                  .replace(/2BHK,\s*3BHK,\s*4BHK\s*Apts\s*&\s*4BHK\s*Floor\s*Villa/gi, "2, 3, 4 BHK & Villas")
                  .replace(/2BHK,\s*3BHK,\s*4BHK\s*&\s*4BHK\s*Floor\s*Villa/gi, "2, 3, 4 BHK & Villas")
                  .replace(/2BHK,\s*3BHK,\s*4BHK\s*Apts\s*&\s*5BHK\s*Floor\s*Villa/gi, "2, 3, 4 & 5 BHK Villas")
                  .replace(/2BHK,\s*3BHK\s*&\s*4BHK\s*Apts/gi, "2, 3 & 4 BHK")
                  .replace(/2BHK,\s*3BHK\s*&\s*4BHK/gi, "2, 3 & 4 BHK")
                  .replace(/2BHK\s+and\s+3BHK/gi, "2 & 3 BHK")
                  .replace(/2BHK\s*&\s*3BHK/gi, "2 & 3 BHK")
                  .replace(/3BHK\s*&\s*4BHK\s*Villas/gi, "3 & 4 BHK Villas")
                  .replace(/3BHK\s*&\s*4BHK/gi, "3 & 4 BHK")
                  .replace(/2BHK/gi, "2 BHK");

                return (
                  <article className="project-card" key={x.name}>
                    <div
                      className="project-img-wrapper"
                      onClick={() => setSelectedProject(x)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View details for ${x.name}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedProject(x);
                        }
                      }}
                    >
                      <img src={x.image} alt={x.name} loading="lazy" />
                      <div className="project-img-gradient" />

                      {/* Floating Glassmorphic Badges */}
                      <div className="project-badge-loc">
                        <PinIcon />
                        <span>{x.location}</span>
                      </div>

                      <div className="project-badge-brand">
                        <span>CASAGRAND</span>
                      </div>

                      {/* Centered Quick View on Hover */}
                      <div className="project-img-hint">
                        <span>
                          <EyeIcon /> Quick View
                        </span>
                      </div>
                    </div>

                    <div className="project-panel">
                      <div className="project-header-row">
                        <h4
                          className="project-name"
                          onClick={() => setSelectedProject(x)}
                          title="Click to view details"
                        >
                          {x.name}
                        </h4>
                        <div className="project-price-badge">
                          <span className="price-sub">Starting at</span>
                          <span className="price-val">{x.price}</span>
                        </div>
                      </div>

                      <div className="project-specs-row">
                        <div className="project-spec-item" title="Configurations">
                          <BedIcon />
                          <span>{cleanBhk}</span>
                        </div>
                        <div className="project-spec-item" title="Amenities">
                          <SparkleIcon />
                          <span>{cleanAmen}</span>
                        </div>
                      </div>

                      <div className="project-divider" />

                      <div className="project-actions">
                        <button
                          type="button"
                          className="btn-card-brochure"
                          onClick={() => openEnquiry(`Download ${x.name} Brochure`, x.name)}
                        >
                          <DownloadIcon />
                          <span>Brochure</span>
                        </button>
                        <button
                          type="button"
                          className="btn-card-enquire"
                          onClick={() => openEnquiry(`Enquire About Casagrand ${x.name}`, x.name)}
                        >
                          <span>Enquire Now</span>
                          <ArrowUpRightIcon />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
      </section>


      {/* Stats - Luxury Trust Card */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-luxury-card">
            {stats.map((s) => (
              <div key={s.label} className="stat-column">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Interactive Luxury Slider */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div>
              <span className="luxury-eyebrow">VERIFIED HOMEOWNER STORIES</span>
              <h2 className="section-title">What Our <span>Customers Say</span></h2>
            </div>
            <div className="slider-controls">
              <button
                className="slider-arrow-btn"
                onClick={() => scrollReviews(-1)}
                aria-label="Previous customer story"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="slider-arrow-btn"
                onClick={() => scrollReviews(1)}
                aria-label="Next customer story"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="testimonials-slider-track"
            ref={reviewsSliderRef}
            onScroll={handleReviewsScroll}
          >
            {reviews.map((r) => (
              <article className="testimonial-slide" key={r.id}>
                <a
                  className="testimonial-video-box"
                  href={`https://www.youtube.com/watch?v=${r.id}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch video story of ${r.name}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`}
                    alt={r.name}
                    loading="lazy"
                  />
                  <div className="video-play-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="video-story-chip">Video Story</span>
                </a>
                <div className="testimonial-body">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{r.name.charAt(0)}</div>
                    <div>
                      <h4 className="author-name">{r.name}</h4>
                      <p className="author-project">Resident · {r.project}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="slider-dots-nav">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`slider-dot-indicator ${i === activeReviewDot ? "active" : ""}`}
                onClick={() => scrollToReview(i)}
                aria-label={`Go to customer story ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Locations & Interactive Map */}
      <section className="section location-section" id="location">
        <div className="container">
          <div className="location-section-header" style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 className="section-title center">Project Locations &amp; <span>Connectivity</span></h2>
          </div>

          <div className="location-showcase-single">
            {/* Google Map Card */}
            <div className="map-card-wrapper">
              {/* Map Iframe */}
              <div className="map-iframe-container">
                <iframe
                  title="Casagrand Projects Chennai Locations Map"
                  src="https://maps.google.com/maps?q=Casagrand+Chennai&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Banner with Location & Minutes */}
              <div className="map-footer-banner">
                <div className="map-footer-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9E7529" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>18+ Casagrand Projects across Prime Chennai Locations</span>
                </div>

                <div className="map-footer-item metro-highlight">
                  <span className="metro-badge-icon">⏱️</span>
                  <span>Major IT Corridors &amp; Hubs: <strong>5 – 10 Mins away</strong></span>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Casagrand+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold banner-directions-btn"
                >
                  <span>Explore on Maps</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium FAQ Section */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="faq-header">
            <span className="luxury-eyebrow">HELP &amp; TRANSPARENCY</span>
            <h2 className="section-title center">Frequently Asked <span>Questions</span></h2>
            <p className="faq-subtitle">
              Clear answers to help you navigate your journey toward owning a premium Casagrand home.
            </p>
          </div>

          <div className="faq-cards-wrapper">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className={`faq-card ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-card-trigger"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-trigger-left">
                      <span className="faq-index">{String(i + 1).padStart(2, "0")}</span>
                      <span className="faq-question-text">{f.q}</span>
                    </div>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-card-body">
                    <div className="faq-answer-inner">
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury VIP Footer & Enquiry Suite */}
      <footer className="luxury-footer" id="enquire">
        <div className="container">
          <div className="luxury-footer-suite">
            {/* Left Column: Brand, Privileges & Concierge Desk */}
            <div className="luxury-footer-brand-pane">
              <span className="luxury-footer-eyebrow">✦ DIRECT DEVELOPER PRIVILEGES</span>
              <h2 className="luxury-footer-title">
                Connect With Our Senior <span>Property Specialists</span>
              </h2>
              <p className="luxury-footer-desc">
                Gain direct access to verified launch price sheets, unit inventory, high-definition floor plans, and complimentary VIP site visits across Chennai.
              </p>

              <div className="luxury-footer-perks">
                <div className="luxury-perk-item">
                  <span className="perk-check">✓</span>
                  <div>
                    <strong>100% RERA Registered Projects</strong>
                    <p>Clear legal titles &amp; pre-approved bank loans</p>
                  </div>
                </div>
                <div className="luxury-perk-item">
                  <span className="perk-check">✓</span>
                  <div>
                    <strong>Zero Brokerage Guarantee</strong>
                    <p>Direct-from-developer launch pricing benefits</p>
                  </div>
                </div>
                <div className="luxury-perk-item">
                  <span className="perk-check">✓</span>
                  <div>
                    <strong>15-Minute Priority Callback</strong>
                    <p>Dedicated Relationship Manager assigned</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Luxury VIP Enquiry Card */}
            <div className="luxury-footer-form-pane">
              <div className="luxury-enquiry-card">
                <EnquiryForm />
              </div>
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div className="luxury-footer-bottom">
            <div className="luxury-footer-copy-row">
              <p className="copyright-text">
                © {new Date().getFullYear()} Casagrand Premier Builder Limited. All Rights Reserved.
              </p>
              <div className="luxury-rera-tag">
                <span className="rera-shield">🛡️</span> TNRERA Registered Developer
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Dock (Pinned to right viewport edge) */}
      <aside className="floating-side-dock" aria-label="Quick contact dock">
        <a
          href={`tel:${PHONE}`}
          className="floating-side-tab call-tab"
          aria-label={`Call us at ${PHONE_LABEL}`}
          title={`Call us at ${PHONE_LABEL}`}
        >
          <PhoneRingingIcon />
        </a>

        <button
          type="button"
          className="floating-side-tab enquire-tab"
          onClick={() => openEnquiry("Get Project Details Instantly")}
          aria-label="Enquire Now"
          title="Enquire Now"
        >
          <span>ENQUIRE NOW</span>
        </button>

        <a
          href={`https://wa.me/${PHONE.replace("+", "")}?text=Hi,%20I'm%20interested%20in%20Casagrand%20properties.%20Please%20share%20details.`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-side-tab whatsapp-tab"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </aside>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEnquire={(title, projectName) => openEnquiry(title, projectName)}
        />
      )}

      <EnquiryModal
        isOpen={enquiryModal.open}
        onClose={closeEnquiry}
        title={enquiryModal.title}
        projectName={enquiryModal.projectName}
      />
    </>
  );
}
