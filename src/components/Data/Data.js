const carBookings = [
  {
    id: 1,
    currentLocation: "Mumbai",
    destination: "Delhi",
    availableVehicles: [
      {
        type: "Mini",
        description: "A comfortable and spacious sedan.",
        time: "1 minute",
        fare: 10,
        couponCode: "FIRST10"
      },
      {
        type: "Premium",
        description: "A powerful and versatile SUV.",
        time: "10 minute",
        fare: 15,
        couponCode: "SUV20"
      },
      {
        type: "Premium",
        description: "A small and agile hatchback.",
        time: "3 minute",
        fare: 8,
        couponCode: "HATCH5"
      },
      {
        type: "Premium",
        description: "A stylish convertible for an open-air experience.",
        time: "20 minute",
        fare: 25,
        couponCode: "CONV15"
      }
    ]
  },
  {
    id: 2,
    currentLocation: "Bangalore",
    destination: "Chennai",
    availableVehicles: [
      {
        type: "Mini",
        description: "A spacious SUV with advanced features.",
        time: "5 minute",
        fare: 18,
        couponCode: "SUV15"
      },
      {
        type: "Sedan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute",
        fare: 12,
        couponCode: "MINI10"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "8 minute",
        fare: 20,
        couponCode: "ELECTRIC20"
      },
      {
        type: "Premium",
        description: "A convertible for a stylish journey.",
        time: "7 minute",
        fare: 25,
        couponCode: "CONV20"
      }
    ]
  },
  {
    id: 3,
    currentLocation: "Kolkata",
    destination: "Hyderabad",
    availableVehicles: [
      {
        type: "luxury",
        description: "A compact and fuel-efficient hatchback.",
        time: "10 minute",
        fare: 12,
        couponCode: "HATCH10"
      },
      {
        type: "Mini",
        description: "An electric car for an eco-conscious ride.",
        time: "2 minute",
        fare: 15,
        couponCode: "ECO15"
      },
      {
        type: "Mini",
        description: "A sleek and comfortable sedan.",
        time: "11 minute",
        fare: 18,
        couponCode: "SEDAN20"
      },
      {
        type: "Premium",
        description: "A versatile and spacious SUV.",
        time: "4 minute",
        fare: 20,
        couponCode: "SUV20"
      }
    ]
  }
  // ... (repeat the structure for the remaining 17 entries)
];

export default carBookings;
