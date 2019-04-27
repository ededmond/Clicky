import React, {Component} from 'react';
import './style.css';
class Card extends Component {
  render(props) {
    return (
      <div className="card"
        onClick = {() => {this.props.onClick(this.props.id);}}
        style={{backgroundImage:"url("+this.props.image}}
      >
        {/* <img src={this.props.image} alt = {this.props.name}></img> */}
      </div>
    );
  };
}

export default Card;
