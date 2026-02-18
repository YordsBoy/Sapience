---
ksa_id: performance_optimization_xr
label: XR Performance Optimization & Profiling
category: Technical
sector: immersive_media_arvr
horizon: core
cluster_tags:
  - "Performance"
  - "XR"
description: >
  Diagnoses and resolves CPU/GPU/thermal bottlenecks to maintain target FPS, low motion-to-photon latency, and user comfort across devices.
source_frameworks:
  - "Unity XR Performance Guidelines (HDRP 2024)"
  - "oculus:PerfGuidelines"
  - "arm:MaliGPUXR"
proficiency_levels:
  - level: Awareness
    indicator: Reads frame-time budgets; identifies CPU vs GPU bottleneck; uses built-in profiler to spot frame drops.
  - level: Basic
    indicator: Applies draw-call batching, texture atlases, and occlusion culling; reduces overdraw and shader variants.
  - level: Intermediate
    indicator: Implements single-pass instancing, foveated rendering, GPU instance clustering, and memory pooling.
  - level: Advanced
    indicator: Automates performance regression tests; tunes thermal throttling mitigations; tunes XR compositor settings; integrates eye-tracked foveation.
  - level: Expert
    indicator: Publishes optimization white-papers; defines performance certification criteria.
---
