/*
Name: Sher Grünenberg
Assignment: Project - Midterm Draft
Date: 2023
CSCI 294, Spring 2023
*/
'use strict'

function toggle(evt) {
    const h3Elements = document.querySelectorAll('#descriptions h3');
    const h3Clicked = evt.currentTarget; // get the h3 that was clicked
    const divClicked = h3Clicked.nextElementSibling; // get the h3's sibling div

    for (let h3Element of h3Elements){
        if (h3Element == h3Clicked){
            h3Clicked.classList.toggle('minus');
            divClicked.classList.toggle('open');
        }
        else if (h3Element.classList.contains('minus')){
            h3Element.classList.remove('minus');
            let divElement = h3Element.nextElementSibling;
            divElement.classList.remove('open');
        }
    }

    evt.preventDefault(); // cancel default action of h2's child <a>
}

function init() {
    // get the h3 tags
    const h3Elements = document.querySelectorAll('#descriptions h3');

    // attach event handler for each h2 tag
    for (let h3Element of h3Elements) {
        h3Element.addEventListener('click', toggle);
    }

    // set focus on first h2 tag's <a> tag
    h3Elements[0].firstChild.focus();
}

document.addEventListener('DOMContentLoaded', init);