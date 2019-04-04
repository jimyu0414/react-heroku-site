import React, { Component } from 'react';

class Template extends Component {
  render() {
    return(
      <div className="App">

   <header id="home">

      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Yu Liu</h1>
            <h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
            effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling </a>
             and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
               <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
               <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
               <li><a href="#"><i className="fab fa-github"></i></a></li>
               <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="fas fa-chevron-down"></i></a>
      </p>

   </header>



   <section id="about">

      <div className="row">

         <div className="ten columns">

            <h2>About Me</h2>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>

            <div className="row">

               <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Jonathan Doe</span><br/>
						   <span>1600 Amphitheatre Parkway<br/>
						         Mountain View, CA 94043 US
                     </span><br/>
						   <span>(123)456-7890</span><br/>
                     <span>anyone@website.com</span>
					   </p>

               </div>

               <div className="columns download">
                  <p>
                     <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>

            </div>

         </div>

      </div>

   </section>



   <section id="resume">


      <div className="row education">

         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">

            <div className="row item">

               <div className="twelve columns">

                  <h3>University of Life</h3>
                  <p className="info">Master in Graphic Design <span>&bull;</span> <em className="date">April 2007</em></p>

                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                  </p>

               </div>

            </div>

            <div className="row item">

               <div className="twelve columns">

                  <h3>School of Cool Designers</h3>
                  <p className="info">B.A. Degree in Graphic Design <span>&bull;</span> <em className="date">March 2003</em></p>

                  <p>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                  </p>

               </div>

            </div>

         </div>

      </div>



      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">

            <div className="row item">

               <div className="twelve columns">

                  <h3>Awesome Design Studio</h3>
                  <p className="info">Senior UX Designer <span>&bull;</span> <em className="date">March 2010 - Present</em></p>

                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                  </p>

               </div>

            </div>

            <div className="row item">

               <div className="twelve columns">

                  <h3>Super Cool Studio</h3>
                  <p className="info">UX Designer <span>&bull;</span> <em className="date">March 2007 - February 2010</em></p>

                  <p>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                  </p>

               </div>

            </div>

         </div>

      </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            </p>

				<div className="bars">

				   <ul className="skills">
					   <li><span className="bar-expand photoshop"></span><em>Photoshop</em></li>
                  <li><span className="bar-expand illustrator"></span><em>Illustrator</em></li>
						<li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
						<li><span className="bar-expand css"></span><em>CSS</em></li>
						<li><span className="bar-expand html5"></span><em>HTML5</em></li>
                  <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
					</ul>

				</div>

			</div>

      </div>

   </section>





   <section id="portfolio">

      <div className="row">

         <div className="two columns header-col">

            <h1><span>Get Hosting.</span></h1>

         </div>

         <div className="seven columns">

            <h2><span className="lead">Unde Omnis Iste</span></h2>
            <p><span className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae. </span></p>

         </div>

         <div className="three columns action">



         </div>

      </div>

   </section>



   <section id="testimonials">

      <div className="text-container">

         <div className="row">

            <div className="two columns header-col">

               <h1><span>Client Testimonials</span></h1>

            </div>

            <div className="ten columns flex-container">

               <div className="flexslider">

                  <ul className="slides">

                     <li>
                        <blockquote>
                           <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                           to do what you believe is great work. And the only way to do great work is to love what you do.
                           If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
                           </p>
                           <cite>Steve Jobs</cite>
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                           <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                           Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                           nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                           </p>
                           <cite>Mr. Adobe</cite>
                        </blockquote>
                     </li>
                  </ul>

               </div>
            </div>

         </div>

       </div>

   </section>



   <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>

            </div>

         </div>

         <div className="row">

            <div className="eight columns">


               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label>Name <span className="required">*</span></label>
						   <input type="text"  size="35" id="contactName" name="contactName" />
                  </div>

                  <div>
						   <label>Email <span className="required">*</span></label>
						   <input type="text"  size="35" id="contactEmail" name="contactEmail" />
                  </div>

                  <div>
						   <label>Subject</label>
						   <input type="text"  size="35" id="contactSubject" name="contactSubject" />
                  </div>

                  <div>
                     <label>Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="img/loader.gif" />
                     </span>
                  </div>

					</fieldset>
				   </form>


               <div id="message-warning"> Error boy</div>

				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>

            </div>


            <aside className="four columns footer-widgets">

               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   Jonathan Doe<br/>
						   1600 Amphitheatre Parkway <br/>
						   Mountain View, CA 94043 US<br/>
						   <span>(123) 456-7890</span>
					   </p>

				   </div>

               <div className="widget widget_tweets">

                  <h4 className="widget-title">Latest Tweets</h4>

                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>

		         </div>

            </aside>

      </div>

   </section>

   <footer>

      <div className="row">

         <div className="twelve columns">

            <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fab fa-github-square"></i></a></li>
            <li><a href="#"><i className="fab fa-dribbble-square"></i></a></li>
            </ul>

            <ul className="copyright">
               <li>&copy; Copyright 2014 CeeVee</li>
               <li>Design by <a href="http://www.styleshout.com/" title="Styleshout" target="_blank">Styleshout</a></li>
            </ul>

         </div>

         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

      </div>

   </footer>

      </div>
    );
  }
}

export default Template;
