<template>
    <div class="card px-0">
        <div class="card-header">
            Carrito de compras 
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <div class="alert alert-primary d-flex align-items-center" role="alert" v-if="Object.keys(listProducts).length == 0">
                    <div>
                        No has seleccionado ningun producto para la compra
                    </div>
                </div>
                <table class="table table-borderless table-hover" v-else>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Costo unidad</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody >
                        <item v-for="product of listProducts" :key="product.id" :product="product" />
                    </tbody>
                    <tfoot>
                        {{ listProducts.length }}
                        <footer-cart />
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from 'vuex'
import Item from './Item.vue'
import FooterCart from './FooterCart.vue'
    export default {
        components:{
            Item,
            FooterCart,
        },
        setup(){

            const store = useStore()
            const listProducts = computed( () => store.state.car )


            return {
                listProducts
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>