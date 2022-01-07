<template>
  <v-app>
    <Header />
    <v-main>
      <SnackBar />
      <v-container>
        <Nuxt class="mt-5" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
