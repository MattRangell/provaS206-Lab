describe('Teste da página inicial', () => {
  it('Acessar a página inicial', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Welcome to the-internet')
  })
})
```

2º caso de teste:
Descrição: Verificar se a página de login é exibida corretamente.
 
```
describe('Teste da página de login', () => {
  it('Acessar a página de login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.contains('Login Page')
  })
})
```

3º caso de teste:
Descrição: Testar o fluxo de login com credenciais válidas.
 
```
describe('Teste de login com credenciais válidas', () => {
  it('Realizar login com credenciais válidas', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('You logged into a secure area!')
  })
})
```
4º caso de teste:
Descrição: Testar o fluxo de login com usuário inválido.
 
```
describe('Teste de login com usuário inválido', () => {
  it('Realizar login com usuário inválido', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('invaliduser')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!')
  })
})
```

5º caso de teste:
Descrição: Testar o fluxo de login com senha inválida.
 
```
describe('Teste de login com senha inválida', () => {
  it('Realizar login com senha inválida', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('InvalidPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('Your password is invalid!')
  })
})
```

6º caso de teste:
Descrição: Testar o fluxo de login deixando o campo de usuário em branco.
 
```
describe('Teste de login com campo de usuário em branco', () => {
  it('Realizar login com campo de usuário em branco', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').clear()
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!')
  })
})
```

7º caso de teste:
Descrição: Testar o fluxo de login deixando o campo de senha em branco.
 
```
describe('Teste de login com campo de senha em branco', () => {
  it('Realizar login com campo de senha em branco', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').clear()
    cy.get('button[type="submit"]').click()
    cy.contains('Your password is invalid!')
  })
})
```

8º caso de teste:
Descrição: Verificar se a mensagem de logout está sendo exibida corretamente.
 
```
describe('Teste da página de logout', () => {
  it('Acessar a página de logout', () => {
    cy.visit('https://the-internet.herokuapp.com/logout')
    cy.contains('You are now logged out.')
  })
})