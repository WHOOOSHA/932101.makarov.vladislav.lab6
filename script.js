function showContent(x){
    let c = document.getElementsByClassName("cat");
    c[0].style.flex = "0 1 " + x + "%";

    let d = document.getElementsByClassName("dog");
    d[0].style.flex = "0 1 " + (100 - x) + "%";
}