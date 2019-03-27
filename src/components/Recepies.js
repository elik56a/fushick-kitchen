import React from 'react'
import { Link } from 'react-router-dom'
const Recipes = props => (

    <div className="container">
        <ul>
            {
                props.recipes.map((recipe) => {
                    return (
                        <div key={recipe.recipe_id}>
                            <li>
                                <div className="recipe">
                                    <img src={recipe.image_url} alt={recipe.title} className="res-img" />
                                    <div className="recipe-contant">
                                        <h5 className="recipe-title">
                                            {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 28)}...`}
                                        </h5>
                                        <p className="recipe-text">
                                            <strong> Publisher:</strong> <span>
                                                {recipe.publisher}
                                            </span>
                                        </p>
                                        <button className='recipe-buttons'>
                                            <Link to={{
                                                pathname: `recipe/${recipe.recipe_id}`,
                                                state: { recipe: recipe.title }
                                            }}> View Recipe</Link>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    </div>
)

export default Recipes;