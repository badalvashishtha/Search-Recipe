import "./components/ViewImage.css"
import "bulma/css/bulma.css"

import { SearchImage } from './components/api'
import SearchBar from './components/SearchBar'
import ShowImage from "./components/ShowImage"
// import CollectImage from './components/CollectImage'
import { useState } from 'react'

function App() {
  const [dataArr, setDataArr] = useState([])

  const handleSubmit = async (searchText) => {
    const resultArr = await SearchImage(searchText)
    // console.log(resultArr)
    // console.log(resultArr.data)
    setDataArr(resultArr.data)
    // ShowingImages(resultArr)
  }
  let ShowingImages = ''
  if (dataArr?.recipes) {
    ShowingImages = <ShowImage dataArr={dataArr} />
  }

  return (
    <div className="main">
      <SearchBar onSubmit={handleSubmit} />
      <div className="cardContainer">
        {ShowingImages}
      </div>
    </div>
  )
}
export default App