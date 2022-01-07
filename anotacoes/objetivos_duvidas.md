https://www.figma.com/file/U8ojEXx2vxSK2KOvoBvHVH8y/Frontend-test?node-id=13%3A42

1. Criar uma SPA (Single Page Application) seguindo o layout proposto.

2. Alterar o link “Resumo” para “Cadastro de transações”, Alterar o link “Dashboard” para “Limpar dados”, Excluir o link “Configurações”.

3. O que sua aplicação deverá fazer:
( ) Incluir transações de compra ou venda de mercadoria.
( ) Criar um extrato das transações incluídas. As transações deverão ser mostradas na ordem em que foram incluídas.
( ) Mostrar o saldo final e destacar se houve lucro ou prejuízo.
( ) A aplicação deverá ser responsiva e estar de acordo com o layout fornecido.
( ) Persistir as transações no Local Storage.

4. Outros requisitos
( ) HTML: 
As opções do campo “Tipo de transação” são: Compra e Venda.
Caso não exista nenhuma transação cadastrada, adicione a mensagem “Nenhuma transação cadastrada.” na lista do Extrato.

( ) CSS:
Testar em smartphones, tablets (modos portrait e landscape) e monitores a partir de 1024px até 1900px. (Através do inspecionar elemento no navegador)
A fonte utilizada é a Lato.
A largura máxima do conteúdo é 1100px.

5. Divisão de atividades
( ) HTML e CSS:

( ) ATIVIDADE 1 – HTML/CSS:
Desenvolvimento completo do HTML
Início do desenvolvimento do CSS (versão mobile)

( ) ATIVIDADE 2 – HTML/CSS:
Desenvolvimento completo do CSS (versão responsiva)

-------

Dúvidas: 
1. Como colocar "placeholder" para a caixa "select"?
2. É necessário colocar "position" em tudo que é classe?
3. Não consegui colocar R$ 0,00 no "placeholder valor" da classe input-valor, em "main (acima)". Como editar esses "placeholder"?
4. O sinal do "bluetooth" ficou ruim de TODO JEITO. Tentei usar "fontawesome" etc e nada.

-------

Aprendizados:  
1. Position
    From W3C -> "In the absolute positioning model, a box is explicitly offset with respect to (concerning) its containing block."
    Ou melhor -> "No modelo de posicionamento absoluto, uma caixa é explicitamente deslocada em relação ao bloco que a contém."

    "If the element has 'position: absolute', the containing block is established by the nearest ancestor with a position OTHER THAN STATIC."
    
    ---> so your absolute element will always be relative to the ancestor's position unless it is a static positioned element.

2. Header (tag)  
    From W3C -> The <header> element represents a container for introductory content or a set of navigational links.
    A <header> element typically contains:  
        ---> one or more heading elements (<h1> - <h6>);
        ---> logo or icon;
        ---> authorship information.
    Note: You can have several <header> elements in one HTML document. However, <header> cannot be placed within a <footer>, <address> or another <header> element.

--------

Consertar:
1. HTML -> organizar as 5 div´s principais dentro da div mobile. Consertá-las também. (FEITO!)