import React, {Component} from 'react';
import './style.css';
class Card extends Component {
  render(props) {
    return (
      <div className="card"
        onClick = {() => {this.props.onClick(this.props.id);}}
        style={{backgroundImage:"url("+this.props.image}}
      >
      </div>
    );
  };
}

export default Card;
