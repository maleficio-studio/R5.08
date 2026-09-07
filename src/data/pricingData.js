const pricingData = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    features: [
      "500 GB Storage",
      "2 Users Allowed",
      "Send up to 3 GB"
    ],
    isFeatured: false,
  },
  {
    id: "professional",
    name: "Professional",
    monthlyPrice: 24.99,
    annualPrice: 249.99,
    features: [
      "1 TB Storage",
      "5 Users Allowed",
      "Send up to 10 GB"
    ],
    isFeatured: true,
  },
  {
    id: "master",
    name: "Master",
    monthlyPrice: 39.99,
    annualPrice: 399.99,
    features: [
      "2 TB Storage",
      "10 Users Allowed",
      "Send up to 20 GB"
    ],
    isFeatured: false,
  },
];

export default pricingData;
