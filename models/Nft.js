const { faker } = require('@faker-js/faker');


function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
  };
}


function createRandomNFT(randomNum) {

  const fakerImage = [
    faker.image.cats(),
    faker.image.city(),
    faker.image.sports(),
    faker.image.food(),
    faker.image.nature(),
    faker.image.nightlife(),
    faker.image.technics(),
    faker.image.transport(),
    faker.image.fashion(),
  ];
  
  return {
    id: faker.datatype.uuid(),
    title: faker.internet.userName(),
    img: fakerImage[randomNum],
    price: faker.finance.amount(),
    company: faker.company.companyName(),
    info: faker.lorem.paragraph(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

function createRandomNFT2(randomNum) {

  const fakerImage = [
    faker.image.technics(),
    faker.image.transport(),
    faker.image.fashion(),
  ];
  
  return {
    id: faker.datatype.uuid(),
    title: faker.internet.userName(),
    img: fakerImage[randomNum],
    price: faker.finance.amount(),
    company: faker.company.companyName(),
    info: faker.lorem.paragraph(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const collections = [];
const created = [];
const buy = [];

Array.from({ length: 20 }).forEach((item, index) => {
  collections.push(createRandomNFT(index));
});

Array.from({ length: 3 }).forEach((item, index) => {
  created.push(createRandomNFT2(index));
});

Array.from({ length: 2 }).forEach((item, index) => {
  buy.push(createRandomNFT(index));
});

module.exports = { all: collections, created: created, buy: buy, user: createRandomUser()  };
