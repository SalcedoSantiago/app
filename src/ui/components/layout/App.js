import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./ItemListContainer";
import SingleProduct from "./SingleProduct";
import Layout from "./Layout";
import '../../App.scss'

const App = () => {

  return (
    <Router>
      <Layout>
        <Route path="/" component={ItemListContainer} exact />
        {/* <Route path="/category/:id" component={ItemListContainer} /> */}
        <Route path="/product/:id" component={SingleProduct} />
      </Layout>
    </Router>
  )

}

export default App;