
import salesAnalysis from '@/components/analysis/salesAnalysis.vue';
import layHeader from '@/views/layHeader.vue';
import layFooter from '@/views/layFooter.vue';

export const analysis = {
    path: '/salesAnalysis',
    name: 'salesAnalysis',
    components: {
        layHeader: layHeader,
        layFooter: layFooter,
        main: salesAnalysis
    },
}