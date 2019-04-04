import React, {Component} from 'react';
// import {Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Element} from 'react-scroll';
import Axios from 'axios';

class Contact extends Component {
 
  state ={
    fields: {
        name: '',
        email: '',
        subject: '',
        message: '',
        mailSent: false,
        error: null
      },
  }

  componentDidMount() {
        var Scroll = require('react-scroll');
        var scroller = Scroll.scroller;

        scroller.scrollTo('scroll-contact', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 0, // Scrolls to element + 50 pixels down the page
      })
  }

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  

   onFormSubmit = async (evt) => {
   evt.preventDefault();
   const fields = this.state.fields;
   const name = fields.name;
   const email = fields.email;
   const subject = fields.subject;
   const message = fields.message;

    await Axios.post('api/form',{
      name,
      email,
      subject,
      message
   })
   .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render(){

    return(
 <Element name="scroll-contact">
  <section id="contact">

      <div className="row">

         <div className="eight columns">


            <form action="/action_email.php" method="POST" id="contactForm" name="contactForm">
       <fieldset>

               <div>
            <label htmlFor ="contactName">Name <span className="required">*</span></label>
            <input type="text"  id="contactName"
            name="name"
             value={this.state.fields.name}
             onChange={this.onInputChange}
            />
               </div>

               <div>
            <label htmlFor ="contactEmail">Email <span className="required">*</span></label>
            <input type="text"  id="contactEmail"
             name="email"
             value={this.state.fields.email}
             onChange={this.onInputChange}
             />
               </div>

               <div>
            <label htmlFor ="contactSubject">Subject</label>
            <input type="text"  id="contactSubject"
            name="subject"
            value={this.state.fields.subject}
            onChange={this.onInputChange}
             />
               </div>

               <div>
                  <label htmlFor ="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="50" rows="15" id="contactMessage" name="message"
                  value={this.state.fields.message}
                  onChange={this.onInputChange}
                  ></textarea>
               </div>

               <div>
                  <input type='input' defaultValue='Send' className="submit submit-button" onClick={this.onFormSubmit} />
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
            Yu Liu ( Jim )<br />
            3/13 - 15 Dixon st <br />
            Clayton, vic 3168<br />
            <span>(61) 0410 470 100</span>
          </p>

        </div>

            <div className="widget widget_tweets">

               <h4 className="widget-title">Latest Tweets</h4>

               <ul id="twitter">
                  <li>
                     <span>
                     This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                     Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                     </span>
                     <b>2 Days Ago</b>
                  </li>
               </ul>

          </div>

         </aside>

   </div>

</section>

    </Element>
    );
  }
}

export default Contact;
