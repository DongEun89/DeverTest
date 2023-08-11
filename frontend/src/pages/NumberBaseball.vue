<!-- <template>
    <div>
        <h1>{{ result }}</h1>
        <form @submit.prevent="onSubmitForm">
            <input
                ref="answer"
                type="text"
                minlength="4"
                maxlength="4"
                v-model="value"
            />
            <button type="submit">입력</button>
        </form>
        <div>시도: {{ tries.length }}</div>
        <ul>
            <li v-for="t in tries" :key="t.id">
                <div>{{ t.try }}</div>
                <div>{{ t.result }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";

const getNumbers = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const random = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(random);
    }
    return array;
};

const answer = ref(getNumbers());
const tries = ref([]);
const value = ref("");
const result = ref("");
const id = ref(0);

const onSubmitForm = () => {
    if (value === answer.value.join("")) {
        tries.value.push({
            try: value,
            result: "홈런",
            id: id.value++,
        });
        result.value = "홈런";
        alert("게임을 다시 실행합니다");
        answer.value = getNumbers();
        tries.value = [];
        value.value = "";
    } else {
        if (tries.value.length >= 9) {
            result.value = `10번 넘게 틀려서 실패!! 
          답은 ${answer.value.join(", ")}였습니다`;
            alert("게임을 다시 실행합니다");
            answer.value = getNumbers();
            value.value = "";
            tries.value = [];
        }
        let ball = 0;
        let strike = 0;
        const answerArray = value.split("").map((v) => parseInt(v));
        for (let i = 0; i < 4; i++) {
            if (answerArray[i] === answer.value[i]) {
                strike++;
            } else if (answer.value.includes(answerArray[i])) {
                ball++;
            }
        }
        tries.value.push({
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다`,
            id: id.value++,
        });
        value.value = "";
    }
};
</script> -->
<template>
    <div>숫자야구</div>
</template>

<script setup></script>
