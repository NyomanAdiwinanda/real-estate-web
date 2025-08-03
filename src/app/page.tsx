import { getPublishedProperties } from "@/lib/sanity/property";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const properties = await getPublishedProperties();

	return (
		<main className="max-w-4xl mx-auto py-10">
			<h1 className="text-3xl font-bold mb-8">Find Your Dream Property</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{properties.map(property => (
					<Link
						key={property._id}
						href={`/property/${property.slug.current}`}
						className="block border border-gray-200 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition hover:border-blue-300"
					>
						<div className="h-48 w-full relative bg-blue-50">
							{property.image && (
								<Image
									src={property.image.asset?.url || "/window.svg"}
									alt={property.title}
									fill
									className="object-cover"
								/>
							)}
						</div>
						<div className="p-4">
							<h2 className="text-xl font-semibold mb-2 text-blue-900">{property.title}</h2>
							<p className="text-blue-700 mb-1 flex items-center gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5 text-blue-500 inline-block"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 21c-.552 0-1-.448-1-1v-1.586C7.053 16.36 4 13.278 4 9.75 4 6.272 7.134 3 12 3s8 3.272 8 6.75c0 3.528-3.053 6.61-7 8.664V20c0 .552-.448 1-1 1z"
									/>
									<circle cx="12" cy="9.75" r="2.25" fill="currentColor" />
								</svg>
								{property.location}
							</p>
							<p className="text-blue-800 font-bold">${property.price.toLocaleString()}</p>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}
