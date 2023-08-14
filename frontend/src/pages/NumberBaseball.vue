<template>
    <div>
        <h1>{{ result }}</h1>
        <form @submit.prevent="onSubmitForm">
            <input ref="answer" minlength="4" maxlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div>시도: {{ tries.length }}</div>
        <ul>
            <li v-for="t in tries" :key="t.try">
                <div>{{ t.try }}</div>
                <div>{{ t.result }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidates.splice(
            Math.floor(Math.random() * (9 - i)),
            1
        )[0];
        //랜덤숫자 하나 뽑고
        array.push(chosen);
        console.log(chosen);
        //array에 넣어준다
        //총 네 번 하니까 4자리 숫자가 생길 것이다
    }
    return array;
};
export default {
    // 여기서 NumberBaseball를 export 해주고 있다
    data() {
        return {
            answer: getNumbers(), // ex) [1,5,3,4]
            tries: [], // 시도 횟수
            value: "", // 입력 값
            result: "", // 결과
        };
    },
    methods: {
        onSubmitForm() {
            if (this.value === this.answer.join("")) {
                // 정답이 각각 하나의 숫자로 이뤄진 배열이었어서 join으로 비교한다
                // 정답 맞힌 경우에는
                this.tries.push({
                    try: this.value,
                    result: "홈런!",
                });
                this.result = "홈런";
                alert("정답입니다! 게임을 다시 시작합니다.");
                this.value = "";
                this.answer = getNumbers();
                this.tries = [];
                this.$refs.answer.focus();
            } else {
                // 정답 틀렸을 때
                if (this.tries.length >= 9) {
                    // 10번째 시도
                    this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(
                        ","
                    )}였습니다!`;
                    alert("게임을 다시 시작합니다.");
                    // 이 후 모든 값 초기화시킨다
                    this.value = "";
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                }
                let strike = 0;
                let ball = 0;
                const answerArray = this.value
                    .split("")
                    .map((v) => parseInt(v));
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.answer[i]) {
                        // 숫자 자릿수 모두 정답
                        strike++;
                    } else if (this.answer.includes(answerArray[i])) {
                        // 해당 숫자가 자리는 틀리고 답안에 포함되어 있기만 한 경우
                        ball++;
                    }
                }
                this.tries.push({
                    try: this.value,
                    result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                });
                this.value = "";
                this.$refs.answer.focus();
            }
        },
    },
};
</script>

<style></style>
