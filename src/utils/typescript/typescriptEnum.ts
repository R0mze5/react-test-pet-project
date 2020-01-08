// enum - позволяет структурировать, если имеются однотипные элементы

enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership); // выведет 1
console.log(membershipReverse); // выведет Premium

enum SocialMedia { // в данном случае при обращении к enum мы будем получать строку
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}
