import React from "react";
var readyForRender = true

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.difficulty
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });    
    readyForRender = true
  }
  
  
  render() {
    if(readyForRender === true){
      readyForRender = false
    return (
      <div>
        {this.props.letter(true)}
     </div>
    );
  }else if (this.props.arrayOfLetters.length > 0){
    return  (<div>
        {this.props.letter(false)}
           </div>)
  }else
  return(
    <p className="empty">-</p>)
}
}


export default Clock;