// File: components/ExportNarrativeLock.jsx

import { useUserTier } from "./UserTierContext";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExportNarrativeLock({ onUnlock }) {
  const tier = useUserTier();
  if (tier === "premium") return null;

  return (
    <div className="relative rounded-xl border border-yellow-300 bg-yellow-50 px-6 py-5 shadow-inner">
      <div className="flex items-center gap-4">
        <Sparkles className="w-6 h-6 text-yellow-600 shrink-0" />
        <div className="flex-1">
          <h3 className="text-md font-semibold text-yellow-900">Narrative Export Locked</h3>
          <p className="text-sm text-yellow-800">
            You’ve done the reflection—now synthesize. Upgrade to export your growth narrative.
          </p>
        </div>
        <Button
          size="sm"
          onClick={onUnlock ?? (() => (window.location.href = "/upgrade"))}
          className="bg-yellow-600 hover:bg-yellow-700 text-white"
        >
          Upgrade Now
        </Button>
      </div>
    </div>
  );
}

export default ExportNarrativeLock;
