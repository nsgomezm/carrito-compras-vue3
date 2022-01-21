<template>
    <div class="container pt-4">
        <!-- {{ car }} -->
        <div class="row pb-5">
            <table-cart />
        </div>
        <div class="row">
            <card v-for="product of listProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import Card from './Card.vue'
import TableCart from './shopping_cart/TableCart.vue'

    export default {
        components: { Card, TableCart },
        setup(){
            const store = useStore()
            const listProducts = computed( () => store.state.products)

            onMounted( () => {
                store.dispatch('fetchData')
            })


            return {listProducts}
        }
    }
</script>

<style lang="scss" scoped>

</style>