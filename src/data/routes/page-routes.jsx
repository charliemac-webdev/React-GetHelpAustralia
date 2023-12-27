const pageRoutes = [
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/privacy",
    component: "Privacy",
  },
  {
    path: "/resources",
    component: "Resources",
  },
  {
    path: "/modal",
    component: "Modal",
  },
  {
    path: "*",
    component: "Error",
  },
];

export default pageRoutes;
