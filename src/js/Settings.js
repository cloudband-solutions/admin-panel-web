import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faShieldHalved,
  faUserGear
} from "@fortawesome/free-solid-svg-icons";
import AdminContent from "./commons/AdminContent";
import PageHeader from "./commons/PageHeader";

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
      <PageHeader
        title="Settings"
      />

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
