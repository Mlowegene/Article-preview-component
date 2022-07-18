
let isShowPopup = false;
function popUp() {
    const show = document.querySelector('.hideShow');
    isShowPopup = !isShowPopup;
    if(isShowPopup) {
        show.style.display = 'block';
        
    }
    else {
        show.style.display = 'none';
    }
}

const btnClick = document.getElementById("share");
btnClick.addEventListener('click', popUp);


