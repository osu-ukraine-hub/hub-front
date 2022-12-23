<script setup lang="ts">
import { useUserStore } from "@/stores/userStore";

interface HeaderProps {
  type?: string
}

const { type } = defineProps<HeaderProps>();
const userStore = useUserStore();
</script>

<template>
<header :class="'header--' + type">
    <p>ukrainian osu! community</p>
    <div class="header__navigation">
        <span>logged in as <a href="" @click.prevent>{{ userStore.$state.user.username }}</a></span>
        <img class="header__avatar" :src="`https://a.ppy.sh/${userStore.$state.user.osuId}`">
        <ButtonClassic cssClass="menu-btn">
            <img src="@/assets/icons/burgerMenu.svg" />
        </ButtonClassic>
    </div>
</header>
</template>

<style scoped lang="scss">
@import '@/variables';

header {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 18px 0;
    z-index: 5;

    p {
        font-weight: 500;
        font-size: 18px; 
        color: $textNeutral;
        padding: 5px 10px;
        border-radius: 4px;
        background-color: $greyBackground;
    }

    span {
        margin-right: 8px;
        font-weight: 500;
        font-size: 18px;
        color: $textGrey;
    }

    a {
        color: $linkNeutral;
        transition: .1s linear;

        &:hover {
		    color: $linkNeutral;
	    }
    }
}

.header__navigation {
    display: flex;
    align-items: center;
}

.header__avatar {
    margin-right: 24px;
}

.header--wide {
    max-width: 1440px;
}

.header--regular {
    max-width: 1024px;
}
</style>