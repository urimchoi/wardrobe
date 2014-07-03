App.Item = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('double')
});

App.Item.FIXTURES = [
  {
    id: 1,
    title: 'Dress Shirt',
    price: 20.00
  },
  {
    id: 2,
    title: 'Slacks',
    price: 10.00
  },
  {
    id: 3,
    title: 'T-shirt',
    price: 12.00
  }
];