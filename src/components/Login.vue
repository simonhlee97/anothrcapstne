<template>

	<div class="login">
		<h3>Login</h3>
		<input type="text" placeholder="Email"><br>
		<input type="password" placeholder="Password"><br>
		<button v-on:click="login">Login</button>
		<p>Don't have an account? <router-link to="/signup"> Create an account</router-link></p>
	</div>

</template>

<script>
	export default{
		name: 'login',
		data: function() {
			return {}
		},
		methods: {login: function() {
			this.$router.replace('splash')
		}}
	}
</script>

<style scoped>
	.login{
		margin-top: 9rem;
		margin-left: 16rem;
	}
	input {
		margin: 10px 0;
		width: 20%;
		padding: 15px;
	}
	button {
		margin-top: 20px;
		width: 10%;
		cursor: pointer;
	}
	p {
		margin-top: 40px;
		font-size: 13px;
	}
	p a {
		text-decoration: underline;
	}
</style>