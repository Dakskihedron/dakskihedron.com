<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { ProjectObj } from "../data/ProjectData.js";

defineProps<{
    projects: ProjectObj[];
}>();
</script>

<template>
    <div class="mb-8 p-4">
        <div class="mb-4 text-left text-3xl font-bold">Projects & Stuff</div>
        <div class="grid grid-cols-3 gap-5">
            <ProjectCard
                v-for="project in projects"
                :name="project.name"
                :desc="project.desc"
                :href="project.href" />
        </div>
    </div>
</template>
