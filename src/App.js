import { useState } from "react";

const ideas = [
  {
    idea: "Backyard Vegetable Farming",
    industry: "Agriculture",
    link: "#",
    description:
      "Grow vegetables like sukuma wiki, spinach, and onions in your backyard for local markets.",
  },
  {
    idea: "Poultry Rearing (Chickens)",
    industry: "Agriculture",
    link: "#",
    description:
      "Start a small chicken farm for meat or eggs to supply local households and businesses.",
  },
  {
    idea: "Rabbit Farming",
    industry: "Agriculture",
    link: "#",
    description:
      "Raise rabbits for meat or as pets; requires minimal space and investment.",
  },
  {
    idea: "Beekeeping for Honey",
    industry: "Agriculture",
    link: "#",
    description:
      "Keep bees and harvest honey for sale in local markets or retail shops.",
  },
  {
    idea: "Mushroom Farming",
    industry: "Agriculture",
    link: "#",
    description:
      "Grow mushrooms in a small, controlled space to sell to grocers and restaurants.",
  },
  {
    idea: "Plant Nursery (Seedlings)",
    industry: "Agriculture",
    link: "#",
    description:
      "Start a nursery to sell seedlings of vegetables, trees, and ornamental plants.",
  },
  {
    idea: "Herb Gardening & Sales",
    industry: "Agriculture",
    link: "#",
    description:
      "Grow herbs like mint, basil, and rosemary and sell fresh or dried.",
  },
  {
    idea: "Fresh Produce Hawking",
    industry: "Agriculture",
    link: "#",
    description:
      "Sell fresh fruits and vegetables door-to-door or at roadside spots.",
  },
  {
    idea: "Egg Supply Business",
    industry: "Agriculture",
    link: "#",
    description:
      "Purchase and distribute eggs from farmers to local shops or customers.",
  },
  {
    idea: "Pig Rearing (Small-Scale)",
    industry: "Agriculture",
    link: "#",
    description:
      "Rear pigs for pork production in a small, controlled environment.",
  },
  {
    idea: "Goat Rearing (Small-Scale)",
    industry: "Agriculture",
    link: "#",
    description:
      "Raise goats for milk or meat for local sale or personal consumption.",
  },
  {
    idea: "Organic Compost Production",
    industry: "Agriculture",
    link: "#",
    description:
      "Recycle kitchen and garden waste to make compost for sale to farmers.",
  },
  {
    idea: "Animal Feed Reselling",
    industry: "Agriculture",
    link: "#",
    description:
      "Buy and sell animal feed to local farmers and livestock keepers.",
  },
  {
    idea: "Crop Spraying Services",
    industry: "Agriculture",
    link: "#",
    description: "Offer spraying services to farms for pest and weed control.",
  },

  {
    idea: "Mobile Phone Repair Service",
    industry: "Technology",
    link: "#",
    description:
      "Fix phones with screen, battery, or software issues for walk-in clients.",
  },
  {
    idea: "Phone Charging Station",
    industry: "Technology",
    link: "#",
    description:
      "Set up a pay-per-charge station in busy areas with limited electricity access.",
  },
  {
    idea: "Social Media Management Service",
    industry: "Technology",
    link: "#",
    description:
      "Help small businesses grow their online presence through content and engagement.",
  },
  {
    idea: "Freelance Writing/Blogging",
    industry: "Technology",
    link: "#",
    description:
      "Write blogs, articles, or web content for clients or personal monetized platforms.",
  },
  {
    idea: "YouTube Content Creation",
    industry: "Technology",
    link: "#",
    description:
      "Create video content for YouTube and earn from views, ads, and sponsorships.",
  },
  {
    idea: "Graphic Design Service",
    industry: "Technology",
    link: "#",
    description:
      "Design logos, posters, flyers, and social media content for clients.",
  },
  {
    idea: "Mobile Accessories Sales",
    industry: "Technology",
    link: "#",
    description:
      "Sell chargers, phone cases, earphones, and screen protectors.",
  },
  {
    idea: "Airtime Reselling",
    industry: "Technology",
    link: "#",
    description:
      "Buy airtime in bulk and resell for a small profit via USSD or apps.",
  },
  {
    idea: "Small 'Video Show' Cinema",
    industry: "Technology",
    link: "#",
    description:
      "Run a small video room with a screen and seats for local entertainment.",
  },
  {
    idea: "Basic Tech Tutoring",
    industry: "Technology",
    link: "#",
    description:
      "Offer basic computer, smartphone, or app tutorials to beginners.",
  },
  {
    idea: "Computer Repair & Setup",
    industry: "Technology",
    link: "#",
    description:
      "Fix hardware/software issues and help set up computers for individuals or shops.",
  },
  {
    idea: "Mobile Photography Services",
    industry: "Technology",
    link: "#",
    description:
      "Use your smartphone and editing apps to offer budget photography services.",
  },
  {
    idea: "Online Data Entry/Transcription",
    industry: "Technology",
    link: "#",
    description:
      "Enter or transcribe data for online clients or local businesses.",
  },
  {
    idea: "Small Electronics Repair",
    industry: "Technology",
    link: "#",
    description:
      "Repair items like radios, fans, kettles, and remotes at a small stall.",
  },
];

export default function BusinessIdeaFilter() {
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const industries = [...new Set(ideas.map((idea) => idea.industry))];

  const filteredIdeas = selectedIndustry
    ? ideas.filter((idea) => idea.industry === selectedIndustry)
    : ideas;

  return (
  <>
    <div className="bg-blue-700 text-white text-center py-12 mb-8 shadow-md">
      <h1 className="text-4xl font-bold mb-2">Discover Profitable Business Ideas</h1>
      <p className="text-lg">Filtered by Industry, Designed for Hustlers</p>
    </div>

    {/* Continue with your main section */}
    <div className="p-6 max-w-4xl mx-auto">
      {/* dropdown and idea list here */}
    </div>
  </>
);

    </div>

    <div className="p-6 max-w-4xl mx-auto">
      {/* Filter dropdown and idea cards go here */}

        Explore Business Ideas by Industry
      </h1>
      <select
        className="mb-6 p-2 border rounded"
        onChange={(e) => setSelectedIndustry(e.target.value)}
        value={selectedIndustry}
      >
        <option value="">All Industries</option>
        {industries.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>
      <ul className="space-y-2">
        {filteredIdeas.map((idea, index) => (
          <li key={index} className="p-4 border rounded shadow-sm">
            <details>
              <summary className="text-blue-600 hover:underline cursor-pointer">
                {idea.idea}
              </summary>
              <p className="mt-2 text-gray-700">{idea.description}</p>
              <form
                action="https://formsubmit.co/el/gezolu"
                method="POST"
                className="mt-3 space-y-2"
              >
                <input type="hidden" name="Business Idea" value={idea.idea} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border p-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border p-2 rounded"
                />
                <textarea
                  name="message"
                  placeholder="Tell us what you need..."
                  rows="3"
                  required
                  className="w-full border p-2 rounded"
                ></textarea>
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </form>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
