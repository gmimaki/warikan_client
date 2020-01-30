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
			<button @click="emailLogin">Login</button>
		</div>
		<div>
			<button @click="googleLogin">Google Login</button>
		</div>
		<div>
			<p>{{ errorMessage }}</p>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'

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
		emailLogin() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(result => {
				console.log(result);
				router.push('/')
			}).catch(error => {
				this.errorMessage = error.message;
				this.showError = true;
			});
		},
		googleLogin() {
			console.log("GOOGLE LOGIN")
			const provider = new firebase.auth.GoogleAuthProvider()

			firebase.auth().signInWithPopup(provider).then(result => {
				console.log(result);
				router.push('/')
			}).catch(error => {
				console.log(error)
				this.errorMessage = error.message
				this.showError = true
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
