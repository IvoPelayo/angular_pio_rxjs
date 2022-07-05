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
                url: 'pipes/most-used'
            },
            {
                name: 'Combinar',
                url: 'pipes/stack'
            },
            {
                name: 'Custom',
                url: 'pipes/custom'
            }
        ]
    },
    {
        name: 'Usos complejos',
        children: [
            {
                name: 'Herramientas reutilizables',
                url: 'complex/core-tools'
            },
            {
                name: 'Flujos',
                url: 'complex/flow'
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