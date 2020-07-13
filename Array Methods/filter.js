const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//  for loop
const canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

//  filter  //  canDrink  //  ES5
const canDrink = ages.filter(function (age) {
  if (age >= 18) {
    return true;
  }
});
console.log(canDrink);

//  filter  //  canDrink  //  ES6
const canDrink = ages.filter(age => age >= 18);
console.log(canDrink);


//  filter  //   retails companies //  ES5
const retailsCompanies = companies.filter(function (company) {
  if (company.category.toLowerCase() === 'retail') {
    return true;
  }
});
console.log(retailsCompanies);

//  filter  //   retails companies  //  ES6
const retailsCompanies = companies.filter(company => company.category.toLowerCase() === 'retail');
console.log(retailsCompanies);


//  filter  //  80s companies  //  ES5
const eightiesCompanies = companies.filter(function (company) {
  if (company.start >= 1980 && company.start < 1990) {
    return true;
  }
});
console.log(eightiesCompanies);

//  filter  //  80s companies  //  ES6
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);


//  filter  //  10 years old companies  //  ES5
const tenYearsCompanies = companies.filter(function (company) {
  if (company.end - company.start >= 10) {
    return true;
  }
});
console.log(tenYearsCompanies);

//  filter  //  10 years old companies  //  ES6
const tenYearsCompanies = companies.filter(company => company.end - company.start >= 10);
console.log(tenYearsCompanies);
