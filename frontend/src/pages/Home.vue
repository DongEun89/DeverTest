<template>
  <div>
    <button @click="login">로그인</button>
    <button @click="signup">회원가입</button>
    <!-- <button @click="mypage">마이페이지</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({
        path: "login",
      });
    },
    signup() {
      this.$router.push({
        path: "signup",
      });
    },
    // mypage() {
    //   this.$router.push({
    //     path: "mypage",
    //   });
    // },
  },
};
</script>
