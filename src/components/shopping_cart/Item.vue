<template>
    <tr>
        <th>{{ product.id }}</th>
        <td>{{ product.title }} </td>
        <td>${{ product.price }} </td>
        <td>{{ product.stock }} </td>
        <td>${{ product.price * product.stock }} </td>
        <td>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-danger me-3" v-on:click.prevent="removeCar(product)">-</button>
                <button class="btn btn-success" v-on:click.prevent="addCar(product)">+</button>
            </div>
        </td>
    </tr> 
</template>

<script>
    import {useStore} from 'vuex'
    export default {
        props:['product'],
        setup(){
            const store = useStore()
            const addCar = product => store.dispatch('addCar', product)
            const removeCar = product => store.dispatch('removeCar', product)
            
            return{
                addCar,
                removeCar
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>