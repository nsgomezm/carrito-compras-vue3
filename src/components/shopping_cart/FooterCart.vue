<template>
    <th colspan="3" class="p-2"> Total Productos</th>
    <td class="p-2"> {{ totals.stock }} </td>
    <td class="font-weight-bold"> ${{ totals.price }} </td>
    <td class="m-2">
        <div class="text-center">
            <button class="btn btn-outline-danger btn-sm" v-on:click.prevent="destroyedCar()">Eliminar productos</button>
        </div>
    </td>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
    import {useStore} from'vuex'
    export default {
        setup(){
            const store = useStore()
            const totals = computed( () => store.getters.totals )

            const destroyedCar = () => {

                Swal.fire({
                    title: 'Seguro que quieres eliminar todo el carrito de compras?',
                    icon: 'warning',
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'btn btn-outline-danger me-3',
                        cancelButton: 'btn btn-secondary'
                    },

                    showCancelButton: true,
                    confirmButtonText: 'Si, Eliminar',
                    cancelButtonText: `Cancelar`,

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Eliminado', '', 'success')
                        store.dispatch('destroyedCar')
                    }
                })
                
            }

            return {
                totals,
                destroyedCar,
                alert
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>