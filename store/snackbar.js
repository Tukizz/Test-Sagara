export const state = () => ({
  message: '',
  color: '',
  position: '',
  timeout: -1,
})

export const mutations = {
  /**
   * @description for storing the toast style & message
   *
   * @param {object} state
   * @param {object} payload
   */
  showMessage(state, payload) {
    state.message = payload.message
    state.color = payload.color
    state.position = payload.position
    state.timeout = payload.timeout
  },
}
