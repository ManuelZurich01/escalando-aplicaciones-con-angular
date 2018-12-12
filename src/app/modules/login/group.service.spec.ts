import {TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExpectedConditions } from 'protractor';
import { GroupService} from './group.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

class HttpClientMock {
  get = jasmine.createSpy();
  }

fdescribe('Group services', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: HttpClient ,
        useClass: HttpClientMock} ,
        GroupService]
    });
    service = TestBed.get(GroupService);
    httpClientMock = TestBed.get(HttpClient);
 });

  it('should be created an instance', () => {

       expect(true).toBe(true);


  });

  it ('test', () => {
    // expect(true).toBe(false);
    httpClientMock.get.and.returnValue({
      toPromise: () => null
    });
    const result = service.getGroups();
    expect( httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
    expect(result).toBe(null);
  });

  it('should be set array of groups and expose a getter', () => {
      const list =  [1, 2, 3 ];
      service.setGroups(list);
      expect(service.getStoredGroups()).toEqual(list);
    });
});
