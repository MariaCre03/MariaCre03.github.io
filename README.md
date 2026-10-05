# Sito Web Personale Accademico - Maria Creanza

Questo repository contiene il sito web accademico personale per **Maria Creanza**, basato sullo stile e tema Minimal Light (come [pasqualedem.github.io](https://pasqualedem.github.io/)), ottimizzato per **GitHub Pages**.

---

## 🚀 Come pubblicare il sito su GitHub Pages (Guida rapida)

### Opzione A: Tramite Git da terminale

1. Su GitHub (con il tuo account, es. `mariacreanza`), crea un nuovo repository pubblico chiamato esattamente:
   ```text
   mariacreanza.github.io
   ```
   *(sostituisci `mariacreanza` con il tuo vero username GitHub)*

2. Apri il terminale in questa cartella (`c:\Users\maria\OneDrive - Università degli Studi di Bari\dottorato\pagina githubio`) ed esegui:
   ```bash
   git init
   git add .
   git commit -m "Initial commit del sito accademico"
   git branch -M main
   git remote add origin https://github.com/mariacreanza/mariacreanza.github.io.git
   git push -u origin main
   ```

3. Vai su GitHub nelle impostazioni del repository:
   - **Settings** -> **Pages**
   - Sotto **Build and deployment**:
     - Source: **Deploy from a branch**
     - Branch: **main**, cartella `/ (root)`
     - Clicca su **Save**
   - Entro 1-2 minuti il tuo sito sarà online all'indirizzo `https://mariacreanza.github.io/`!

---

## 📁 Struttura dei file

- `index.html`: Pagina principale con About me, Research interests, News, Pubblicazioni ed Education.
- `_config.yml`: File di configurazione per GitHub Pages e Jekyll.
- `assets/`
  - `img/`
    - `avatar.png`: La foto profilo (puoi sostituirla con una tua foto reale quadrata).
    - `parkinson_fuzzy.png`: Immagine teaser del tuo paper accettato ad AIPHEA @ IEEE WCCI 2026.
    - `favicon.png` e `favicon-dark.png`: Icone della scheda del browser.
  - `css/`: Fogli di stile per il layout, font e modalità chiara/scura.
  - `js/`: Script per lo switch dark mode (`theme.js`), toggle news (`news.js`) e fix di scaling.
  - `files/`: Cartella dove inserire il tuo Curriculum Vitae (`curriculum_vitae.pdf`).

---

## ✏️ Come personalizzare i contenuti

Nel file `index.html`:

1. **Foto profilo**:
   - Sostituisci il file `assets/img/avatar.png` con la tua foto preferita (mantenendo lo stesso nome file o aggiornando il percorso in `index.html`).

2. **Link ai tuoi profili (Google Scholar, LinkedIn, GitHub, CV)**:
   - Cerca la sezione `<div class="social-icons">` in `index.html` e inserisci i link corretti ai tuoi account:
     - Google Scholar: `href="https://scholar.google.com/citations?user=..."`
     - LinkedIn: `href="https://www.linkedin.com/in/tuo-profilo"`
     - GitHub: `href="https://github.com/tuo-username"`

3. **Curriculum Vitae**:
   - Inserisci il tuo PDF nella cartella `assets/files/` con il nome `curriculum_vitae.pdf`.

4. **Aggiungere nuovi paper o notizie**:
   - Per le **News**: duplica un blocco `<div class="news-item">...</div>` e aggiorna data e testo.
   - Per le **Pubblicazioni**: duplica il blocco `<li><div class="pub-row">...</div></li>` e modifica titolo, autori, venue e BibTeX.
