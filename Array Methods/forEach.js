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
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i].name);
}

//  EASIER WAY TO LOOP THROUGH AN ARRAY RATHER THAN FOR LOOP
//  IT DOES NOT RETURN ANYTHING
//  PASS A function THAT HAS THESE ARRGUMANTS:  (name of element, index of that element , entire array)
//  companies.forEach(function(company, index, companies))

//  forEach  //  company name  //  ES5
companies.forEach(function (company) {
  console.log(company.name);
});

//  forEach  //  company name  //  ES6
companies.forEach(company => console.log(company.name));
