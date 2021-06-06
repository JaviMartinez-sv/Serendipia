<template>
 <div>
  <navbar></navbar>
  <div class="login">
    <h3><strong>Inicio</strong></h3>
    <input type="email" v-model="email" placeholder="Email"><br>
    <input type="password" @keyup.enter="login" v-model="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <p>No tienes una cuenta aun? <router-link to="/signup"> create una</router-link></p>
  </div>
 </div>
</template>
<script>

import {fb} from '../firebase'

export default {
  name: "login",
  props:{
    msg: String
  },
  data() {
    return{
          email:null,
          password:null
    };
  },

  methods:{
      login(){

          fb.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                    
                          this.$router.replace('admin');  
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode === 'auth/wrong-password') {
                                alert('Wrong password.');
                            } else {
                                alert(errorMessage);
                            }
                            console.log(error);
                    });

      },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  margin-top: 40px;
  text-align: center;
}
input{
  margin:10px 0;
  width:20%;
  padding:15px;

}
button{
  margin-top: 20px;
  width:10%;
  cursor: pointer;
}
p{
  margin-top: 40px;
  font-size: 13px;

}
p a {
  text-decoration: underline;
  cursor:pointer;
}

</style> 