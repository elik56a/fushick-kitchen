import React from 'react'

const Form = (props) => (
    <div className='form_section'>
        <form onSubmit={props.getRecipe}>
            <input className='form_input' type="text" name='recipeName' placeholder='Serach recipes from all over the world...' />
            <select name="numberOfRecipes" className="selectNumber" id='selectNumber'>
                <option value="">Number Of Recipes</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
            </select>
            <br />
            <button className='form_button'>Search... <i className="fas fa-search"></i></button>
        </form>
    </div>
)

export default Form;