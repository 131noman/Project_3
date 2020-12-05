
$('input[type="checkbox"]').click(function () {
  if ($(this).prop("checked") == true) {
    $(".budget_").addClass("current");
    $(".left").addClass("hide-plan");
    $(".right").removeClass("hide-plan");

    $(".premium_").removeClass("current");
  } else if ($(this).prop("checked") == false) {
    $(".budget_").removeClass("current");
    $(".premium_").addClass("current");
    $(".right").addClass("hide-plan");
    $(".left").removeClass("hide-plan");
  }
});

$(function () {
  let scrol = $(document).scrollTop();
  let navHeight = $("header").outerHeight();

  $(window).scroll(function () {
    let scrolled = $(document).scrollTop();

    if (scrolled < navHeight) {
      $("header").addClass("fix-nav");
    } else {
      $("header").removeClass("fix-nav");
    }

    if (scrolled < scroll) {
      $("header").removeClass("fix-nav");
    } else {
      $("header").addClass("fix-nav");
    }
    scroll = $(document).scrollTop();
  });
});

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop("checked") == true) {
      $(".budget_").addClass("current");
      $(".premium_").removeClass("current");
      $(".premium-countries").removeClass("d-none");
      $(".budget-countries").addClass("d-none");
    } else if ($(this).prop("checked") == false) {
      $(".budget_").removeClass("current");
      $(".premium_").addClass("current");
      $(".premium-countries").addClass("d-none");
      $(".budget-countries").removeClass("d-none");
    }
  });
});

$(document).ready(function () {
    
  $(" .budget-countries .btn").click(function () {
    $(".budget-countries .btn").removeClass("act-budget");
    $(this).addClass("act-budget");
    if($(".n-am").hasClass("act-budget")){

      $(".budget-countries .eur").removeClass("act-budget");
      
      $(".price-bud__n-am").removeClass("d-none");
      $(".price-bud-eu").addClass("d-none");
     
      console.log("n-am")
    }
    

  });
       
});


$(document).ready(function () {
    
  $(" .premium-countries .btn").click(function () {
    $(".premium-countries .btn").removeClass("act-budget");
    $(this).addClass("act-budget");
    if($(".n-am").hasClass("act-budget")){

      $(".premium-countries .eur").removeClass("act-budget");
      $(" .premium-countries .asia").removeClass("act-budget");
      $(" .price-pre__n-am").removeClass("d-none");
      $(" .price-pre-eu").addClass("d-none");
      $(" .price-pre-asia").addClass("d-none");
      console.log("n-am")
      
    }
    

  });
       
});

$(document).ready(function () {
    
  $(" .premium-countries .btn").click(function () {
    $(".premium-countries .btn").removeClass("act-budget");
    $(this).addClass("act-budget");
    if($(".premium-countries .eur").hasClass("act-budget")){

      $(".premium-countries .n-am").removeClass("act-budget");
      $(".premium-countries .asia").removeClass("act-budget");
      $(" .price-pre-eu").removeClass("d-none");
      $(" .price-pre__n-am").addClass("d-none");
      $(".price-pre-asia").addClass("d-none");
      console.log("eu")
      
    }
    

  });
       
});
$(document).ready(function () {
    
  $(" .premium-countries .btn").click(function () {
    $(".premium-countries .btn").removeClass("act-budget");
    $(this).addClass("act-budget");
    if($(".premium-countries .asia").hasClass("act-budget")){

      $(".premium-countries .eur").removeClass("act-budget");
      $(".premium-countries .n-am").removeClass("act-budget");
      $(" .price-pre-asia").removeClass("d-none");
      $(" .price-pre__n-am").addClass("d-none");
      $(" .price-pre-eu").addClass("d-none");
      console.log("asia")
      
    }
    

  });
       
});





$(document).ready(function () {
    
  $(" .budget-countries .btn").click(function () {
    $(".budget-countries .btn").removeClass("act-budget");
    $(this).addClass("act-budget");
    
    if($(".budget-countries .eur").hasClass("act-budget")){
      $(".budget-countries .n-am").removeClass("act-budget");
      $(" .price-bud-eu").removeClass("d-none");
      $(" .price-bud__n-am").addClass("d-none");
      console.log("loged")
    }

  });
       
});



$(document).ready(function () {

$(" .budget-countries .btn").click(function () {
    
    if($(".budget-countries .n-am").hasClass("act-budget")){
      $(".bud-ob-eu").addClass("d-none");
      $(".bud-ob-na").removeClass("d-none");
      console.log("loged")
    }
    else{
      $(".bud-ob-eu").removeClass("d-none");
      $(".bud-ob-na").addClass("d-none");
    }
    


       
});
});





$(document).ready(function () {

$(" .premium-countries .btn").click(function () {
    
    if($(".premium-countries .eur").hasClass("act-budget")){
      $(".pre-ob-eu").removeClass("d-none");
      $(".pre-ob-na").addClass("d-none");
      $(".pre-ob-asia").addClass("d-none");
      console.log("log eu")
    }
    else if($(".premium-countries .n-am").hasClass("act-budget")){
      $(".pre-ob-na").removeClass("d-none");
      $(".pre-ob-eu").addClass("d-none");
      $(".pre-ob-asia").addClass("d-none");
      console.log("log na")    
    }
    else{
      $(".pre-ob-na").addClass("d-none");
      $(".pre-ob-eu").addClass("d-none");
      $(".pre-ob-asia").removeClass("d-none");

}
       
});
});

  

