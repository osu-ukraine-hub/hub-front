<script setup lang="ts">
interface ContainerProps {
  type?: string
}

const { type } = defineProps<ContainerProps>();
</script>

<template>
<footer :class="'footer--' + type">
    <span>developed by <a href="" target="_blank">@markgs</a> and <a href="" target="_blank">@alowave</a></span>
    <span>&copy;2022</span>
    <span>if you're reading this you're awesome</span>
</footer>
</template>

<style scoped lang="scss">
@import '@/variables';

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 72px 0 115px 0;

    span {
        font-weight: 500;
        font-size: 14px;
        color: $textDarkGrey;
    }

    a {
        color: $textDarkGrey;
        transition: .1s linear;

        &:hover {
		    color: $linkNeutral;
	    }
    }
}

.footer--wide {
    max-width: 1440px;
}

.footer--regular {
    max-width: 1024px;
}
</style>