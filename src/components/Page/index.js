import React, {Component} from 'react';
import './style.css';
import Navbar from "../Navbar";
import Card from "../Card";
import images from "../images.json";
class Page extends Component {
  state = {
    score: 0,
    topScore: 0,
    guess: "wrong",
    images: images
  };
  refresh = () => {
      this.setState({
          images: images.sort(() => Math.random() - 0.5)
      })
  }
  render() {
    return (
      <div>
        <Navbar 
          score = {this.state.score}
          topScore = {this.state.topScore}
          guess = {this.state.guess}
        />
        <div className = "container">
            <div className = "row">
            {
                this.state.images.map(image => (
                    <Card
                    name={image.name}
                    image={image.image}
                    onClick = {this.refresh}
                    />
                ))
            }
            </div>
        </div>
      </div>
    );
  };
}

export default Page;
