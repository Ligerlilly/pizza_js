describe('Pizza', function() {
  it('returns cost based on size', function() {
    expect(Pizza('small')).to.eq(5);
    expect(Pizza('medium')).to.eq(10);
    expect(Pizza('large')).to.eq(15);
  });
});
