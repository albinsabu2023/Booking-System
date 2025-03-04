function bookRoom(event) {
  event.preventDefault();
  const empId = document.getElementById("emp-id").value;
  const location = document.getElementById("location-select").value;
  const block = document.getElementById("blocks-select").value;
  const date = document.getElementById("date").value;
  const timeSlot = document.getElementById("time-slot").value;
  const purpose = document.getElementById("purpose").value;
  const seats = document.getElementById("seats").value;
  const bookedTime = new Date().toLocaleString();

  const bookingInfo = {
    location: location,
    block: block,
    date: date,
    timeSlot: timeSlot,
    purpose: purpose,
    seats: seats,
    bookedTime: bookedTime,
    empId: empId,
  };
  let alertBox = document.getElementById("alertBox");
  if (
    location === "" ||
    block === "" ||
    date === "" ||
    timeSlot === "" ||
    purpose === "" ||
    seats === ""
  ) {
    alertBox.innerText = "Please fill all the fields";
    alertBox.style.display = "block";
    alertBox.classList.remove("alert-success");
    alertBox.classList.add("alert-danger");
    return;
  } else {
    alertBox.innerText = "Booking Successful";
    alertBox.style.display = "block";
    alertBox.classList.remove("alert-danger");
    alertBox.classList.add("alert-success");
    // adding image
    let img = document.createElement("img");
    img.src = "/assets/succes.gif"; // Set image path
    img.alt = "succes"; // Set alternative text
    img.style.width = "50px"; // Set width (optional)
    img.style.height = "50px"; // Set height (optional)
    img.className = "alert-img";
    // Append image to alertBox
    alertBox.appendChild(img);
  }

  // console.log(bookingInfo);
  let bookingData = JSON.parse(localStorage.getItem("bookingData")) || [];

  let updatedBooking = {
    bookingInfo,
  };

  // Add the new booking at the start of the array
  bookingData.unshift(updatedBooking);

  // Store the updated array in localStorage
  localStorage.setItem("bookingData", JSON.stringify(bookingData));

  setTimeout(() => {
    window.location.href = "preview.html";
  }, 2000);
}

// Handle click events for viewing and deleting
