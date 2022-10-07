async function createAirline() {
  let airInfo = {
    id: document.getElementById("id").value,
    name: document.getElementById("name").value,
    country: document.getElementById("country").value,
    logo: document.getElementById("logo").value,
    slogan: document.getElementById("slogan").value,
    head_quaters: document.getElementById("head_quaters").value,
    website: document.getElementById("website").value,
    established: document.getElementById("established").value,
  };

  let url = "https://api.instantwebtools.net/v1/airlines";
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(airInfo),
  });
  let result = await response.json();
  console.log(result);
  if (response.ok) {
    alert("Registred Successful");
  } else {
    alert("Registred Unsuccessful");
  }
}
