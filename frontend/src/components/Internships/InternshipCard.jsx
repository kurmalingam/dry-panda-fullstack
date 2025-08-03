// --- src/components/Internships/InternshipCard.jsx ---
import React from "react";

const InternshipCard = ({ iconClass, iconColor, title, code, description, btnColor, onClick }) => {
  return (
    <div className="news-card p-4 h-100 shadow-sm rounded bg-white">
      <i className={`fas ${iconClass} fa-2x ${iconColor} mb-3`}></i>
      <h5>
        {title}
        <br />
        (<span>Intern-code</span>: {code})
      </h5>
      <p className={iconColor}>{description}</p>
      <button
        className={`btn btn-outline-${btnColor} read-btn`}
        onClick={onClick}
      >
        Click to Read →
      </button>
    </div>
  );
};

export default InternshipCard;

