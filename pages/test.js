// File: pages/test.js

import { useState } from "react";
import { DashboardNarrativeLock, ExportNarrativeLock } from "@/components/DashboardNarrativeLock";
import { UserTierProvider, useUserTier } from "@/components/UserTierContext";
import { Button } from "@/components/ui/button";

const allTiers = ["free", "pro", "team", "enterprise", "invited"];
const allThemes = ["light", "dark"];

function TierPreviewPanel({ label, tier, theme }) {
  const themeClasses = theme === "dark" ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200";

  return (
    <UserTierProvider initialTier={tier}>
      <div className={`border rounded-lg p-4 shadow w-full ${themeClasses}`}>
        <h2 className="text-lg font-bold mb-2">{label} ({theme} mode)</h2>
        <TierConditionalContent />
        <TierGatedComponents />
      </div>
    </UserTierProvider>
  );
}

function TierConditionalContent() {
  const tier = useUserTier();

  return (
    <div className="space-y-4">
      {tier === "free" && <p className="text-sm">🔓 Free Tier: Access to basic insight previews.</p>}
      {tier === "pro" && <p className="text-sm">🌟 Pro Tier: Includes advanced customization and export options.</p>}
      {tier === "team" && <p className="text-sm">🤝 Team Tier: Shared dashboards, limited admin, and KSA tracking.</p>}
      {tier === "enterprise" && (
        <p className="text-sm">
          🏢 Enterprise Tier: Team management, analytics, branding tools, and full KSA customization.
        </p>
      )}
      {tier === "invited" && (
        <p className="text-sm">
          ✉️ Invited Tier: Early access to experimental modules and private beta tools.
        </p>
      )}
    </div>
  );
}

function TierGatedComponents() {
  const tier = useUserTier();

  return (
    <div className="space-y-6 mt-4">
      {(tier === "free" || tier === "pro") && <DashboardNarrativeLock />}
      {(tier === "pro" || tier === "team" || tier === "enterprise" || tier === "invited") && <ExportNarrativeLock />}

      {(tier === "pro" || tier === "team" || tier === "enterprise") && (
        <div className="rounded-lg border border-green-300 bg-green-50 p-4">
          <h2 className="text-md font-semibold text-green-800">📊 Advanced Insights Module</h2>
          <p className="text-sm text-green-700">Deep dive analytics and export settings available.</p>
        </div>
      )}

      {(tier === "team" || tier === "enterprise") && (
        <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4">
          <h2 className="text-md font-semibold text-yellow-800">🧩 Custom Intake Designer</h2>
          <p className="text-sm text-yellow-700">Define team- or org-specific assessment structures and learning outcomes.</p>
        </div>
      )}

      {(tier === "team" || tier === "enterprise") && (
        <div className="rounded-lg border border-indigo-300 bg-indigo-50 p-4">
          <h2 className="text-md font-semibold text-indigo-800">🧠 KSA Insight Engine</h2>
          <p className="text-sm text-indigo-700">Track development arcs across knowledge, skills, and attributes.</p>
        </div>
      )}

      {tier === "enterprise" && (
        <div className="rounded-lg border border-blue-300 bg-blue-50 p-4">
          <h2 className="text-md font-semibold text-blue-800">👥 Team Admin Panel</h2>
          <p className="text-sm text-blue-700">Manage team roles, permissions, and analytics dashboards.</p>
        </div>
      )}

      {tier === "invited" && (
        <div className="rounded-lg border border-purple-300 bg-purple-50 p-4">
          <h2 className="text-md font-semibold text-purple-800">🧪 Beta Feedback Form</h2>
          <p className="text-sm text-purple-700">Submit experimental feedback and test features early.</p>
        </div>
      )}
    </div>
  );
}

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      <h1 className="text-xl font-bold text-gray-800">🧪 Tier Gating + Theme + Feature Preview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {allTiers.flatMap((tier) =>
          allThemes.map((theme) => (
            <TierPreviewPanel
              key={`${tier}-${theme}`}
              label={`${tier.charAt(0).toUpperCase() + tier.slice(1)} Tier`}
              tier={tier}
              theme={theme}
            />
          ))
        )}
      </div>
    </div>
  );
}
