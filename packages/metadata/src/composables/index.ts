import { MetaType, toMeta } from '../index';

export const composables: MetaType[] = toMeta([
    { name: 'usePrimeVue', as: 'usePrimeVue', from: '@primevue/primevue/config' },
    { name: 'useStyle', as: 'useStyle', from: '@primevue/primevue/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: '@primevue/primevue/useconfirm' },
    { name: 'useToast', as: 'useToast', from: '@primevue/primevue/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: '@primevue/primevue/usedialog' }
]);
