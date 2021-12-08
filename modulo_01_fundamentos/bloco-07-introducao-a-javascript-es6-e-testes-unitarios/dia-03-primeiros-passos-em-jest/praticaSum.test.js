const sum = require('./praticaSum.js');

describe('Requisito 1', () =>{
	it ('Soma dois valores', () => {
		expect(sum(4, 5)).toEqual(9);
	});
	it ('Soma valores zerados', () => {
		expect(sum(0, 0)).toBe(0);
	});
	it ('Informar dados do tipo number', () => {
		expect(sum(4, '5')).toBe(0);
	});
})