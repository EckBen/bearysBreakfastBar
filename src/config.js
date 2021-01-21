let contacts = [
  {
    'name': "Mama Bear",
    'position': "Chef",
    'phone': "555-555-5554",
    'email': "totallyRealEmail@notFake.com",
    'pic': "./img/mamabear.png",
    'alt': "Mama Bear's Photo"
  },
  {
    'name': "Papa Bear",
    'position': "Manager",
    'phone': "555-555-5555",
    'email': "perfectlyRealEmail@notFake.com",
    'pic': "./img/papabear.jpeg",
    'alt': "Papa Bear's Photo"},
  {
    'name': "Baby Bear",
    'position': "Waiter",
    'phone': "555-555-5556",
    'email': "totallyRealEmail@notFake.com",
    'pic': "./img/babybear.jpeg",
    'alt': "Baby Bear's Photo"
  }
]

let info = {
  'hours': {
    'sunday':{
      'open': '8',
      'close': '8'
    },
    'monday':{
      'open': '6',
      'close': '6'
    },
    'tuesday':{
      'open': '6',
      'close': '6'
    },
    'wednesday':{
      'open': '6',
      'close': '6'
    },
    'thursday':{
      'open': '6',
      'close': '10'
    },
    'friday':{
      'open': '6',
      'close': '10'
    },
    'saturday':{
      'open': '8',
      'close': '10'
    }
  },
  'location': {
    'street': '123 Forest Drive',
    'city': 'Forestville',
    'state': 'Maine'
  }
}

let menu = [
  {
    'item': false,
    'subtitle': 'Beverages'
  },
  {
    'item':  true,
    'name': "Honey Tea",
    'description': "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
    'price': "$2",
    'pic': "./img/honeyTea.jpg",
    'alt': "Picture of honey tea."
  },
  {
    'item':  true,
    'name': "Beary Tea",
    'description': "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
    'price': "$3",
    'pic': "./img/bearyTea.jpg",
    'alt': "Picture of beary tea."
  },
  {
    'item': false,
    'subtitle': 'Sides'
  },
  {
    'item':  true,
    'name': "Toast and Jam",
    'description': "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
    'price': "$1",
    'pic': "./img/toast.jpg",
    'alt': "Picture of toast and jam."
  },
  {
    'item':  true,
    'name': "Fresh Fruit",
    'description': "A small bowl of fresh fruit, whatever we find at the market for the day.",
    'price': "$3",
    'pic': "./img/fruit.jpg",
    'alt': "Picture of a bowl of fruit."
  },
  {
    'item': false,
    'subtitle': 'Main Dishes'
  },
  {
    'item':  true,
    'name': "Pancakes",
    'description': "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
    'price': "$4",
    'pic': "./img/pancakes.jpg",
    'alt': "Picture of pancakes."
  },
  {
    'item':  true,
    'name': "French Toast",
    'description': "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
    'price': "$5",
    'pic': "./img/frenchToast.jpg",
    'alt': "Picture of french toast."
  },
  {
    'item':  true,
    'name': "Beary Veggie Sandwich",
    'description': "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
    'price': "$8",
    'pic': "./img/veggieSandwich.jpg",
    'alt': "Picture of veggie sandwich."
  },
  {
    'item':  true,
    'name': "BLT",
    'description': "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
    'price': "$6",
    'pic': "./img/blt.jpg",
    'alt': "Picture of a BLT."
  },
  {
    'item':  true,
    'name': "Bagel and Lox",
    'description': "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
    'price': "$8",
    'pic': "./img/lox.jpg",
    'alt': "Picture of bagel and lox."
  },
  {
    'item':  true,
    'name': "Honeycomb",
    'description': "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
    'price': "$6",
    'pic': "./img/honeyComb.jpg",
    'alt': "Picture of honeycomb."
  },
  {
    'item':  true,
    'name': "Beary Bowl",
    'description': "Get a big ole bowl of our berries! Side of honey is $1 extra.",
    'price': "$7",
    'pic': "./img/berryBowl.jpeg",
    'alt': "Picture of a berry bowl."
  },
  {
    'item':  true,
    'name': "The Beary Best Porridge",
    'description': "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
    'price': "$5",
    'pic': "./img/porridge.jpg",
    'alt': "Picture of porridge."
  },
]

let reviews = [
  {
    'text': "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",
    'name': "Goldilocks"
  }
]

let homeTitle = {
  'title': "Beary's Breakfast Bar",
  'beeClass1': "bee-left",
  'beeClass2': "bee-right"
}

let menuTitle = {
  'title': "Menu",
  'beeClass1': "menu-bee-left",
  'beeClass2': "menu-bee-right"
}

let contactTitle = {
  'title': "Contact Us",
  'beeClass1': "contact-bee-left",
  'beeClass2': "contact-bee-right"
}

export { contacts, info, menu, reviews, homeTitle, menuTitle, contactTitle };