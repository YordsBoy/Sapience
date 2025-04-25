import "../public/output.css"; 
import { UserTierProvider } from "@/components/UserTierContext";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
