<template>
	<div class="col-12 col-sm-6 col-md-4 col-lg-2 pb-4">
		<div class="card px-0">
			<img :src="product.img" class="card-img-top" :alt="`img-${product.img}`">
			<div class="card-body">
				<h5 class="card-title">{{product.title}}</h5>
				<p class="card-text">$ <span>{{ product.price }}</span> </p>
			</div>
			<div class="card-footer">
				<a href="#" class="btn btn-primary" v-on:click.prevent="addCar(product)">Go somewhere</a>
			</div>
		</div>
	</div>
</template>

<script>
import {useStore} from 'vuex'
export default {
	props:['product'],
	setup(){
		const store = useStore()
		const addCar = product => {
			store.dispatch('addCar', product)
		}
		return {
			addCar,
			
		}

	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
