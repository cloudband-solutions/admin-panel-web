import {
  faDashboard,
  faGears
} from "@fortawesome/free-solid-svg-icons";

export const navigationServices = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Monitor accounts, revenue, alerts, and current platform activity.",
    path: "/",
    icon: faDashboard,
    keywords: ["overview", "operations", "analytics", "metrics"]
  },
  {
    id: "settings",
    label: "Settings",
    description: "Adjust admin preferences, access controls, and platform configuration.",
    path: "/settings",
    icon: faGears,
    keywords: ["configuration", "preferences", "admin", "controls"]
  }
];
