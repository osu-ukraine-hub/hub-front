<script setup lang="ts">
interface ContainerProps {
  cssClass?: string
}

const { cssClass } = defineProps<ContainerProps>();
</script>

<template>
    <div :class="'container' + ' ' + cssClass">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    margin: 0 auto;
    width: 1024px;
    overflow-x: hidden;
}
</style>