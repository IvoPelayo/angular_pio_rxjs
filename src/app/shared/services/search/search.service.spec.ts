import { TestBed } from '@angular/core/testing';
import { SearchResult } from '@shared/models/search';

describe('GIVEN SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  describe('WHEN SearchResult with null data', () => {
    it('THEN should have all properties set', () => {
        // ARRANGE

        // ACT
        const result = new SearchResult();

        // ASSERT
        expect(result.data).not.toBeNull();
        expect(result.paging).not.toBeNull();
    });

    it('THEN should have default values', () => {
        // ARRANGE

        // ACT
        const result = new SearchResult();

        // ASSERT
        expect(result.data.length).toEqual(0);
        expect(result.paging.totalRecordCount).toEqual(0);
        expect(result.paging.pageCount).toEqual(1);
    });
  });

  describe('WHEN SearchResult with data', () => {
    it('THEN should set data', () => {
        // ARRANGE
        const data = [
            'test1',
            'test2'
        ];

        // ACT
        const result = new SearchResult<string>(data);

        // ASSERT
        expect(result.data).toBe(data);
    });

    it('THEN should have default values for paging', () => {
        // ARRANGE
        const data = [
            'test1',
            'test2'
        ];

        // ACT
        const result = new SearchResult<string>(data);

        // ASSERT
        expect(result.paging.totalRecordCount).toEqual(data.length);
        expect(result.paging.pageCount).toEqual(1);
    });
  });

  describe('WHEN SearchResult with data and paging', () => {
    it('THEN should set data and paging', () => {
        // ARRANGE
        const data = [
            'test1',
            'test2'
        ];

        const paging = {
            page: 1,
            pageCount: 1,
            totalRecordCount: 10
        }

        // ACT
        const result = new SearchResult<string>(data, paging);

        // ASSERT
        expect(result.data).toBe(data);
        expect(result.paging).toBe(paging);
    });
  });

});
