<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Card>
        <template #body>
          <h2>
            Appliku is web based on Nuxt.js for Test Purpose to Sagara
            Technology
          </h2>
        </template>
      </Card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  /**
   * @description for meta tag for this case i use title only
   */
  head() {
    return {
      titleTemplate: '%s - Home',
    }
  },
}
</script>
