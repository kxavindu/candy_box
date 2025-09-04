


//Add new items and images 


const products = [
  { id: 1, name: "photo cards (regular)", price: "Rs.30.00", category: "cards", image: "web_images/product1/item1/p1i1p1.jpg", details: "1pc - Rs.30/=\n48pcs pack - Rs.1200/=\n\n• Available in any category\n• Size - 7×5 cm\n• Customize available\n• Glossy finishing\n• Rounded corners" },
  { id: 2, name: "Wall cards", price: "Rs.50.00", category: "cards", image:  "web_images/product1/item2/p1i2p2.jpg" , details: "1pc - Rs.50/=\n24pcs pack -  Rs.1000/=\n48pcs pack - Rs. 1950/=\n\n• Available in any category \n• Size - 10×7 cm (A7)\n• Customize available \n• Glossy finishing\n\n🌟 *Also available in these sizes*\n• A7 ( 10×7cm) - 1pc = Rs.50/=\n• A6 ( 14×10cm ) - 1pc = Rs.100/=\n• A5 ( 20×14cm ) - 1pc = Rs. 170/=" },
  { id: 3, name: "Large posters ", price: "Rs.250.00", category: "cards", image: "web_images/product1/item3/p1.jpg", details: "Large Poster\n1pc - Rs.250/=\n(With Laminate - Rs.320/=)\n\n5pcs -  Rs.1100/=\n10pcs -  Rs.2100/=\n\n• Available in any category \n• Size - 30×20 cm (A4)\n• Customize available \n• Glossy finishing" },
  { id: 4, name: "Mini posters 2pcs", price: "Rs.150.00", category: "cards", image: "web_images/product1/item4/p1.jpg", details: "Mini Posters 2pcs set\n2pcs - Rs.150/=\n\n12pcs -  Rs.800/=\n\n• Available in any category \n• Size - 14×10 cm (A6)\n• Customize available \n• Glossy finishing" },
  { id: 5, name: "photo cards (large)", price: "Rs.50.00", category: "cards", image: "web_images/product1/item5/p1.jpg", details: "Photocards ( Large )\n1pc - Rs.50/=\n24pcs pack -  Rs.1000/=\n48pcs pack - Rs.1950/=\n\n• Available in any category \n• Size - 10×7 cm\n• Customize available \n• Glossy finishing\n• Rounded corners" },
  { id: 6, name: "Polaroids", price: "Rs.40.00", category: "cards", image: "web_images/product1/item6/p1.jpg", details: "Polaroids\n1pc - Rs.40/=\n\n• Available in any category \n• Size - 7×10 cm (A7)\n• Customize available \n• Glossy finishing\n• Text can be entered as desired \n• Frame colour white" },
  { id: 7, name: "Desk Calander", price: "Rs.800.00", category: "cards", image: "web_images/product1/item7/p1.jpg", details: "Desk Calendar\nRs. 800/= ( Double side cards )\nRs. 1200/= ( Single side cards )\n\n▫️️ Package includes :-\n      • Calendar cards \n              Double side - 6 cards \n              Single side - 12 cards  \n      • Wooden holder \n\n▫️️ Fully Laminated ✅\n▫️️ Size - A6 [ 14×10cm ]\n▫️️ Customize available \n\n🌟 දෙපැත්තේම print කළ cards හෝ තනි පැත්තක් පමණක් print කළ cards ලෙස වර්ග දෙකකින් ඇත. තනි පැත්ත print කළ වර්ගයේ මාසයකට එක බැගින් card එකක් පවතී. දෙපැත්ත print කළ වර්ගයේ card එකක දෙපැත්තේ මාස දෙකක් ඇති අතර cards 6 ක් ඇත. \n\n🌟 සම්පූර්ණයෙන් ලැමිනේට් කර ඇති නිසා අව්වට පාට පිලිස්සී යාම වලකී" },
  { id: 8, name: "Photostrip (4pics)", price: "Rs.50.00", category: "cards", image: "web_images/product1/item8/p1.jpg", details: "Photostrip (4 pics)\n1pc - Rs.50/=\n\n• Available in any category \n• Size - 5×14 cm \n• 4 photos included \n• Customize available \n• Glossy finishing" },
  { id: 9, name: "Four photos collage", price: "Rs.100.00", category: "cards", image: "web_images/product1/item9/p1.jpg", details: "Four Photos Collage\n1pc - Rs.100/=\n\n• Available in any category \n• Size - 14×10 cm (A6) \n• Customize available \n• Glossy finishing" },
  { id: 10, name: "A5 card", price: "Rs.150.00", category: "cards", image: "web_images/product1/item10/p1.jpg", details: "A5 Card\n1pc - Rs.150/=\n2pcs - Rs. 280/=\n\n• Available in any category \n• Size - 14×20 cm (A5) \n• Customize available \n• Glossy finishing" },
  { id: 11, name: "Signature cards", price: "Rs.50.00", category: "cards", image: "web_images/product1/item11/p1.jpg", details: "Signature Cards\n1pc - Rs.50/=\n\n• Available in any category \n• Size - 10×7 cm (A7) \n• Customize available \n• Glossy finishing" },
  { id: 12, name: "Cake cards", price: "PRICE DEPEND ON YOUR DESIGN", category: "cards", image: "web_images/product1/item12/p1.jpg", details: "Details about item 6" },
  { id: 13, name: "Bookmark (large)", price: "Rs.50.00", category: "cards", image: "web_images/product1/item13/p1.jpg", details: "Bookmarks - Large\n1pc - Rs.50/=\n\n• Available in any category \n• Size - 2.5×10 cm \n• Customize available \n• Glossy finishing" },
  { id: 14, name: "Bookmark ", price: "Rs.25.00", category: "cards", image: "web_images/product1/item14/p1.jpg", details: "Bookmarks\n1pc - Rs.25/=\n\n• Available in any category \n• Size - 2.5×10 cm \n• Customize available \n• Glossy finishing" },
  //product one done
  { id: 15, name: "Stickers", price: "Rs.10.00", category: "stickers", image: "web_images/product2/item1/p1.jpg", details: "Stickers\nRs.10/= ( one sticker )\n\n• Can order any amount you like\n• Available in any category\n• Customize available\n• Size - about 4-5cm. It depends on the picture\n• Waterproof and  glossy stickers" },
  { id: 16, name: "Stickers Mini size", price: "Rs.20.00", category: "stickers", image: "web_images/product2/item2/p1.jpg", details: "Stickers ( Mini size )\n1pc - Rs.20/=\n\n• Available in any category\n• Size - 7×5 cm (A8)\n• Customize available\n• Glossy finishing\n\nSuitable for notebooks, walls or any other surface" },
  { id: 17, name: "Square Stickers", price: "Rs.7.50", category: "stickers", image: "web_images/product2/item3/p1.jpg", details: "24pcs Square Stickers Pack\n24pcs - 180/=\n\n• Available in any category\n• Size - 3×3 cm\n• Customize available\n• Glossy stickers" },
  { id: 18, name: "Love Mail Stickers", price: "pnly packs", category: "stickers", image: "web_images/product2/item4/p1.jpg", details: "Love Mail Stickers\n12pcs - 200/=\n24pcs - 350/=\n\n• Available in any category\n• Size - 5×5 cm\n• Customize available\n• Glossy finishing\n• Waterproof" },

  { id: 19, name: "Name stickers", price: "only packs", category: "stickers", image: "web_images/product2/item5/p1.jpg", details: "Name Stickers (20pcs pack)\nRs. 260/= ( Matte Stickers )\nRs. 350/= ( Glossy Stickers )\n\n• Size - 7 × 4 cm\n• Available in any theme\n\n🔴 පොතට ඉටි කවර දමනවා නම් matte stickers ද, ඉටි කවර දමන්නේ නැතිනම් glossy stickers ද නිර්දේශ කෙරේ." },
  { id: 20, name: "Freebie Stickers", price: "only packs", category: "stickers", image: "web_images/product2/item6/p1.jpg", details: "Freebie Stickers (1)\n45pcs pack - Rs.350/=\n\nGlossy Stickers ✅\nSize : 4cm / 5 cm" },
  //product two done
];





//change carousel images links too when update new itames @carouselImages.jss

// UNIVERSAL BACK BUTTON



