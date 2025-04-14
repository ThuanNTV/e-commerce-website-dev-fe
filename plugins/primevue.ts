import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Chart from "primevue/chart";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);

  nuxtApp.vueApp.component("PrimeButton", Button);
  nuxtApp.vueApp.component("PrimeDataTable", DataTable);
  nuxtApp.vueApp.component("PrimeColumn", Column);
  nuxtApp.vueApp.component("PrimeChart", Chart);
  nuxtApp.vueApp.component("PrimeDialog", Dialog);
  nuxtApp.vueApp.component("PrimeDropdown", Dropdown);
  nuxtApp.vueApp.component("PrimeInputText", InputText);
  nuxtApp.vueApp.component("PrimeToast", Toast);
});
