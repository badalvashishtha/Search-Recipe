import { SearchRecipeDetails } from './api'
import RenderDetail from './RenderDetail'
import { useState } from "react"

function ViewRecipe({ recipe: recipeItem }) {
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [recipeDataVisible, setRecipeDataVisible] = useState(false)

  const renderRecipeDetail = async () => {
    const recipeContent = await SearchRecipeDetails(recipeItem.id)

    setRecipeDetails(recipeContent.data.recipe)
    setRecipeDataVisible(true)
  }

  return <div className="card" >
    <div className="card-image">
      <img className="image" src={recipeItem.image_url} alt={recipeItem.title}  ></img>
    </div>
    <div className="card-content">
      <p className="title is-4">{recipeItem.title} </p>
      <p className="subtitle is-6">{recipeItem.publisher}</p>
      <button className="button is-primary showRecipe" onClick={renderRecipeDetail}>Recipe Details</button>
      {recipeDataVisible === true && <RenderDetail recipeDetails={recipeDetails} closeModal={() => {
        setRecipeDataVisible('');
      }} />}
    </div>
  </div >
}
export default ViewRecipe