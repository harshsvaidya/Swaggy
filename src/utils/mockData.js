// Mock data for development when Swiggy API fails
export const mockRestaurants = [
  {
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhani",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.2,
      parentId: "8533",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50"
      }
    }
  },
  {
    info: {
      id: "73011",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Fatehgunj",
      areaName: "Fatehgunj",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹189"
      }
    }
  },
  {
    info: {
      id: "84021",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Productivity Road",
      areaName: "Alkapuri",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75"
      },
      promoted: true
    }
  },
  {
    info: {
      id: "90041",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Alkapuri",
      areaName: "Alkapuri",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.0,
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50"
      }
    }
  },
  {
    info: {
      id: "101234",
      name: "McDonald's",
      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
      locality: "RC Dutt Road",
      areaName: "Alkapuri",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food", "Beverages", "Burgers"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199"
      }
    }
  },
  {
    info: {
      id: "67890",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Seven Seas Mall",
      areaName: "Fatehgunj",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 3.9,
      parentId: "2",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
      }
    }
  },
  {
    info: {
      id: "112233",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Inorbit Mall",
      areaName: "Alkapuri",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      }
    }
  },
  {
    info: {
      id: "445566",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Sayajigunj",
      areaName: "Sayajigunj",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-12-31 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199"
      }
    }
  }
];

export default mockRestaurants;
