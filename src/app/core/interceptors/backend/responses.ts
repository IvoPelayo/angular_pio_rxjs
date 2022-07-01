import { concat } from 'lodash';
import { HttpHeaders } from '@angular/common/http';
import { HttpMethods } from '../../enums/http-methods';
import { sharedMockResponses } from 'src/app/shared/services/responses.mock';

export interface MockResponse {
    url: string;
    json: any;
    method?: HttpMethods;
    headers?: HttpHeaders;
}

export const InterceptorMockResponses: MockResponse[] = concat(
    sharedMockResponses,
);
