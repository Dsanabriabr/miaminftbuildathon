var sliderDom = {};
var sliderProperties = {};
var slideToPosition = 0;
var loopSlider = true; // Set to true to meke th slider loop around when reaching ends

var svgs = {};
svgs.leftchevron = `<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 404.258 404.258" version="1.1" viewBox="0 0 404.258 404.258" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><polygon points="289.93 18 265.93 0 114.33 202.13 265.93 404.26 289.93 386.26 151.83 202.13"/></svg>`;

svgs.rightchevron = `<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 404.258 404.258" version="1.1" viewBox="0 0 404.258 404.258" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><polygon points="138.33 0 114.33 18 252.43 202.13 114.33 386.26 138.33 404.26 289.93 202.13"/></svg>`;

// Initialize slider
function initSlider() {
    
    // Setup slider DOM elements
    sliderDom.sliderWrapper = document.getElementById("slider-wrapper");
    sliderDom.slider = document.getElementById("slider");
    sliderDom.sliderItems = document.getElementsByClassName("slider__item");
    sliderDom.sliderPrevious = document.getElementById("slider-previous");
    sliderDom.sliderNext = document.getElementById("slider-next"); 
    sliderDom.sliderPaginationWrapper = document.getElementById("slider-pagination");
    
    sliderDom.sliderPrevious.innerHTML = svgs.leftchevron;
    sliderDom.sliderNext.innerHTML = svgs.rightchevron;
    
    // Update properties that only needs intial update
    sliderProperties.isAnimating = false;
    sliderProperties.isAtBeginning = true;
    sliderProperties.isAtEnd = false;
    sliderProperties.currentPosition = 0;
    sliderProperties.oneSlideWidth = 0;
    sliderProperties.sliderItemSpacing = parseInt(getComputedStyle(sliderDom.sliderItems[1]).marginRight, 10) * 2;
    
    // Update rest of properties
    updateSliderProperties();
    
    // Add event listeners
    sliderDom.sliderPrevious.addEventListener("click", slidePrevious);
    sliderDom.sliderNext.addEventListener("click", slideNext);
    
    // Add animaiton event lsiteners
    sliderDom.slider.addEventListener('transitionend', () => {
        sliderProperties.isAnimating = false;
    });
    
    // addSliderPagination();
    
    // Listen for reasize
    window.addEventListener('resize', resetSlider);
    
    // Add animation event listeners
    sliderDom.slider.addEventListener('transitionend', () => {
        sliderProperties.isAnimating = false;
    });
}

function slidePrevious() {
    
    if (sliderProperties.isAnimating || sliderProperties.isAtBeginning) {
        if (!loopSlider) {
            return;   
        }
    }
    
    if (loopSlider && sliderProperties.isAtBeginning) {
        slideToPosition = -(sliderProperties.sliderTotalWidth - (sliderProperties.oneSlideWidth - sliderProperties.sliderItemSpacing));
        sliderProperties.isAtBeginning = false;
        sliderProperties.isAtEnd = true;
    } else {
        sliderProperties.isAnimating = true;
        sliderProperties.isAtEnd = false;

        slideToPosition = sliderProperties.currentPosition + sliderProperties.oneSlideWidth + sliderProperties.sliderItemSpacing;

        if (slideToPosition >= 0) {
            slideToPosition = 0;
            sliderProperties.isAtBeginning = true;
        } else {
            sliderProperties.isAtBeginning = false;
        }
    }
    
    sliderDom.slider.style.webkitTransform = `translateX(${slideToPosition}px)`;
    sliderProperties.currentPosition = slideToPosition;
}

function slideNext() {
    
    if (sliderProperties.isAnimating || sliderProperties.isAtEnd) {
        if (!loopSlider) {
            return;   
        }
    }
    
    if (loopSlider && sliderProperties.isAtEnd) {
        slideToPosition = 0;
        sliderProperties.isAtBeginning = true;
        sliderProperties.isAtEnd = false;
    } else {
        sliderProperties.isAtBeginning = false;
        sliderProperties.isAnimating = true;

        slideToPosition = sliderProperties.currentPosition - (sliderProperties.oneSlideWidth + sliderProperties.sliderItemSpacing);

        // If slide to end
        if (slideToPosition <= -(sliderProperties.sliderTotalWidth - sliderProperties.oneSlideWidth)) {
            slideToPosition = -(sliderProperties.sliderTotalWidth - (sliderProperties.oneSlideWidth - sliderProperties.sliderItemSpacing));
            sliderProperties.isAtEnd = true;   
        } else {
            sliderProperties.isAtEnd = false;
        }   
    }

    sliderDom.slider.style.webkitTransform = `translateX(${slideToPosition}px)`;
    sliderProperties.currentPosition = slideToPosition;
}

function resetSlider() {
    sliderDom.slider.style.webkitTransform = "translateX(0)";
    sliderProperties.isAtBeginning = true;
    sliderProperties.isAtEnd = false;
    sliderProperties.currentPosition = 0;
    updateSliderProperties();
    // addSliderPagination();
}

// Update slider properties
function updateSliderProperties() {
    sliderProperties.sliderWrapperWidth = sliderDom.sliderWrapper.offsetWidth;
    sliderProperties.oneSlideWidth = sliderDom.slider.offsetWidth;
    sliderProperties.sliderItemWidth = sliderDom.sliderItems[0].offsetWidth;
    sliderProperties.sliderTotalWidth = calculateSliderTotalWidth(sliderDom.sliderItems);
}

// Calculate slider total width when counting all slider items
function calculateSliderTotalWidth(sliderItems) {
    var width = 0;
    var itemSpacingNumber = sliderItems.length - 2;
    
    for(var i = 0; i < sliderItems.length; i++) {
        width += sliderItems[i].offsetWidth;
    }
    
    // Add spacing
    if (sliderProperties.sliderItemSpacing > 0) {
        width += sliderProperties.sliderItemSpacing * itemSpacingNumber;   
    }
    
    return width;
}

// function addSliderPagination() {
//     var paginationHtml;
//     var paginationAmount = Math.round(sliderProperties.sliderTotalWidth / sliderProperties.oneSlideWidth);
//     var paginationArray = new Array(paginationAmount);
    
//     console.log(sliderProperties.sliderTotalWidth / sliderProperties.oneSlideWidth);
    
//     paginationHtml = '<ul class="slider__pagination">';
//     for(var i = 0; i < paginationArray.length; i++) {
//         paginationHtml += '<li class="slider__pagination-item"></li>';
//     }
//     paginationHtml += '</ul>';
    
//     console.log(paginationArray);
    
//     sliderDom.sliderPaginationWrapper.innerHTML = paginationHtml;
// }

// Init slider
document.addEventListener("DOMContentLoaded", initSlider);