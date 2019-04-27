import React, {Component} from 'react';
import './style.css';
import Navbar from "../Navbar";
import Card from "../Card";
import images from "../images.json";
class Page extends Component {
  state = {
    score: 0,
    topScore: window.localStorage.getItem("clicky-topScore") || 0,
    wins: window.localStorage.getItem("clicky-wins") || 0,
    guess: "Click on an image!",
    images: images.slice(4),
    hard: false
  };
  refresh = id => {
    if (!this.state.images[id].clicked) { //haven't clicked on this 
      let score = this.state.score +1;
      let topScore = this.state.topScore;
      //if new highscore
      if (score > this.state.topScore) {
        topScore = score;
        //set local storage
        const scoreName = this.state.hard ? "clicky-hard-topScore" : "clicky-topScore"
        window.localStorage.setItem(scoreName,score);
      }
      //if you've won, clear the images
      if (score >= this.state.images.length) {
        const winName = this.state.hard ? "clicky-hard-wins" : "clicky-wins"
        window.localStorage.setItem(winName,parseInt(this.state.wins) +1);
        this.setState({
          images: [],
          score: 0,
          topScore: score,
          wins: parseInt(this.state.wins) + 1,
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
  again = () =>{
    for (let i=0; i < images.length; i++) {
      images[i].clicked = false;
    }
    this.setState({
      images:this.state.hard ? images : images.slice(4)
    })
  }
  switchDifficulty = () => {
    if (this.state.score > 0) {
      //setup warning
    } else {
      const newImages = this.state.hard ? images.slice(4) :images
      const scoreName = this.state.hard ? "clicky-topScore" : "clicky-hard-topScore"
      const winName = this.state.hard ? "clicky-wins" : "clicky-hard-wins"
      this.setState({
        hard: !this.state.hard,
        images: newImages,
        topScore: window.localStorage.getItem(scoreName) || 0,
        wins: window.localStorage.getItem(winName) || 0
      })
    }
  }
  render() {
    return (
      <div>
        <Navbar 
          score = {this.state.score}
          topScore = {this.state.topScore}
          guess = {this.state.guess}
          wins = {this.state.wins}
          hard = {this.state.hard}
          onClick = {this.switchDifficulty}
        />
        <div className = "container">
          <div className = "row ">
            {
                this.state.images.map((image,i) => (
                  <Card
                    key = {i}
                    id={i}
                    name={image.name}
                    image={image.image}
                    onClick = {this.refresh}
                    hard = {this.state.hard}
                    />
                ))
            }
          </div>
          {(this.state.images.length > 0) ||<div className ="row end-screen">
            <div className="col-12">
              <h2 className="text-center">{this.state.guess}</h2>
              <button className ="btn text-center col-12"
                onClick={this.again}
              >Play Again?</button>
            </div>
          </div>}
        </div>
      </div>
    );
  };
}

export default Page;
