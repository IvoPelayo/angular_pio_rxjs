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
            url: 'basic/subscriptor'
        }
      ]
    },
    {
        name: 'Subsink',
        children: [
            {
                name: 'Uso básico',
                url: 'subsink/basic-usage'
            },
            {
                name: 'Uso global',
                url: 'subsink/global-usage'
            }
        ]
    },
    {
        name: 'Operators',
        children: [
            {
                name: 'Incluidos',
                url: 'operators/built-in'
            },
            {
                name: 'Custom',
                url: 'operators/custom'
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
];

export interface NavData {
    name: string;
    url?: string;
    children?: NavData[];
    expanded?: boolean;
}