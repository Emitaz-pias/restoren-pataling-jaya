import burgerJpg from "../../../../images/burger2.jpg";
export const burgerData = [
  {
    name: "BBQ Chicken Burger",
    image: burgerJpg,
    price: "12.00",
    description: "chicken patty,BBQ sauce,tomato",
    ingredients: ["Ninja Bun", "Sessame", "Letus", "Egyptian onion"],
    addOns: [
      { name: "Pink Salt", price: "2.00", quantity: 0 },
      { name: "Ugandian Natural Letus", price: "2.00", quantity: 0 },
    ],
  },

  {
    name: "BBQ Beef Burger",
    image: burgerJpg,
    price: "13.00",
    description: "beef patty, BBQ sauce,",
    ingredients: ["Letus", "Indian Onion", "Somthing really Big tasty"],
  },
  {
    name: "Chicken Naga Burger",
    price: "150.00",
    deletedprice: ".20",
    description: "cheese,Naga",
  },
  {
    name: "Chicken  Burger",
    image: burgerJpg,
    price: "15.40",
    deletedprice: ".20",
    description: "cheese,Naga",
  },
  {
    name: "Chicken Cheese Burger",
    image: burgerJpg,
    price: "150.40",
    deletedprice: ".20",
    description: "cheese,Naga",
  },
];
