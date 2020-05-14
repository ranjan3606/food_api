import React from 'react'

const RecipesItem = props => {
    const {name, image, ingredientLines} = props
    return (
        <div className="card py-2 text-center">
            <div className="card-body">
                <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
                <h4>{name}</h4>
            </div>
            <ul className="list-group list-group-flush">
                {ingredientLines.map(ingredient => (
                    <li className="list-group-item">{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipesItem;