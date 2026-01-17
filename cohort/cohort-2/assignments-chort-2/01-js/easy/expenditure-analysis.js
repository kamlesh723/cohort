/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
  { id: 1, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, price: 20, category: 'Clothes', itemName: 'Shirt' },
  { id: 3, price: 15, category: 'Food', itemName: 'Burger' },
  { id: 4, price: 40, category: 'Electronics', itemName: 'Mouse' }
];
function calculateTotalSpentByCategory(transactions) {
  const result = {};

  for(let t of transactions){
    if(!result[t.category]){
result[t.category]=0;
    }
    result[t.category]+=t.price;
  }
  return Object.keys(result).map(category =>({
    category:category,
    totalspent:result[category]
  }));
}

console.log(calculateTotalSpentByCategory(transactions));

