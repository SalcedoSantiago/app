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
          <Route path="/" component={<ItemListContainer />} exact />
          {/* <Route path="/category/:id" component={ItemListContainer} /> */}
          {/* <Route path="/product/:id" component={SingleProduct} exact /> */}
        </Routes>
      </Layout>
    </Router >
  )

}

export default App;