# Trabalho com fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* inclui *fallback* font

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```

    - serif
    - sans

## Font Weight

* Peso da fonte
* Dependendo da família da fonte não conseguimos acessar todos os pesos.

```css
p {
    font-weight: bold;
}
```

## Font Style

* O Estilo da fonte
* Nem todas as famílias de fonte permitem o italic ou oblique.

```css
span {
    font-style: italic;
}
```

## Font Size

* O tamanho da fonte: em ou px.
```css
p {
    font-size: 18px;
}
```

## Web fonts

- fontes do sistema x fontes da web
- como usar fontes para web?

    * @font-face
    * @import
    * link


## Referências
https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face-in-css/

