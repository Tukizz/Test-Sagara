<template>
  <v-app-bar fixed app>
    <NuxtLink :to="{ name: 'index' }">
      <NuxtLogo />
    </NuxtLink>
    <v-toolbar-title class="ml-3">Appliku</v-toolbar-title>
    <v-spacer />
    <v-btn text nuxt :to="{ name: 'login' }"> Login </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>
