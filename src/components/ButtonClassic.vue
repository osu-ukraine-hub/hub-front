<script setup lang="ts">
interface ButtonClassicProps {
    cssClass?: string;
}

const { cssClass } = defineProps<ButtonClassicProps>();
</script>

<template>
    <div :class="'button-classic' + ' ' + cssClass">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/variables';

.button-classic {
    border-radius: 4px;
    padding: 5px;
    height: fit-content;

    div:nth-child(1) {
        background-color: inherit;
        border-radius: 4px;
        height: fit-content;
    }
}
</style>