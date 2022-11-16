<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';

const store = useGlobalStore();
</script>

<template>
    <h1>Home</h1>
    <h4>Count {{ store.count }}</h4>
    <a href="" @click.prevent="store.increaseCount">Increase count;</a>
</template>

<style>

</style>