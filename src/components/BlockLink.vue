<script setup lang="ts">
interface BlockLinkProps {
    view?: string;
    icon?: string;
    avatar?: string;
}

const { view, icon, avatar } = defineProps<BlockLinkProps>();
const imageUrl: string = icon ? new URL(`/src/assets/icons/${icon}`, import.meta.url).href : '';
</script>

<template>
    <div :class="`block-link block-link--${view}`">
        <div class="block-link__inner">
            <img v-if="icon" class="block-link__icon" :src="imageUrl" />
            <img v-if="avatar" class="header__avatar" :src="avatar" />
            <span>
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/variables';

.block-link {
    position: relative;
    padding: 12px;
    height: 100%;
    background-color: $greyTranslucent;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    transition: .1s linear;

    &:hover {
        background-color: $purpleTranslucent;

        .block-link__inner {
            background-color: $purpleTranslucent;

            .block-link__icon {
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

.block-link__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    gap: 10px;
    padding: 40px 0;
    background-color: $greyTranslucent;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    transition: .05s linear;

    span {
        max-width: 200px;
        overflow-wrap: break-word;
        text-align: center;
        color: $linkNeutral;
        transition: .05s linear;
    }

    .block-link__icon {
        max-width: 32px;
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

.block-link--comingsoon, .block-link--disabled {
    background-color: darken($greyTranslucent, 5%);

    .block-link__inner {
        background-color: darken($greyTranslucent, 5%);

        .block-link__icon {
            filter: saturate(0);
        }
    }

    &:hover {
        background-color: darken($greyTranslucent, 5%);

        .block-link__inner {
            background-color: darken($greyTranslucent, 5%);

            .block-link__icon {
                filter: saturate(0);
            }
        }
    }
}

.block-link--comingsoon {
    &::after {
        content: 'coming soon !';
        position: absolute;
        top: -8px;
        left: -8px;
        display: block;
        width: fit-content;
        padding: 4px;
        border-radius: 4px;
        background-color: rgba($redTranslucent, 100%);
        transform: rotate(-15deg);
    }

    .block-link__inner {
        span {
            filter: saturate(0);
        }
    }

    &:hover {
        .block-link__inner {
            span {
                color: $linkNeutral;
            }
        }
    }
}

.block-link--disabled {
    .block-link__inner {
        span {
            color: $textNeutral;
        }
    }

    &:hover {
        .block-link__inner {
            span {
                color: $textNeutral;
            }
        }
    }
}
</style>