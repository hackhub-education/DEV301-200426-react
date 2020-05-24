import axios from 'axios';
import { baseUrl } from '../config'

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

export const tweets = {
  state: {
    tweetList: []
  },
  reducers: {
    fetchTweets(state, payload) {
      return {
        tweetList: payload
      }
    },
    appendTweet(state, payload) {
      return {
        tweetList: [
          ...state.tweetList,
          payload
        ]
      }
    }
  },
  effects: dispatch => ({
    async fetchTweetsAPICall(payload, state) {
      await axios.get(`${baseUrl}/tweet`)
        .then(res => {
          dispatch.tweets.fetchTweets(res.data.tweets)
        })
    }
  })
}