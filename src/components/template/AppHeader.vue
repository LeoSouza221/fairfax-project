<template>
  <v-app-bar
    color="primary"
    height="70"
    scroll-behavior="elevate"
    class="position-fixed"
  >
    <template v-slot:prepend>
      <v-icon
        icon="mdi-eiffel-tower"
        class="ml-4"
      />
    </template>
    <v-app-bar-title data-test="header-text">Fairfax Hotéis</v-app-bar-title>
  </v-app-bar>
</template>
