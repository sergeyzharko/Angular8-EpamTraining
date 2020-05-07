
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {

  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new OrderByPipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform(
      [{name: 'Petr', surname: 'Petrov'}, {name: 'Ivan', surname: 'Ivanov'}, {name: 'Sidor', surname: 'Sidorov'}],
      'surname',
      'true'
    )[0].name).toBe('Ivan');
  });
});
