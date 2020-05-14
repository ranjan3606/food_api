import React from 'react'

const Header = props => {
    const {search, onInputChange, onSearch} = props
    return (
        <div className="jumbotron bg-danger">
            <h1 className="display-1 text-center">
                <i className="material-icons brand-icon"></i>Fastfood Recipes
            </h1>
            <div className="input-group w-50 mx-auto">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Recipes's name" 
                    value={search}
                    onChange={onInputChange}
                    />
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={onSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}
export default Header