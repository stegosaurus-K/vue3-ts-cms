import { reactive } from "vue";
import type { FormRules } from "element-plus";

export const rules = reactive<FormRules>({
  phone: [
    {
      required: true,
      message: "情输入手机号",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{11}$/,
      message: "手机号为11位",
      trigger: "blur",
    },
  ],
  verified: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
  ],
});
