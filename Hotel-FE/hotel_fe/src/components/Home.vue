<template>
  <div class="row center-xs ">
    <div class="col-xs-8" style=" height: 79vh !important;">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators" >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="¡Bienvenidos Usuarios!"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="¿Quienes somos?"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Somos una empresa dedicada a las reservas de habitaciones de los mejores hoteles del país"
          ></button>
        </div>
        <div class="carousel-inner" style=" height: 79vh !important;">
          <div class="carousel-item active">
            <img
              src="../assets/rcarousel1.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block" style=" height: 79vh !important;">
              <h1>¡Bienvenidos Usuarios!</h1>
            </div>
          </div>
          <div class="carousel-item" >
            <img
              src="../assets/rcarousel2.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block" style=" height: 79vh !important;">
              <h1>¿Quienes somos?</h1>
            </div>
          </div>
          <div class="carousel-item" >
            <img
              src="../assets/rcarousel3.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block" style=" height: 79vh !important;">
              <h1>
                Somos una empresa dedicada a las reservas de habitaciones de los
                mejores hoteles del país
              </h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"          
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      slider: null,
      height: null,
    };
  },
  methods: {},
};
</script>

<style>
</style>