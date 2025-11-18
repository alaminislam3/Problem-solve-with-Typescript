1. What is the use of the keyof keyword in TypeScript? Provide an example.

Answer : keyof ব্যবহার করা হয় কোনো object type-এর সবগুলো key-কে একটি union type হিসেবে পাওয়ার জন্য। একটা object এ যেসব property নাম আছে সেগুলোকেই keyof নিয়ে আসে। 

Example : 

type Product = {
  title: string;
  price: number;
  inStock: boolean;
};

type ProductKeys = keyof Product;

function printKey(key: keyof Product) {
  console.log("You selected:", key);
}


2.Explain the difference between any, unknown, and never types in TypeScript.

Answer : TypeScript-এ any, unknown, এবং never তিনটি আলাদা উদ্দেশ্যে ব্যবহার হয়। any মানে হলো “যেকোনো কিছু”—এটা ব্যবহার করলে TypeScript টাইপ চেকিং বন্ধ করে দেয় এবং আপনি যেকোনো অপারেশন করতে পারেন, তাই এটি কম সেফ। unknown-কে বলা হয় safer any, কারণ এটাও যেকোনো ভ্যালু রাখতে পারে, কিন্তু সরাসরি ব্যবহার করা যায় না—ব্যবহার করতে চাইলে আগে টাইপ চেক করতে হবে, তাই এটি বেশি সুরক্ষিত। আর never এমন একটি টাইপ যা কখনই কোনো ভ্যালু রিটার্ন করে না, যেমন error থ্রো করা বা infinite loop—মানে এমন পরিস্থিতি যেখানে কোনো ভ্যালু পাওয়া সম্ভব নয়।

