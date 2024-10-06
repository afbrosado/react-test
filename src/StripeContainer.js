import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51HziLZK7JTNQ6NQUAUxEi4rJJTofvNWeHzBDKONJ8sUU6gkLlNg2GFTD7g6lZm2K0n6UoUI8icmPhJ1WB7NT2Yji00AYgSrfFJ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;