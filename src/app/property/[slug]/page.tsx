import { getPropertyBySlug } from "@/lib/sanity/property";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
export const dynamic = "force-dynamic";

interface PropertyDetailProps {
	params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailProps) {
	const { slug } = await params;
	const property = await getPropertyBySlug(slug);
	if (!property) {
		return <div className="max-w-2xl mx-auto py-10">Property not found.</div>;
	}

	function getImageUrl() {
		if (property?.image && property?.image.asset?.url) {
			return property?.image.asset.url;
		}
		return "/window.svg";
	}

	function renderDescription() {
		if (!property?.description || property?.description.length === 0) return null;
		return <PortableText value={property.description} />;
	}

	return (
		<main className="max-w-2xl mx-auto py-10">
			<Link
				href="/"
				className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
			>
				← Back
			</Link>
			<h1 className="text-3xl font-bold mb-4">{property.title}</h1>
			<div className="mb-6 h-64 w-full relative rounded-lg overflow-hidden">
				<Image src={getImageUrl()} alt={property.title} fill className="object-cover" />
			</div>
			<p className="text-lg font-semibold mb-2">Location: {property.location}</p>
			<p className="text-lg font-bold mb-4">Price: ${property.price.toLocaleString()}</p>
			<div className="prose max-w-none">{renderDescription()}</div>
		</main>
	);
}
