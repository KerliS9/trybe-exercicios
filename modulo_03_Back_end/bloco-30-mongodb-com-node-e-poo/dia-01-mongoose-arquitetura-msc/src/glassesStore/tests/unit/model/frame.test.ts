import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
		sinon.stub(Model, 'find').resolves([frameMockWithId]);
		sinon.stub(Model, 'findByIdAndDelete').resolves({});
		sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const frameFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(frameFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('find all frames', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.read();
			expect(framesFound).to.be.deep.equal([frameMockWithId]);
		});
	});

	describe('destroy a frame', () => {
		it('successfully destroy', async () => {
			const frameDestroy = await frameModel.destroy('62cf1fc6498565d94eba52cd');
			expect(frameDestroy).to.be.deep.equal({});
		});

		it('_id not found', async () => {
			try {
				await frameModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('update a frame', () => {
		it('successfully updated', async () => {
			const frameUpdated = await frameModel.update('62cf1fc6498565d94eba52cd', frameMock);
			expect(frameUpdated).to.be.deep.equal(frameMockWithId);
		});
		it('_id not found', async () => {
			try {
				await frameModel.update('123ERRADO', frameMock);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
  
});