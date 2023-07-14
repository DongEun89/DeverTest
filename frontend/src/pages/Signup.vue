<template>
  <h4>정말로 회원가입하시겠습니까?</h4>
  <button @click="모달창열렸니 = true">네</button>
  <button @click="모달창열렸니 = false">아니오</button>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>회원가입페이지</h4>

      <div class="input_row">
        <label for="id">아이디</label>
        <input type="text" id="id" v-model="user.userid" />
      </div>
      <div class="input_row">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="user.name" />
      </div>
      <div class="input_row">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="user.password" />
      </div>

      <button :click="signUp">가입하기</button>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      모달창열렸니: false,
      user: {
        userid: "",
        name: "",
        password: "",
      },
      methods: {
        signUp: function () {
          this.$http
            .post("/api/users/signUp", {
              user: this.user,
            })
            .then((res) => {
              if (res.data.success == true) {
                alert(res.data.message);
                this.$router.push("/login");
              }
              if (res.data.success == false) {
                alert(res.data.message);
              }
            })
            .catch(function () {
              alert("error");
            });
        },
      },
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
