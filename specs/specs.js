describe('Pizza', function() {
  it('returns cost based on size', function() {
    var p = Pizza();
    expect(p.size('small')).to.eq(5);
    expect(p.size('medium')).to.eq(10);
    expect(p.size('large')).to.eq(15);
  });
});
