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

function calculateTotalSpentByCategory(transactions) {
     const mp = new Map();
     const ans =new Array();
      for (let index = 0; index < transactions.length; index++) {
        const element = transactions[index];
        let cat=element.category;
        let spent=element.price;
        if(mp.has(cat)){
          let curr=mp.get(cat);
          curr+=spent;
          mp.set(cat,curr);
        }
        else{
          mp.set(cat,spent);
        }
        
      }
      //iterating in map
      for (let [key,val] of mp){
        const ele=new Object();
        ele.category = key;
        ele.totalSpent = val;
        ans.push(ele);
      }


        return ans;


}

module.exports = calculateTotalSpentByCategory;
