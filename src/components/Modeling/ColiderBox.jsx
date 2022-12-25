import { useBox } from '@react-three/cannon';

const debug = true;

function ColliderBox({ position, scale }) {
  useBox(() => ({
    args: scale,
    position,
    type: 'Static',
  }));

  return (
    debug && (
      <mesh>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.25} />
      </mesh>
    )
  );
}

export default ColliderBox;
