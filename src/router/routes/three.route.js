export default {
    name: "three",
    path: "/three",
    meta: { permissions: 2 },
    component: () =>
        import ("@/pages/Three.vue")
}