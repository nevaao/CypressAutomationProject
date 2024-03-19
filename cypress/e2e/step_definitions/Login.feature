Feature: Login
    Sendo um usuário
    Posso acessar o sistema e informar as credenciais
    Para realizar o login na conta cadastrada

Scenario: Validar login
    Given que o usuário acessa o sistema
    And que o usuário solicita para fazer o login
    When o usuário preenche nos campos da tela de login
        | Campo    | Valor                  |
        | Email    | roni_cost@example.com  |
        | Password | roni_cost3@example.com |
    And o usuário confirma o login
    Then o usuário é redirecionado para a tela inicial
    And o usuário visualiza no cabeçalho da página "Welcome, Veronica Costello!"