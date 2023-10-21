import {orderStore, productsStore} from "../store";
import { observer } from "mobx-react-lite";

export const Total = observer(() => {
    const total = productsStore.total

    return <table className="bill">
        <tbody>
            <tr className="subtotal">
                <td className="label">Subtotal :</td>
                <td className="value">$ {total.subtotal}</td>
            </tr>
            <tr className="salestax">
                <td className="label">Sales tax :</td>
                <td className="value">$ {total.tax}</td>
            </tr>
            <tr className="total">
                <td className="label">Total :</td>
                <td className="value">$ {total.total}</td>
            </tr>
            <tr>
                <td colSpan={2} className="button-cell">
                    <button
                      className="main-button"
                      onClick={orderStore.createOrder}
                      disabled={orderStore.status === 'pending'}
                    >
                        Buy
                    </button>
                </td>
            </tr>
        </tbody>
    </table>;
})
