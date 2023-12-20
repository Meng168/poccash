import localFont from 'next/font/local'

export const avenir = localFont({
    src: './AvenirLTStd-Roman.otf',
    variable: '--font-avenir',
})

export const cerebri = localFont({
    // src: './Cerebri.Sans.Pro/CerebriSansPro-Thin.ttf',
    src: [
        {
            path: './Cerebri.Sans.Pro/CerebriSansPro-Thin.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Cerebri.Sans.Pro/CerebriSansPro-SemiBold.ttf',
            weight: '700',
            style: 'normal',
        }
    ],
    variable: '--font-cerebri',
})