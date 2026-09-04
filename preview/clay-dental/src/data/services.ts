import {
  Sparkles,
  HeartPulse,
  SmilePlus,
  Bone,
  type LucideIcon,
} from "lucide-react";

export interface DentalService {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  cardClass: string;
  icon: LucideIcon;
  overview: string;
  procedure: string;
  benefits: string[];
  idealFor: string[];
}

export const services: DentalService[] = [
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    tagline: "Professional-Grade Whitening",
    desc: "Professional-grade whitening treatments that safely restore your smile's natural brilliance in just one visit.",
    cardClass: "clay-card",
    icon: Sparkles,
    overview:
      "Over time, teeth naturally accumulate stains from coffee, tea, wine, and everyday foods. Our professional whitening treatments go far beyond over-the-counter options, delivering dramatic results in a single appointment. Using clinically validated hydrogen peroxide formulations and protective gum barriers, we lift deep-set discoloration while preserving enamel integrity. The process is monitored start to finish by a dental professional to ensure both safety and comfort.",
    procedure:
      "After a thorough examination and professional cleaning, we apply a medical-grade whitening gel to the tooth surfaces. A specialized curing light activates the gel, accelerating the stain-removal process. This cycle is repeated two to three times within the same visit, with protective barriers repositioned between rounds to shield sensitive gum tissue. Most patients leave the clinic with teeth that are six to eight shades lighter.",
    benefits: [
      "Noticeable brightening in a single session",
      "Safe for enamel when applied under professional supervision",
      "Results that last twelve months or longer with proper care",
      "Custom aftercare guidance to maintain your new shade",
    ],
    idealFor: [
      "Surface stains from food, beverages, or tobacco",
      "Age-related yellowing of the enamel",
      "Pre-wedding or event preparation",
      "Patients seeking a confidence boost without invasive procedures",
    ],
  },
  {
    slug: "root-canal",
    title: "Root Canal",
    tagline: "Gentle Endodontic Therapy",
    desc: "Gentle, pain-free root canal therapy using the latest endodontic technology for a comfortable recovery.",
    cardClass: "clay-card-mint",
    icon: HeartPulse,
    overview:
      "A root canal becomes necessary when the soft pulp tissue inside a tooth becomes infected or inflamed, typically due to deep decay, cracks, or repeated dental procedures. Left untreated, the infection can spread to surrounding bone and tissue, leading to abscess formation and tooth loss. Modern endodontic techniques have transformed this procedure into a routine, comfortable treatment with a high success rate. The goal is to remove the damaged pulp, disinfect the canal system, and seal the tooth to prevent reinfection — all while preserving the natural tooth structure.",
    procedure:
      "Under local anaesthesia, a small opening is made in the crown of the tooth to access the pulp chamber. Using precision instruments and a dental operating microscope, the infected tissue is carefully removed from the root canals. Each canal is then shaped, thoroughly irrigated with antimicrobial solutions, and dried. A biocompatible filling material is placed to seal the canals, and the tooth is restored with a crown or filling to return it to full function. The entire procedure typically takes one to two hours.",
    benefits: [
      "Preserves your natural tooth rather than requiring extraction",
      "Modern anaesthesia makes the procedure virtually painless",
      "High success rate — treated teeth can last a lifetime",
      "Prevents the infection from spreading to adjacent teeth or bone",
    ],
    idealFor: [
      "Persistent toothache that worsens with heat or pressure",
      "A tooth that has become darkened or discoloured",
      "Prolonged sensitivity to hot or cold temperatures",
      "A pimple-like bump on the gum near the affected tooth",
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    tagline: "Precision Alignment Solutions",
    desc: "From clear aligners to traditional braces, we design personalized treatment plans for perfectly aligned teeth.",
    cardClass: "clay-card-blue",
    icon: SmilePlus,
    overview:
      "Crooked, crowded, or misaligned teeth are not merely a cosmetic concern — they can contribute to uneven wear, jaw pain, difficulty cleaning between teeth, and speech difficulties. Orthodontic treatment addresses these functional and aesthetic issues by gradually repositioning teeth into their ideal alignment. We offer both clear aligner therapy for discreet correction and traditional bracket systems for complex cases, ensuring every patient receives a solution tailored to their specific anatomy and lifestyle.",
    procedure:
      "Your orthodontic journey begins with a comprehensive assessment, including digital impressions, photographs, and X-rays. Using 3D modelling software, we map out a precise treatment plan showing projected tooth movement at each stage. If clear aligners are recommended, a series of custom-fabricated trays is produced — each worn for approximately two weeks before progressing to the next. Periodic check-ups every six to eight weeks allow us to monitor progress and make adjustments as needed. Treatment duration varies from twelve to thirty-six months depending on complexity.",
    benefits: [
      "Improved bite function and chewing efficiency",
      "Easier oral hygiene maintenance with properly aligned teeth",
      "Reduced risk of jaw strain and temporomandibular joint issues",
      "Long-term aesthetic and functional improvement",
    ],
    idealFor: [
      "Gaps between teeth or crowding",
      "Overbite, underbite, or crossbite concerns",
      "Teeth that shift after previous orthodontic treatment",
      "Patients seeking a discreet option with clear aligners",
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    tagline: "Permanent Tooth Replacement",
    desc: "Permanent, natural-looking implant solutions that restore function and confidence with titanium precision.",
    cardClass: "clay-card-peach",
    icon: Bone,
    overview:
      "Missing teeth affect far more than appearance — they compromise chewing ability, alter speech patterns, and over time, cause the jawbone to deteriorate beneath the gap. Dental implants are the gold standard for tooth replacement, consisting of a titanium post surgically placed into the jawbone where it fuses with the surrounding bone through a process called osseointegration. Once integrated, the implant serves as a stable foundation for a custom-crafted porcelain crown that matches the colour, shape, and function of your natural teeth.",
    procedure:
      "After a thorough evaluation including 3D imaging to assess bone density, the titanium implant post is surgically placed into the jawbone under local anaesthesia. A healing period of three to six months follows, during which the implant integrates with the bone. A temporary restoration may be placed during this phase for aesthetics and function. Once healed, an impression is taken and a permanent custom crown is fabricated and secured to the implant abutment. The result is a restoration that looks, feels, and functions like a natural tooth.",
    benefits: [
      "Prevents bone loss and preserves facial structure",
      "Functions identically to natural teeth — no dietary restrictions",
      "Protects neighbouring teeth from shifting into the gap",
      "No adhesives or removal required, unlike dentures",
    ],
    idealFor: [
      "One or more missing teeth due to injury or decay",
      "Patients who find dentures uncomfortable or inconvenient",
      "Insufficient bone density that has been treated with grafting",
      "A long-term investment in oral health and aesthetics",
    ],
  },
];

export function getServiceBySlug(slug: string): DentalService | undefined {
  return services.find((s) => s.slug === slug);
}
