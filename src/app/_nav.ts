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
        name: 'Pipes',
        children: [
            {
                name: 'Incluidos',
                url: 'pipes/built-in'
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
];

export interface NavData {
    name: string;
    url?: string;
    children?: NavData[];
    expanded?: boolean;
}