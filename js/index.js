$(document).ready(function(){
    let x = 1
  $("#mayus").click(function(){
      x++
    $('p').css({'font-size':`${x}rem`});
    $('h1').css({'font-size':`${x}rem`});
    $('h2').css({'font-size':`${x}rem`});
    $('h3').css({'font-size':`${x}rem`});
    $('a').css({'font-size':`${x}rem`});
  });
  $("#minus").click(function(){
      x--
    if(x>0){
        $('p').css({'font-size':`${x}rem`});
    $('h1').css({'font-size':`${x}rem`});
    $('h2').css({'font-size':`${x}rem`});
    $('h3').css({'font-size':`${x}rem`});
    $('a').css({'font-size':`${x}rem`});
    }
  });
  $("#inver").click(function(){
     $('html').css({'filter': 'invert(100%)'})
  });
  $("#bn").click(function(){
     $('html').css({'filter': 'grayscale(100%)'})
  });
  $("#n").click(function(){
     $('html').css({'filter': 'none'})
  });
});