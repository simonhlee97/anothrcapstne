<template>

	<div class="signUp">
		<h3>Sign Up</h3>
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button v-on:click="signUp">Sign Up</button>
		<p>Already have an account?<router-link to="/Login"> Back to Login</router-link></p>
	</div>

</template>

<script>
	import firebase from 'firebase'

	export default{
		name: 'signup',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signUp: function() {
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					function (user) {
						alert('Your account has been created!')
						this.$router.replace('splash')
					},
					function (err) {
						alert('Oops. ' + err.message)
					}
				);
			}
		}
	}
</script>

<style scoped>
	.signUp{
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