const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("form-response");

form.addEventListener("submit", async function(event) {
  event.preventDefault(); 

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mldjvpyg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      responseMsg.style.display = "block";
      responseMsg.style.color = "green";
      responseMsg.textContent = "✔️ Thank you! Your message has been sent.";
    } else {
      responseMsg.style.display = "block";
      responseMsg.style.color = "red";
      responseMsg.textContent = "❌ Something went wrong. Please try again later.";
    }
  } catch (error) {
    responseMsg.style.display = "block";
    responseMsg.style.color = "red";
    responseMsg.textContent = "❌ Network error. Please try again.";
  }
});
