import { MetaType, toMeta } from '../index';

export const directives: MetaType[] = toMeta([
    { name: 'badge', as: 'BadgeDirective', from: '@primevue/primevue/badgedirective' },
    { name: 'tooltip', as: 'Tooltip', from: '@primevue/primevue/tooltip' },
    { name: 'ripple', as: 'Ripple', from: '@primevue/primevue/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: '@primevue/primevue/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: '@primevue/primevue/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: '@primevue/primevue/animateonscroll' },
    { name: 'keyfilter', as: 'KeyFilter', from: '@primevue/primevue/keyfilter' }
]);
