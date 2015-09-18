function Pizza() {
  var cost = 0;
  var pieSize = function(size) {
    if (size === 'small') {
      return cost = 5;
    }
    else if (size === 'medium'){
      return cost = 10;
    }
    else if (size === 'large') {
      return cost = 15;
    }
  };
  return { size : pieSize };
}
