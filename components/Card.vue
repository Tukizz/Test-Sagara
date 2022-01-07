<template>
  <v-card :width="width">
    <v-card-title v-if="isUsingTitle" class="headline">
      <slot name="title" />
    </v-card-title>
    <v-card-text v-if="isUsingBody">
      <slot name="body" />
    </v-card-text>
    <v-card-actions v-if="isUsingAction">
      <slot name="action" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    /**
     * @description if want to use title
     *
     * @param {boolean}
     * @default false
     */
    isUsingTitle: {
      type: Boolean,
      default: false,
    },

    /**
     * @description if want to use body
     *
     * @param {boolean}
     * @default true
     */
    isUsingBody: {
      type: Boolean,
      default: true,
    },

    /**
     * @description if want to use action
     *
     * @param {boolean}
     * @default false
     */
    isUsingAction: {
      type: Boolean,
      default: false,
    },

    /**
     * @description if want to use card width
     *
     * @param {number | string}
     * @default '100%'
     */
    width: {
      type: [Number, String],
      default: '100%',
    },
  },
}
</script>
