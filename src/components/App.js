import "../styles/index.css";
import "../styles/Layout.css";
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
