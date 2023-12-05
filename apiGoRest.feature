Feature: Teste API Gorest

Background: Executa toda vez antes do teste
    *def url_base="https://gorest.co.in/public/v2"


Scenario: Listar todos usuários
    Given url url_base
    And path '/users'
    When method GET
    Then status 200
    And match response.status == 200


Scenario: Criar novo usuário
    Given url url_base
    And path '/users'
    Given request { "name": "Malek modldrova", "gender": "Male", "email": "modldrova@example.com", "status": "Active" }
    When method POST
    Then status 201
    And match response.status == 201

Scenario: Atualizar dados do usuário
    Given url url_base
    And path '/users'
    And request { "name": "Malek modldronova", "gender": "Male", "email": "modldronova@example.com", "status": "Inactive" }
    When method PUT
    Then status 200
    And match response.status == 200

Scenario: Deletar usuário
    Given url url_base
    And path '/users'
    When method DELETE
    Then status 204
    And match response.status == 204

Scenario: Listar todos usuários com token inválido
    Given url url_base
    And path '/users'
    When method GET
    Then status 401
    And match response.status == 401

Scenario: Atualizar dados de usuário inexistente
    Given url url_base
    And path '/users'
    And request { "name": "Malek modldrova", "gender": "Male", "email": "modldrova@example.com", "status": "Active" }
    When method PUT
    Then status 404
    And match response.status == 404
