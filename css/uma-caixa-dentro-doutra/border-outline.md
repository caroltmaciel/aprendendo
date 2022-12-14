## border (e outline)

As bordas da caixa

- value: `<border-style>` | `<border-widht>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - widht: `<length>`
    - color: `<color>`

```css
div {
    /*shorthand*/
    border-top: solid 2px; /* top | right | bottom | left*/

    /* style */
    border: solid;

    /* widht <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* widht | style | color */
    border: medium dashed green;
    }

```

### E outline?

- difere em 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parte do Box Model
    - Poderá ser diferente de retangular
    - Nãao permite ajuste individuais
    - Mais usado pelo usaar agent para acessibilidade

https://developer.mozilla.org/en-US/docs/Web/CSS/border