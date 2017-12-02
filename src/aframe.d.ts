declare global {
  namespace JSX {

    interface IComponent {
      geometry?: string;
      position?: string;
      rotation?: string;
      material?: string;
      color?: string;
      radius?: string;
      width?: string;
      height?: string;
      [index: string]: any
    }

    interface IntrinsicElements {
      'a-scene': any;
      'a-box'?: IComponent;
      'a-camera'?: IComponent;
      'a-circle'?: IComponent;
      'a-collada-model'?: IComponent;
      'a-cone'?: IComponent;
      'a-cursor'?: IComponent;
      'a-curvedimage'?: IComponent;
      'a-cylinder'?: IComponent;
      'a-dodecahedron'?: IComponent;
      'a-gltf-model'?: IComponent;
      'a-icosahedron'?: IComponent;
      'a-image'?: IComponent;
      'a-light'?: IComponent;
      'a-link'?: IComponent;
      'a-obj-model'?: IComponent;
      'a-octahedron'?: IComponent;
      'a-plane'?: IComponent;
      'a-ring'?: IComponent;
      'a-sky'?: IComponent;
      'a-sound'?: IComponent;
      'a-sphere'?: IComponent;
      'a-tetrahedron'?: IComponent;
      'a-text'?: IComponent;
      'a-torus-knot'?: IComponent;
      'a-torus'?: IComponent;
      'a-triangle'?: IComponent;
      'a-video'?: IComponent;
      'a-videosphere'?: IComponent;
    }
  }
}
