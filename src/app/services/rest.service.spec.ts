import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RestAPIService } from './rest/rest.service';


describe('Rest API Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestAPIService]
    });
  });
  it('should get cars', 
    inject(
      [HttpTestingController, RestAPIService],
      (httpMock: HttpTestingController, restService: RestAPIService) => {
         const car = {
            "id": "5ee3f0195cdabc1d741f2a67",
            "warehousename": "Warehouse A",
            "warehouseId": 1,
            "lattitude": 47.13111,
            "longitude": -61.54801,
            "location": "West wing",
            "vehicleId": 1,
            "vehiclemake": "Volkswagen",
            "vehiclemodel": "Jetta III",
            "vehicleyear": "1995",
            "vehicleprice": 12947.52,
            "vehiclelicensed": true,
            "vehicleaddeddate": "2018-09-18"
        };
        restService.getCarService("orderByVehicleId").subscribe(data => {
         expect(data).toEqual(car);
       });

    const mockReq = httpMock.expectOne("http://localhost:8080/cars/orderByVehicleId");
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.method).toEqual('GET');

    mockReq.flush(car);

    httpMock.verify();
   }));
});