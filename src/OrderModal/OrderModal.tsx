import { orderStore } from "../store";
import { observer } from "mobx-react-lite";

export const OrderModal = observer(() => {
  const status = orderStore.status

  if (status !== 'success') {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order confirmed</h2>
        <button
          type="button"
          className="main-button"
          onClick={orderStore.reset}
        >
          Perfect!
        </button>
      </div>
    </div>
  );
})
