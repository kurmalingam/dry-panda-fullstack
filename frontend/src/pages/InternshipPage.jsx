// src/pages/InternshipPage.jsx
import React, { useState } from "react";
import InternshipCard from "../components/Internships/InternshipCard";
import InternshipModal from "../components/Internships/InternshipModal";
import { internshipsData } from "../components/Internships/InternshipData";
import "./InternshipPage.css";

const InternshipPage = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleCardClick = (code) => {
    const selected = internshipsData.find((i) => i.code === code);
    setSelectedInternship(selected);
    setModalShow(true);
  };

  const internships = [
    {
      iconClass: "fa-clipboard-list",
      iconColor: "text-primary",
      title: "Market Survey Intern",
      code: "IP-01",
      description:
        "Conduct surveys, analyze market trends, and assist with competitor research.",
      btnColor: "primary",
    },
    {
      iconClass: "fa-bullhorn",
      iconColor: "text-warning",
      title: "Digital Marketing Intern",
      code: "IP-02",
      description:
        "Create content, manage social media, and support digital campaigns.",
      btnColor: "warning",
    },
    {
      iconClass: "fa-seedling",
      iconColor: "text-success",
      title: "Drying Process Research Intern",
      code: "IP-03",
      description:
        "Assist in drying experiments, analyze results, and review solar drying tech.",
      btnColor: "success",
    },
    {
      iconClass: "fa-cogs",
      iconColor: "text-secondary",
      title: "Product Development Intern",
      code: "IP-04",
      description:
        "Support design, testing, and improvements for products and machines.",
      btnColor: "secondary",
    },
    {
      iconClass: "fa-pen-nib",
      iconColor: "text-info",
      title: "Technical Writing Intern",
      code: "IP-05",
      description:
        "Create manuals and documents that simplify technical information.",
      btnColor: "info",
    },
    {
      iconClass: "fa-truck",
      iconColor: "text-danger",
      title: "Accounting & Logistics Intern",
      code: "IP-06",
      description:
        "Help manage finances, inventory, and logistics operations.",
      btnColor: "danger",
    },
  ];

  return (
    <>
      <div className="container-fluid internship-page">
        <div className="text-center">
          <marquee behavior="scroll" id="marquee">
            ⭐Your Internship journey begins here - we're hiring!⭐
          </marquee>
        </div>
        <div className="page-header">
          <h2>📣 Internship Opportunities</h2>
          <p>
            Explore exciting unpaid internships at Dry Pandas and apply to grow your skills!
          </p>
        </div>

        <section className="internships">
          <div className="row">
            {internships.map((intern, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <InternshipCard {...intern} onClick={() => handleCardClick(intern.code)} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <InternshipModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={selectedInternship}
      />

      <footer className="text-white text-center py-3">
        <div className="small">
          &copy; 2025 <strong>Dry Pandas</strong>. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default InternshipPage;

