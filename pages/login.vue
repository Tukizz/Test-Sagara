<template>
  <section class="align-center text-center justify-center">
    <v-row>
      <v-col>
        <h2>Login to Web Appliku</h2>
      </v-col>
    </v-row>

    <!-- FORM  -->
    <v-row class="justify-center">
      <v-col sm="6" md="5" cols="9" class="pt-0">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          />

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <!-- end form  -->

    <v-row>
      <v-col>
        <p class="mb-0">
          Don't have a account?
          <NuxtLink :to="{ name: 'register' }"> Register </NuxtLink>
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 6) || 'Password must more than 6 character',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must valid',
    ],
  }),

  /**
   * @description for meta tag for this case i use title only
   */
  head() {
    return {
      titleTemplate: '%s - Login',
    }
  },

  methods: {
    /**
     * @description for validate the form
     *
     * @returns {redirect} to index / home
     */
    validate() {
      // if validation fail return to form
      if (!this.$refs.form.validate()) {
        return false
      } else {
        // reset the form validation
        this.$refs.form.reset()
        // show the toast
        this.$notifier.showMessage({ message: 'Login Successfully' })
        // redirect to index
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>
