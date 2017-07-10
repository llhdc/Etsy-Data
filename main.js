// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
let sum = 0;
let avg = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i].price;
  }
    avg = Math.round((100 * (sum / 25)))/100;
    console.log('The average price is $' + avg);
}




// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let fourteenToEighteen = [];

  for (let i = 0; i < data.length; i++) {
    if ((data[i].price >= 14) && (data[i].price <= 18)) {
      fourteenToEighteen.push(data[i].title);
    }
  }
    for (let i = 0; i < fourteenToEighteen.length; i++) {
      console.log(fourteenToEighteen[i]);
    }
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP")
      console.log(data[i].title, data[i].price);
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood"))
      console.log(data[i].title + ' is made of wood.');
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:

  for (let i = 0; i < data.length; i++) {
    let product = data[i];

    if (product.materials.length >= 8) {
      console.log(product.title + ' has ' + product.materials.length + ' materials: ');
      product.materials.forEach(function(material){console.log(' - ' + material
    )});
    }
  }
}

//   alternate solution using nested loops
//    for (let i = 0; i < data.length; i++) {
//     let product = data[i]
//
//     if (product.materials.length >= 8) {
//       console.log(product.title + ' has ' + product.materials.length + ' materials: ');
//     }
//
//     for (let j = 0; j < product.materials.length; j++) {
//       if (product.materials.length >= 8) {
//         console.log('- ' + product.materials[j]);
//       }
//     }
//   }
// }
// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let sellerMade = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      sellerMade.push(i);
    }
  }
    console.log(sellerMade.length + ' items were made by their sellers.');
}
