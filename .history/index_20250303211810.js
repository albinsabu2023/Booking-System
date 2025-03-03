gsap.to(".box", { duration: 2, x: 15, rotation: 360, scale: 1.5 });
// var welcome = document.getElementById("welcome-note");
// gsap.to(welcome, {
//   duration: 2,
//   text: "This is the new text",
//   ease: "none",
// });

function bookRoom() {
  // event.preventDefault();

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
  };
  const alertBox = document.getElementById("alert");
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
  }, 1000);
}

document.getElementById("remove-item").addEventListener(
  "click",
  (removeItem = (item) => {
    console.log(item);
  })
);
