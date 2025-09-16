

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


const portfolio = document.querySelector('.portfolio-gallery'),
      portfolioItems = portfolio.querySelectorAll('.portfolio-item'),
      portfolioCats = document.querySelectorAll('.portfolio-cats > li');
let parentWidth = portfolio.offsetWidth,
    windowWidth = window.innerWidth;

portfolioCats.forEach(cat => {
    cat.addEventListener('pointerdown', function() {
        const dataFilter = this.dataset.filter;
        const el = [];

        if (dataFilter === '*') {
            positionItems(portfolioItems);
        } else {
            portfolioItems.forEach(item => {
                if (item.dataset.filter == dataFilter) {
                    el.push(item);
                } else {
                    item.style.cssText = 'transform: scale(0.1); opacity: 0;';
                }
            });
            positionItems(el);
        }
    });
});
// Count Number of Items Per Row
function countRowsItems() {
    let rowItems = 0;
    if (windowWidth <= 768) {
        rowItems = 1;
    } else if (windowWidth <= 992) {
        rowItems = 2;
    } else {
        rowItems = 3;
    }
    return rowItems;
}
// Position each item in its place
function positionItems(items) {
    let rowItems = countRowsItems();
    let y = 0;
    let x = 0;
    let itemCount = 0;
    items.forEach((item, i) => {
        item.style.cssText = `transform: translate3d(${x*(parentWidth/rowItems)}px, ${y*220}px, 0); opacity: 1;`;
        x++;
        if (x%rowItems == 0) {
            y++;
            x = 0;
        }
        itemCount = i;
    });
    portfolio.style.height = `${Math.ceil(itemCount/rowItems)*220}px`;
}

positionItems(portfolioItems);

window.addEventListener('resize', () => {
    parentWidth = portfolio.offsetWidth;
    windowWidth = window.innerWidth;
    positionItems(portfolioItems);
});



function welcome(){
    window.open("./html/index.html");
}


function web1(){
    window.open("#owl")
}

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

 $(function() {
  
  var link = $('#navbar a.dot');
  
//   upper label id
  var id =  $(this).attr('id');

  // Move to specific section when click on menu link
  link.on('click', function(e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    
//     upper label remove class
    $('.comman').removeClass('active');
    
    $(this).addClass('active');
//    label add
  $('.'+id).addClass('active');
   
 
    e.preventDefault();
  });
  
  // Run the scrNav when scroll
  $(window).on('scroll', function(){
    scrNav();
  });
  
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function() {
      var id = $(this).attr('id'),
          offset = $(this).offset().top-1,
          height = $(this).height();
      if(sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});

jQuery(document).ready(function($) {
  var $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function() {
      if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function() {
      $timeline_block.each(function() {
          if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
              $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
          }
      });
  });
});



$("button").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

var stopCircle = document.getElementsByClassName('anima');
for (var i = 0; i < stopCircle.length; i++) {
    if (stopCircle[i].matches(':hover')) {}
    stopCircle[i].addEventListener("mouseover", function(event) {
        document.getElementsByClassName('circle-arround-two-1')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-2')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-3')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-4')[0].classList.add("stopanima");
    });
    stopCircle[i].addEventListener("mouseout", function(event) {
        document.getElementsByClassName('circle-arround-two-1')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-2')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-3')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-4')[0].classList.remove("stopanima");
    });
}

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

function makesvg(percentage, inner_text=""){

  var abs_percentage = Math.abs(percentage).toString();
  var percentage_str = percentage.toString();
  var classes = ""

  if(percentage < 0){
    classes = "danger-stroke circle-chart__circle--negative";
  } else if(percentage > 0 && percentage <= 30){
    classes = "warning-stroke";
  } else{
    classes = "success-stroke";
  }

 var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
     + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
     + '<circle class="circle-chart__circle '+classes+'"'
     + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
     + '<g class="circle-chart__info">'
     + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';

  if(inner_text){
    svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
  }
  
  svg += ' </g></svg>';
  
  return svg
}

(function( $ ) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            var inner_text = $(this).text();
            $(this).html(makesvg(percentage, inner_text));
        });
        return this;
    };

}( jQuery ));

$(function () {
     $('.circlechart').circlechart();
});
