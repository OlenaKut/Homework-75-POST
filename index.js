async function createAirline() {
  var userId = document.getElementById("id").value;
  var userName = document.getElementById("name").valuex;
  var userCountry = document.getElementById("country").value;
  var userLogo = document.getElementById("logo").value;
  var userSlogan = document.getElementById("slogan").value;
  var userHead = document.getElementById("head_quaters").value;
  var userWebsite = document.getElementById("website").value;
  var userEstablished = document.getElementById("established").value;

  let airInfo = {
    id: userId,
    name: userName,
    country: userCountry,
    logo: userLogo,
    slogan: userSlogan,
    head_quaters: userHead,
    website: userWebsite,
    established: userEstablished,
  };

  let urlAir = "https://api.instantwebtools.net/v1/airlines";
  let response = await fetch(urlAir, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(airInfo),
  });
  let resultAirReg = await response.json();
  console.log(resultAirReg);
  if (response.status === 200) {
    alert("Registred Successful");
  } else {
    alert("Registred Unsuccessful");
  }
}
