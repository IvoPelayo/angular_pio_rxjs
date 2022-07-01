import { EndPoints } from 'src/app/core/enums/endpoints';
import { MockResponse } from 'src/app/core/interceptors/backend/responses';


export const sharedMockResponses: MockResponse[] = [
    {
        url: EndPoints.webApiBaseUrl.add('').toString(),
        json: {},
    },
];
