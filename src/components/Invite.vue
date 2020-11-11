<template>
	<div class="invite">
		<div>
	<!--		<input type="text" v-model="title">-->
		</div>
		<div>
			<button @click="issueToken">招待コードを発行する</button>
		</div>
		<div v-if="display">
			<p>{{token}}</p>
			<p>{{password}}</p>
			<p>{{exipreHours}}</p>
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
			exipreHours: 0,
			display: false
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
				withCredentials: true
			}).
			then(res => {
				this.display = true;
				this.token = res.data.token;
				this.password = res.data.password;
				this.exipreHours = res.data.expireHours;
			}).
			catch(err => {
				if (err.response.status === 401) {
					router.push({ path: "login" });
				}
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
