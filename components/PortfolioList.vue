<template>
  <div>
    <table :class="cls">
      <thead>
        <tr>
          <th>Project</th>
          <th>About</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.slug">
          <td>
            <b>{{ item.title }}</b>
          </td>
          <td>{{ item.desc }}</td>
          <td>
            <a
              :href="item.link"
              class="btn btn-icon"
              rel="noffolow noopener"
              target="_blank"
              :title="item.title"
            >
              <span>
                <i v-html="require(`../assets/svg/link.svg?raw`)"></i>
                <i v-html="require(`../assets/svg/arrow-right.svg?raw`)"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["items", "cls"]
};
</script>

<style scoped>
div {
  overflow-x: scroll;
}
@media(max-width: 480px) {
  td:nth-child(2),
  th:nth-child(2) {
    display: none;
  }
}
</style>
