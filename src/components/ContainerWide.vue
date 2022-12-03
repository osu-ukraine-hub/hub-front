<script setup lang="ts">
interface ContainerProps {
  cssClass?: string
}

const { cssClass } = defineProps<ContainerProps>();
</script>

<template>
    <div :class="'container-wide' + ' ' + cssClass">
        <slot></slot>
    </div>
</template>

<style scoped>
.container-wide {
    margin: 0 auto;
    max-width: 1440px;
}
</style>