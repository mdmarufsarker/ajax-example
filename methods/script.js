document.getElementById("loadData").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xhr.send();
});
