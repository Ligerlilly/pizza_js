describe('Pizza', function() {
  it('returns cost based on size', function() {
    var p = new Pizza();
    p.size('small');
    expect(p.pieCost()).to.eq(5);
    p.size('medium');
    expect(p.pieCost()).to.eq(10);
    p.size('large');
    expect(p.pieCost()).to.eq(15);
  });

  it('adds cost of topping to overall cost of pizza', function() {
    var p = new Pizza();
    p.size('small');
    var m = new Topping('mushroom', 2);
    p.addTopping(m);
    expect(p.pieCost()).to.eq(7);
  });
});
