export const formatFileSize = (sizeInBits: number, useBytes: boolean = false): string => {
  const units = useBytes
    ? ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];

  const divisor = useBytes ? 1024 : 1000;
  let value = useBytes ? sizeInBits / 8 : sizeInBits;
  let unitIndex = 0;

  while (value >= divisor && unitIndex < units.length - 1) {
    value /= divisor;
    unitIndex++;
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`;
};
