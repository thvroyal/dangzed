import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toSlug(str: string) {
	str = str.toLowerCase();     
 
	str = str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
 
	str = str.replace(/[đĐ]/g, 'd');
	
	str = str.replace(/([^0-9a-z-\s])/g, '');
 
	str = str.replace(/(\s+)/g, '');
	
	str = str.replace(/-+/g, '-');
 
	str = str.replace(/^-+|-+$/g, '');
 
	return str;
}