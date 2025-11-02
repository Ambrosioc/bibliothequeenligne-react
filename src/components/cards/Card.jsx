import React from "react";
import { useNavigate } from "react-router-dom";
import {
	CardBookInfo,
	CardBookLi,
	CardBookUl,
	CardContainer,
	LastBooksImg,
} from "../../utils/styles/StyledCard";


export default function Card({ data }) {
	const navigate = useNavigate();

	// Fonction pour créer un SVG placeholder sans emojis (compatible avec btoa)
	const createPlaceholderSVG = (width = 400, height = 400) => {
		const svgString = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
			<rect width="${width}" height="${height}" fill="#f5f0e8"/>
			<circle cx="${width/2}" cy="${height/2 - 20}" r="40" fill="#d4af37" opacity="0.3"/>
			<rect x="${width/2 - 30}" y="${height/2 - 10}" width="60" height="80" rx="4" fill="#8b4513" opacity="0.6"/>
			<rect x="${width/2 - 20}" y="${height/2 - 5}" width="40" height="70" rx="2" fill="#2c5530" opacity="0.4"/>
			<text x="50%" y="${height/2 + 80}" text-anchor="middle" font-size="20" fill="#8b4513" font-family="Arial, sans-serif">Livre</text>
		</svg>`;
		return `data:image/svg+xml;base64,${btoa(svgString)}`;
	};

	// Fonction pour gérer les erreurs de chargement d'image
	const handleImageError = (e) => {
		e.target.src = createPlaceholderSVG();
		e.target.onerror = null; // Éviter les boucles infinies
	};

	return (
		<CardContainer>
			<CardBookUl>
				{data && data.map((book, index) => {
					// Déterminer l'URL de l'image
					let imageSrc = book.coverImage;
					
					// Si pas d'image, utiliser un SVG inline
					if (!imageSrc || imageSrc.trim() === '') {
						imageSrc = createPlaceholderSVG();
					}

					return (
						<CardBookLi
							key={`${book.name || book.id}-${index}`}
							onClick={() => {
								const bookId = book._links?.self?.href?.split("/").pop() || book.id;
								if (bookId) {
									navigate(`/book/${bookId}`);
								}
							}}>
							<LastBooksImg
								src={imageSrc}
								alt={book.title || "Livre"}
								onError={handleImageError}
							/>
							<CardBookInfo>
								<p>
									{book.title || "Sans titre"} <br /> 
									{book.author?.firstName || ""} {book.author?.lastName || ""}
								</p>
							</CardBookInfo>
						</CardBookLi>
					);
				})}
			</CardBookUl>
		</CardContainer>
	);
}
