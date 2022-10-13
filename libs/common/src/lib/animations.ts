import {animate, animation, state, style, transition} from "@angular/animations";

export const transitionAnimationHeight = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}'
  }),
  animate('{{ time }}')
]);

export const transitionAnimationWidth = animation([
  style({
    width: '{{ width }}',
    opacity: '{{ opacity }}'
  }),
  animate('{{ time }}')
]);

export const transitionExpandWidth = animation([
  style({
    width: '{{ startWidth }}',
    opacity: '{{ opacity }}'
  }),
  animate('{{ time }} ease')
]);

export const transitionAnimationRotate = animation([
  style({
    transform: 'rotate({{ degree }})',
  }),
  animate('{{ time }}')
]);
