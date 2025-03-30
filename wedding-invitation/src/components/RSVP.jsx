import React, { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({ name: '', email: '', attending: 'yes' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show modal instead of alert
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', attending: 'yes' }); // Reset form after closing modal
  };

  return (
    <section className="rsvp">
      <h3>RSVP</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <select name="attending" value={formData.attending} onChange={handleChange}>
          <option value="yes">Yes, I will attend</option>
          <option value="no">Sorry, I can't make it</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {/* Overlay Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Thank You, {formData.name}!</h4>
            <p>We have received your RSVP.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default RSVP;
