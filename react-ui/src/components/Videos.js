import React, { Component } from 'react';
import YouTubePlayer from './widgets/YouTubePlayer';
import {Element} from 'react-scroll';


class Videos extends Component {

  componentDidMount() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

    scroller.scrollTo('scroll-portfolio-videos', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -150, // Scrolls to element + 50 pixels down the page
  })
  }


  render(){
    return(

    <Element name="scroll-portfolio-videos">
      <div className="portfolio-videos">
      <div className="">
      <div className="portfolio-videos--container">

        <YouTubePlayer
        videoTitle="Design graduation showreal"
        videoId="QF275czVli4"
        videoDesc="A show real for a summary of all my highlighted graphic & video works around year 2012."
         />
        <YouTubePlayer
        videoTitle="Typography animation"
        videoId="tNMS1Q0c14w"
        videoDesc="A submitting video for my motion typography animation subject while doing my Bachelor."
        />

        <YouTubePlayer
        videoTitle="3D Bird Modelling"
        videoId="miSCsZRxS88"
        videoDesc="3D bird modelling for the animation of Gunter's Fables book. The project is started in my last year of my bachelor.  Almost every single student involved in this big project."
         />

        <YouTubePlayer
        videoTitle="2D Animation, black widow"
        videoId="fhEUHRGsuvs"
        videoDesc="2D animation subject"
        />

        <YouTubePlayer
        videoTitle="A day for a normal web designer & developer"
        videoId="QbTroDEn-pU"
        videoDesc="Recording my daily working life as a front-end side designer & developer."
        />

        <YouTubePlayer
        videoTitle="After Effects渲染导出H264 用Media Encoder一分钟搞定"
        videoId="S9pJBs0nUaE"
        videoDesc="After Effects 2018 CC 的自带渲染队列里好像取消了h264 mp4的视频格式选项。 但是h264一向都是上传视频网站的最佳视频格式。 这个视频来教大家如何用Media Encoder去渲染After effects的视频文件"
        />

        <YouTubePlayer
        videoTitle="VLOG-03 | 我的30岁，是否和你一样？ | A video for me stepping into 30s"
        videoId="ZCAYWXWy7vI"
        videoDesc="今天的我正式步入了30， 想着做一期视频吧， 来分享一些我30岁的感受和我30岁的生活状态。 等老了以后，回看现在的自己，应该很有趣吧。"
        />

        <YouTubePlayer
        videoTitle="VLOG-08.3 新西兰滑雪之旅终章 | Treble Cone，Ohau 爬山 | 轻度越野"
        videoId="rGY8f_TeeUg"
        videoDesc="记录了我们在新西兰滑雪的最后几天， 记录了Treble Cone，Ohau和路上的美丽风景。"
        />

        <YouTubePlayer
        videoTitle="Vlog | Snowboarders Are Awesome"
        videoId="1RrOA_3tRog"
        videoDesc="每当我在雪场上飞驰的时候：朋友眼中的我：他又开始装b了。雪场里的人眼中的我：这个人滑的还行吧，好像动作不规范唉。工作人员眼中的我：这个人需要留意，一会儿可能拉去急诊。老妈眼中的我： 还行吧，不错的爱好。老婆眼中的我： 我靠，他又自己去浪了。我自己眼中的我：哇靠，我帅呆了！"
        />

        </div>
        </div>
      </div>
      </Element>
    );
  }
}

export default Videos;
