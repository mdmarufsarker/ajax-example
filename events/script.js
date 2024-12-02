document.getElementById("triggerEvent").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadstart", () => {
    document.getElementById("output").innerHTML = "Loading started...";
  });

  xhr.addEventListener("progress", () => {
    document.getElementById("output").innerHTML = "Loading in progress...";
  });

  xhr.addEventListener("load", () => {
    document.getElementById("output").innerHTML = "Data loaded successfully!";
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.send();
});
