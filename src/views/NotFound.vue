<script setup lang="ts">

</script>

<template>
    <div class="not-found-container">
        <div class="not-found__bg">
            <span v-for="n in 256">404</span>
        </div>
        <p>It seems that you're lost . . .</p>
        <router-link to="/">
            <ButtonClassic cssClass="classic-button--404">return to home</ButtonClassic>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
@import '@/variables';
.not-found-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    height: 100vh;
    overflow: hidden;
    box-shadow: inset 0px 4px 50px 14px rgba(0, 0, 0, 0.5);

    h2 {
        font-size: 24px;
        color: $textNeutral;   
    }
}

.not-found__bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(20, 1fr);
    place-items: center;
    row-gap: 14px;
    z-index: -1;
    user-select: none;
    -webkit-user-drag: none;

    span {
        height: fit-content;
        font-size: 32px;
        font-weight: 700;
        color: rgba($redTranslucent, 10%);
    }
}

.classic-button--404 {
    margin-top: 18px;
    background-color: $purpleTranslucent;
    color: $textBlack;
    box-shadow: 0px 4px 50px 14px rgba(0, 0, 0, 0.1);
    transition: .1s linear;

    :nth-child(1) {
        padding: 8px 24px;
    }

    &:hover {
        box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1);
        background-color: rgba($purpleTranslucent, 100%);
    }
}
</style>