import { getTiles } from './getTiles';

export const getTileById = async (id) => {
  const tiles = await getTiles();

  const tile = tiles.find((item) => item.id === id);

  if (!tile) {
    return null;
  }

  return tile;
};
