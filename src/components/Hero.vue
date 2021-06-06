<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Serendipia
                </h1>
                <p>
                  ¡Aqui encontraras los mejores perfumes y el mejor aroma! 
                  No te pierdas nuestra sección de Perfumes Top,
                  la esencia es lo mejor de uno mismo.
                </p>
                <div class="hero-btn mt-5">
                  <a href="/products" class="btn custom-btn btn-info mr-4" role="button">Explore</a>
                    
                    <a href="/products" class="btn custom-btn btn-outline-secondary" role="button">Products</a>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/svg/frasco2.svg"  margin-left= "5em" width = "60%">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }

</style>
