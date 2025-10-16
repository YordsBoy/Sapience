const fs = require('fs');

const horizonCategories = {
  core: [
    'generative_ai_proficiency',
    'digital_collaboration',
    'sustainability_practices',
    'cybersecurity_awareness',
    'ai_literacy',
    'data_literacy',
    'cloud_architecture',
    'technical_documentation',
    'technology_fluency'
  ],
  watch_2030: [
    'interactive_experience_design',
    'energy_systems_optimization', 
    'sustainable_farming_practices',
    'learning_technology_integration',
    'systems_leadership',
    'mission_readiness',
    'strategic_visioning',
    'ethical_ai_stewardship'
  ],
  // All others default to perennial
};

// Read the JSON file
const filePath = '/workspaces/Sapience/schemas/master_ksa.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Add horizon field to each KSA
data.ksa = data.ksa.map(ksa => {
  let horizon = 'perennial'; // default value
  
  if (horizonCategories.core.includes(ksa.id)) {
    horizon = 'core';
  } else if (horizonCategories.watch_2030.includes(ksa.id)) {
    horizon = 'watch_2030';
  }
  
  return {
    ...ksa,
    horizon
  };
});

// Write back to file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));