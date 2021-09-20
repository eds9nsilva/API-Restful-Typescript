import { Request, Response } from 'express';
import CreateCustomerServices from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

export default class CustomerController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomer = new ListCustomerService();
    const customer = await listCustomer.execute();
    return response.json(customer);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomer = new ShowCustomerService();
    const customer = await showCustomer.execute({ id });
    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomer = new CreateCustomerServices();
    const costumer = await createCustomer.execute({
      name,
      email,
    });
    return response.json(costumer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;
    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });
    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCustomers = new DeleteCustomerService();
    await deleteCustomers.execute({ id });
    return response.json([]);
  }
}