<template>
    <!-- <h3>{{ name }}</h3> -->
    <h1>{{ first }}</h1>
    <form v-on:submit="onSubmitForm">
        <input type="text" v-model="input_value" />
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
const first = ref("밥집");
const input_value = ref("");
const result = ref("");
const count = ref(0);

const onSubmitForm = (e) => {
    e.preventDefault();

    if (first.value[first.value.length - 1] === input_value.value[0]) {
        result.value = "정답!";
        first.value = input_value.value;
        input_value.value = "";
        count.value += 1;
    } else {
        result.value = "땡!";
        input_value.value = "";
    }
};

function Back() {
    router.push({
        path: "gamelist",
    });
}
</script>
