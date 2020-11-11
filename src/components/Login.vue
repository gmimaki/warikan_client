<template>
	<div class="login">
		<h1>Login</h1>
		<div>
			<input type="email" v-model="email">
		</div>
		<div>
			<input type="password" v-model="password">
		</div>
		<div>
			<button @click="login">Login</button>
		</div>
		<div>
			<p>{{ errorMessage }}</p>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'
import axios from "axios"
import { getIdToken } from '../lib/auth.js';

export default {
	name: 'Login',
	data() {
		return {
			email: "",
			password: "",
			errorMessage: "",
			showError: false
		}
	},
	methods: {
		login() {
			axios.post("http://localhost:8080/user/login", {
				email: this.email,
				password: this.password,
			}, {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
				},
				withCredentials: true
			}).
			then(res => {
				console.log(res);
				router.push({ name: "index" });
			}).
			catch(err => {
				this.errorMessage = err;
			})
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
