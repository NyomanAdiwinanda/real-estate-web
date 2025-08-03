import { client } from "./client";

export interface PropertyImage {
	asset: {
		_id: string;
		url: string;
	};
	crop?: string | null;
	hotspot?: string | null;
}

export interface PropertyDescriptionChild {
	_key: string;
	_type: string;
	text: string;
	marks?: string[];
}

export interface PropertyDescription {
	_key: string;
	_type: string;
	children: PropertyDescriptionChild[];
	style?: string;
	markDefs?: string[];
}

export interface Property {
	_id: string;
	title: string;
	slug: { current: string };
	location: string;
	price: number;
	image: PropertyImage;
	description: PropertyDescription[];
	isPublished: boolean;
}

export async function getPublishedProperties(): Promise<Property[]> {
	return await client.fetch(
		`*[_type == "property" && isPublished == true]{
	  _id,
	  title,
	  slug,
	  location,
	  price,
	  image {
		asset->{
		  _id,
		  url
		},
		crop,
		hotspot
	  },
	  isPublished
	}`
	);
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
	const result = await client.fetch(
		`*[_type == "property" && slug.current == $slug][0]{
	  _id,
	  title,
	  slug,
	  location,
	  price,
	  image {
		asset->{
		  _id,
		  url
		},
		crop,
		hotspot
	  },
	  description,
	  isPublished
	}`,
		{ slug }
	);
	return result || null;
}
