Bonjour Cécile ! Ce site a été conçu pour être léger et rapide. Pour ajouter ou modifier des œuvres dans votre galerie, suivez ces étapes simples.

1. Préparer vos photos
Format : Utilisez uniquement du .jpg ou .jpeg.

Poids : Essayez de réduire le poids de vos photos (max 500 Ko par image) sur des sites comme TinyJPG pour que le site reste rapide.

Dépôt : Placez vos nouvelles photos dans le dossier nommé oeuvres.

2. Ajouter une œuvre dans la Galerie
Ouvrez le fichier galerie.html avec un éditeur de texte (Bloc-notes, TextEdit ou VS Code). Cherchez la zone qui commence par <div class="gallery" ...>.

Chaque œuvre est représentée par ce bloc de code. Copiez et collez ce bloc pour chaque nouvelle œuvre :

HTML
<div class="artwork peinture"> <img src="oeuvres/NOM_DE_VOTRE_PHOTO.jpeg" alt="Titre de l'oeuvre">
    <div class="artwork-info">
        <div class="artwork-title">TITRE DE L'OEUVRE</div>
        <div class="artwork-desc">Description, format et prix.</div>
    </div>
</div>

Points de vigilance :

La catégorie : Dans la première ligne, gardez bien le mot artwork et ajoutez juste à côté la catégorie (peinture, calligraphie ou collage) pour que les boutons de filtrage fonctionnent.

Le nom du fichier : Le nom dans le code (src="oeuvres/...") doit être exactement le même que celui de votre fichier image (majuscules comprises).

3. Mettre le site en ligne
Une fois vos modifications enregistrées :

Connectez-vous à votre interface d'hébergement (ex: Hostinger ou Netlify).

Glissez-déposez l'ensemble des dossiers et fichiers à la place des anciens.

