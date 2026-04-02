import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { navigationServices } from "./navigationServices";

export default Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? 'active' : 'close'}`}>
      <a
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="logo-details">
          <i className="clickable">
            <FontAwesomeIcon icon={faBars}/>
          </i>
          <span className="logo-name">
            AD
          </span>
        </div>
      </a>
      <ul className="nav-links">
        {navigationServices.map((service) => {
          return (
            <li className={location.pathname == service.path ? "active" : ""} key={service.id}>
              <a
                onClick={() => {
                  navigate(service.path);
                }}
              >
                <i>
                  <FontAwesomeIcon icon={service.icon}/>
                </i>
                <span className="link-name">
                  {service.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
