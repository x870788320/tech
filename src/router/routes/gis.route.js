export default {
    name: "gismap",
    path: "/gismap",
    meta: { permissions: 6 },
    component: () =>
        import ("@/pages/Openlayers.vue")
}

// {
//     name: "home",
//     path: "/home",
//     component: () => import("@/pages/Home.vue")
// }