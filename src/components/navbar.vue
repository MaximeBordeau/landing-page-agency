<script>
/**
 * Navbar component
 */
export default {
  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        navbar.style.backgroundColor = "#272a33";
        navbar.style.padding = "10px";
      } else {
        navbar.style.backgroundColor = "";
        navbar.style.padding = "20px";
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    }
  }
};
</script>
<template>
  <!-- STRAT NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar">
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand logo text-uppercase" href="/">
        <i class="mdi mdi-home"></i>THE AGENCY
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu()"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav navbar-center" id="mySidenav" v-scroll-spy-active="{class: 'active'}">
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#home'}"
              class="nav-link"
              data-scroll-spy-id="home"
              href="javascript: void(0);"
            >Accueil</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#services', offset: -5}"
              class="nav-link"
              data-scroll-spy-id="services"
              href="javascript: void(0);"
            >Services</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#about', offset: -5}"
              class="nav-link"
              data-scroll-spy-id="about"
              href="javascript: void(0);"
            >À propos</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#pricing', offset: -5}"
              class="nav-link"
              data-scroll-spy-id="pricing"
              href="javascript: void(0);"
            >Prix</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#contact'}"
              class="nav-link"
              data-scroll-spy-id="contact"
              href="javascript: void(0);"
            >Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</template>
