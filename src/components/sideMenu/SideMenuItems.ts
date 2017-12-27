export interface ISideMenuItem {
  name: string;
  url?: string;
  ico?: string;
  active: boolean;
}

export const SIDE_MENU_ITEMS: ISideMenuItem[] = [
  {name: 'Home', url: '#/', ico: require('./icons/start.svg'), active: false},
  {name: '2D/3D Video', url: '#/2dvideo', ico: require('./icons/video-player.svg'), active: false},
  {name: '360 Video', url: '#/360video', ico: require('./icons/360-degrees.svg'), active: false},
  {name: '3D Model Animation', url: '#/3dmodel', ico: require('./icons/3d-printer.svg'), active: false},
];