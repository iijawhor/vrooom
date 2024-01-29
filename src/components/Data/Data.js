const carBookings = [
  {
    id: 1,
    currentLocation: "Mumbai",
    destination: "Delhi",
    availableVehicles: [
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "10 minute"
      },
      {
        type: "Hatchback",
        description: "A small and agile hatchback.",
        time: "3 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "20 minute"
      }
    ]
  },
  {
    id: 2,
    currentLocation: "Bangalore",
    destination: "Chennai",
    availableVehicles: [
      {
        type: "SUV",
        description: "A spacious SUV with advanced features.",
        time: "5 minute"
      },
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "8 minute"
      },
      {
        type: "Convertible",
        description: "A convertible for a stylish journey.",
        time: "7 minute"
      }
    ]
  },
  {
    id: 3,
    currentLocation: "Kolkata",
    destination: "Hyderabad",
    availableVehicles: [
      {
        type: "Hatchback",
        description: "A compact and fuel-efficient hatchback.",
        time: "10 minute"
      },
      {
        type: "Electric",
        description: "An electric car for an eco-conscious ride.",
        time: "2 minute"
      },
      {
        type: "Sedan",
        description: "A sleek and comfortable sedan.",
        time: "11 minute"
      },
      {
        type: "SUV",
        description: "A versatile and spacious SUV.",
        time: "4 minute"
      }
    ]
  },
  {
    id: 4,
    currentLocation: "Jaipur",
    destination: "Lucknow",
    availableVehicles: [
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "14 minute"
      },
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "9 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "6 minute"
      },
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "3 minute"
      }
    ]
  },
  {
    id: 5,
    currentLocation: "Ahmedabad",
    destination: "Pune",
    availableVehicles: [
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "3 minute"
      },
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "8 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "2 minute"
      }
    ]
  },
  {
    id: 6,
    currentLocation: "Chandigarh",
    destination: "Coimbatore",
    availableVehicles: [
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Hatchback",
        description: "A small and agile hatchback.",
        time: "1 minute"
      },
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 7,
    currentLocation: "Delhi",
    destination: "Gurgaon",
    availableVehicles: [
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Hatchback",
        description: "A small and agile hatchback.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 8,
    currentLocation: "Mumbai",
    destination: "Navi Mumbai",
    availableVehicles: [
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 9,
    currentLocation: "Bangalore",
    destination: "Mysuru",
    availableVehicles: [
      {
        type: "Hatchback",
        description: "A compact and fuel-efficient hatchback.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Sedan",
        description: "A sleek and comfortable sedan.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A versatile and spacious SUV.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 10,
    currentLocation: "Chennai",
    destination: "Puducherry",
    availableVehicles: [
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      },
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 11,
    currentLocation: "Hyderabad",
    destination: "Secunderabad",
    availableVehicles: [
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 12,
    currentLocation: "Pune",
    destination: "Nashik",
    availableVehicles: [
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Hatchback",
        description: "A small and agile hatchback.",
        time: "1 minute"
      },
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 13,
    currentLocation: "Mumbai",
    destination: "Ahmedabad",
    availableVehicles: [
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Hatchback",
        description: "A small and agile hatchback.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 14,
    currentLocation: "Delhi",
    destination: "Jaipur",
    availableVehicles: [
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 15,
    currentLocation: "Chennai",
    destination: "Bangalore",
    availableVehicles: [
      {
        type: "Hatchback",
        description: "A compact and fuel-efficient hatchback.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Sedan",
        description: "A sleek and comfortable sedan.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A versatile and spacious SUV.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 16,
    currentLocation: "Hyderabad",
    destination: "Vijayawada",
    availableVehicles: [
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      },
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 17,
    currentLocation: "Pune",
    destination: "Mumbai",
    availableVehicles: [
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 18,
    currentLocation: "Bangalore",
    destination: "Chennai",
    availableVehicles: [
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Hatchback",
        description: "A small and agile hatchback.",
        time: "1 minute"
      },
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 19,
    currentLocation: "Delhi",
    destination: "Noida",
    availableVehicles: [
      {
        type: "Sedan",
        description: "A comfortable and spacious sedan.",
        time: "1 minute"
      },
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Hatchback",
        description: "A small and agile hatchback.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  },
  {
    id: 20,
    currentLocation: "Chennai",
    destination: "Coimbatore",
    availableVehicles: [
      {
        type: "SUV",
        description: "A powerful and versatile SUV.",
        time: "1 minute"
      },
      {
        type: "Minivan",
        description: "A family-friendly minivan with ample space.",
        time: "1 minute"
      },
      {
        type: "Electric",
        description: "An eco-friendly electric car.",
        time: "1 minute"
      },
      {
        type: "Convertible",
        description: "A stylish convertible for an open-air experience.",
        time: "1 minute"
      }
    ]
  }
];

export default carBookings;
