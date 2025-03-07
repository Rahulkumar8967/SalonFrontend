import React, { useState } from "react";
import {
  GiFlowerTwirl,
  GiLipstick,
  GiMirrorMirror,
  GiSpray,
} from "react-icons/gi";
import { FaSpa, FaSmile } from "react-icons/fa";
import { MdFace, MdOutlineSelfImprovement } from "react-icons/md";

// Import Local Images
import LuxuryFacial from "../assets/LFT.jpg";
import HairStyling from "../assets/HSC.jpg";
import BodyMassage from "../assets/FBM.jpg";
import BridalMakeup from "../assets/BM.jpg";
import Manicure from "../assets/MP.jpg";
import LaserHairRemoval from "../assets/LHR.jpg";
import Microblading from "../assets/MB.jpg";
import BodyScrub from "../assets/BSW.jpg";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      id: 1,
      title: "Luxury Facial Therapy",
      price: "$450",
      image: LuxuryFacial,
      tags: ["Skincare", "Relaxation"],
      description:
        "Premium facial treatment with organic products and hot stone therapy",
      icon: <MdFace className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 2,
      title: "Hair Styling & Coloring",
      price: "$150",
      image: HairStyling,
      tags: ["Haircare", "Styling"],
      description:
        "Expert color matching and precision cutting with top-tier products",
      icon: <GiMirrorMirror className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 3,
      title: "Full Body Massage",
      price: "$250",
      image: BodyMassage,
      tags: ["Spa", "Wellness"],
      description:
        "Aromatherapy massage combining Swedish and deep tissue techniques",
      icon: <FaSpa className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 4,
      title: "Bridal Makeup",
      price: "$300",
      image: BridalMakeup,
      tags: ["Makeup", "Special Events"],
      description:
        "Professional bridal makeup with long-lasting, photo-friendly products",
      icon: <GiLipstick className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 5,
      title: "Manicure & Pedicure",
      price: "$100",
      image: Manicure,
      tags: ["Nails", "Care"],
      description: "Luxurious nail treatment with paraffin wax and massage",
      icon: <GiFlowerTwirl className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 6,
      title: "Laser Hair Removal",
      price: "$200",
      image: LaserHairRemoval,
      tags: ["Permanent", "Treatment"],
      description: "Advanced laser technology for smooth, hair-free skin",
      icon: <GiSpray className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 7,
      title: "Microblading",
      price: "$400",
      image: Microblading,
      tags: ["Eyebrows", "Semi-Permanent"],
      description:
        "Natural-looking eyebrow enhancement with micro-pigmentation",
      icon: <MdOutlineSelfImprovement className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 8,
      title: "Body Scrub & Wrap",
      price: "$400",
      image: BodyScrub,
      tags: ["Detox", "Bodycare"],
      description: "Exfoliating treatment with herbal wraps for glowing skin",
      icon: <FaSmile className="w-8 h-8 text-rose-500" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-pink-50 to-rose-100"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
            Our Beauty Services
          </h2>
          <p className="text-rose-700 max-w-2xl mx-auto text-xl font-medium">
            Indulge in our exclusive beauty treatments crafted for royalty
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice(0, showAll ? services.length : 6).map((service) => (
            <div
              key={service.id}
              className="group bg-white/70 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center">{service.icon}</div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mt-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-rose-600 text-lg font-medium">
                  {service.price}
                </p>
                <p className="text-gray-600 mt-2">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {showAll ? "Show Less" : "Show More" }
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
