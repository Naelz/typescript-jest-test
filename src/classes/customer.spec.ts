import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string, ): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and Cpf', () => {
    const sut = createIndividualCustomer('Nathannael', 'Valadares', '029.000.000-00');
    expect(sut).toHaveProperty('firstName', 'Nathannael');
    expect(sut).toHaveProperty('lastName', 'Valadares');
    expect(sut).toHaveProperty('cpf', '029.000.000-00');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Nathannael', 'Valadares', '029.000.000-00');
    expect(sut.getName()).toBe('Nathannael Valadares');
    expect(sut.getIDN()).toBe('029.000.000-00');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy Course', '111');
    expect(sut).toHaveProperty('name', 'Udemy Course');
    expect(sut).toHaveProperty('cnpj', '111');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy Course', '111');
    expect(sut.getName()).toBe('Udemy Course');
    expect(sut.getIDN()).toBe('111');
  });
});
