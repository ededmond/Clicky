import React, {Component} from 'react';
import './style.css';
import Navbar from "../Navbar";
import Card from "../Card";
import images from "../images.json";
class Page extends Component {
  state = {
    score: 0,
    topScore: 0,
    guess: "Click on an image!",
    images: images
  };
  refresh = id => {
    if (!this.state.images[id].clicked) { //haven't clicked on this 
      let score = this.state.score +1;
      let topScore = (score > this.state.topScore) ? score : this.state.topScore;
      
      //if you've won, clear the images
      if (score >= images.length) {
        this.setState({
          images: [],
          score: 0,
          topScore: score,
          guess: "You Win!"
        })
      } else {
        let newImages = this.state.images;
        newImages[id].clicked = true;
        newImages = newImages.sort(() => Math.random() - 0.5)
        this.setState({
            images: newImages,
            score,
            topScore,
            guess : "Correct!"
        })
      }
    } else {  //lose the game
      this.setState({
        images:[],
        score: 0,
        guess: "You Lose!"
      });
    }
      
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
                this.state.images.map((image,i) => (
                    <Card
                    key = {i}
                    id={i}
                    name={image.name}
                    image={image.image}
                    onClick = {this.refresh}
                    />
                ))
            }
          </div>
          {(this.state.images.length > 0) ||<div className ="row">
            <div className="col-12">
              <h2 className="text-center">{this.state.guess}</h2>
              <button className ="btn text-center col-12">Play Again?</button>
            </div>
          </div>}
        </div>
      </div>
    );
  };
}

export default Page;
