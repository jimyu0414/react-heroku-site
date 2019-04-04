import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends Component{

  state={
    duration: 1,
    videoDesc: '',
  }

    _videOnReady(event) {
      // access to player in all event handlers via event.target
      event.target.stopVideo();

      console.log(event.data);
      // console.log(event.target.getDuration())
    }


    render(){

      const opts = {
        height: '320',
        width: '480',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return(
        <div className="player-container">
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._videOnReady}
        />
        <h4>{this.props.videoTitle}</h4>
        <p>{this.props.videoDesc}</p>
        </div>
      );
    }
}

export default YouTubePlayer;
