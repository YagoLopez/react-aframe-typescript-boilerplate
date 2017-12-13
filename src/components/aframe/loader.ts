export const loaderComponentConfig =  {

  schema: {'default': ''},

  /**
   * Do not use arrow function here
   * "this: any" is needed for the typescript compiler
   * https://github.com/Microsoft/TypeScript/issues/16016#issuecomment-303462193
   */
  init: function(this: any) {
    this.el.addEventListener('loaded', () => {
      console.log('scene loaded');
      const loader = document.getElementById('loader') as HTMLDivElement;
      (loader.parentElement as HTMLDivElement).removeChild(loader);
    })
  }
}
