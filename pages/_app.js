// pages/_app.js
import "../styles/globals.css";
import { UserTierProvider } from "@/components/UserTierContext";

export default function App({ Component, pageProps }) {
  return (
    <UserTierProvider>
      <Component {...pageProps} />
    </UserTierProvider>
  );
}
