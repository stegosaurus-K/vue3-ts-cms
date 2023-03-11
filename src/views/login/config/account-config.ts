import { reactive } from "vue";
import type { FormRules } from "element-plus";

export const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: "用户名必传",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5~10个字母或者数字",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码必传",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{8,}$/,
      message: "密码必须是8位以上个字符或数字",
      trigger: "blur",
    },
  ],
});
