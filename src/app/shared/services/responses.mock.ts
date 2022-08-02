import { EndPoints } from 'src/app/core/enums/endpoints';
import { HttpMethods } from 'src/app/core/enums/http-methods';
import { MockResponse } from 'src/app/core/interceptors/backend/responses';

const dummies = [
    {
        id: 1,
        name: 'Dummy',
        lastName: 'Uno',
        birthDate: '10/10/2000'
    },
    {
        id: 2,
        name: 'Dummy',
        lastName: 'Dos',
        birthDate: '01/01/1992'
    },
    {
        id: 3,
        name: 'Dummy',
        lastName: 'Tres',
        birthDate: '12/02/2005'
    },
    {
        id: 4,
        name: 'Dummy',
        lastName: 'Cuatro',
        birthDate: '10/05/1989',
        childrenIds: [
            6, 7
        ]
    },
    {
        id: 5,
        name: 'Dummy',
        lastName: 'Cinco',
        birthDate: '14/07/2010'
    },
    {
        id: 6,
        parentId: 4,
        name: 'Hijo',
        lastName: 'Cuatro',
        birthDate: '10/01/2000'
    },
    {
        id: 7,
        parentId: 4,
        name: 'Hija',
        lastName: 'Cuatro',
        birthDate: '10/02/2001'
    },
];

export const sharedMockResponses: MockResponse[] = [
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('search').toString(),
        json: {
            data: dummies,
            paging: {
                page: 1,
                pageCount: 2,
                totalRecordCount: 10
            }
        },
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('1').toString(),
        json: dummies[0]
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('2').toString(),
        json: dummies[1]
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('3').toString(),
        json: dummies[2]
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('4').toString(),
        json: dummies[3]
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('5').toString(),
        json: dummies[4]
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('6').toString(),
        json: dummies[5]
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').add('7').toString(),
        json: dummies[6]
    },
    {
        url: EndPoints.webApiBaseUrl.add('dummy').toString(),
        method: HttpMethods.POST,
        json: dummies[0]
    },
];
