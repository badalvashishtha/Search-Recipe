function RenderDetail({ recipeDetails, closeModal }) {

  console.log(recipeDetails)
  const { servings, cooking_time: cookingTime } = recipeDetails;
  console.log(servings)
  // const impDetails = [ingArr, servings, cookingTime]

  return (
    <div className={`modal is-active`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Recipe info</p>
          <button className="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          <h1 className="title is-4" >Name of the Recipe: {recipeDetails.title}</h1>
          <h1 className="title is-4" >Cooking Time: {cookingTime}min </h1>
          <h1 className="title is-4" >servings: {servings} </h1>
          <h1 className="title is-4" >Ingredients</h1>
          <ul>
            {recipeDetails.ingredients.map((ingrident) => {
              return <li className="text is-3">{`${ingrident.quantity === null ? '' : ingrident.quantity} ${ingrident.unit === '' ? '' : ingrident.unit.charAt(0).toUpperCase() + ingrident.unit.slice(1)} ${ingrident.description.charAt(0).toUpperCase() + ingrident.description.slice(1)}`}</li>
            })}
          </ul>
        </section>
        <footer className="modal-card-foot">
          {/* <button className="button is-success">Save changes</button> */}
          {/* <button className="button">Cancel</button> */}
        </footer>
      </div>
    </div>)
}

export default RenderDetail