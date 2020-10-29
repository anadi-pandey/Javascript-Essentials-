const string = 'all your base are belong to us';
const reg = /base/;
const isExisting = reg.test(string);
console.log(isExisting);

const string_2 = 'Hey i want to become a web developer';
const regex = /^become$/;
const isExistingg = regex.test(string_2);
console.log(isExistingg);


// ^ search start
// $ start end 

const str = 'web';
const reg_2= /^web$/;
const isExistinggg = reg_2.test(str);
console.log(isExistinggg);

// tO search in beginning 
