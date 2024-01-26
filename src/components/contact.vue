<script>

export default {
  name: 'Contact'
}
</script>

<template>
  <section class="section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">Contactez-nous !</h1>
          <div class="section-title-border margin-t-20"></div>
          <p
            class="section-subtitle text-muted text-center font-secondary padding-t-30"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, porro!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-4 pt-4">
            <p class="mt-4">
              <span class="h5">Addresse :</span>
              <br />
              <span class="text-muted d-block mt-2">4 Voie de la Rivière, 75001 Paris</span>
            </p>
            
            <p class="mt-4">
              <span class="h5">Horaires :</span>
              <br />
              <span class="text-muted d-block mt-2">9:00 à 18:00</span>
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="custom-form mt-4 pt-4">
            <div id="message"></div>
            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mt-2">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Votre nom*"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mt-2">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Votre email*"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Sujet.."
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 text-right">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    class="submitBnt btn btn-custom"
                    value="Envoyer le message"
                  />
                  <div id="simple-msg"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>