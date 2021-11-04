import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./ItemListContainer";
import SingleProduct from "./SingleProduct";
import Layout from "./Layout";
import '../../App.scss'

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}>  </Route>

        </Routes>

      </Layout>
    </Router>
  )

}

export default App;