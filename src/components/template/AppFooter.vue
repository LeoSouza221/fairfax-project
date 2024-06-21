<template>
  <v-footer
    height="40"
    app
  >
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; 2016-{{ new Date().getFullYear() }}
      <span class="d-none d-sm-inline-block">Vuetify, LLC</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://vuetifyjs.com/about/licensing/"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Vuetify Documentation',
    icon: `$vuetify`,
    href: 'https://vuetifyjs.com/',
  },
  {
    title: 'GitHub',
    icon: `mdi-github`,
    href: 'https://github.com/LeoSouza221/fairfax-project',
  },
  {
    title: 'Linkedin',
    icon: `mdi-linkedin`,
    href: 'https://www.linkedin.com/in/leonardo-de-souza-a75557156/',
  },
  {
    title: 'Youtube',
    icon: `mdi-youtube`,
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
