<template>
  <div id="main" uk-height-viewport="expand: true">

    <PageCover 
      :title="page_cover.title" 
      :caption="page_cover.caption" 
      :img="page_cover.image"
    />

    <div class="uk-section">
      <div class="uk-container">

        <div class="uk-grid uk-grid-large" uk-grid>
          <div class="uk-width-1-3@m">
            <h5 class="tm-font-base uk-text-uppercase uk-text-muted">Who am i?</h5>
          </div>
          <div class="uk-width-expand@m">
            <h2 class="uk-h3">Ivan Milinčić</h2>
            <p>I'm Serbian, living and working from Bulgaria. I'm very passionate about web and tech in general. I'm in tech for a long time, in different shapes and forms, but found my self in web development, and that is what i really love and enjoy doing.</p>
          </div>
        </div>

        <div class="uk-grid uk-grid-large" uk-grid>
          <div class="uk-width-1-3@m">
            <h5 class="tm-font-base uk-text-uppercase uk-text-muted">Education</h5>
          </div>
          <div class="uk-width-expand@m">
            <h2 class="uk-h3">Bachelor's degree, Information Technology</h2>
            <p>Education area: Information Technology <br /> Study program: Computing and Informatics <br /> Education title: IT engineer</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'cover',
  data() {
    return {
      page_cover: {}
    }
  },
  async fetch() {
    const page = await this.$content('about').fetch()
    this.page_cover = page.page_cover
  }
}
</script>

<style scoped>
h5.tm-font-base {
  letter-spacing: 1px;
}
h2 {
  margin-top:-10px !important;
}
</style>