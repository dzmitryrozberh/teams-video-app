function yuv420ProgPlanarToRgb(yuv, width, height) {
  const frameSize = width * height;
  const halfWidth = Math.floor(width / 2);
  const uStart = frameSize;
  const vStart = frameSize + Math.floor(frameSize / 4);
  const rgb = []

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const yy = yuv[y * width + x];
      const colorIndex = Math.floor(y / 2) * halfWidth + Math.floor(x / 2);
      const uu = yuv[uStart + colorIndex] - 128;
      const vv = yuv[vStart + colorIndex] - 128;

      let r = yy + 1.402 * vv;
      let g = yy - 0.344 * uu - 0.714 * vv;
      let b = yy + 1.772 * uu;

      rgb.push(Math.trunc(r))
      rgb.push(Math.trunc(g))
      rgb.push(Math.trunc(b))
    }
  }

  return rgb
}

