<template>
  <div class="hello">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Serendipia</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/home" class="nav-link" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
              <router-link to="/products" class="nav-link" href="#">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="#">About</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <a class="btn btn-outline-success my-2 my-sm-0"  data-toggle="modal" data-target="#login">Start</a>  
        <Login></Login>
      </form>
    </div>
  </div>
  
</nav>
    
  </div>
</template>

<script>
import Login from './Login.vue';

export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components:{Login}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media (min-width: 992px) { 
    
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: #fff !important;
    }

   }

</style>