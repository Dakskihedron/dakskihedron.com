<script setup lang="ts">
defineProps<{
    icon: string;
    href: string;
}>();
</script>

<template>
    <a :href="href" target="_blank">
        <font-awesome-icon
            class="text-inherit duration-100 hover:scale-125"
            :icon="icon"
            size="2x" />
    </a>
</template>
