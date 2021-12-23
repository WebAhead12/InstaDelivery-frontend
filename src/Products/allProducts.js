const allProducts = [
  {
    id: "1",
    imgurl: "/store/dairy/1 milk.jpg",
    name: "1% Milk",
    price: "10.90",
  },
  {
    id: "2",
    imgurl: "/store/dairy/3 milk.jpg",
    name: "3% Milk",
    price: "10.90",
  },
  {
    id: "3",
    imgurl: "/store/dairy/large yogurt.jpg",
    name: "Large Yogurt",
    price: "25.90",
  },
  {
    id: "4",
    imgurl: "/store/dairy/eggs.jpg",
    name: "Eggs (dozen)",
    price: "29.90",
  },

  {
    id: "5",
    imgurl: "/store/dairy/oat milk.jpg",
    name: "Oat Milk",
    price: "11.90",
  },
  {
    id: "6",
    imgurl: "/store/dairy/almond milk.jpg",
    name: "Almond Milk",
    price: "11.90",
  },
  {
    id: "7",
    imgurl: "/store/dairy/hazelnut milk.jpg",
    name: "Hazelnut Milk",
    price: "11.90",
  },
  {
    id: "8",
    imgurl: "/store/dairy/cashew milk.jpg",
    name: "Cashew Milk",
    price: "11.90",
  },
  {
    id: "9",
    imgurl: "/store/dairy/soy milk.jpg",
    name: "Soy Milk",
    price: "11.90",
  },
  {
    id: "10",
    imgurl: "/store/dairy/coconut milk.jpg",
    name: "Coconut Milk",
    price: "11.90",
  },
  {
    id: "11",
    imgurl: "/store/dairy/chocolate soy milk.jpg",
    name: "Choc. Soy Milk",
    price: "11.90",
  },
  {
    id: "12",
    imgurl: "/store/dairy/vanilla soy milk.jpg",
    name: "Van. Soy Milk",
    price: "11.90",
  },
  {
    id: "13",
    imgurl: "/store/dairy/yellow cheese.jpg",
    name: "Yellow Cheese",
    price: ".90",
  },
  {
    id: "14",
    imgurl: "/store/dairy/mozzerella cheese.jpg",
    name: "Mozzerella",
    price: "19.90",
  },
  {
    id: "15",
    imgurl: "/store/dairy/cheddar.jpg",
    name: "Cheddar",
    price: "23.90",
  },
  {
    id: "201",
    imgurl: "/store/bakery/bagels.jpg",
    name: "Bagels 4pk.",
    price: "6.90",
  },
  {
    id: "202",
    imgurl: "/store/bakery/baguette.jpg",
    name: "Baguettes 2pk.",
    price: "2.90",
  },
  {
    id: "203",
    imgurl: "/store/bakery/bread no gluten.jpg",
    name: "Gluten-free loaf",
    price: "12.90",
  },
  {
    id: "204",
    imgurl: "/store/bakery/half baguettes.jpg",
    name: "Half-baguette 7pk.",
    price: "4.90",
  },
  {
    id: "205",
    imgurl: "/store/bakery/burger buns.png",
    name: "Burger Buns 4pk.",
    price: "9.90",
  },
  {
    id: "206",
    imgurl: "/store/bakery/wheat bread.jpg",
    name: "Wheat Loaf",
    price: "10.90",
  },
  {
    id: "207",
    imgurl: "/store/bakery/white bread.jpg",
    name: "White Loaf",
    price: "10.90",
  },
  {
    id: "208",
    imgurl: "/store/bakery/croissant.jpg",
    name: "Croissant 1c.",
    price: "1.90",
  },
  {
    id: "209",
    imgurl: "/store/bakery/chocolate croissant.jpg",
    name: "Choc. Croissant 1c.",
    price: "1.90",
  },
  {
    id: "301",
    imgurl: "/store/pantry/chicken powder.png",
    name: "Chicken Stock",
    price: "14.90",
  },
  {
    id: "302",
    imgurl: "/store/pantry/beans.jpg",
    name: "Beans",
    price: "2.90",
  },
  {
    id: "303",
    imgurl: "/store/pantry/corn.jpg",
    name: "Corn",
    price: "2.90",
  },
  {
    id: "304",
    imgurl: "/store/pantry/peas.jpg",
    name: "Peas",
    price: "2.90",
  },

  {
    id: "305",
    imgurl: "/store/pantry/macaroni.jpg",
    name: "Macaroni",
    price: "9.90",
  },
  {
    id: "306",
    imgurl: "/store/pantry/pasta.jpg",
    name: "Pasta",
    price: "8.90",
  },
  {
    id: "307",
    imgurl: "/store/pantry/elbow macaroni.jpg",
    name: "Elbow Macaroni",
    price: "1.90",
  },
  {
    id: "308",
    imgurl: "/store/pantry/tomato sauce 100gr.jpg",
    name: "Tomato Sauce 100g",
    price: "1.90",
  },
  {
    id: "309",
    imgurl: "/store/pantry/tomato sauce 250g.jpg",
    name: "Tomato Sauce 250g",
    price: "3.90",
  },
  {
    id: "3010",
    imgurl: "/store/pantry/yeast.jpg",
    name: "Yeast",
    price: "4.90",
  },
  {
    id: "3011",
    imgurl: "/store/pantry/ketchup.jpg",
    name: "Ketchup",
    price: "10.90",
  },
  {
    id: "3012",
    imgurl: "/store/pantry/flour.jpg",
    name: "Flour",
    price: "4.90",
  },
  {
    id: "3013",
    imgurl: "/store/pantry/self rising flour.jpg",
    name: "Self-rising Flour",
    price: "5.90",
  },
  {
    id: "3014",
    imgurl: "/store/pantry/brown sugar.jpg",
    name: "Brown Sugar",
    price: "13.90",
  },
  {
    id: "3015",
    imgurl: "/store/pantry/white sugar.jpg",
    name: "White Sugar",
    price: "4.90",
  },
  {
    id: "3016",
    imgurl: "/store/pantry/salt.jpg",
    name: "Salt",
    price: "9.90",
  },
  {
    id: "3017",
    imgurl: "/store/pantry/baking powder.jpg",
    name: "Baking Powder 4pk.",
    price: "7.90",
  },
  {
    id: "3018",
    imgurl: "/store/pantry/baking soda.jpg",
    name: "Baking Soda 4pk.",
    price: "7.90",
  },
  {
    id: "3019",
    imgurl: "/store/pantry/powdered sugar.jpg",
    name: "Powdered Sugar",
    price: "11.90",
  },
  {
    id: "3020",
    imgurl: "/store/pantry/bread flour.jpg",
    name: "Bread Flour",
    price: "6.90",
  },
  {
    id: "3021",
    imgurl: "/store/pantry/vanilla.jpg",
    name: "Vanilla",
    price: ".90",
  },
  {
    id: "3022",
    imgurl: "/store/pantry/vanilla sugar.jpg",
    name: "Vanilla Sugar",
    price: "19.90",
  },
  {
    id: "3023",
    imgurl: "/store/pantry/chocolate chips.jpg",
    name: "Chocolate Chips",
    price: "18.90",
  },
  {
    id: "401",
    imgurl: "/store/meat/entrecote.jpg",
    name: "Entrecôte 1kg",
    price: "1.90",
  },
  {
    id: "402",
    imgurl: "/store/meat/burgers.jpg",
    name: "Burgers 4pk.",
    price: "29.90",
  },
  {
    id: "403",
    imgurl: "/store/meat/chicken breast.jpg",
    name: "Chicken Breast 2kg",
    price: "39.90",
  },
  {
    id: "404",
    imgurl: "/store/meat/drumsticks.jpg",
    name: "Drumsticks 8pk.",
    price: "29.90",
  },
  {
    id: "405",
    imgurl: "/store/meat/full chicken.jpg",
    name: "Full Chicken 1c.",
    price: "39.90",
  },
  {
    id: "406",
    imgurl: "/store/meat/ground beef.jpg",
    name: "Ground Beef 1kg",
    price: "35.90",
  },
  {
    id: "407",
    imgurl: "/store/meat/chicken liver.png",
    name: "Chicken Liver",
    price: "39.90",
  },
  {
    id: "408",
    imgurl: "/store/meat/salami.jpg",
    name: "Salami.",
    price: "23.90",
  },
  {
    id: "409",
    imgurl: "/store/meat/turkey and salami.png",
    name: "Turkey and Salami",
    price: "39.90",
  },
  {
    id: "410",
    imgurl: "/store/meat/turkey.jpg",
    name: "Turkey",
    price: "23.90",
  },
  {
    id: "501",
    imgurl: "/store/frozen foods/frozen broccoli.jpg",
    name: "Broccoli",
    price: "14.90",
  },
  {
    id: "502",
    imgurl: "/store/frozen foods/frozen carrots.jpg",
    name: "Carrots",
    price: "14.90",
  },
  {
    id: "503",
    imgurl: "/store/frozen foods/frozen corn.jpg",
    name: "Corn",
    price: "14.90",
  },
  {
    id: "504",
    imgurl: "/store/frozen foods/soy beans.jpg",
    name: "Soy Beans",
    price: "14.90",
  },

  {
    id: "505",
    imgurl: "/store/frozen foods/frozen mango.jpg",
    name: "Mango",
    price: "17.90",
  },
  {
    id: "506",
    imgurl: "/store/frozen foods/frozen pineapple.jpg",
    name: "Pineapple",
    price: "17.90",
  },
  {
    id: "507",
    imgurl: "/store/frozen foods/frozen mixed berries.jpg",
    name: "Mixed Berries",
    price: "17.90",
  },
  {
    id: "508",
    imgurl: "/store/frozen foods/fries.jpg",
    name: "Fries",
    price: "18.90",
  },
  {
    id: "509",
    imgurl: "/store/frozen foods/calamari.png",
    name: "Calamari",
    price: "28.90",
  },
  {
    id: "5010",
    imgurl: "/store/frozen foods/shrimp cooked.png",
    name: "Cooked Shrimp",
    price: "43.90",
  },
  {
    id: "5011",
    imgurl: "/store/frozen foods/uncooked shrimp.jpg",
    name: "Uncooked Shrimp",
    price: "39.90",
  },
  {
    id: "5012",
    imgurl: "/store/frozen foods/teddy bear nuggets.jpg",
    name: "Teddy Nuggets",
    price: "35.90",
  },
  {
    id: "5013",
    imgurl: "/store/frozen foods/shnitzel.jpg",
    name: "Chicken Fingers",
    price: "35.90",
  },
  {
    id: "5014",
    imgurl: "/store/frozen foods/onion rings.jpg",
    name: "Onion Rings",
    price: "18.90",
  },
  {
    id: "5015",
    imgurl: "/store/frozen foods/puff pastry.jpg",
    name: "Puff Pastry",
    price: "14.90",
  },
  {
    id: "5016",
    imgurl: "/store/frozen foods/cheese borekas.jpg",
    name: "Cheese Borekas",
    price: "17.90",
  },
  {
    id: "5017",
    imgurl: "/store/frozen foods/potato borekas.jpg",
    name: "Potato Borekas",
    price: "17.90",
  },
  {
    id: "5018",
    imgurl: "/store/frozen foods/filo borekas.jpg",
    name: "Filo Borekas",
    price: "17.90",
  },
  {
    id: "5019",
    imgurl: "/store/frozen foods/pizza.jpg",
    name: "Pizza",
    price: "24.90",
  },
  {
    id: "5020",
    imgurl: "/store/frozen foods/pizza bites.jpg",
    name: "Pizza Bites",
    price: "22.90",
  },
  {
    id: "601",
    imgurl: "/store/beverage/6 pack 1 15 water.jpg",
    name: "1.5 L. Water 6pk.",
    price: "19.90",
  },
  {
    id: "602",
    imgurl: "/store/beverage/apple juice.jpg",
    name: "Apple Juice 1.5L",
    price: "4.90",
  },
  {
    id: "603",
    imgurl: "/store/beverage/cherry juice.png",
    name: "Cherry Juice 1.5L",
    price: "4.90",
  },
  {
    id: "604",
    imgurl: "/store/beverage/lemonade.jpg",
    name: "Lemonade 1.5L",
    price: "4.90",
  },

  {
    id: "605",
    imgurl: "/store/beverage/pineapple juice.png",
    name: "Pineapple Juice 1.5L",
    price: "4.90",
  },
  {
    id: "606",
    imgurl: "/store/beverage/grape juice.png",
    name: "Grape Juice 1.5L",
    price: "4.90",
  },
  {
    id: "607",
    imgurl: "/store/beverage/grapefruit juice.png",
    name: "Grapefruit Juice 1.5L",
    price: "4.90",
  },
  {
    id: "608",
    imgurl: "/store/beverage/merlot grape juice.png",
    name: "Merlot Juice 1.5L",
    price: "4.90",
  },
  {
    id: "609",
    imgurl: "/store/beverage/orange juice.jpg",
    name: "Orange Juice 1.5L",
    price: "3.90",
  },
  {
    id: "6010",
    imgurl: "/store/beverage/pomegranate juice.png",
    name: "Pomegranate Juice",
    price: "4.90",
  },
  {
    id: "6016",
    imgurl: "/store/beverage/fuze tea.jpg",
    name: "Fuze Tea 1.5L",
    price: "8.90",
  },
  {
    id: "6011",
    imgurl: "/store/beverage/coke.jpg",
    name: "Cola 1.5L",
    price: "8.90",
  },
  {
    id: "6012",
    imgurl: "/store/beverage/cola zero large.jpg",
    name: "Cola Zero 1.5L",
    price: "8.90",
  },
  {
    id: "6013",
    imgurl: "/store/beverage/diet coke.jpg",
    name: "Diet Coke 1.5L",
    price: "8.90",
  },
  {
    id: "6014",
    imgurl: "/store/beverage/fanta exotic large.jpg",
    name: "Fanta Exotic 1.5L",
    price: "8.90",
  },
  {
    id: "6015",
    imgurl: "/store/beverage/fanta orange large.png",
    name: "Fanta Orange 1.5L",
    price: "8.90",
  },
  {
    id: "6017",
    imgurl: "/store/beverage/sprite zero.jpg",
    name: "Sprite Zero 1.5L",
    price: "8.90",
  },
  {
    id: "6018",
    imgurl: "/store/beverage/cola zero 6 bottles.jpg",
    name: "Cola 500ml 6pk.",
    price: "19.90",
  },
  {
    id: "6019",
    imgurl: "/store/beverage/dr pepper cherry vanilla.jpg",
    name: "Van. Cherry D.Pepper",
    price: "6.90",
  },
  {
    id: "6020",
    imgUrl: "/store/beverage/blu.jpg",
    name: "XL",
    price: "4.90",
  },
];

export default allProducts;
