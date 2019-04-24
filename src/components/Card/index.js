import React, {Component} from 'react';
import './style.css';
class Card extends Component {
  constructor (props) {
      super(props);
      this.state = {
    clicked : "no"
  };
  }
  
  clicked = () =>{
    this.setState({
      clicked : "yes"
    })
  }
  render(props) {
    return (
      <div className="card col-md-3 col-4"
        onClick = {() => {this.clicked(); this.props.onClick();}}
      >
        <img className="card-img-top" src={this.props.image} alt={this.props.name}/>
        <div className="card-body">
            <h6 className= "card-title">{this.state.clicked}</h6>
        </div>
        
      </div>
    );
  };
}

export default Card;
