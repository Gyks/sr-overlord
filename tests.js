const assert = require('assert');

let obj1 = {
  nickname: 'nickname', // must be unique
  fullName: {
    firstName: 'fullName.firstName',
    secondName: 'fullName.secondName'
  },
  seasonStatus: {
    current: 'seasonStatus',
    lastUpdated: new Date()
  },
  links: {
    discord: 'links.discord',
    vk: 'links.vk'
  }
};

let obj2 = {
  nickname: 'nickname', // must be unique
  fullName: {
    firstName: 'ASDA',
    secondName: 'fullName.secondName'
  },
  seasonStatus: {
    current: 'seasonStatus',
    lastUpdated: new Date()
  },
  links: {
    discord: 'links.discord',
    vk: 'links.vk'
  }
};

let obj3 = {
  nickname: 'nickname', // must be unique
  fullName: {
    name: 'fullName.firstName',
    secondName: 'fullName.secondName'
  },
  seasonStatus: {
    current: 'seasonStatus',
    lastUpdated: new Date()
  },
  links: {
    discord: 'links.discord',
    arisu: 'links.vk'
  }
};
// console.log(Object.values(obj1));
// assert.deepEqual(obj1, obj3);
// assert.deepEqual(obj1, obj3);

function checkKeys(obj, items = []) {
  Object.keys(obj).forEach(item => {
    // Check if object AND has keys
    if (typeof obj[item] == 'object' && Object.keys(obj[item]).length > 0) {
      checkKeys(obj[item], items);
    } else {
      items.push(item);
    }
  });
  return items;
}

assert.deepEqual(checkKeys(obj1), checkKeys(obj2));
