function goldilocksZone(mass) {
  let lum = mass ** 3.5;
  let start = Math.sqrt(lum) * 0.95;
  start = start.toFixed(2);
  let end = Math.sqrt(lum) * 1.37;
  end = end.toFixed(2);
  let distance = [start, end];
  distance = distance.map(Number);
  return distance;
}
goldilocksZone(1);
