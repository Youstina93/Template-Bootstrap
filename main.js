// إظهار الزر عند التمرير للأسفل
window.onscroll = function() {
    let scrollBtn = document.querySelector(".backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

//------------تفعيل الزر------------------
function scrollToTop() {
    window.scrollTo ({
        top:0,
        behavior:"smooth"
    })
};
