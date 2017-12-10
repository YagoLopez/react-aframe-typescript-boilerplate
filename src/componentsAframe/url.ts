/**
 * This component allows to navigate to a external url in a new tab/window
 * The object where the component is placed is highlited on mouse over changing its size
 *
 * It is very important the <a-scene> parent component has a raycaster component for
 * interacting with the mouse
 */
export const urlComponentConfig =  {

  schema: {'default': ''},

  // Do not use arrow function here
  // "this: any" is needed for the typescript compiler
  // https://github.com/Microsoft/TypeScript/issues/16016#issuecomment-303462193
  init: function(this: any) {
    this.el.sceneEl.components.raycaster.attrValue.objects = '[url]';
    this.el.addEventListener('click', (event: any) => {
      event.preventDefault();
      window.open(this.data);
    });

    this.el.addEventListener('mouseenter', (event: any) => {
      event.target.setAttribute('color', 'yellow');
      event.target.setAttribute('scale', '1.1, 1.1, 1.1');
    });

    this.el.addEventListener('mouseleave', (event: any) => {
      event.target.setAttribute('color', 'red');
      event.target.setAttribute('scale', '1, 1, 1');
    })
  }
}

