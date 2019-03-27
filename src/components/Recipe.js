import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const myApiKey = "6697f3a1a2650cd42df99ea3ba26c181";

class Recipe extends Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const recipeId = this.props.match.params.id
        const req = await fetch(`https://www.food2fork.com/api/get?key=${myApiKey}&rId=${recipeId}`)
        const res = await req.json();
        this.setState({ activeRecipe: res.recipe })
    }
    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.activeRecipe;

        return (
            <React.Fragment>
                {this.state.activeRecipe.length !== 0 &&
                    <div className="recipe_info_container">
                        <div className="recipe_info_main">
                            <h1 className="recipe_info_title">{title}</h1>
                            <img className="recipe_info_img" src={image_url} alt="" />
                            <div className='recipe_info_publisher'>
                                <p>Recipe From: <em>{publisher}</em></p>
                                <p ><a className='recipe_info_origin' href={source_url} target="_blank"><i className="fas fa-concierge-bell"></i>  Recipe Origin Url</a></p>
                                <p > <a className='recipe_info_site' href={publisher_url} target="_blank"><i className="fas fa-drumstick-bite"></i>  Visit Publisher Site </a></p>
                                <button className="recipe_info_btn">
                                    <Link to='/'>Home Page</Link>
                                </button>
                            </div>
                            <ul className="recipe_info_ingredients" >
                                <h2>Ingredients:</h2>
                                {ingredients.map((item, index) => {
                                    return (
                                        <li className="recipe_info_list" key={index}>
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>

                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
export default Recipe;