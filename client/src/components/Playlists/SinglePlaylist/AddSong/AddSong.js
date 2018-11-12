import React, { Component } from 'react';
import './AddSong.css';

//Services Imports
import userSongsServices from '../../../../services/UserServices/userSongsServices';
import guildSongsServices from '../../../../services/GuildServices/guildSongsServices';

class AddSong extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let songData = {
      playlist_id: this.props.playlistData.playlist_id,
      link: this.state.link
    }
    if(window.location.pathname.split("/")[2] === "personal") {
      userSongsServices.addSong(songData)
        .then(results => {
          this.props.getSongs(this.props.playlistData);
          document.querySelector("#AddSongForm").reset();
        })
        .catch(err =>  console.log(err));
    }else if(window.location.pathname.split("/")[2] === "guild") {
      guildSongsServices.addSong(songData)
        .then(results => {
          this.props.getSongs(this.props.playlistData);
          document.querySelector("#AddSongForm").reset();
        })
        .catch(err =>  console.log(err));
    }
  }

  render() {
    return(
      <div className="AddSong">
        <form id="AddSongForm" onSubmit={this.handleSubmit} autoComplete="off">
          <input type="text" name="link" placeholder="YouTube Link" onChange={this.handleChange} />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
};

export default AddSong;