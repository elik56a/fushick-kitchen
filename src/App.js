import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recepies'
import Navbar from './components/Navbar'
import ShowCase from './components/ShowCase';
import About from './components/About';
import Video from './components/Video';
import BuyFood from './components/BuyFood'
import MapContainer from './components/MapContainer'
import Footer from './components/Footer'
const myApiKey = "6697f3a1a2650cd42df99ea3ba26c181"
class App extends Component {
  state = {
    recipes: [],
    error: ''
  }


  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    var selected = document.getElementById("selectNumber");
    var selectedValue = selected.options[selected.selectedIndex].value;
    e.preventDefault();
    const apiCall = await fetch(`https://www.food2fork.com/api/search?key=${myApiKey}&q=${recipeName}&count=${selectedValue}`)
    const data = await apiCall.json();
    if (data.recipes.length === 0) {
      this.setState({ error: "Sorry but your search did not return any results" })
    } else {
      this.setState({ recipes: data.recipes, error: '' })
    }
  }


  componentDidMount = () => {
    const json = localStorage.getItem("recipes")
    const recipes = JSON.parse(json)
    if (json != null)
      this.setState({ recipes })
  }


  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ShowCase />
        <About />
        <Form getRecipe={this.getRecipe} />
        {this.state.error ? (
          <h2 className="error-msg">
            {this.state.error}
          </h2>)
          : (<Recipes recipes={this.state.recipes} />)}
        <Video />
        <BuyFood />
        <MapContainer />
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;