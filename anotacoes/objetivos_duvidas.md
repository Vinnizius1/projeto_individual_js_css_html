> Objetivo:  

https://www.figma.com/file/U8ojEXx2vxSK2KOvoBvHVH8y/Frontend-test?node-id=13%3A42

1. Criar uma SPA (Single Page Application) seguindo o layout proposto.

Divisão de atividades:  

(X) ATIVIDADE 1 – HTML/CSS:
Desenvolvimento completo do HTML
Início do desenvolvimento do CSS (versão mobile)

( ) ATIVIDADE 2 – HTML/CSS:
Desenvolvimento completo do CSS (versão responsiva)

-------

> Dúvidas: 
1. Como colocar "placeholder" para a caixa "select"?
2. A importância/necessidade/efeitos do "position" em todas as classes, qual é?
3. Qual a melhor forma de editar o "placeholder"?
4. O sinal do "bluetooth" ficou ruim de TODO JEITO. Tentei usar "fontawesome" etc e nada. POR FIM, consegui baixar uma imagem de 256 x 256
que acabou ficando melhor do que a do Figma (26 x 52).  
A propósito, este site é top pra redimensionar imagens: https://squoosh.app/

-------

> Aprendizados:  
1. Position From W3C -> In the absolute positioning model, a box is explicitly offset with respect to (concerning) its containing block.
    Ou melhor -> "No modelo de posicionamento absoluto, uma caixa é explicitamente deslocada em relação ao bloco que a contém."

    "If the element has 'position: absolute', the containing block is established by the nearest ancestor with a position OTHER THAN STATIC."  

        ---> so your absolute element will always be relative to the ancestor's position unless it is a static positioned element.  

2. Header (tag) From W3C -> The 'header' element represents a container for introductory content or a set of navigational links.
    A 'header' element typically contains:  
      
        ---> one or more heading elements (h1 - h6);  

        ---> logo or icon;  

        ---> authorship information.  

    Note: You can have several 'header' elements in one HTML document. However, 'header' cannot be placed within a 'footer', 'address' or another 'header' element.

3. O efeito "transition" NÃO funciona com a propriedade "display: none" etc. Pra funcionar, utilizei a propriedade "opacity".
MAS, na vdd, tem isso aqui: https://www.ti-enxame.com/pt/css/transicoes-no-display-propriedade/969553813/ 

--------

> Consertar:
(X) Organizar as 5 div´s principais dentro da div mobile.