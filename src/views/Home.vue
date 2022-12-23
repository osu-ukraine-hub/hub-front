<script setup lang="ts">
import NewsShowcase from "@/components/NewsShowcase.vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
</script>

<template>
	<ContainerWide cssClass="main-page-container">
		<section class="main-page__essentials">
			<img class="img-decoration" src="@/assets/backgrounds/bg1.png" />
			<img class="img-decoration--stripe" src="@/assets/backgrounds/bgStrip.svg" />
			<span v-if="!userStore.isLoggedIn">hi! meet the</span>
			<span v-else="userStore.isLoggedIn">welcome to</span>
			<h1>Ukrainian osu!&nbsp;Community</h1>
			<div class="main-page__essentials__links">
				<BlockLink view="comingsoon" icon="tournaments.svg">Tournaments</BlockLink>
				<a v-if="!userStore.isLoggedIn" href="http://localhost:8080/auth/osu">
					<BlockLink view="active" icon="userProfile.svg">Login</BlockLink>
				</a>
				<BlockLink v-else view="disabled" :avatar="`https://a.ppy.sh/${userStore.$state.user.osuId}`">{{ userStore.$state.user.username }}</BlockLink>
				<router-link to="/news">
					<BlockLink icon="news.svg">News</BlockLink>
				</router-link>
				<a href="">
					<BlockLink icon="discordLogo.svg">Discord</BlockLink>
				</a>
				<a href="">
					<BlockLink icon="youtubeLogo.svg">Youtube</BlockLink>
				</a>
			</div>
		</section>
		<section class="main-page__news">
			<img class="img-decoration" src="@/assets/backgrounds/bg2.png" />
			<img class="img-decoration" src="@/assets/backgrounds/bg3.png" />
			<NewsShowcase />
		</section>
	</ContainerWide>
	<Footer type="wide"></Footer>
</template>

<style scoped lang="scss">
@import "@/variables";

.main-page-container {
	display: flex;
	justify-content: space-between;
	padding: 100px 0 140px 0;
}

.main-page__essentials {
	position: relative;
	max-width: 723px;

	.img-decoration:nth-child(1) {
		position: absolute;
		top: -100px;
		right: 0;
		z-index: -1;
	}

	.img-decoration--stripe:nth-child(2) {
		position: absolute;
		top: 151px;
		left: -240px;
	}
}

span {
	font-size: 18px;
	font-style: italic;
}

h1 {
	margin-top: 12px;
	font-size: 92px;
	font-weight: 700;
	color: $textAccent;
}

.main-page__essentials__links {
	margin-top: 37px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 18px;

	:nth-child(1) {
		grid-column: 1 / 3;
	}
}

.main-page__news {
	position: relative;
	max-width: 603px;
	padding-top: 128px;
	padding-right: 18px;

	.img-decoration:nth-child(1) {
		position: absolute;
		top: -100px;
		left: 18px;
	}

	.img-decoration:nth-child(2) {
		position: absolute;
		top: -100px;
		right: -18px;
	}
}
</style>
