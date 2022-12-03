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

    :nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: inherit;
        border-radius: 4px;
    }
}
</style>