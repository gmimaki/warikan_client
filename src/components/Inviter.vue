<template>
	<div class="invite">
		<div v-if="error">
			{{error}}
		</div>
		<div>
			<p>招待されています</p>
			<p>招待者から共有されたパスワードを入力</p>
			<input type="text" v-model="password">
			<button @click="inputPassword">パスワード入力</button>
		</div>
	</div>
</template>

<script>
import router from '../router'
import axios from "axios"

export default {
	// TODO loginしてたらhomeにリダイレクト
	name: 'Inviter',
	data() {
		return {
			password: "",
			error: "",
			inviteCode: "",
		};
	},
	created() {
		const inviteCode = this.$route.query["inviteCode"];
		if (!inviteCode) { this.error = "不正な操作です"; }
		this.inviteCode = inviteCode;
	},
	methods: {
		inputPassword() {
			console.log(this.inviteCode);
			console.log(this.password);
			axios.post("http://localhost:8080/inviter", {
				token: this.inviteCode,
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
			}).
			catch(err => {
				if (err.response.status === 400) {
					this.error = "招待コードの期限が切れているか、誤っています";
				}
				console.log(err);
			});
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
