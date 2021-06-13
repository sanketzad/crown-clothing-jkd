import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J1mEDSEl68q74Awg0fShhHA3LMvW9V2FH2QKB0ywWlC1UpU1USbJ37I9DIdau2awdyCKkVvAMaf7GGPTc3w0h3D00mT4hOY4V";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://unsplash.com/photos/O4fme2fyako"
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
