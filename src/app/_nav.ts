export const navItems: NavData[] = [
    {
      name: 'Básico',
      children: [
        {
            name: 'Suscripción',
            url: 'basic/subscription'
        },
        {
            name: 'Suscriptor (listener)',
            url: 'basic/subscriber'
        }
      ]
    },
    {
        name: 'Pipes',
        children: [
            {
                name: 'Más utilizados',
                url: 'pipes'
            },
            {
                name: 'Combinar',
                url: 'pipes/combine'
            },
            {
                name: 'Custom',
                url: 'pipes/custom'
            }
        ]
    },
    {
        name: 'Subsink',
        url: 'subsink'
    },
];

export interface NavData {
    name: string;
    url?: string;
    children?: NavData[];
    expanded?: boolean;
}