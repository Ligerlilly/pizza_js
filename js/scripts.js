function Pizza() {
  var cost, pieSize, addTopping, pieCost;
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

  pieCost = function() {
    return cost;
  };

  addTopping = function(topping) {
    cost += topping.cost;
  };

  return { size       : pieSize,
           addTopping : addTopping,
           pieCost    : pieCost };
}

function Topping(name, cost) {
  this.name = name;
  this.cost = cost;
}
