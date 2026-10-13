document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".nav-btn");
  const bookingForm = document.getElementById("bookingForm");
  const subscribeForm = document.getElementById("subscribeForm");
  const statusMessage = document.getElementById("statusMessage");

  if (navBtn) {
    navBtn.addEventListener("click", function () {
      alert("My Account clicked");
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();
      statusMessage.textContent = "Searching available hotels...";
    });
  }

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = this.querySelector("input[type='email']").value.trim();
      if (email) {
        alert("Subscribed successfully: " + email);
        this.reset();
      }
    });
  }

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelectorAll(".nav-links a").forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
