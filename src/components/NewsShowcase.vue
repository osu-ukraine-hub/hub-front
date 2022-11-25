<script setup lang="ts">

</script>

<template>
    <div class="news-showcase">
        <div class="news-showcase__thumbnail">
            <div class="thumbnail__bubble"></div>
            <div class="thumbnail__bubble"></div>
            <img src="@/assets/thumbnail.png" />
            <div class="news-showcase__progress-bar"></div>
        </div>
        <h2 class="news-showcase__title">
            UoT: 2022
        </h2>
        <p class="news-showcase__description">
            Annual 1v1 osu tournament for ukrainian players. Now awarding a badge for winners!
        </p>
        <router-link to="/">
            <div class="news-showcase__link">
                learn more
                <img src="@/assets/icons/caretRight.svg">
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
@import '@/variables';
.news-showcase {
    padding: 42px 42px 48px 42px;
    background: $greyTranslucent;
    box-shadow: 0px 4px 50px 14px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-radius: 8px;
}

.news-showcase__thumbnail {
    position: relative;
    max-width: 501px;

    img {
        border-radius: 12px;
        box-shadow: 0px 0px 0px 1px $yellowAccent;
    }
}

.news-showcase__progress-bar {
    position: absolute;
    bottom: 3px;
    width: 75%;
    height: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0px 0px 0px 12px;
}

.news-showcase__title {
    margin-top: 18px;
    font-weight: 700;
    font-size: 24px;
}

.news-showcase__description {
    margin-top: 8px;
    font-weight: 400;
    font-size: 18px;
}

.news-showcase__link {
    position: absolute;
    bottom: -30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 84px);
    padding: 18px 48px;
    background-color: $greyBackground;
    box-shadow: 0px 4px 50px 14px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    color: $linkNeutral;
    font-weight: 600;
    font-size: 18px;
    transition: .1s linear;

    &:hover {
        background-color: $linkNeutral;
        color: black;

        img {
            filter: brightness(0);
        }
    }
}
</style>