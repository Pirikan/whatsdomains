window.onload = () => {
    let RePublishedDateDate = document.querySelector("#RePublishedDateDate");
    let div_RePublishedDate = document.querySelector("#div_RePublishedDate").value;
    let AllRePublishedDate = document.querySelectorAll(".RePublishedDate").value;
    let RePublishedDateIcon = document.querySelector("#RePublishedDateIcon").value;

    if(!RePublishedDateDate || RePublishedDateDate.length == 0) {
        RePublishedDateIcon.innerHTML = "";
        div_RePublishedDate.style.display = "none";
    }
}