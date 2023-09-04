import dayjs from "dayjs";
import ptbr from "dayjs/locale/pt-br";
export default defineNuxtPlugin(() => {
  dayjs.locale(ptbr);
});
