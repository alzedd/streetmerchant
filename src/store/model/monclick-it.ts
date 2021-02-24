import {Store} from './store';

export const MonclickIt: Store = {
  name: 'monclick-it',

  backoffStatusCodes: [403, 429, 503],
  currency: '€',

  labels: {
    inStock: [
      {
        container: '.mk-lbl-dispo',
        text: ['Disponibile'],
      },
    ],
    outOfStock: [
      {
        container:
          '.labelNoDispo',
        text: ['Non disponbile'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.monclick.it/prodotti/7/TEC/apple/MK_000000167301.htm',
    },
      {
        brand: 'microsoft',
        model: 'xbox series s',
        series: 'xboxss',
        url: 'https://www.monclick.it/prodotti/9/CSL/microsoft/MK_000000188885.htm',
      },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.monclick.it/prodotti/9/CSL/microsoft/MK_000000188886.htm',
    },
      {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.monclick.it/prodotti/9/CLL/sony/MK_000000188382.htm',
    },
  ],
};
