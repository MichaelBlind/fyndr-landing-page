/**
 * Created by Michael on 11/6/2016.
 */
function hover(elem) {
    switch (elem.id){
        case 'blog':      elem.setAttribute('src', 'img/blog_hover.png'); return;
        case 'facebook':  elem.setAttribute('src', 'img/facebook_hover.png'); return;
        case 'instagram': elem.setAttribute('src', 'img/instagram_hover.png'); return;
    }
}
function unhover(elem) {
    switch (elem.id){
        case 'blog':      elem.setAttribute('src', 'img/blog.png'); return;
        case 'facebook':  elem.setAttribute('src', 'img/facebook.png'); return;
        case 'instagram': elem.setAttribute('src', 'img/instagram.png'); return;
    }
}