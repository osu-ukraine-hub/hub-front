<script setup lang="ts">
interface BlockLinkProps {
    active?: boolean;
    icon: string;
}

const { active, icon } = defineProps<BlockLinkProps>();
const imageUrl: string = new URL(`/src/assets/icons/${icon}`, import.meta.url).href;
</script>

<template>
    <div :class="'block-link' + ' ' + (active ? 'block-link--active' : '')">
        <div class="block-link__inner">
            <img :src="imageUrl" />
            <span><slot></slot></span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/variables';

.block-link {
    position: relative;
    padding: 12px;
    background-color: $greyTranslucent;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    transition: .1s linear;
    
    &:hover {
        background-color: $purpleTranslucent;
        
        .block-link__inner {
            background-color: $purpleTranslucent;

            img {
                filter: brightness(0);
            }

            span {
                color: $textBlack;
            }
        }
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        border-radius: 8px;
        box-shadow: 0px 4px 40px 0 rgba(0, 0, 0, 0.2);
    }
}

.block-link--active {
    background-color: $purpleTranslucent;
    color: $textBlack;

    .block-link__inner {
        background-color: $purpleTranslucent;

        span {
            color: $textBlack;
        }
    }

    &:hover {
        box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1);
        background-color: rgba($purpleTranslucent, 100%);
    }
}

.block-link__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 40px 0;
    background-color: $greyTranslucent;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    transition: .05s linear;

    span {
        color: $linkNeutral;
        transition: .05s linear;
    }

    img {
        max-width: 32px;
    }
}
</style>