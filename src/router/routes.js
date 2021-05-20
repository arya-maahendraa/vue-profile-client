const routes = [
   {
      path: "/",
      component: () => import("layouts/MainLayout.vue"),
      children: [{ path: "", component: () => import("pages/Index.vue") }],
   },

   {
      path: "/auth",
      component: () => import("layouts/AuthLayout.vue"),
      children: [
         { path: "", component: () => import("pages/Error404.vue") },
         { path: "signin", component: () => import("pages/auth/Login.vue") },
         { path: "signup", component: () => import("pages/auth/Signup.vue") },
      ],
   },

   // Always leave this as last one,
   // but you can also remove it
   {
      path: "/:catchAll(.*)*",
      component: () => import("pages/Error404.vue"),
   },
];

export default routes;
