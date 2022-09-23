const customerContainer = document.querySelector(".customerDiv");
console.log('Hello world');

function busDirectory(customerArray) {
    for (let customer of customerArray) {
        let peopleDiv = document.createElement("div");
        let name = document.createElement("h1");
        let email = document.createElement ("h4");
        let location= document.createElement ("p");
        let dob = document.createElement ("p");
        let registered = document.createElement ("p");

        name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
        email.innerText = customer.email;
        location.innerText = `${customer.location.street.number} ${customer.location.street.name}\n${customer.location.city} ${customer.location.state} ${customer.location.country} ${customer.location.postcode}`;
        dob.innerText = customer.dob.date;
        registered.innerText = `Customer since: ${customer.registered.date}`;
        
        customerContainer.appendChild(peopleDiv);
        peopleDiv.appendChild(name);
        peopleDiv.appendChild(email);
        peopleDiv.appendChild(location);
        peopleDiv.appendChild(dob);
        peopleDiv.appendChild(registered);
    }
}

busDirectory(customers);
