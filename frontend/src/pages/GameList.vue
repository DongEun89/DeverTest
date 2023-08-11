<template>
    <div>
        <button @click="gugudan">구구단</button>
        <button @click="lastword">끝말잇기</button>
        <button @click="numberbaseball">숫자야구</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const gugudan = () => {
    router.push({
        path: "gugudan",
    });
};

const lastword = () => {
    router.push({
        path: "lastword",
    });
};

const numberbaseball = () => {
    router.push({
        path: "numberbaseball",
    });
};
</script>
