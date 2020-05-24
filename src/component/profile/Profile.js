import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ProfileAction from './ProfileAction'

class Profile extends Component {

    render() {
      const {
        profile
      } = this.props
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src={profile.avatar} alt={profile.name} />
                <h3>{profile.name}</h3>
                <h5>@{profile.username}</h5>
                <h4><i className="fas fa-map-marker-alt"></i> {profile.location}</h4>
                <p className="center">{profile.bio}</p>
                <Route path='/profile' component={ProfileAction} />
            </div>
        );
    }
}

const mapState = state => ({
  profile: state.user.profile
})

export default connect(mapState, null)(Profile);
