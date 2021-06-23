import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J1mEDSEl68q74Awg0fShhHA3LMvW9V2FH2QKB0ywWlC1UpU1USbJ37I9DIdau2awdyCKkVvAMaf7GGPTc3w0h3D00mT4hOY4V";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        alert("Payment successful");
        console.log("Payment error", JSON.parse(error));
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

//https://unsplash.com/photos/O4fme2fyako
