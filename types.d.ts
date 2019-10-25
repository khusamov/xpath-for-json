declare module '*.json';

declare module 'defiant.js' {
	export function search(data: any, xpath: string, first?: boolean): Promise<any>;
	export const json: any;
}