import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../config'
import { connect } from 'react-redux'

class TweetPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handlePost = this.handlePost.bind(this)
    }

    handleTextChange(e) {
        this.setState({
            content: e.target.value,
            imageUrl: ''
        })
    }

    handlePost() {
        let that = this
        axios.post(`${baseUrl}/tweet`, this.state, {
          headers: {
            Authorization: 'Bearer ' + this.props.token
          }
        }).then(res => {
          that.props.appendTweet(res.data.tweet)
          that.setState({
              content: ''
          })
        })
    }

    render() {
        return (
            <div className="tweet">
                <form id="tweet-form">
                    <div className="row">
                        <img className="avatar-sm v-top" src={this.props.avatar} alt="avatar" />
                        <textarea className="input-tweet" placeholder="What's up?" value={this.state.content} onChange={this.handleTextChange}></textarea>
                    </div>
                    <div className="row tweet-actions">
                        {/* <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only /> */}
                        <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                        <button className="btn-primary" type="button" onClick={this.handlePost} disabled={this.state.content ? '' : 'disabled'}>Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapState = state => ({
  token: state.user.token
})

const mapDispatch = ({ tweets: { appendTweet } }) => ({
  appendTweet: (tweet) => appendTweet(tweet)
})

export default connect(mapState, mapDispatch)(TweetPost);