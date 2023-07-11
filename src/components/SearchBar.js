import { useState } from 'react'
function SearchBar({ onSubmit }) {
  const [searchText, setSearchText] = useState('')

  const [activeDropDown, SetActiveDropDown] = useState('')

  const AddClassName = () => {
    let dropDown = activeDropDown === "" ? "is-active" : ""

    SetActiveDropDown(dropDown)

  }

  const textSubmit = (event) => {
    event.preventDefault()
    onSubmit(searchText)
  }
  const updateText = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div className="menuBar" >
      <div className="searchBar">
        <form onSubmit={textSubmit}>
          <div className="control">
            <input className="input is-hovered" value={searchText} onChange={updateText} placeholder="Search Recpe" />
          </div>
        </form>
      </div>
      <div className="recipeList">
        <div className={`dropdown ${activeDropDown}`}>
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" onClick={AddClassName} aria-controls="dropdown-menu3">
              <span>Some Popular Recipes ↓</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <ol >
                <li className="dropdown-item">Chocolate</li>
                <li className="dropdown-item">Pasta</li>
                <li className="dropdown-item">Ice Cream</li>
                <li className="dropdown-item">Pizza</li>
                <li className="dropdown-item">Fries</li>
                <li className="dropdown-item">Cake</li>
                <li className="dropdown-item">Pie</li>
                <li className="dropdown-item">Chips</li>
                <li className="dropdown-item">Corn</li>
                <li className="dropdown-item">Avocado</li>
                <li className="dropdown-item">Toast</li>
                <li className="dropdown-item">Chicken</li>
                <li className="dropdown-item">Salad</li>
                <li className="dropdown-item">Masala</li>
                <li className="dropdown-item">Donuts</li>
                <li className="dropdown-item">Chili</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default SearchBar