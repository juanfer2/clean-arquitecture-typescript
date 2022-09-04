import request from 'supertest';
import {Express} from 'express-serve-static-core';
import app from '../../server'
import { MockContext, Context, createMockContext } from '../../context'
import { faker } from '@faker-js/faker';

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

afterEach(()=>{
  jest.clearAllMocks;
})

describe('users', () => {
  it('index', async () => {
    const res = await request(app)
      .get('/users')

    expect(res.statusCode).toBe(200);
  });

  describe('create', () => {
    it('validates name user', async()=>{
      const userParams = {
        name: '',
        email: '',
        username: ''
      }
  
      const res = await request(app)
        .post('/users')
        .send(userParams)
    
      expect(res.statusCode).toBe(402);
    });

    it('validates email user is empty', async()=>{
      const userParams = {
        name: faker.name.fullName(),
        email: '',
        username: ''
      }
  
      const res = await request(app)
        .post('/users')
        .send(userParams)
    
      expect(res.statusCode).toBe(402);
    });

    it('validates email user is invalid', async()=>{
      const userParams = {
        name: faker.name.fullName(),
        email: 'invalid_email',
        username: ''
      }
  
      const res = await request(app)
        .post('/users')
        .send(userParams)
    
      expect(res.statusCode).toBe(402);
    });

    it('validates username user is empty', async()=>{
      const userParams = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        username: ''
      }
  
      const res = await request(app)
        .post('/users')
        .send(userParams)
    
      expect(res.statusCode).toBe(402);
    });

    it('creates user sucessfully', async()=>{
      const userParams = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        username: faker.internet.userName()
      }
  
      const res = await request(app)
        .post('/users')
        .send(userParams)
  
      const user = res.body.user;
  
      expect(res.statusCode).toBe(200);
      expect(user.name).toBe(userParams.name)
      expect(user.email).toBe(userParams.email)
      expect(user.username).toBe(userParams.username)
    });
  });
})
