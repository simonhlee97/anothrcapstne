<template>

	<!-- <div class="login">
		<h3>Login</h3>
		<input type="text" placeholder="Email"><br>
		<input type="password" placeholder="Password"><br>
		<button v-on:click="login">Login</button>
		<p>Don't have an account? <router-link to="/signup"> Create an account</router-link></p>
	</div> -->

<div class="indigo darken-4 login">
	<v-form v-model="valid" ref="form" lazy-validation class="login">
    <v-text-field
      label="Email"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      :rules="passwordRules"
      required
    ></v-text-field>
	<v-btn
      @click="submit"
      :disabled="!valid"
      id="submit"
    >
      submit
    </v-btn>
	</v-form>
</div>



</template>

<script>
	export default{
		name: 'login',
		data () {
	      	return {
		        valid: false,
		        email: '',
		        emailRules: [
		          (v) => !!v || 'Email is required',
		          (v) => v.length <= 20 || 'Email must be less than 20 characters',
		          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
		        ],
		        password: '',
		        passwordRules: [
		          (v) => !!v || 'Password is required',
		          (v) => v.length >= 6 && v.length <= 24 || 'Password must be 6 to 24 characters long'
		        ]
      		}
    	},
    	methods: {
	      submit () {
	        if (this.$refs.form.validate()) {
	          // Native form submission is not yet supported
	          
	          	this.$router.replace('add')
	               
	        }
	      },
	      clear () {
	        this.$refs.form.reset()
	      }
	    }
	}
</script>


<style scoped>
	.login{
		margin-top: 9rem;
		margin-left: 16rem;
		margin-right: 16rem;
	}
	input {
		margin: 10px 10px;
		width: 20%;
		padding: 15px;
	}
	#submit {
		margin-top: 20px;
		width: 10%;
		color: navy;
		background-color: white;
		cursor: pointer;
	}
	p {
		margin-top: 40px;
		font-size: 13px;
	}
	p a {
		text-decoration: none;
	}
</style>