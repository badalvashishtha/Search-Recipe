
import ViewRecipe from './ViewRecipe'

function ShowImage({ dataArr }) {
  // console.log(dataArr)
  const Recipes = dataArr.recipes.map((recipe) => {
    return < ViewRecipe recipe={recipe} key={recipe.id} />
  })

  return <div className="columns">
    <div className="image-column">{Recipes}</div>

  </div>
}
export default ShowImage
