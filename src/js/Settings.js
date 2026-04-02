import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faShieldHalved,
  faUserGear
} from "@fortawesome/free-solid-svg-icons";
import AdminContent from "./commons/AdminContent";

const settingGroups = [
  {
    title: "Access Control",
    description: "Review role assignments, session policies, and privileged routes.",
    icon: faShieldHalved
  },
  {
    title: "Workspace Preferences",
    description: "Tune console defaults, search shortcuts, and operator preferences.",
    icon: faUserGear
  }
];

export default Settings = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <div>
        <p className="text-uppercase text-muted small fw-semibold mb-1">
          Administration
        </p>
        <h1 className="h3 mb-1">
          Settings
        </h1>
        <p className="text-muted mb-0">
          Manage the configuration surfaces linked from the sidebar and service search.
        </p>
      </div>

      <div className="row g-3">
        {settingGroups.map((group) => {
          return (
            <div className="col-12 col-lg-6" key={group.title}>
              <AdminContent
                title={(
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon icon={group.icon} />
                    <span>{group.title}</span>
                  </div>
                )}
              >
                <div className="d-flex align-items-start gap-3">
                  <span className="badge rounded-pill text-bg-secondary p-3">
                    <FontAwesomeIcon icon={faGears} />
                  </span>
                  <p className="mb-0 text-muted">
                    {group.description}
                  </p>
                </div>
              </AdminContent>
            </div>
          );
        })}
      </div>
    </div>
  );
}
