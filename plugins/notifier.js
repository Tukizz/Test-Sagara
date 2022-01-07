/**
 * @description for invoke or trigger the notifier component then commit the data to snackbar/showMessage store
 *
 */
export default ({ app, store }, inject) => {
  inject('notifier', {
    /**
     * @description for pass the notifier data to store
     *
     * @param {string} message
     * @default ''
     *
     * @param {string} color
     * @default ''
     *
     * @param {string} position
     * @default ''
     *
     * @param {string} timeout
     * @default ''
     */
    showMessage({ message = '', color = '', position = '', timeout = '' }) {
      store.commit('snackbar/showMessage', {
        message,
        color,
        position,
        timeout,
      })
    },
  })
}
