document.getElementById("contactForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  } else if (name.trim() === "") {
    alert("Name cannot be empty.");
    e.preventDefault();
  }
});
