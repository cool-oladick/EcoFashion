// function changeCSS() {
//     let linkElement = document.getElementById("path");
//     let path = linkElement.getAttribute("href");
//     console.log(path);
//     if (path == "style-dark.css") {
//         linkElement.setAttribute("href", "style-light.css");
//     }
//     else {
//         linkElement.setAttribute("href", "style-dark.css");
//     }

    // var img1 = document.getElementById('img1');
    // var isrc = img1.getAttribute('src');
    // if ("style-light.css"  == path) {
    //     img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=JARydttrNTU2&format=png&color=000000');
    // }
    // else {
    //     img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=60002&format=png&color=000000');

    // }
// }
// function changeCSS() {
//     document.body.classList.toggle("dark-theme");
// }

function changeCSS() {
    let linkElement = document.getElementById("path");
    let path = linkElement.getAttribute("href");

    if (path == "style-dark.css") {
        linkElement.setAttribute("href", "style-light.css");
    } else {
        linkElement.setAttribute("href", "style-dark.css");
    }

    let img1 = document.getElementById('img1');
    if (path == "style-dark.css") {
        img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=CYWbKSvhMDAc&format=png&color=000000'); // біла іконка
    } else {
        img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=Wdnu-edbShJS&format=png&color=000000'); // чорна іконка
    }
}

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');
    if (window.scrollY > 150) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});