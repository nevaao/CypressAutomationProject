Feature: Finalização de compra
    Sendo um usuário
    Posso acessar o sistema e incluir produtos no carrinho
    Para fechar o peddo e finalizar a compra

Scenario: Validar finalização da compra
    Given que o usuário acessa o sistema       
    And que o usuário acessa a menu "Men"
    And que o usuário acessa a categoria "Jackets"
    When o usuário seleciona o produto "Beaumont Summit Kit"
    And o usuário seleciona as opções do produto
        | Tamanho | Cor |
        | M       | Red |
    And o usuário adiciona o produto ao carrinho
    And o usuário visualiza a mensagem de produto adicionado com sucesso "You added Beaumont Summit Kit to your shopping cart."
    And o usuário solicita para fazer o checkout do pedido
    And o usuário preenche nos campos do endereço de entrega
        | Campo            | Valor                                |
        | Email Address    | usuario.finalizarcompra@teste.com.br |
        | First Name       | Usuário                              |
        | Last Name        | Finalizar Compra                     |
        | Street Address 1 | 1391 Mudlick Road                    |
        | Country          | United States                        |
        | State/Province   | Washington                           |
        | City             | Spokane                              |
        | Zip/Postal Code  | 99202                                |
        | Phone Number     | (917)852-8767                        |
        | Shipping Method  | £5.00 - Fixed - Flat Rate            |
    And o usuário solicita para avançar para a próxima etapa
    And o usuário solicita para finalizar a compra
    Then o usuário visualiza a mensagem de compra com sucesso "Thank you for your purchase!"
    And o usuário visualiza as opções
        | Opcao             |
        | Continue Shopping |
        | Create An Account |