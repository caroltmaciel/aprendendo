# Shorthand

* junção de propriedades
* resumido
* legível

```css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;


    /* background shorthands */
    background: #000 url(imagesbg.gif) no-repeat left top;
}

/* font properties */

font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;

/* font shorthand */
    font: bold italic  0.8em/1.2 Arial: sans-serif;

```

# Detalhes

* não irá considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem escrita não importa, mas, se houver muitas prorpiedades com valores semelhantes, poderemos encontrar problemas



## Propriedades que aceitam shorthand

animation, background, border, border-bottom, border-color, border-left, border-radius, border-right, border-style, border-top, border-widht, column-rule, columns, fles, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place- content, place-items, place-self, text-decoration, transition

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**


