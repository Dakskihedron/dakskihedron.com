<script setup lang="ts">
defineProps<{
    name: string;
    desc: string;
    href: string;
}>();
</script>

<template>
    <div
        class="group relative grid h-[350px] grid-rows-[65%,35%] overflow-hidden rounded-xl bg-transparent duration-300 hover:scale-[1.03]">
        <div class="bg-gradient-to-r from-teal-600 to-[#e6aa73]"></div>
        <div class="bg-[#2e2e2e] p-4 text-left group-hover:bg-[#414141]">
            <div class="text-xl font-bold">{{ name }}</div>
            <p class="my-1">{{ desc }}</p>
        </div>
        <a class="absolute top-0 left-0 z-10 h-full w-full" :href="href" target="_blank"></a>
    </div>
</template>
