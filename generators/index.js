module.exports = (plop) => {
  plop.setGenerator('module', {
    description: 'Create a module domain, application, infrastructure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module name?',
      },
    ],
    /*
     * Domain
     */

    actions: [
      {
        type: 'add',
        path: '../src/{{camelCase name}}/domain/{{camelCase name}}.entity.ts',
        templateFile: 'domain/entity.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/domain/{{camelCase name}}.mapper.ts',
        templateFile: 'domain/mapper.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/domain/{{camelCase name}}.repository.ts',
        templateFile: 'domain/repository.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/domain/index.ts',
        templateFile: 'domain/barrel.hbs',
      },
      /*
       * Application
       */
      {
        type: 'add',
        path: '../src/{{camelCase name}}/application/{{camelCase name}}.use_case.ts',
        templateFile: 'application/use_case.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/application/index.ts',
        templateFile: 'application/barrel.hbs',
      },
      /*
       * Infrastructure
       */
      {
        type: 'add',
        path: '../src/{{camelCase name}}/infrastructure/controllers/{{camelCase name}}.controller.ts',
        templateFile: 'infrastructure/controllers/controller.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/infrastructure/repositories/{{camelCase name}}.repository.ts',
        templateFile: 'infrastructure/repositories/repository.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/infrastructure/models/{{camelCase name}}.ts',
        templateFile: 'infrastructure/models/model.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/infrastructure/routes/index.ts',
        templateFile: 'infrastructure/routes/route.hbs',
      },
      /*
       * Common
       */
      {
        type: 'add',
        path: '../src/{{camelCase name}}/types.ts',
        templateFile: 'common/types.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/container.ts',
        templateFile: 'common/container.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/index.ts',
        templateFile: 'common/barrel.hbs',
      },
    ],
  });

  plop.setGenerator('controller', {
    description: 'Create a controller',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your controller name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{camelCase name}}/infrastructure/controllers/{{camelCase name}}.controller.ts',
        templateFile: 'infrastructure/controllers/controller.hbs',
      },
    ],
  });

  plop.setGenerator('route', {
    description: 'Create a route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your route name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{camelCase name}}/infrastructure/routes/index.ts',
        templateFile: 'infrastructure/routes/route.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/index.ts',
        templateFile: 'common/barrel.hbs',
      },
    ],
  });

  plop.setGenerator('use-case', {
    description: 'Create a use case',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your use case name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{camelCase name}}/application/{{camelCase name}}.use_case.ts',
        templateFile: 'application/use_case.hbs',
      },
    ],
  });

  plop.setGenerator('container', {
    description: 'Create a container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your container name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{camelCase name}}/types.ts',
        templateFile: 'common/types.hbs',
      },
      {
        type: 'add',
        path: '../src/{{camelCase name}}/container.ts',
        templateFile: 'common/container.hbs',
      },
    ],
  });
};
