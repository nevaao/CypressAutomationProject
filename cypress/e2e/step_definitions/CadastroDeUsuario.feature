Feature: Cadastro de usuário
    Sendo um usuário
    Posso acessar o sistema
    Para realizar o cadastro de uma conta
    
Scenario: Validar cadastro de usuário
    Given que o usuário acessa o sistema
    And que o usuário solicita para cadastrar uma nova conta
    When o usuário preenche nos campos da tela de cadastro
        | Campo                  | Valor                         |
        | First Name             | Usuário                       |
        | Last Name              | Cadastro                      |
        | Sign Up for Newsletter | Marcado                       |
        | Email                  | usuario.cadastro@teste.com.br |
        | Password               | 5lm}G(6(}`$CkI5M              |
        | Confirm Password       | 5lm}G(6(}`$CkI5M              |
    And o usuário confirma o cadastro da conta
    Then o usuário visualiza a mensagem de conta cadastrada com sucesso "Thank you for registering with Main Website Store."