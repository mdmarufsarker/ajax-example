document.getElementById("checkProperties").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const props = `
                Ready State: ${this.readyState}<br>
                Status: ${this.status}<br>
                Status Text: ${this.statusText}<br>
                Response: ${this.responseText}
            `;
            document.getElementById("output").innerHTML = props;
        }
    };

    xhr.send();
});
