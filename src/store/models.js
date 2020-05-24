export const user = {
  state: {
    token: '',
    profile: {}
  },
  reducers: {
    updateToken(state, payload) { // payload should be a string of token
      return {
        ...state,
        token: payload
      }
    },
    updateProfile(state, payload) { // payload should be a profile object
      return {
        ...state,
        profile: payload
      }
    }
  }
}