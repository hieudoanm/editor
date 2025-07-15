export const deburr = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacritical marks
};

export const capitalise = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const kebabcase = (str: string) => {
  return str.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
};

export const snakecase = (str: string) => {
  return str.toLowerCase().replace(/\s+/g, '_'); // Replace spaces with hyphens
};

export const uppercase = (str: string) => str.toUpperCase();

export const lowercase = (str: string) => str.toLowerCase();

export const strings = (str: string) => {
  return {
    format: (style: string): string => {
      if (style === 'capitalise') return capitalise(str);
      if (style === 'deburr') return deburr(str);
      if (style === 'kebabcase') return kebabcase(str);
      if (style === 'lowercase') return lowercase(str);
      if (style === 'snakecase') return snakecase(str);
      if (style === 'uppercase') return uppercase(str);
      return str;
    },
  };
};
