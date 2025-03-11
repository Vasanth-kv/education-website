import React from "react";
import { useParams } from "react-router-dom";

const featureData = {
  "online-testing": {
    title: "Online Testing",
    description: "Take tests anytime from anywhere with instant results.",
  },
  support: {
    title: "24/7 Support",
    description: "Our team is available round the clock to assist you.",
  },
  flexibility: {
    title: "Flexible Learning",
    description: "Learn at your own pace with self-paced courses.",
  },
};

const FeatureDetails = () => {
  const { featureId } = useParams();
  const feature = featureData[featureId];

  if (!feature) return <h2>Feature not found!</h2>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{feature.title}</h2>
      <p className="mt-2 text-gray-700">{feature.description}</p>
    </div>
  );
};

export default FeatureDetails;
