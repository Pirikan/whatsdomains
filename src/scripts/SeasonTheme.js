window.onload = () => {
    let Month = now.getMonth();
    let CSS = document.head.querySelectorAll('link[rel="stylesheet" type="text/css"]');

    if (1 <= Month && Month <= 3) {
        CSS.href = "/styles/Q4.css";
    } else if (4 <= Month && Month <= 6) {
        CSS.href = "/styles/Q1.css";
    } else if (7 <= Month && Month <= 9) {
        CSS.href = "/styles/Q2.css";
    } else {
        CSS.href = "/styles/Q3.css";
    }
}