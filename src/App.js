import React, { Component } from 'react';
import './App.css';
import './RecipeInfo.css'
import './MediaQuery.css'
import Form from './components/Form'
import Recipes from './components/Recepies'
import ShowCase from './components/ShowCase';
import About from './components/About';
import Video from './components/Video';
import BuyFood from './components/BuyFood'
import MapContainer from './components/MapContainer'
import Footer from './components/Footer'

// Smooth Scroll Config
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';
import { configureAnchors } from 'react-scrollable-url'
// configureAnchors({ keepLastAnchorHash: false, debounce: 500 });

// Food2Fork API
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
        <nav className="navbar" id='navbar'>
          <span className="open-slide">
            <a href=""><i className="fas fa-bars fa-2x"></i></a>
          </span>
          <ul className="nav-links">
            <ScrollableLink href="/showcase">
              <li> <a>Home </a></li>
            </ScrollableLink>

            <ScrollableLink href="/about-section">
              <li> <a> About Us </a></li>
            </ScrollableLink>
            <ScrollableLink href="/video-container">
              <li> <a> Ouer Recipes </a></li>
            </ScrollableLink>
            <ScrollableLink href="/footer-container">
              <li> <a>Contact </a></li>
            </ScrollableLink>
          </ul>
        </nav>

        {/* The components start from here  */}
        <ScrollableSection name={'showcase'} title="showcase">
          <div>  <ShowCase /> </div>
        </ScrollableSection>

        <ScrollableSection name={'about-section'} title="about-section">
          <div>  <About /> </div>
        </ScrollableSection>

        <Form getRecipe={this.getRecipe} />
        {this.state.error ? (
          <h2 className="error-msg">
            {this.state.error}
          </h2>)
          : (<Recipes recipes={this.state.recipes} />)}

        <ScrollableSection name={'video-container'} title="video-container">
          <div>  <Video /> </div>
        </ScrollableSection>

        <BuyFood />
        <MapContainer />

        <ScrollableSection name={'footer-container'} title="footer-container">
          <div>  <Footer /></div>
        </ScrollableSection>

      </React.Fragment>
    );
  }
}

export default App;