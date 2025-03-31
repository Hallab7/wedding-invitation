import React, { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({ name: '', email: '', attending: 'yes' });
  const [showModal, setShowModal] = useState(false);

  const TELEGRAM_BOT_TOKEN = "7986937964:AAFWc3WNcr2XKx6Dtl-VIjwQM2QZodGVFSQ";
  const TELEGRAM_CHAT_ID = "5904861631";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async (data) => {
    const message = `📩 New RSVP Submission\n\n👤 Name: ${data.name}\n📧 Email: ${data.email}\n🎉 Attending: ${data.attending}`;
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send RSVP to Telegram
    await sendToTelegram(formData);
    // Send email only if attending
    if (formData.attending === "yes") {
      await fetch("https://my-rsvp-app.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }
    setShowModal(true);
    
  };
  
  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', attending: 'yes' });
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
