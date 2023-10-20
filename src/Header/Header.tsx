import { store } from "../store";

export const Header = () => (
  <div
    className="header"
    onClick={store.increaseHeaderClicks}
  >
    <h1>Your cart</h1>
    <p>"I say let the world go to hell, but I should always have my tea."</p>
    <p>― Fyodor Dostoyevsky, Notes from Underground</p>
  </div>
)
