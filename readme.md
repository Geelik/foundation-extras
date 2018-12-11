Sommaire                                                     
=================                                                        

   * [Sommaire](#sommaire)
   * [Description](#description)
   * [Mobile first](#mobile-first)
   * [Classes](#classes)
      * [Alignement](#alignement)
      * [Alignement du texte](#alignement-du-texte)
      * [Colonnes](#colonnes)
      * [Tableaux](#tableaux)
      * [Marges extérieures](#marges-extérieures)
      * [Marges intérieures](#marges-intérieures)
      * [Flexbox](#flexbox)
      * [Positions](#positions)
      * [Display](#display)
   * [Javascript](#javascript)
      * [Événements](#événements)                                                                          

# Description

Foundation-extras ajoute des classes utilitaires au framework [foundation](https://foundation.zurb.com)

# Mobile first

Foundation-extras utilise les breakpoints par défaut de foundation

```css
/* Small only */
@media screen and (max-width: 39.9375em) {}

/* Medium and up */
@media screen and (min-width: 40em) {}

/* Large and up */
@media screen and (min-width: 64em) {}
```

Toutes les classes ajoutées sont sous le même format.

```css
/* Exemple */
.no-margin
.medium-no-margin
.large-no-margin
```

Le préfixe `small-` est absent car c'est le style par défaut appliqué.

# Classes

Toutes ces classes peuvent être préfixées par taille comme ci-dessus.

## Alignement

A mettre sur les `.row` pour changer l'alignement selon la taille.

`.align-left`
`.align-center`
`.align-right`
`.align-top`
`.align-middle`
`.align-bottom`
`.align-justify`
`.align-spaced`

## Alignement du texte

`.text-left`
`.text-center`
`.text-right`

## Colonnes
Ajoute des préfixes pour la classe shrink de base.

`.shrink`

Change l'ordre des `.column` en fonction de la taille.

`.order-[0-9]`

Même chose que .offset-[0-9] mais fait un margin-right à la place d'un margin-left.

`.offset-r-[0-9]`

## Tableaux

A placer sur les `td` ou `th` d'un tableau. Applique un width en pourcentage similaire aux `.column`.

`.td-[0-9]`

Applique width auto.

`.td-shrink`

Applique width 100%.

`.td-expand`

## Marges extérieures

Retire toutes les marges.

`.no-margin`

Retire les marges à gauche et à droite.

`.no-h-margin`

Retire les marges en haut et en bas.

`.no-v-margin`

Défini les marges de 5 en 5 (Marges en pixels)

`.margin-top-[5-50]`
`.margin-right-[5-50]`
`.margin-bottom-[5-50]`
`.margin-left-[5-50]`
`.margin-h-[5-50]`
`.margin-v-[5-50]`

## Marges intérieures

Retire toutes les marges intérieures.

`.no-margin`

Retire les marges intérieures à gauche et à droite.

`.no-h-margin`

Retire les marges intérieures en haut et en bas.

`.no-v-margin`

## Flexbox

Défini flex-wrap: wrap; en fonction de la taille.

`.flex-wrap`

Défini flex-wrap: nowrap; en fonction de la taille.

`.flex-nowrap`

## Positions

Défini la position en fonction de la taille.

`.position-absolute`
`.position-relative`
`.position-fixed`

## Display

Défini le display en fonction de la taille.

`.d-block`
`.d-inline-block`
`.d-inline`
`.d-flex`

# Javascript

## Événements

Détect le changement de breakpoint
```js
/*
@var sFromSize string small | medium | large 
@description sFromSize est la taille avant changement
 */
$(window).on('mq:change:small', function(oEvt, sFromSize){
    console.log('small');
})

$(window).on('mq:change:medium', function(oEvt, sFromSize){
    console.log('medium');
})

$(window).on('mq:change:large', function(oEvt, sFromSize){
    console.log('large');
})
```