<script>
import Services from "@/components/services";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default {
  components: {
    
    Services,
    About,
    Pricing,
    Testimonial,    
    Contact,
    Footer,
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
  <div>
    <!-- STRAT NAVBAR -->
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky sticky-dark"
      id="navbar"
    >
      <div class="container">
        <!-- LOGO -->
        <a class="navbar-brand logo text-uppercase" href="/">
          <i class="mdi mdi-home"></i>The Agency
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
          <ul
            class="navbar-nav navbar-center"
            id="mySidenav"
            v-scroll-spy-active="{class: 'active'}"
          >
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#home' }"
                class="nav-link"
                data-scroll-spy-id="home"
                href="javascript: void(0);"
              >Accueil</a>
            </li>
            
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#services', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="services"
                href="javascript: void(0);"
              >Services</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#about', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="about"
                href="javascript: void(0);"
              >À propos</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#pricing', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="pricing"
                href="javascript: void(0);"
              >Prix</a>
            </li>
          
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#contact' }"
                class="nav-link"
                data-scroll-spy-id="contact"
                href="javascript: void(0);"
              >Contact</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    <!-- END NAVBAR -->
    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section bg-home home-half"
        id="home"
        style="background-size: cover;background-position: center;"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-white text-center">
              <h1 class="home-title">Votre succès en ligne, notre expertise digitale </h1>
              <p class="padding-t-15 home-desc mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur obcaecati quaerat nemo vitae repellendus eaque voluptatem autem maiores quas.
              </p>
              <p class="play-shadow margin-l-r-auto">
                <a v-b-modal.modal class="play-btn video-play-icon">
                  <i class="mdi mdi-play text-center"></i>
                </a>
                <b-modal id="modal" hide-footer size="lg" centered header-close-variant="white">
                  <youtube ref="youtube" width="900" height="500"></youtube>
                </b-modal>
              </p>
            </div>
          </div>
        </div>
      </section>
      <!--END HOME-->

      
      <Services />
      <About />
      <Pricing />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}
::v-deep .modal-header {
  border: none;
}
::v-deep .modal-backdrop {
  opacity: 0.5;
}
</style>