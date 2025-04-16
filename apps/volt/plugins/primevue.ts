import AnimateOnScroll from '@primevue/primevue/animateonscroll';
import PrimeVue from '@primevue/primevue/config';
import ConfirmationService from '@primevue/primevue/confirmationservice';
import StyleClass from '@primevue/primevue/styleclass';
import ToastService from '@primevue/primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true
    });
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('animateonscroll', AnimateOnScroll);
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
});
