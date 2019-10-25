/// <reference path="types.d.ts" />

import {search} from 'defiant.js';
import data from './data.json';


(async () => {

	// Увы, но defiant.js не меняет исходный JSON (((

	const found = await search(data, '//book');
	found[0].title = '---------------';
	// console.log(found[0]);
	console.log((data as any).store.book[0]);


})();



