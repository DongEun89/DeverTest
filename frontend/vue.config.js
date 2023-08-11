const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

// frontend의 port인 8080이지만 backend의 port인 3000을 연결시켜주기 위해 proxy를 사용
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
};
