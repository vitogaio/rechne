$(document).ready(function () {

   // ich hole mir die Elemente
   var $input1 = $('#wert1');
   var $input2 = $('#wert2');


   $('.plusButton').on('click', function(){

       var wertA = parseFloat($input1.val());
       var wertB = parseFloat($input2.val());

       calculateAndAddToDom(wertA, wertB, "addieren");


   });

    $('.minusButton').on('click', function(){

        var wertA = parseFloat($input1.val());
        var wertB = parseFloat($input2.val());

        calculateAndAddToDom(wertA, wertB, "subtrahieren");

    });


    $('.multiplikationButton').on('click', function(){

        var wertA = parseFloat($input1.val());
        var wertB = parseFloat($input2.val());

        calculateAndAddToDom(wertA, wertB, "multiplizieren");

    });


    $('.divisionButton').on('click', function(){

        var wertA = parseFloat($input1.val());
        var wertB = parseFloat($input2.val());

        calculateAndAddToDom(wertA, wertB, "dividieren");

    });
});



