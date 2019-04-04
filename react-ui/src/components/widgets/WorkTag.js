import React, {Component} from 'react';

class WorkTag extends Component{
  render(){
    return(
      <div className="row item">
         <div className="twelve columns">
            <h3>
            {this.props.company}
            {this.props.logo}
            </h3>
            <p className="info">{this.props.title} <span>&bull;</span> <em className="date">{this.props.year}</em></p>
            {this.props.desc}
            <div>
            {this.props.projectlink}
            </div>
         </div>

      </div>
    );
  }
}

export default WorkTag;
