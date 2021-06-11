<template>
  <div id="home">
    <Hero 
      :headline='page.hero.title'
      :subtitle='page.hero.subtitle' 
      :text='page.hero.text'
      :img='page.hero.image'
    />

    <div class="uk-section uk-section-large uk-section-muted uk-position-relative">
      <div class="uk-container uk-width-3-5@l uk-text-center">
        <Intro 
          :title='page.intro.title'
          :text='page.intro.text'
        />
      </div>
    </div>

    <div class="uk-position-relative">
        <OffsetPanelSection />
    </div>

    <div class="uk-section tm-bg-dark uk-light uk-position-relative">
      <div class="uk-container">
        <Section subtitle='Content Managament Framewor' title='ProcessWire Development' />
        <p>ProcessWire as long term solution. Fast, secure and scalable. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'kreativan.dev',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Web developer'
      }
    ]
  },
  data() {
    return {
      page:{}
    }
  },
  async fetch() {
    const page = await this.$content('home').fetch()
    this.page = page;
  }
}
</script>

<style>

</style>
