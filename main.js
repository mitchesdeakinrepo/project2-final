import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ToDoApp from "./todoapp.vue";

const app = createApp(App);
app.mount("#app");

const tdapp = createApp(ToDoApp);
tdapp.mount("#todoapp");
