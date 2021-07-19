<template>
  <div class="split-section">
    <div class="ss-media">
      <nuxt-img src="/custom-websites.jpg" format="webp" width="640" height="480" />
    </div>
    <div class="ss-content">
      <h3>Website Development</h3>
      <h2>Custom Websites</h2>
      <p>Websites with custom design and features, SEO friendly, fast and optimized. Scalable solutions easy to manage and maintain with low maintaince costs. <br />
From broshure type of websites to advanced content managament needs, directories, webshops etc.<br />
I can provide long-term support and collaboration for all your project requirements. Deployment, hosting, On-Page SEO, integrations, updates, customizations...</p>
      <nuxt-link to="/services/custom-websites/" class="btn btn-icon">
        Read More
        <span>
          <i v-html="require(`../assets/svg/chevron-right.svg?raw`)"></i>
          <i v-html="require(`../assets/svg/arrow-right.svg?raw`)"></i>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>