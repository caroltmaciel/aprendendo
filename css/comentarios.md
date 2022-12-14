# Comentários

* Não irá afetar seu código
* Ajuda a lembrar blocos de código
* Deixa dicas para leitura
* Ajuda outros a entenderem
* Nunca esqueça de fechar um comentário aberto

Comentários começam com `/*` e termina com `*/`.

```css

/*Básico*/
/*-----------------------------*/

body {
    font: 1em150% Helvetica, Arial, sans-serif;
    padding: lem;
    margin: 0 auto;
    max-width:33em;
}

@media ((min-width:70em) {

/* Let's special case the global font size On large sccren orwindow, we increase the font size for better readability*/

    body{
        font-size: 130%;
    }
}


h1  {font-size:1.5em;}

/* Elementos especificos */
/* -------------------------------- */
div p, #id:first-line{
    background-color: red;
    border-radius:3xp;
}

div p {
    margin:0;
    padding:1em;
}

div p + p {
    padding-top:  0;
}
```


* Você poderá usar para desabilitar partes do seu código

```css

/* special {
    color: red;
} */

p  {
    color: blue;
}
```












