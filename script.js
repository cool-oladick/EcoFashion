function changeCSS() {
    let linkElement = document.getElementById("path");
    let path = linkElement.getAttribute("href");
    console.log(path);
    if (path == "style-dark.css") {
        linkElement.setAttribute("href", "style-light.css");
    }
    else {
        linkElement.setAttribute("href", "style-dark.css");
    }

    var img1 = document.getElementById('img1');
    var isrc = img1.getAttribute('src');
    if (/fl2\.jpg$/.test(isrc)) img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=JARydttrNTU2&format=png&color=000000');
    else img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=60002&format=png&color=000000'); 
  }
  