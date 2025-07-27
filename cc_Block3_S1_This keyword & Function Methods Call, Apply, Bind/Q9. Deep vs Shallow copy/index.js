function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  return JSON.parse(JSON.stringify(obj));
}

const original = { 
  name: "Alice", 
  hobbies: ["reading", "traveling"] 
};

const cloned = deepClone(original);

cloned.hobbies.push("coding");

console.log("Original:", original);
console.log("Clone:", cloned);