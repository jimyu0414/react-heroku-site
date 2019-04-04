import React, {Component} from 'react';

class ChangingTexts extends Component{


  state = {
    textArray: this.props.titles,
    text: this.props.default,
    textCount: 0,
  }

  changeText = (count) => {
    const textArray = this.state.textArray;
    if(count > this.props.titles.length-1) count = 0;
    this.setState({
      text: textArray[count],
      textCount: count + 1,
    })
  }

  componentDidMount(){
     this.updateProfession = setInterval( ()=> this.changeText(this.state.textCount), 2000)
  }

  componentWillUnmount(){
    clearInterval(this.updateProfession)
  }

  render(){
    return (<span>{this.state.text}</span>)
  }

}

export default ChangingTexts;
