import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const path = location.pathname;
    if (path === "/") return "projects";
    return path.substring(1);
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab === "projects" ? "" : tab}`);
  };

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="portfolio-container mb-5 overflow-x-auto scrollbar-none">
      <div className="glass-card">
        <div className="flex space-x-8 px-8 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-item py-2 whitespace-nowrap ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
