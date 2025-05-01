import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, HeartPulse, RefreshCw, Settings } from "lucide-react";

export default function CompanionModelSchematic() {
  return (
    <div className="grid gap-6 p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📊 Companion AI: Post-Intake Interaction Schematic</h1>
      
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Brain className="text-blue-500" /> Memory Integration
          </h2>
          <ul className="list-disc pl-6">
            <li>Dynamic memory objects: tagged by theme, tone, belief, change signal</li>
            <li>Scheduled reflection refreshes (2–4 week mirror summaries)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <RefreshCw className="text-green-600" /> Cadence & Nudging
          </h2>
          <ul className="list-disc pl-6">
            <li>Modes: Daily, Weekly, Milestone-only, On-demand</li>
            <li>Micro-reflection prompts, quote anchors, journaling options</li>
            <li>Silence-aware and consent-driven prompts</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <HeartPulse className="text-red-500" /> Rupture Repair & Tone Alignment
          </h2>
          <ul className="list-disc pl-6">
            <li>Tone misfire detection & soft re-engagement</li>
            <li>User-triggered rephrasing and tone correction options</li>
            <li>Safe mode switch: Quiet, gentle, or reframe-only</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="text-yellow-500" /> Milestone Recognition
          </h2>
          <ul className="list-disc pl-6">
            <li>Growth moments tagged and surfaced with consent</li>
            <li>Options for quiet witnessing, soft echo, or direct celebration</li>
            <li>User-driven story reframing invitations</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Settings className="text-purple-500" /> Modular Use Modes
          </h2>
          <ul className="list-disc pl-6">
            <li>Coach / Confidant / Quiet / Journal / Socratic Modes</li>
            <li>Dynamic switching or time-based automation</li>
            <li>Adjusts tone, memory access, and emotional depth</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mt-8 text-muted-foreground">
        Built to adapt, evolve, and honor the user's rhythm. This is companionship that remembers.
      </div>
    </div>
  );
}