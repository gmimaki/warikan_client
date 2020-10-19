<template>
	<div class="invite">
		<div>
			<input type="text" v-model="title">
		</div>
		<div>
			<button @click="createTravel">作成</button>
		</div>
	</div>
</template>

<script>
import router from '../router'

export default {
	name: 'Login',
	data() {
		return {
			title: ""
		}
	},
	methods: {
		createTravel() {
			console.log("AAAAA")
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
