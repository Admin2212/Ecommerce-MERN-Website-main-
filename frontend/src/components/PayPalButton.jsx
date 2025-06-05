import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess }) => {
  return (
    <PayPalButtons
      style={{ layout: "vertical" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount.toString(),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        onSuccess(details); // callback
      }}
      onError={(err) => {
        console.error("PayPal Checkout Error:", err);
      }}
    />
  );
};

export default PayPalButton;
