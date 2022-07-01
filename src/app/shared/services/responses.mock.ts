import { FileServiceEndPoints } from '@shared/services/file/file-service-endpoints';
import { MockResponse } from '@core/interceptors/backend/responses';
import { HttpHeaders } from '@angular/common/http';
import { RanksEnum } from '@core/enums/crew/ranks.enum';
import { BasesServiceEndPoints } from './base/bases-service-endpoints';
import * as moment from 'moment';

const basesArray = [
    {
      id: 1,
      name: 'BCN'
    },
    {
      id: 2,
      name: 'ORY'
    },
    {
      id: 3,
      name: 'ALC'
    },
    {
      id: 4,
      name: 'VLC'
    },
    {
      id: 5,
      name: 'MAD'
    },
  ];

export const sharedMockResponses: MockResponse[] = [
    {
        url: BasesServiceEndPoints.forBaseRequest.concat(RanksEnum.UPG).toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.forBaseRequest.concat(RanksEnum.CP).toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.forBaseRequest.concat(RanksEnum.FO).toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.forDetachmentRequest.concat(RanksEnum.CP).add('LE').toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.forDetachmentOperative.toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.forDetachmentRequest.concat(RanksEnum.FO).add('LE').toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.byCountry.add('LE').toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.byCountry.add('LI').toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.byCountry.add('LF').toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.basesController.toString(),
        json: basesArray,
    },
    {
        url: BasesServiceEndPoints.baseInfo.toString(),
        json: {
            base: {
                id: 1,
                name: 'BCN'
            },
            activeFrom: moment.utc().add(-1, 'year'),
            activeTo: moment.utc().add(1, 'year'),
            // isDetachment: true,
            // isOperative: true,
            countryId: 'LE'
        },
    },
    {
        url: FileServiceEndPoints.fileController.add('86c7e86c-3971-441d-b40f-bbfdab55c3d2').toString(),
        headers: new HttpHeaders({
            'content-disposition': 'attachment; filename="file1.jpg"'
        }),
        json: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAYElEQVR4nABQAK//BB5T8PBXdkMntBnDjRs7wQOk+gch3vA7XzJ7iq9rEfIEay0rDvi0GOIIA2P5cSWkBB3rvssKZZ0MWt7PHTaw3AAy7/jYXnNd8iieBLAJ4KkBAAD//3fLJBIaHl5wAAAAAElFTkSuQmCC"
    },
    {
        url: FileServiceEndPoints.fileController.add('1a973694-bb54-4a0f-b48b-1fd1ad9a5941').toString(),
        headers: new HttpHeaders({
            'content-disposition': 'attachment; filename="file2.jpg"'
        }),
        json: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAYElEQVR4nABQAK//BB5T8PBXdkMntBnDjRs7wQOk+gch3vA7XzJ7iq9rEfIEay0rDvi0GOIIA2P5cSWkBB3rvssKZZ0MWt7PHTaw3AAy7/jYXnNd8iieBLAJ4KkBAAD//3fLJBIaHl5wAAAAAElFTkSuQmCC"
    },
    {
        url: FileServiceEndPoints.fileController.add('5fe1f47a-2904-423f-844e-148b1ed770e4').toString(),
        headers: new HttpHeaders({
            'content-disposition': 'attachment; filename="convenio_de_pilotos.jpg"'
        }),
        json: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAYElEQVR4nABQAK//BB5T8PBXdkMntBnDjRs7wQOk+gch3vA7XzJ7iq9rEfIEay0rDvi0GOIIA2P5cSWkBB3rvssKZZ0MWt7PHTaw3AAy7/jYXnNd8iieBLAJ4KkBAAD//3fLJBIaHl5wAAAAAElFTkSuQmCC"
    },
    {
        url: FileServiceEndPoints.fileController.toString(),
        json: '1a973694-bb54-4a0f-b48b-1fd1ad9a5941'
    },
    {
        url: FileServiceEndPoints.fileController.add('86c7e86c-3971-441d-b40f-bbfdab55c3d2').add('delete').toString(),
        json: true
    },
    {
        url: FileServiceEndPoints.fileController.add('1a973694-bb54-4a0f-b48b-1fd1ad9a5941').add('delete').toString(),
        json: true
    },
    {
        url: FileServiceEndPoints.fileController.add('5fe1f47a-2904-423f-844e-148b1ed770e4').add('delete').toString(),
        json: true
    },
];
