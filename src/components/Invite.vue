<template>
	<div class="invite">
		<div>
	<!--		<input type="text" v-model="title">-->
		</div>
		<div>
			<button @click="issueToken">招待コードを発行する</button>
		</div>
		<div>
			<p>{{token}}</p>
			<p>{{password}}</p>
		</div>
	</div>
</template>

<script>
import router from '../router'
import axios from "axios"

export default {
	name: 'Login',
	data() {
		return {
			token: "",
			password: "",
		}
	},
	methods: {
		issueToken() {
			axios.post("http://localhost:8080/general/invite_partner", {

			}, {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
				},
				withCredentials: false
			}).
			then(res => {
				console.log(res);
			}).
			catch(err => {
				console.log(err);
			})
		}
	},
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
