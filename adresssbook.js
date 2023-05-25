const addressBook = [];

class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }
    }

function validateContact(contact) {
  const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
  const addressRegex = /^[a-zA-Z0-9\s]{4,}$/;
  const zipRegex = /^[0-9]{6}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!nameRegex.test(contact.firstName) || !nameRegex.test(contact.lastName)) {
    throw new Error('First and Last names should start with a capital letter and have a minimum of 3 characters.');
  }

  if (!addressRegex.test(contact.address) || !addressRegex.test(contact.city) || !addressRegex.test(contact.state)) {
    throw new Error('Address, City, and State should have a minimum of 4 characters.');
  }

  if (!zipRegex.test(contact.zip) || !phoneRegex.test(contact.phone) || !emailRegex.test(contact.email)) {
    throw new Error('Invalid Zip, Phone, or Email format.');
  }
}

function addContact(firstName, lastName, address, city, state, zip, phone, email) {
  const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
  validateContact(contact);
  addressBook.push(contact);
  console.log('Contact added successfully!');
}

function findContactByName(firstName, lastName) {
  const contact = addressBook.find(
    (contact) =>
      contact.firstName.toLowerCase() === firstName.toLowerCase() && contact.lastName.toLowerCase() === lastName.toLowerCase()
  );
  return contact;
}

function editContact(firstName, lastName, newContactDetails) {
  const contact = findContactByName(firstName, lastName);
  if (contact) {
    Object.assign(contact, newContactDetails);
    console.log('Contact updated successfully!');
  } else {
    throw new Error('Contact not found.');
  }
}

function deleteContact(firstName, lastName) {
  const index = addressBook.findIndex(
    (contact) =>
      contact.firstName.toLowerCase() === firstName.toLowerCase() && contact.lastName.toLowerCase() === lastName.toLowerCase()
  );
  if (index !== -1) {
    addressBook.splice(index, 1);
    console.log('Contact deleted successfully!');
  } else {
    throw new Error('Contact not found.');
  }
}

function countContacts() {
  return addressBook.length;
}

function printAllContacts() {
    console.log('All contacts:');
    addressBook.forEach((contact) => {
        console.log(contact.printContact());
    });
}
addContact('Omkar', 'Bhor', 'bhosari', 'pune', 'maharashtra', '123455', '1234567890', 'om@dlk.co');
addContact('Adesh','Bhor','bhosari','chennai','tamilnadu' ,'425646','7895321650','Jhj@hvh.co');

const foundContact = findContactByName('Omkar', 'Bhor');
console.log('The Contact Details are',foundContact );

//editContact('Omkar', 'Bhor', { phone: '9876543210' });

//deleteContact('Adesh', 'Bhor');

const totalCount = countContacts();
console.log('Total contacts:', totalCount);
class AddressBook {
  constructor() {
    this.contacts = [];
  }
}


//   // Add a new contact to the address book if there is no duplicate
//   addContact(contact) {
//     const isDuplicate = this.contacts.filter((c) => c.fullName === contact.fullName).length > 0;
//     if (isDuplicate) {
//       console.error(`Error: ${contact.fullName} already exists in the address book.`);
//       return;
//     }

//     this.contacts.push(contact);
//     console.log(`Added ${contact.fullName} to the address book.`);
//   }

//   // Search for contacts by city or state
//   searchContactsByLocation(location, isCitySearch) {
//     const searchResults = this.contacts.filter((c) => isCitySearch ? c.city === location : c.state === location);
//     console.log(`Search results for ${isCitySearch ? 'city' : 'state'} "${location}":`);
//     searchResults.forEach((c) => console.log(`- ${c.fullName} (${c.address}, ${c.city}, ${c.state} ${c.zip}, ${c.phone}, ${c.email})`));
//   }

//   // View contacts by city or state
//   viewContactsByLocation(isCityView) {
//     const locations = {};
//     this.contacts.forEach((c) => {
//       const location = isCityView ? c.city : c.state;
//       if (!locations[location]) {
//         locations[location] = [];
//       }
//       locations[location].push(c);
//     });
//     console.log(`Contacts by ${isCityView ? 'city' : 'state'}:`);
//     for (const location in locations) {
//       console.log(`${location}:`);
//       locations[location].forEach((c) => console.log(`- ${c.fullName} (${c.address}, ${c.city}, ${c.state} ${c.zip}, ${c.phone}, ${c.email})`));
//     }
//   }

//   // Get count of contacts by city or state
//   getCountByLocation(isCityCount) {
//     const counts = {};
//     this.contacts.forEach((c) => {
//       const location = isCityCount ? c.city : c.state;
//       if (!counts[location]) {
//         counts[location] = 0;
//       }
//       counts[location]++;
//     });
//     console.log(`Contact counts by ${isCityCount ? 'city' : 'state'}:`);
//     for (const location in counts) {
//       console.log(`${location}: ${counts[location]}`);
//     }
//   }

//   // Sort contacts by name
//   sortByName() {
//     const sortedContacts = this.contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
//     console.log('Contacts sorted by name:');
//     sortedContacts.forEach((c) => console.log(`- ${c.fullName} (${c.address}, ${c.city}, ${c.state} ${c.zip}, ${c.phone}, ${c.email})`));
//   }

//   // Sort contacts by location (city, state, or zip)
//   sortByLocation(locationType) {
//     const sortedContacts = this.contacts.sort((a, b) => a[locationType].localeCompare(b[locationType]));
//     console.log(`Contacts sorted by ${locationType}:`);
//     sortedContacts.forEach((c) => console.log(`- ${c.fullName} (${c.address}, ${c.city}, ${c.state} ${c.zip}, ${c.phone}, ${c.email})`));
//   }
// }

// class Contact {
//   constructor(firstName, lastName, address, city, state, zip, phone, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = `${firstName} ${lastName}`;
//     this.address = address;
//     this.city= city;
//     this.state=state;
//     this.zip=zip;
//     this.phone=phone;
//     this.email=email;
//     }
//     }




   
