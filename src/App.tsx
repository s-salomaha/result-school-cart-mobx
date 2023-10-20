import { Total } from './Total/Total';
import { Header } from './Header/Header';
import { Cart } from './Cart/Cart'
import './App.css';
import { OrderModal } from "./OrderModal/OrderModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Total />
      <OrderModal />
    </div>
  );
}

export default App;
