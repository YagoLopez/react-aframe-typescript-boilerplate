/**
 * This component allows to navigate to a external url in a new tab/window
 * The object where the component is placed is highlited on mouse over changing its size
 *
 * It is very important the <a-scene> parent component has a raycaster component for
 * interacting with the mouse
 */
export const urlComponentConfigObject =  {

  schema: {'default': ''},

  init: function (): void {
    const self: any = this;
    self.el.sceneEl.components.raycaster.attrValue.objects = '[url]';
    self.el.addEventListener('click', () => {
      window.open(self.data);
    });

    self.el.addEventListener('mouseenter', (event: any) => {
      event.target.setAttribute('color', 'yellow');
      event.target.setAttribute('scale', '1.1 1.1 1.1');
    });

    self.el.addEventListener('mouseleave', (event: any) => {
      event.target.setAttribute('color', 'red');
      event.target.setAttribute('scale', '1.1 1.1 1.1');
    })
  }
}

