import { writable } from 'svelte/store';
import { browser } from '$app/environment';
export let mylist;

if (browser) {
	const storedList = JSON.parse(window.localStorage.getItem('mylist')) || [];
	mylist = writable(storedList);
	mylist.subscribe((value) => window.localStorage.setItem('mylist', JSON.stringify(value)));
} else {
	mylist = writable([]);
}
