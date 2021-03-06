import { expect } from 'chai';
import fs from 'fs';
import { JSDOM } from 'jsdom';


describe('Out first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true)
    });
});

describe('index.html', () => {
    it('should say hello', () => {
        const index = fs.readFileSync('./src/index.html','utf-8');
        const { window } = new JSDOM(index);
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Hello World');
        window.close();
    });
});

