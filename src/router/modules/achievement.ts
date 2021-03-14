import marketPer from '@/components/achievement/marketPer.vue';
import layHeader from '@/views/layHeader.vue';
import layFooter from '@/views/layFooter.vue';
export const achievement = {
    path: '/marketPer',
    name: 'marketPer',
    components: {
        layHeader: layHeader,
        layFooter: layFooter,
        main: marketPer
    },
}