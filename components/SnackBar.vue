<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="timeout"
    :top="isPositionTop"
    :bottom="isPositionBottom"
    :left="isPositionLeft"
    :right="isPositionRight"
  >
    {{ message }}

    <template #action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="show = false">
        Tutup
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackBar',
  data() {
    return {
      show: false,
      message: '',
      color: '',
      position: '',
      timeout: null,
    }
  },
  computed: {
    /**
     * @description for positioning the toast
     *
     * @default top
     */
    isPositionTop() {
      return this.position === 'top' || this.position === ''
    },
    isPositionBottom() {
      return this.position === 'bottom'
    },
    isPositionLeft() {
      return this.position === 'left'
    },
    isPositionRight() {
      return this.position === 'right'
    },
  },
  created() {
    // for getting the data for model
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.message
        this.timeout = state.snackbar.timeout
        this.color = state.snackbar.color
        this.position = state.snackbar.position
        this.show = true
      }
    })
  },
}
</script>
