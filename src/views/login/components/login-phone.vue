<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="phone">
      <el-form-item label="账号" prop="phone">
        <el-input v-model="phone.phoneNum" type="username" />
      </el-form-item>

      <el-form-item label="验证码" prop="password">
        <div class="verified-code">
          <el-input type="password" />
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/phone-config";

export default defineComponent({
  setup() {
    const phone = reactive({
      phoneNum: "",
    });
    return {
      phone,
      rules,
    };
  },
});
</script>

<style scoped lang="less">
.verified-code {
  display: flex;
}
.get-code-btn {
  margin-left: 15px;
}
</style>
