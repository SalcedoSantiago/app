import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./ItemListContainer";
import SingleProduct from "./SingleProduct";
import Layout from "./Layout";
import '../../App.scss'
import Cart from "./Cart";
import { CustomProvider } from "./cartContext"

const App = () => {

  return (
    <Router>
      <CustomProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/product/:id" element={<SingleProduct />}>  </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </CustomProvider>
    </Router>
  )

}

export default App;