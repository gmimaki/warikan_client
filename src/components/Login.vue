<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>
			<input type="email">
		</div>
		<div>
			<input type="password">
		</div>
		<div>
			<button>Login</button>
		</div>
		<button>Google Login</button>
	</div>
</template>

<script>
export default {
	name: 'Login',
	props: {
		msg: String
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
