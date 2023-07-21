import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import directives from "@/components/directives";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';

const app = createApp(App);
app.use(router).use(PrimeVue).use(ToastService);

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.component('Button', Button);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('DataTable', DataTable);
app.component('InputText', InputText);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Badge', Tag);
app.component('Info', Toast);
app.component('SelectButton', SelectButton).mount('#app');
