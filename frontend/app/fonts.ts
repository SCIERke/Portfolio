import localFont from 'next/font/local';

export const sfFont = localFont({
  src: [
    {
      path: '../public/fonts/SFMono/SFMonoLight.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFMono/SFMonoRegular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFMono/SFMonoMedium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFMono/SFMonoSemibold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFMono/SFMonoBold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFMono/SFMonoHeavy.woff',
      weight: '800',
      style: 'normal'
    }
  ]
});