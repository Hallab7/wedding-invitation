import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMap } from 'react-icons/fa';

const Venue = () => (
  <section className="venue bg-gray-100 p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
      <FaCalendarAlt className="text-purple-700" /> May 31st, 2025
    </h3>

    <p className="flex items-center gap-2 mb-2 text-gray-800">
      <FaClock className="text-purple-700" /> Arrival: 9:00 AM | Program Start: 10:00 PM
    </p>

    <p className="flex items-center gap-2 mb-4 text-gray-800">
      <FaMapMarkerAlt className="text-purple-700" /> Royal Seed Hall, before Akinyele, Oyo-Ibadan Expressway
    </p>

    <div className="map">
    <a 
  href="https://maps.app.goo.gl/8giT1U9dmhFHuZPs9" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="animated-btn">
    <FaMap /> View Location on Map
  </button>
</a>

    </div>
  </section>
);

export default Venue;
