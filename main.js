const customerContainer = document.querySelector(".customerDiv");

function busDirectory(customerArray) {
  for (let customer of customerArray) {
    let peopleDiv = document.createElement("div");
    let picture = document.createElement("img");
    let name = document.createElement("h1");
    let email = document.createElement("h4");
    let location = document.createElement("p");
    let dob = document.createElement("p");
    let registered = document.createElement("p");

    picture.src = `${customer.picture.large}`;
    name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
    email.innerText = customer.email;
    location.innerText = `${customer.location.street.number} ${
      customer.location.street.name
    }\n${customer.location.city} ${nameToAbbr(customer.location.state)} ${
      customer.location.postcode
    }`;
    dob.innerText = `DOB: ${moment(customer.dob.date).format("MMMM Do YYYY")}`;
    registered.innerText = `Customer since: ${moment(
      customer.registered.date
    ).format("MMMM Do YYYY")}`;

    customerContainer.appendChild(peopleDiv);
    peopleDiv.appendChild(picture);
    peopleDiv.appendChild(name);
    peopleDiv.appendChild(email);
    peopleDiv.appendChild(location);
    peopleDiv.appendChild(dob);
    peopleDiv.appendChild(registered);

    peopleDiv.classList.add("peopleDiv");
    picture.classList.add("picture");
    name.classList.add("name");
    location.classList.add("location");
    email.classList.add("eMail");
    picture.classList.add("picture");
  }
}

busDirectory(customers);
