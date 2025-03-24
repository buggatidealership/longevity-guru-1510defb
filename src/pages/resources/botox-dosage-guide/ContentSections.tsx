
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ContentSections: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4" id="how-botox-dosage-measured">How Botox Dosage Is Measured</h2>
      <p className="mb-4">
        Botox is measured in "units," which represent a standardized amount of botulinum toxin activity. These units aren't based on volume but on biological activity—specifically, how much of the toxin is needed to kill 50% of a laboratory mouse population (the LD50 test). This ensures consistent potency regardless of manufacturing batch.
      </p>
      
      <p className="mb-4">
        When you receive a Botox treatment, your provider draws up a specific number of units based on your treatment areas and goals. Most cosmetic treatments use Botox Cosmetic (onabotulinumtoxinA), though similar products like Dysport, Xeomin, and Jeuveau are available with slightly different unit conversions.
      </p>
      
      <p className="mb-4">
        The FDA has approved specific dosage ranges for cosmetic use, but in clinical practice, providers often customize treatment based on your facial anatomy and desired outcome. A "conservative" approach might use fewer units for a more subtle effect, while a "complete" treatment uses the full recommended range for maximum wrinkle reduction.
      </p>

      {/* Image with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Close-up of a woman's smooth forehead and expressive eyes after optimal Botox treatment, showing natural-looking results" 
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Properly dosed Botox creates natural-looking results while preserving facial expressiveness</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="typical-botox-unit-ranges">Typical Botox Unit Ranges by Area</h2>
      <p className="mb-4">
        Different facial muscles require different amounts of Botox based on their size, strength, and the effect you're trying to achieve. The following table shows typical dosage ranges for common treatment areas:
      </p>

      <div className="overflow-x-auto my-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Treatment Area</TableHead>
              <TableHead>Typical Unit Range</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Forehead (Frontalis)</TableCell>
              <TableCell>10–20 units</TableCell>
              <TableCell>Lower dosages for first-time patients; men often need higher end of range</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Glabellar Lines (Frown lines)</TableCell>
              <TableCell>15–25 units</TableCell>
              <TableCell>FDA-approved treatment area; strongest facial muscles require adequate dosing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Crow's Feet (Lateral canthal lines)</TableCell>
              <TableCell>6–15 units per side</TableCell>
              <TableCell>Lower doses preserve natural smile lines; higher doses for deep static wrinkles</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Bunny Lines (Nose)</TableCell>
              <TableCell>2–5 units per side</TableCell>
              <TableCell>Small area requiring precise placement and conservative dosing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Masseter (Jaw slimming)</TableCell>
              <TableCell>25–50 units per side</TableCell>
              <TableCell>Higher doses for teeth grinders; results develop over 1-3 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Neck (Platysmal bands)</TableCell>
              <TableCell>20–60 units total</TableCell>
              <TableCell>Advanced technique requiring experienced injector; results vary significantly</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lip Flip</TableCell>
              <TableCell>2–6 units</TableCell>
              <TableCell>Very precise placement; too much can affect speech or drinking</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="mb-4">
        It's important to note that these are general ranges—your specific treatment plan may vary based on your anatomy, previous treatments, and desired outcomes. Many providers start conservatively, especially for first-time patients, then adjust in follow-up treatments based on your results and preferences.
      </p>

      <p className="mb-4">
        The total units used across all treatment areas typically ranges from 40-100 units per session for most patients seeking full-face rejuvenation. Some patients opt for more focused treatment of just 1-2 areas, reducing the total units needed.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="factors-that-influence-dosage">Factors That Influence Botox Dosage</h2>

      <h3 className="text-xl font-medium mt-6 mb-3">Muscle Mass and Strength</h3>
      <p className="mb-4">
        One of the most significant factors affecting Botox dosage is muscle mass and strength. People with stronger facial muscles—often men and those who habitually frown or squint—typically require higher doses to achieve the same effect as those with less pronounced musculature. A provider will assess muscle strength by asking you to make various facial expressions during your consultation.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Gender Differences</h3>
      <p className="mb-4">
        Male patients generally require 1.5-2 times more units than female patients for equivalent results. This is due to greater muscle mass, thicker skin, and often deeper wrinkles. For example, while a female patient might receive 15-20 units for glabellar lines, a male patient might need 25-35 units for the same area.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Treatment History</h3>
      <p className="mb-4">
        First-time Botox patients often start with conservative dosing (lower end of the recommended range) to assess their response. With regular treatments over time, muscles often become weaker and require fewer units to maintain results. Long-term Botox users may find they need treatments less frequently or at lower doses than when they started.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Desired Outcome</h3>
      <p className="mb-4">
        Your aesthetic goals significantly impact dosage recommendations. Patients seeking subtle wrinkle reduction while maintaining natural expressiveness may opt for lower doses. Those prioritizing maximum wrinkle elimination might choose higher doses, understanding this may reduce some facial movement. Being clear about your preferences helps your provider customize your treatment plan.
      </p>
      
      <p className="mb-4">
        Age can also influence dosing decisions. Younger patients (20s-30s) seeking preventative treatment often need lower doses than older patients with established static wrinkles. Skin thickness, which decreases with age, also affects how Botox diffuses and functions in the tissue.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="using-botox-calculator">Using the Botox Dosage Calculator</h2>
      <p className="mb-4">
        Our <Link to="/botox-calculator" className="text-primary hover:underline">Botox Dosage Calculator</Link> simplifies the process of estimating how many units you might need for your specific situation. By entering details about yourself and your treatment goals, you'll receive customized unit recommendations that account for the most important dosage factors.
      </p>

      <p className="mb-4">
        To use the calculator effectively:
      </p>
      
      <ol className="list-decimal pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Enter your personal details</strong> – Including gender, age range, and whether it's your first treatment.</li>
        <li><strong>Assess your muscle strength</strong> – If unsure, select "average" or consider how strongly you can frown or raise your eyebrows compared to others.</li>
        <li><strong>Select your desired outcome</strong> – From subtle movement reduction to more complete wrinkle elimination.</li>
        <li><strong>Choose your treatment areas</strong> – Select all areas you're interested in treating.</li>
        <li><strong>Review the results</strong> – The calculator will provide a recommended unit range for each area and estimate total costs.</li>
      </ol>
      
      <p className="mb-4">
        Remember that the calculator provides estimates based on typical clinical practices—your provider may recommend adjustments based on their assessment of your specific needs. The calculator is an educational tool to help you prepare for a consultation, not a replacement for professional medical advice.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="font-medium">
          <Link to="/botox-calculator" className="text-primary hover:underline">Try our Botox Dosage Calculator</Link> to get a personalized estimate of how many units you might need for your desired treatment areas.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="what-to-ask-provider">What to Ask Your Provider</h2>
      <p className="mb-4">
        Bringing your calculator results to your consultation can help facilitate a more productive discussion with your provider. Here are some important questions to ask:
      </p>
      
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>"Is this dosage typical for my facial anatomy?"</strong> – Your provider can explain whether your estimated units align with what they would recommend based on your specific features.</li>
        <li><strong>"Can we adjust units to achieve a more natural result?"</strong> – Discuss your preference for subtle versus more dramatic results, and how dosage affects this outcome.</li>
        <li><strong>"Will I need a touch-up, and is that included in the price?"</strong> – Some patients benefit from a small adjustment 2 weeks after initial treatment, especially for their first session.</li>
        <li><strong>"How many units are in each syringe, and what happens to unused product?"</strong> – Understanding the packaging helps you evaluate pricing fairly.</li>
        <li><strong>"How might my dosage needs change over time with regular treatments?"</strong> – Your provider can explain the long-term effects of Botox on muscle strength and treatment frequency.</li>
      </ul>
      
      <p className="mb-4">
        Being an informed patient helps ensure you receive the most appropriate treatment for your goals. Many providers appreciate patients who have done their research and come prepared with specific questions about their treatment plan.
      </p>
      
      <p className="mb-4">
        Most importantly, choose a qualified, experienced provider—ideally a board-certified dermatologist, plastic surgeon, or specially trained nurse injector. Proper injection technique is just as important as using the correct number of units for achieving optimal results.
      </p>
    </>
  );
};

export default ContentSections;
