//todo: intentar usar @types/aframe

/**
 * Declare AFRAME as global object for use with Typescript.
 * This because Aframe library declares a global AFRAME Object
 */
declare const AFRAME: any;

/**
 * This is needed for typscript not complaining with Aframe entities
 */
/*
declare {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-entity': any;
      'a-box'?: any;
      'a-camera'?: any;
      'a-circle'?: any;
      'a-collada-model'?: any;
      'a-cone'?: any;
      'a-cursor'?: any;
      'a-curvedimage'?: any;
      'a-cylinder'?: any;
      'a-dodecahedron'?: any;
      'a-gltf-model'?: any;
      'a-icosahedron'?: any;
      'a-image'?: any;
      'a-light'?: any;
      'a-link'?: any;
      'a-obj-model'?: any;
      'a-octahedron'?: any;
      'a-plane'?: any;
      'a-ring'?: any;
      'a-sky'?: any;
      'a-sound'?: any;
      'a-sphere'?: any;
      'a-tetrahedron'?: any;
      'a-text'?: any;
      'a-torus-knot'?: any;
      'a-torus'?: any;
      'a-triangle'?: any;
      'a-video'?: any;
      'a-videosphere'?: any;
      'a-assets'?: any;
      'a-animation'?: any;
    }
  }
}
*/

