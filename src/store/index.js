import { createStore } from 'vuex'

export default createStore({
	state: {
		products: [],
		car: {}
	},
	mutations: {
		setProducts(state, listProducts){
			state.products = listProducts
		},
		setCar(state, car){
			if(car.stock == 0){
				delete state.car[car.id]
				return 
			}

			state.car[car.id] = car
		},


		resetData(state){
			state.car = {}
		}
	},
	actions: {
		async fetchData({ commit }){
			try {
				const res = await fetch('api.json')
				const data = await res.json()

				commit('setProducts', data)
			} catch (error) {
				console.log(error)
			}
		},

		addCar({commit, state}, product){
			if( state.car.hasOwnProperty(product.id) ){
				product.stock = state.car[product.id].stock + 1
			} else {
				product.stock = 1
			}

			commit('setCar', product)
		},
		removeCar({commit, state}, product){
			product.stock = state.car[product.id].stock -1
			commit('setCar', product)
		},

		destroyedCar({commit}){
			commit('resetData')
		}
	},

	getters: {
		totals(state){
			return {
				stock: Object.values(state.car).reduce( (acc, {stock}) => acc + stock, 0 ),
				price: Object.values(state.car).reduce( (acc, {stock, price}) => acc + stock * price, 0 )
			}
		}
	},
	modules: {
	}
})
