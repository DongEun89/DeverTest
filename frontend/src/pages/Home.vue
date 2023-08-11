<template>
    <div>
        <button @click="login">로그인</button>
        <button @click="signup">회원가입</button>
        <button @click="mypage">마이페이지</button>
        <button @click="gamelist">게임하러가기</button>
    </div>
    <h1>사용자 정보를 입력하세요.</h1>
    <form name="user" method="post" action="/api/user">
        <div class="input-row">
            <label for="userid">아이디</label>
            <input id="userid" name="userid" type="text" />
        </div>
        <div class="input-row">
            <label for="name">이름</label>
            <input id="name" name="name" type="text" />
        </div>
        <div class="input-row">
            <label for="address">주소</label>
            <input id="address" name="address" type="text" />
        </div>
        <button type="submit">전송</button>
    </form>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
    router.push({
        path: "login",
    });
};

const signup = () => {
    router.push({
        path: "signup",
    });
};

const mypage = () => {
    router.push({
        path: "mypage",
    });
};

const gamelist = () => {
    router.push({
        path: "gamelist",
    });
};
</script>
