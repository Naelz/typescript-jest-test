import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and Cpf', () => {
    const sut = createIndividualCustomer('Nathannael', 'Valadares', '029.000.000-00');
    expect(sut).toHaveProperty('firstName', 'Nathannael');
    expect(sut).toHaveProperty('lastName', 'Valadares');
    expect(sut).toHaveProperty('cpf', '029.000.000-00');
  });
});
