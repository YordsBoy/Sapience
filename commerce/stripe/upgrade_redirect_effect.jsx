import { useEffect } from "react";
import { useRouter } from "next/router";

export default function UpgradeSuccess() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("user_tier", "premium");
    
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-green-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7 12a5 5 0 1110 0 5 5 0 01-10 0z"
        />
      </svg>
      <h1 className="text-2xl font-bold mb-2">Upgrade Successful!</h1>
      <p className="text-muted-foreground mb-6">
        Premium access has been activated. Redirecting to your dashboard...
      </p>
    </div>
  );
}