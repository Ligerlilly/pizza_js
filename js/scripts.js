function Pizza() {
  var cost, pieSize, addTopping, pieCost, pieQuantity;
  cost = 0;
  pieSize = function(size) {
    if (size === 'small') {
      cost = 5;
      //return cost;
    }
    else if (size === 'medium'){
      cost = 10;
      //return cost;
    }
    else if (size === 'large') {
      cost = 15;
      //return cost;
    }
  };

  pieQuantity = function(num) {
    cost *= num;
  };

  pieCost = function() {
    return cost;
  };

  addTopping = function(topping) {
    cost = cost + topping.cost;
  };

  return { size       : pieSize,
           addTopping : addTopping,
           pieCost    : pieCost,
           quantity   : pieQuantity };
}

function Topping(name, cost) {
  this.name = name;
  this.cost = cost;
}

$(document).ready(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();
    p = new Pizza();
    var toppingNames = [];
    var toppingCosts = [];
    var pieSize = $('select#pieSize').val();
    var numPizzas = parseInt($('input#numPizzas').val());
    p.size(pieSize);
    p.quantity(numPizzas);
    $('.toppingName').each(function() {
      toppingNames.push($(this).text());
    });

    $('.toppingCost').each(function() {
      toppingCosts.push($(this));
    });

    for (var i = 0; i < toppingCosts.length; i++) {
      if (toppingCosts[i][0].checked) {
        p.addTopping(new Topping(toppingNames[i], parseInt(toppingCosts[i].val())));
      }

    }
    $('.results').show();
    $('.total').text(p.pieCost());


    // if (toppingCostMushrooms[0].checked) {
    //   var toppingNameMushrooms = $('label#toppingNameMushrooms').text();
    //   p.addTopping(new Topping(toppingNameMushrooms, parseInt(toppingCostMushrooms.val())));
    // }
    // alert(p.pieCost());





  });
});
