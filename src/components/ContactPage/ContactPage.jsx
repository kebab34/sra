import React, { useState, useRef } from 'react';
import SEO from '../SEO/SEO';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const EMAILJS_SERVICE_ID = 'service_g7n44za';
const EMAILJS_TEMPLATE_ID = 'template_h21sury';
const EMAILJS_PUBLIC_KEY = '9tPG038VQ7DsyqKAq';

const ContactPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setErrorMessage('An error occurred. Please try again or contact us directly.');
        console.error('EmailJS Error:', error);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section className="contact-page">
      <SEO
        title="Contact — SRA Global Trading Dubai"
        description="Contact SRA Global Trading for enquiries, quotes or partnerships. Our team in Dubai is ready to assist you."
        canonical="/contact"
      />
      <div className="contact-header">
        <div className="gold-line"></div>
        <h2 className="contact-title">CONTACT US</h2>
        <p className="contact-subtitle">Our team is available to answer all your enquiries</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3 className="info-title">Our Details</h3>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Address</h4>
              <p>Latifa Tower B2007</p>
              <p>Sheikh Zayed Road</p>
              <p>Dubai, UAE</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Phone</h4>
              <a href="tel:+971504802902">+971 50 480 2902</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <a href="mailto:contact@sraglobaltrading.com">contact@sraglobaltrading.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Business Hours</h4>
              <div className="horaires">
                <div className="horaire-row">
                  <span className="jour">Monday</span>
                  <span className="heures">09:00 – 18:00</span>
                </div>
                <div className="horaire-row">
                  <span className="jour">Tuesday</span>
                  <span className="heures">09:00 – 18:00</span>
                </div>
                <div className="horaire-row">
                  <span className="jour">Wednesday</span>
                  <span className="heures">09:00 – 18:00</span>
                </div>
                <div className="horaire-row">
                  <span className="jour">Thursday</span>
                  <span className="heures">09:00 – 18:00</span>
                </div>
                <div className="horaire-row">
                  <span className="jour">Friday</span>
                  <span className="heures">09:00 – 13:00</span>
                </div>
                <div className="horaire-row">
                  <span className="jour">Saturday</span>
                  <span className="heures">09:00 – 14:00</span>
                </div>
                <div className="horaire-row ferme">
                  <span className="jour">Sunday</span>
                  <span className="heures">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h3 className="form-title">Send us a Message</h3>

          {submitStatus === 'success' && (
            <div className="success-message">
              Your message has been sent successfully. We will get back to you shortly.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1cbe99!2sLatifa%20Tower%2C%20Sheikh%20Zayed%20Rd%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SRA Global Trading — Latifa Tower, Dubai"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
