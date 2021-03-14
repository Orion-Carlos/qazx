
import saleTarget from '@/components/target/saleTarget.vue';
import layHeader from '@/views/layHeader.vue';
import layFooter from '@/views/layFooter.vue';

export const target = {
    path: '/saleTarget',
    name: 'saleTarget',
    components: {
        layHeader: layHeader,
        layFooter: layFooter,
        main: saleTarget
    },
}