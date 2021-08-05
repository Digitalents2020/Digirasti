import React from "react";
var count1 = 1;
var count2 = 0;
var eka = 0;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.vaikeus
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });    
    count1++;
  }
  
  
  render() {
    if(count1 > count2 || eka===0 ){
      eka=1
      count2++
    return (
      <div>
        {this.props.letter()}
     </div>
    );
  }else{
    return <p className="letters">{this.props.arrayOfLetters}</p>;

  }}
}


export default Clock;