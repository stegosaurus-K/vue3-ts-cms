<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";

import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = () => {
      // 验证登录
      formRef.value?.validate((valid) => {
        console.log(valid);
      });
    };

    return {
      rules,
      account,
      loginAction,
      formRef,
    };
  },
});
</script>

<style></style>
