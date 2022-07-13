
function popUp() {
    const show = document.querySelector('.hideShow');
    show.style.display = 'block';
}

const btnClick = document.getElementById("share");
btnClick.addEventListener('click', popUp);


