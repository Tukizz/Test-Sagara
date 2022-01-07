<template>
  <section class="align-center text-center justify-center">
    <v-row>
      <v-col>
        <h2>Register to Web Appliku</h2>
      </v-col>
    </v-row>

    <!-- FORM  -->
    <v-row class="justify-center">
      <v-col sm="6" md="5" cols="9" class="pt-0">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>
              <v-text-field
                v-model="firstName"
                :rules="nameRules"
                label="First Name"
                required
              />
            </v-col>
            <v-col>
              <v-text-field v-model="lastName" label="Last Name" />
            </v-col>
          </v-row>

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

          <v-select
            v-model="gender"
            :items="genderList"
            :rules="genderRules"
            label="Gender"
            required
          />

          <v-row>
            <v-col>
              <v-select
                v-model="province"
                :items="provinceList"
                :rules="provinceRules"
                item-text="name"
                item-value="id"
                label="Province"
                required
              />
            </v-col>
            <v-col>
              <v-select
                v-model="city"
                :disabled="isEmptyProvince"
                :items="cityList"
                :rules="cityRules"
                item-text="name"
                item-value="id"
                label="City"
                required
              />
            </v-col>
          </v-row>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Sign Up
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <!-- end form  -->

    <v-row>
      <v-col>
        <p class="mb-0">
          Have a account?
          <NuxtLink :to="{ name: 'login' }"> Login </NuxtLink>
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
// constant data
import { GENDER, CITY, PROVINCE } from '@/constant'

export default {
  data: () => ({
    valid: true,
    firstName: '',
    lastName: '',
    nameRules: [(v) => !!v || 'Name is required'],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must valid',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 6) || 'Password must more than 6 character',
    ],
    gender: '',
    genderRules: [(v) => !!v || 'Gender is required'],

    city: '',
    cityRules: [(v) => !!v || 'City is required'],

    province: '',
    provinceRules: [(v) => !!v || 'Province is required'],
  }),

  /**
   * @description for meta tag for this case i use title only
   */
  head() {
    return {
      titleTemplate: '%s - Register',
    }
  },

  computed: {
    genderList() {
      return GENDER
    },
    // filtered city list by province
    cityList() {
      return CITY.filter((val) => val.provinceId === this.province)
    },
    provinceList() {
      return PROVINCE
    },
    // for checking if province was empty for disable the city input
    isEmptyProvince() {
      return this.province === null || this.province === ''
    },
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
        this.$notifier.showMessage({ message: 'Register Successfully' })
        // redirect to index
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>
