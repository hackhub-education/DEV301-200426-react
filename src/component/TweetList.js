import React, { Component } from 'react';
import { connect } from 'react-redux'

import TweetItem from './TweetItem'

class TweetList extends Component {

    componentDidMount() {
      this.props.fetchTweetsAPICall()
    }

    render() {
        return (
            <div>
                {this.props.tweetList.map(tweet => <TweetItem value={tweet} key={tweet._id}/>)}
            </div>
        );
    }
}

const mapState = state => ({
  tweetList: state.tweets.tweetList
})

const mapDispatch = ({ tweets: { fetchTweetsAPICall } }) => ({
  fetchTweetsAPICall: () => fetchTweetsAPICall()
})

export default connect(mapState, mapDispatch)(TweetList)
