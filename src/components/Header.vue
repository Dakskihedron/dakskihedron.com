<script setup lang="ts">
import HeaderLink from "./HeaderLink.vue";
import { HeaderLinkObj } from "../data/HeaderLinks.js";

defineProps<{
    links: HeaderLinkObj[];
}>();
</script>

<template>
    <div class="grid h-[350px] grid-cols-[55%,45%] p-4">
        <div class="grid h-full place-items-center">
            <div class="text-left">
                <div class="text-7xl font-bold text-teal-600">Nathan Zhou</div>
                <div class="text-2xl">Fullstack Computer Science Student</div>
                <div class="mt-1 flex gap-4 p-1.5">
                    <HeaderLink v-for="link in links" :href="link.href" :icon="link.icon" />
                </div>
            </div>
        </div>
        <div class="grid h-full place-items-center">
            <!-- <img class="h-[18.75rem] w-[18.75rem]" src="" alt="Need to put something here."> -->
        </div>
    </div>
</template>
