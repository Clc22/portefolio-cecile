// 1. Fonction de filtrage
function filterImages(category) {
    const artworks = document.querySelectorAll('.artwork');
    const buttons = document.querySelectorAll('.cat-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText === 'Tout')) {
            btn.classList.add('active');
        }
    });

    artworks.forEach(art => {
        if (category === 'all' || art.classList.contains(category)) {
            art.style.display = 'inline-block'; 
        } else {
            art.style.display = 'none';
        }
    });
}

// 2. Lightbox et Génération PDF
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LIGHTBOX LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.artwork img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox) {
        images.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; });
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.style.display = 'none'; });
    }

    // --- PDF GENERATION LOGIC ---
    const pdfBtn = document.getElementById('download-pdf');
    
    if(pdfBtn) {
        pdfBtn.addEventListener('click', () => {
            // Changer le texte du bouton pendant le chargement
            const originalText = pdfBtn.innerHTML;
            pdfBtn.innerHTML = "Génération en cours...";
            
            // 1. Préparer le contenu : Copier les oeuvres dans le template PDF
            const pdfGrid = document.getElementById('pdf-gallery-grid');
            pdfGrid.innerHTML = ''; // Vider avant de remplir
            
            const artworks = document.querySelectorAll('.artwork');
            
            artworks.forEach(art => {
                // On ne prend que les oeuvres visibles (si filtrées) ou toutes
                if(art.style.display !== 'none') {
                    const img = art.querySelector('img').src;
                    const title = art.querySelector('.artwork-title').innerText;
                    const desc = art.querySelector('.artwork-desc').innerText;

                    // Création de l'élément HTML pour le PDF (Format carte)
                    const itemHTML = `
                        <div class="pdf-artwork-item">
                            <img src="${img}" />
                            <div class="pdf-artwork-title">${title}</div>
                            <div class="pdf-artwork-desc">${desc}</div>
                        </div>
                    `;
                    pdfGrid.innerHTML += itemHTML;
                }
            });

            // 2. Options de configuration PDF
            const element = document.getElementById('pdf-content');
            const opt = {
                margin:       0,
                filename:     'Portfolio-Cecile-Le-Chene.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true }, // Scale 2 pour meilleure qualité
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // 3. Générer et Sauvegarder
            html2pdf().from(element).set(opt).save().then(() => {
                // Remettre le bouton normal
                pdfBtn.innerHTML = originalText;
            });
        });
    }
});