<template>
    <!-- <h3>{{ name }}</h3> -->
    <h1>{{ first }} 곱하기 {{ second }}(은)는?</h1>
    <form v-on:submit="onSubmitForm">
        <input type="number" v-model="value" />
        <button type="submit">입력</button>
    </form>
    <h2 id="result">{{ result }}</h2>
    <h1>맞힌 개수 : {{ count }}</h1>
    <button @click="Back">다른 게임 하러 가기</button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// const name = ref("윌슨");
const first = ref(Math.ceil(Math.random() * 9));
const second = ref(Math.ceil(Math.random() * 9));
const value = ref("");
const result = ref("");
const count = ref(0);

const onSubmitForm = (e) => {
    e.preventDefault();

    if (first.value * second.value === parseInt(value.value)) {
        result.value = "정답!";
        first.value = Math.ceil(Math.random() * 9);
        second.value = Math.ceil(Math.random() * 9);
        value.value = "";
        count.value += 1;
    } else {
        result.value = "땡!";
        value.value = "";
    }
};

function Back() {
    router.push({
        path: "gamelist",
    });
}
</script>
