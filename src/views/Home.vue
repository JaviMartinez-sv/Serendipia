<template>
  <div class="home">
      <Navbar></Navbar>
      <Hero/>
      <product-list></product-list>

      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/frasco.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Sobre Nosotros</h3>
            <p>
              Puedes encontrarnos en cualquier lugar del mundo, Serendipia es mas que una tienda de perfumes, si tienes alguna duda no dudes en contactar con nosotros: serendipia@gmail.com
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>
      <login2></login2>
      <mini-cart></mini-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
export default {
  name: "home",
  components: {
    Hero
  }
};
</script>

<style>
</style>
