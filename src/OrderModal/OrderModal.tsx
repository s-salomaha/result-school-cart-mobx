import { useCreateOrderMutation } from "../redux/order";

export const OrderModal = () => {
  const [, { data, reset }] = useCreateOrderMutation({ fixedCacheKey: 'order' })

  if (!data?.success) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order confirmed</h2>
        <button type="button" className="main-button" onClick={() => reset()}>Perfect!</button>
      </div>
    </div>
  );
}
