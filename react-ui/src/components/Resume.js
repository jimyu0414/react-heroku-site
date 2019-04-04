import React, {Component} from 'react';
import { Element } from 'react-scroll';
import WorkTag from './widgets/WorkTag';
import LogoSwinburne from '../img/swinburne.png';
import LogoJustGroup from '../img/justgroup.gif';
import LogoLadoo from '../img/ladoo.png';
import LogoCentrora from '../img/centrora.png';
import {NavLink} from 'react-router-dom';

class Resume extends Component {

  componentDidMount() {
    var Scroll = require('react-scroll');
    var scroller = Scroll.scroller;

    scroller.scrollTo('scroll-resume', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: 0, // Scrolls to element + 50 pixels down the page
  })
  }

    render(){

      return(
        <Element name="scroll-resume">

        <section id="resume">


           <div className="row education">

              <div className="three columns header-col">
                 <h1><span>Education</span></h1>
              </div>

              <div className="nine columns main-col">

                 <div className="row item">

                    <div className="twelve columns">

                       <h3>
                         Swinburne University of Technology
                         <img src={LogoSwinburne} alt='logo-swinburne'/>
                       </h3>
                       <p className="info">Master of &nbsp;IT <span>&bull;</span> <em className="date">2012 - 2014</em></p>

                       <ul>
                        <li>High distinction (85%) in software development major </li>
                         <li>Overall high distinction average (78%) achieved to date </li>
                       </ul>

                       <p className="resume__subject-title">Relevant Subjects:</p>
                         <ul className="resume__subject-list">
                          <li>Web Development</li>
                          <li>Software Development in Java</li>
                          <li>Database Analysis and design</li>
                          <li>iOS Mobile Application Development</li>
                         </ul>

                    </div>

                 </div>

                 <div className="row item">

                    <div className="twelve columns">

                       <h3>
                       Swinburne University of Technology
                        <img src={LogoSwinburne} alt='logo-swinburne' />
                      </h3>
                       <p className="info">Bachelor of Digital Design (Multimedia) <span>&bull;</span> <em className="date">2009 - 2012</em></p>

                       <p className="resume__subject-title">Relevant Subjects:</p>
                         <ul className="resume__subject-list">
                          <li>Graphic Design </li>
                          <li>Web Design</li>
                          <li>Motion Typography, Flash & 2D Animation</li>
                          <li>Film and movie, footage editing</li>
                          <li>Character Design 3D Modelling and Animation</li>
                         </ul>

                    </div>

                 </div>

              </div>

           </div>



           <div className="row work">

              <div className="three columns header-col">
                 <h1><span>Work</span></h1>
              </div>

              <div className="nine columns main-col">

                 <WorkTag
                   company="The Just Group"
                   logo={<img className="logo-jg" src={LogoJustGroup} alt='logo-justgroup'/>}
                   title="Web Designer & Front-end Developer"
                   year="Aug 2017 - Present"
                   desc={
                     <ul>
                       <li>Building series of new responsive commercial websites for Just Group's brands, ( Just Jeans, Dotti,Peteralexander, JayJays, Smiggle, etc. project in 09/17 - 09/18)</li>
                       <li>UI/UX Design & Development. (Recent projects in year 18: category page add to bag, pay later options, etc.</li>
                       <li>Bug Fixing, Site maintenance and enhancements to improve overall site performance.</li>
                       <li>Cross browsing / Cross Device Testing.</li>
                     </ul>
                   }
                   projectlink= {<NavLink to="/portfolio/web">Reference / Projects ></NavLink>}
                   />
                   <WorkTag
                     company="Ladoo"
                     logo={<img className="logo-ladoo" src={LogoLadoo} alt='logo-ladoo'/>}
                     title="Front-end Developer"
                     year="Sep 2016 – May 2017"
                     desc={
                       <ul>
                         <li>Write BEM standard responsive compliant HTML code and Sass Frameworks.</li>
                       <li>Write custom JavaScript code with knowledge of JavaScript and jQuery.</li>
                         <li>Implementing solutions using the Content Management System (Squiz Matrix).</li>
                         <li>Handle accessibility and usability with knowledge of cross browser compatibility and testing.</li>
                       </ul>
                     }
                     projectlink= {<NavLink to="/portfolio/web">Reference / Projects ></NavLink>}
                     />
                     <WorkTag
                       company="Centrora"
                       logo={<img className="logo-centrora" src={LogoCentrora} alt='logo-centrora'/>}
                       title="Front-end Developer"
                       year="Dec 2015 – Sep 2016"
                       desc={
                         <ul>
                         <li>Improve the UI of Centrora new control panel.</li>
                         <li>Using Photoshop and Illustrator to create mockups for the front-end layout of Centrora System</li>
                          <li>Applying PHP and CSS language in improving front-end layouts of web security system.</li>
                          <li>Cross browser testing to ensure front-end UI is user friendly and working properly.</li>
                          <li>Maintain Centrora website with CMS (Wordpress).</li>
                         </ul>
                       }
                       projectlink= {<NavLink to="/portfolio/web">Reference / Projects ></NavLink>}
                       />


              </div>

           </div>


           <div className="row skill">

              <div className="three columns header-col">
                 <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">

         <div className="bars">
            <h3>Designer Skills</h3>
                <ul className="skills">
                  <li>
                  <span className="bar-expand photoshop"></span><em>Photoshop</em>
                  </li>
                  <li>
                       <span className="bar-expand illustrator"></span><em>Illustrator</em>
                  </li>
               </ul>

               <h3>Dev Skills</h3>
               <ul className="skills">
               <li>
               <span className="bar-expand html5"></span><em>HTML5</em>
              </li>
               <li>
               <span className="bar-expand css"></span><em>Sass / Scss / Bootstrap</em>
             </li>
               <li>
               <span className="bar-expand jquery"></span><em>JavaScript / jQuery / React</em>
              </li>
              <li>
              <span className="bar-expand php"></span><em>PHP / JSP / Objective-C / Java</em>
             </li>
              <li>
              <span className="bar-expand wordpress"></span><em>Git / SVN ( GitHub, Bitbucket )</em>
            </li>
               </ul>
             </div>

           </div>

           </div>

        </section>
      </Element>
      )
    }
}

export default Resume;
