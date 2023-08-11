<template>
  <h4>정말로 회원가입하시겠습니까?</h4>
  <button @click="OnModal = true">네</button>
  <button @click="OnModal = false">아니오</button>
  <div class="black-bg" v-if="OnModal == true">
    <div class="white-bg">
      <h1>사용자 정보를 입력하세요.</h1>
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
      <button @click="OnModal = false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      OnModal: false,
      user: {
        userid: "",
        name: "",
        password: "",
      },
      methods: {
        OnModal() {
          this.$router.push({
            path: "login",
          });
        },
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
