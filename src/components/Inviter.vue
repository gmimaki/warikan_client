<template>
	<div class="invite">
		<div v-if="error">
			{{error}}
		</div>
		<div>
			招待されています
		</div>
		<div v-if="!error">
			<p>招待者から共有されたパスワードを入力</p>
			<input type="text" v-model="password">
			<button @click="a">パスワード入力</button>
		</div>
		<!--
		<div v-if="display">
			<p>{{token}}</p>
			<p>{{password}}</p>
			<p>{{exipreHours}}</p>
		</div>
		-->
	</div>
</template>

<script>
import router from '../router'
import axios from "axios"

export default {
	name: 'Inviter',
	data() {
		return {
			password: "",
			error: ""
		};
	},
	created() {
		const inviteCode = this.$route.query["inviteCode"];
		if (!inviteCode) {
			this.error = "不正な操作です";
		}
	},
	methods: {
		a() {}
		/*
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
		*/
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
