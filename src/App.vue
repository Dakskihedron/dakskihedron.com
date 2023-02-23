<script setup lang="ts">
import Status from "./components/Status.vue";
import Header from "./components/Header.vue";
import Info from "./components/Info.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import HeaderLinkObjects from "./data/HeaderLinks.js";
import ProjectObjects from "./data/ProjectData.js";
</script>

<template>
    <Status></Status>
    <Header :links="HeaderLinkObjects"></Header>
    <Info></Info>
    <Projects :projects="ProjectObjects" />
    <Footer></Footer>
</template>

<style scoped></style>
