
import { isMobile, FLS } from "./functions.js";
import { flsModules } from "./modules.js";
import lightGallery from 'lightgallery';

import '@scss/libs/gallery/lightgallery.scss';


const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	let galleyItems = [];
	galleries.forEach(gallery => {
		galleyItems.push({
			gallery,
			galleryClass: lightGallery(gallery, {
				// plugins: [lgZoom, lgThumbnail],
				licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
				speed: 500,
			})
		})
	});
	
	flsModules.gallery = galleyItems;
}





