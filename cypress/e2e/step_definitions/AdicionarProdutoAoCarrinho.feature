Feature: Adicionar produto ao carrinho
    Sendo um usuário
    Posso acessar o sistema
    Para adicionar produtos ao carrinho

Scenario: Validar adição de produtos ao carrinho
    Given que o usuário acessa o sistema       
    And que o usuário acessa a menu "Men"
    And que o usuário acessa a categoria "Jackets"
    When o usuário seleciona o produto "Beaumont Summit Kit"
    And o usuário seleciona as opções do produto
        | Tamanho | Cor |
        | M       | Red |
    And o usuário adiciona o produto ao carrinho
    Then o usuário visualiza a mensagem de produto adicionado com sucesso "You added Beaumont Summit Kit to your shopping cart."
    And o usuário visualiza o carrinho com "1" produto