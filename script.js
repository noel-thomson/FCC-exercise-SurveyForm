// let message = "";

// $("#submit").on("click", function() {
//   message = $("#survey-form").serialize();
//   $.ajax({
//     url: "https://formspree.io/noel.thomson@gmail.com",
//     method: "POST",
//     data: { message: message },
//     dataType: "json"
//   });
//   alert("Message sent.");
//   return false;
// });

$("#survey-form").submit(function(e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value || !email.value || !message.value) {
    alert.error("Please check your entries");
  } else {
    $.ajax({
      url: "https://formspree.io/noel.thomson@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault();
    $(this)
      .get(0)
      .reset();
    alert.success("Message sent");
  }
});