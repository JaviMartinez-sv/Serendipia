<template>
 <div>
  <navbar></navbar>

  <div class="signup">
    <h3><strong>Vamos a crear una nueva cuenta !</strong></h3>
    <input type="text" v-model="name" placeholder="Tu nombre"><br>
    <input type="email" v-model="email" placeholder="Introduce tu Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="register">Registrar</button>
    <p></p>
    <span>Si ya tienes una haz click en <router-link to="/login">login.</router-link></span>
  </div>
 </div>
</template>
<script>

import {fb,db} from '../firebase'


export default {
  name: "signup",
  data() {
    return{
          name:null,
          email:null,
          password:null
      }
  },
  methods:{
      register(){
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    
                    db.collection("profiles").doc(user.user.uid).set({
                        name: this.name
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

                    this.$router.replace('admin');
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup{
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