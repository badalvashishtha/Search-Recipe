const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
const Api_key = 'ff105ab3-a292-47c4-ba8d-2ef2a765c230'
const SearchImage = async (text) => {

  const res = await fetch(`${API_URL}?search=${text}&key=${Api_key}`)
  const data = await res.json()

  return data

}
const SearchRecipeDetails = async (id) => {
  const response = await fetch(`${API_URL}/${id}?key=${Api_key}`)
  const data = await response.json()
  return data

}

export { SearchImage }
export { SearchRecipeDetails }

// const res = await fetch(`https://api.unsplash.com/search/users?page=1&query=${text}`, {


//load recipe
// const response = await AJAX(`${API_URL}/${id}?key=${KEY}`);

//load searchResult
// const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
