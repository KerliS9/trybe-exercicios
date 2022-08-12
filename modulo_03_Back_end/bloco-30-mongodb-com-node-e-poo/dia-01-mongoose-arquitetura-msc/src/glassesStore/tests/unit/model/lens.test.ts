import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId,
  lensMockToChange, lensMockWithChangeId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves({});
    sinon.stub(Model, 'findByIdAndUpdate').resolves(lensMockWithChangeId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a lens', () => {
		it('successfully created', async () => {
			const newLens = await lensModel.create(lensMock);
			expect(newLens).to.be.deep.equal(lensMockWithId);
		});
	});

	describe('searching a lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52c1');
			expect(lensFound).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('find all lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.read();
			expect(lensFound).to.be.deep.equal([lensMockWithId]);
		});
	});

  describe('destroy a lens', () => {
		it('successfully destroy', async () => {
			const lensDestroy = await lensModel.destroy('62cf1fc6498565d94eba52c1');
			expect(lensDestroy).to.be.deep.equal({});
		});

    it('_id not found', async () => {
			try {
				await lensModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('update a lens', () => {
		it('successfully updated', async () => {
			const lensUpdated = await lensModel.update('62cf1fc6498565d94eba52c1', lensMockToChange);
			expect(lensUpdated).to.be.deep.equal(lensMockWithChangeId);
		});

    it('_id not found', async () => {
			try {
				await lensModel.update('123ERRADO', lensMockToChange);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

});