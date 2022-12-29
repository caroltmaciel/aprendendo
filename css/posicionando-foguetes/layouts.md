# Page Layouts

    - Tables
    - Floats e clear
    - Framework e Grid Ststems
    - Flexbox
    - Grid

## Posicionamentos

Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static|relative|absolute|fixed


## Static
    É o padrão


## Relative

- top, right, bottom, left, z-index

## Absolute

- top, right, bottom, left, z-index

É como se jogasse uma camada para cima. Por ser absoluto ele é relativo a página inteira. Se dar o valor de 0 ao #top e #left, as boxes grudam na página.

## Fixed

- top, right, bottom, left, z-index

Faz o elemento ficar fixo na página.

## Element Stacking

- z-index

É só colocar a camada que você gostaria que a box ficaria.


## Flexbox
* Nos permite posicionar os elementos dentro da caixa.
* Controle em uma dimensão (horizontal ou vertical)
* Alinhamento, direcionamento, ordenar e tamanhos

```css
div.parent {
    display: flex;
}
```

## flex-direction

* Qual a direção do flex: horizontal ou vertical
* row | column

## alinhamento

* justify-content
* align-items

# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexível ou fixo
* Cria espaços para os elementos filhos habitarem

