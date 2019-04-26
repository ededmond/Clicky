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
    console.log(id);
    console.log(this.state.images);
    if (!this.state.images[id].clicked) { //haven't clicked on this 
      let score = this.state.score +1;
      let topScore = (score > this.state.topScore) ? score : this.state.topScore;
        //if you've won, clear the images
      let newImages = this.state.images;
      newImages[id].clicked = true;
      newImages = (score >= images.length) ? [] : newImages.sort(() => Math.random() - 0.5)
      let guess  = (score >= images.length) ? "You win!" : "Correct!"
      this.setState({
          images: newImages,
          score,
          topScore,
          guess
      })
    } else {  //lose the game
      alert("You lose");
      this.setState({
        images:images,
        score: 0,
        guess: "Wrong!"
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
          <div className ="row">
            {(this.state.images.length > 0) || <button>Play Again?</button>}
          </div>
        </div>
      </div>
    );
  };
}

export default Page;
