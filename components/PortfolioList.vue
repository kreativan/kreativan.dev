<template>
  <table class="uk-table uk-table-divider uk-table-middle">
    <thead>
      <tr>
        <th>Project</th>
        <th>About</th>
        <th class="uk-table-shrink">Link</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in list">
        <tr :key="item.slug">
          <td class="uk-text-bold">
            {{ item.title }}
          </td>
          <td>{{ item.desc }}</td>
          <td class="uk-table-shrink">
            <a :href="item.link" 
              class="uk-icon-button" 
              uk-icon="arrow-right" 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              :title="item.title">
              <i uk-icon="link"></i>  
            </a>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["list"]
}
</script>

<style></style>
