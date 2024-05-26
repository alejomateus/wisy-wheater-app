import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { bigPayerRoute, createPaymentPagesConst, createPaymentRouteConst } from '@core/constants/pages.constant';
import { IPage } from '@models/pages';
import { initialStateCreatePaymentFileDataData } from '@test-helpers/models/create-payment.model.mock';
import { locationSpy, routerSpy } from '@test-helpers/models/general.model.mock';
import { CommonsService } from './commons.service';

describe('CommonsService', () => {
	let service: CommonsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CommonsService,
				{ provide: Router, useValue: routerSpy },
				{ provide: Location, useValue: locationSpy }
			]
		});
		service = TestBed.inject(CommonsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('should be navigate', () => {
		service.navigate('big-payer');
		expect(service).toBeTruthy();
	});
	it('should be navigateBack', () => {
		service.navigateBack();
		expect(service).toBeTruthy();
	});
	it('should be currentUrl', () => {
		const route = service.currentUrl();
		expect(route).toEqual(createPaymentRouteConst);
	});
	it('create mask input', () => {
		const mask = service.createMaskInput({ alias: 'numeric', digits: 0, digitsOptional: false });
		expect(mask).toEqual({ alias: 'numeric', digits: 0, digitsOptional: false });
	});

	it('should be verifyPagesProcess 1', async () => {
		const pages: IPage[] = [createPaymentPagesConst[0]];
		const data = service.verifyPagesProcess(
			pages,
			'/' + createPaymentRouteConst + createPaymentPagesConst[1].active,
			createPaymentRouteConst
		);
		expect(service).toBeTruthy();
		expect(data).toBeFalse();
	});

	it('should be verifyPagesProcess 2', async () => {
		const pages: IPage[] = [createPaymentPagesConst[0], createPaymentPagesConst[1]];
		const data = service.verifyPagesProcess(
			pages,
			'/' + createPaymentRouteConst + createPaymentPagesConst[1].active,
			createPaymentRouteConst
		);
		expect(service).toBeTruthy();
		expect(data).toBeTrue();
	});

	it('should be verifyPagesProcess []', async () => {
		const data = service.verifyPagesProcess(
			[],
			'/' + createPaymentRouteConst + createPaymentPagesConst[0].active,
			createPaymentRouteConst
		);
		expect(service).toBeTruthy();
		expect(data).toBeFalse();
	});

	it('should be generalPrevious []', async () => {
		spyOn(service, 'currentUrl').and.returnValue(createPaymentRouteConst + createPaymentPagesConst[1].active);
		const pages: IPage[] = [...createPaymentPagesConst];
		service.generalPrevious(pages, bigPayerRoute, createPaymentRouteConst);
		expect(service).toBeTruthy();
	});

	it('should be generalPrevious []', async () => {
		spyOn(service, 'currentUrl').and.returnValue(createPaymentRouteConst + createPaymentPagesConst[2].active);
		const pages: IPage[] = [...createPaymentPagesConst];
		service.generalPrevious(pages, bigPayerRoute, createPaymentRouteConst);
		expect(service).toBeTruthy();
	});

	it('should be generalPrevious []', async () => {
		spyOn(service, 'currentUrl').and.returnValue(createPaymentRouteConst + createPaymentPagesConst[0].active);
		const pages: IPage[] = [createPaymentPagesConst[0], createPaymentPagesConst[1]];
		service.generalPrevious(pages, bigPayerRoute, createPaymentRouteConst);
		expect(service).toBeTruthy();
	});

	it('should be generalPrevious []', async () => {
		spyOn(service, 'currentUrl').and.returnValue(createPaymentRouteConst + createPaymentPagesConst[0].active);
		const pages: IPage[] = [createPaymentPagesConst[0]];
		service.generalPrevious(pages, bigPayerRoute, createPaymentRouteConst);
		expect(service).toBeTruthy();
	});

	it('should be generateFile', async () => {
		service.generateFile(
			initialStateCreatePaymentFileDataData.file.base64,
			initialStateCreatePaymentFileDataData.file.name,
			initialStateCreatePaymentFileDataData.file.type
		);
		expect(service).toBeTruthy();
	});

	it('should be generateFile', async () => {
		service.generateFile(
			initialStateCreatePaymentFileDataData.file.base64,
			initialStateCreatePaymentFileDataData.file.name,
			initialStateCreatePaymentFileDataData.file.type,
			initialStateCreatePaymentFileDataData.file.checksum
		);
		expect(service).toBeTruthy();
	});
});
