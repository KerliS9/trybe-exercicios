import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import FrameModel from '../../../models/frame';
import FrameService from '../../../services/frameService';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Service', () => {
	const frameModel = new FrameModel();
	const frameService = new FrameService(frameModel);

	before(() => {
		sinon.stub(frameModel, 'create').resolves(frameMockWithId);
		sinon.stub(frameModel, 'readOne')
      // na chamada de index 0 `frameModel.readOne` vai responder um fakeFrame
			.onCall(0).resolves(frameMockWithId) 
      // já na próxima chamada ele vai mudar seu retorno, isso pode ser feito várias vezes
			.onCall(1).resolves(null);
		sinon.stub(frameModel, 'read').resolves([frameMock]);
		sinon.stub(frameModel, 'destroy')
			.onCall(0).resolves(frameMockWithId) 
			.onCall(1).resolves(null);
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.create(frameMock);

			expect(frameCreated).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
			try {
				// o "as any"(casting) abaixo pois o create não aceita um parâmetro inválido
				await frameService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('ReadOne Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.readOne(frameMockWithId._id);

			expect(frameCreated).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
			try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await frameService.readOne(frameMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Get Frames', () => {
		it('Success', async () => {
			const frames = await frameService.read();

			expect(frames).to.be.deep.equal([frameMock]);
		});
	});

	describe('Delete Frame', () => {
		it('Success', async () => {
			const frameDeleted = await frameService.destroy(frameMockWithId._id);

			expect(frameDeleted).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
			try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await frameService.destroy(frameMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});
});