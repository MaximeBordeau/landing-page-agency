<script>
/**
 * About component
 */
export default {
  name: 'About'
}
</script>

<template>
  <section class="section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="about-title mx-auto text-center">
            <h2
              class="font-weight-light"
            >Une agence web créant des expériences numériques impressionnantes et captivantes !</h2>
            <p
              class="text-muted pt-4"
            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
          </div>
        </div>
      </div>
      <div class="row margin-t-50">
        <div class="col-lg-3 col-sm-6">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt class="img-fluid rounded" style="width: 450px; height: 250px;"/>
              </div>
            </div>
            <h4 class="team-name">Étienne Dutronc </h4>
            <p class="text-uppercase team-designation">Fondateur & PDG</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt class="img-fluid rounded" style="width: 450px; height: 250px;"/>
              </div>
            </div>
            <h4 class="team-name">Julien Fouclair</h4>
            <p class="text-uppercase team-designation">Responsable Design</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt class="img-fluid rounded" style="width: 450px; height: 250px;"/>
              </div>
            </div>
            <h4 class="team-name">Cécile Fontaine</h4>
            <p class="text-uppercase team-designation">Lead Développeur</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt class="img-fluid rounded" style="width: 450px; height: 250px;"/>
              </div>
            </div>
            <h4 class="team-name">Yoann Leclerc</h4>
            <p class="text-uppercase team-designation">Responsable commercial</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>