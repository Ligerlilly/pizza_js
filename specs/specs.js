describe('Pizza', function() {
  it('returns cost based on size', function() {
    var p = Pizza();
    p.size('small');
    expect(p.pieCost()).to.eq(5);
    p.size('medium');
    expect(p.pieCost()).to.eq(10);
    p.size('large');
    expect(p.pieCost()).to.eq(15);
  });

  //it('adds cost of topping to ')
});
