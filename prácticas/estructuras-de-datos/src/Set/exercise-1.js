const arr = [0, 1, 2, 5, 3, 4, 5];

const numRepeat = () => {
  const newArray = [...arr];

  const newSet = new Set(newArray);

  const isRepeat = newArray.join('') != [...newSet].join('');

  if (isRepeat) return 'Hay elementos repetidos';

  return 'No hay elementos repetidos';
};

numRepeat();
