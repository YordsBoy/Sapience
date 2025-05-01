import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const CheckoutButton = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const session = await res.json();

    if (session.id) {
      stripe?.redirectToCheckout({ sessionId: session.id });
    }
  };

  return (
    <Button 
      size="lg" 
      className="w-full" 
      onClick={handleCheckout}
    >
      Upgrade to Premium
    </Button>
  );
};