
import React from 'react';

const AppearanceFactorsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4" id="appearance-factors">Factors That Affect Final Appearance</h2>
      <p className="mb-4">
        The same implant size can look dramatically different depending on several key factors:
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-3">Body Frame</h3>
      <p className="mb-4">
        Your natural body proportions create the framework for your implants. Particularly important are:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Chest width:</strong> A wider chest can "absorb" larger implants without looking disproportionate</li>
        <li><strong>Shoulder width:</strong> Broader shoulders may balance larger implants aesthetically</li>
        <li><strong>Breast base width:</strong> The natural width of your breast tissue affects how wide an implant can be placed</li>
        <li><strong>Height:</strong> Taller women can often accommodate larger implants while maintaining proportion</li>
      </ul>
      
      <h3 className="text-xl font-medium mt-6 mb-3">Skin Elasticity</h3>
      <p className="mb-4">
        Your skin's ability to stretch and support the weight of implants is crucial for long-term results. Factors that affect skin elasticity include:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Age (younger skin typically has more elasticity)</li>
        <li>Pregnancy history</li>
        <li>Weight fluctuations</li>
        <li>Genetics</li>
        <li>Sun exposure history</li>
      </ul>
      <p className="mb-4">
        Women with limited skin elasticity may need to consider smaller implants or additional procedures like a breast lift to achieve optimal results.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-3">Implant Placement</h3>
      <p className="mb-4">
        The position of the implant relative to your chest muscles affects both appearance and recovery:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Subglandular (over the muscle):</strong> May make implants more visible, especially in thin women with minimal breast tissue</li>
        <li><strong>Submuscular (under the muscle):</strong> Often creates a more natural slope and better coverage, but with a slightly longer recovery</li>
        <li><strong>Dual-plane (partially under the muscle):</strong> A hybrid approach that may offer the benefits of both techniques</li>
      </ul>
      
      <h3 className="text-xl font-medium mt-6 mb-3">Implant Profile</h3>
      <p className="mb-4">
        Profile refers to how much the implant projects forward from the chest wall:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Low profile:</strong> Wider base, less projection, often suitable for women with wider chests</li>
        <li><strong>Moderate profile:</strong> Balanced width and projection, works well for many body types</li>
        <li><strong>High profile:</strong> Narrower base with more forward projection, often recommended for narrower chests</li>
        <li><strong>Extra-high/ultra-high profile:</strong> Maximum projection, narrowest base width</li>
      </ul>
      
      <p className="mb-4">
        The same volume (e.g., 350cc) in different profiles will create distinctly different looks. A high-profile 350cc implant will appear more projected and "perky" than a moderate-profile implant of the same volume.
      </p>
    </section>
  );
};

export default AppearanceFactorsSection;
