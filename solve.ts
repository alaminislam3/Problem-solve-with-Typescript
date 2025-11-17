const formateValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

// console.log(formateValue('rakib'))
// console.log(formateValue(10))
// console.log(formateValue(false))

const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return value;
};
// console.log(getLength('typescript'))
// console.log(getLength(["sakib", " rakib"]))

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age : ${this.age}'`;
  }
}

const newPerson = new Person('rani', 20)
// console.log(newPerson.getDetails())

/* provlem 04 */

type Property = {
  title: string;
  rating: number;
};

const filterByRating = (value: Property[]): Property[] => {
  return value.filter((singvalue) => singvalue.rating >= 4.0);
};
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

/* problem 5 */

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: Users[]): Users[] => {
  return value.filter((singvalue) => singvalue.isActive === true);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

/* Problem 6 */

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(myBook: Book): void {
//   console.log(
//     `Title: ${myBook.title}, Author: ${myBook.author},Published: ${myBook.publishedYear},Available: ${myBook.isAvailable}`
//   );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};
printBookDetails(myBook);
// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes

/* Problem 7 */

const getUniqueValues = (array1: number[], array2 : number[]) => {
    let finalArray: any [] = []
    let mergedArray = [...array1, ...array2]
     for(let i =0; i < mergedArray.length; i ++){
       let z  = mergedArray[i]
       if(!finalArray.includes(z)){
        finalArray.push(z)
       }
     }
     return finalArray
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));       

/* Problem 8 */

type ProductsKini = {
    name : string;
    price : number;
    quantity : number;
    discount? : number
}

const calculateTotalPrice = (value : ProductsKini [])  => {
     let result = value.map((singpro)=> {
       let totalTaka = singpro.price * singpro.quantity 
       let fakaArray = []
       if(singpro.discount){
          let discount = totalTaka * (singpro.discount / 100)
          let totalAmmount = totalTaka  - discount
          fakaArray.push(totalAmmount)
            
        } 
        
        
      })
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
