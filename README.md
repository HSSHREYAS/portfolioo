# H.S. Shreyas — Portfolio

Personal developer portfolio for **H.S. Shreyas**, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

🔗 **Live Demo:** [https://hsshreyas.github.io/portfolioo/](https://hsshreyas.github.io/portfolioo/)  
📦 **Repository:** [https://github.com/HSSHREYAS/portfolioo](https://github.com/HSSHREYAS/portfolioo)

---

## 🚀 Features

- **Cyberpunk / Dark Minimalist Aesthetic**: Deep obsidian backgrounds (`#0C0C0C`) with neon amber and emerald accents.
- **Fluid Micro-interactions**: Smooth transitions and scroll animations powered by Framer Motion.
- **Cinematic Hero**: Ambient video background with high-contrast typography and quick navigation.
- **Interactive Projects Showcase**: Detailed views, architecture tags, and links for key projects.
- **100% Responsive**: Tailored for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages (Automated via GitHub Actions)

---

## 💻 Local Development

Clone the repository and install dependencies:

```powershell
git clone https://github.com/HSSHREYAS/portfolioo.git
cd portfolioo
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 📦 Build for Production

```powershell
npm run build
npm run preview
```

---

## 🚢 Deployment

The repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that triggers on every push to `main`:
1. Installs dependencies and builds the production bundle with Vite.
2. Deploys the static assets directly to **GitHub Pages**.

To verify GitHub Pages settings:
- Go to repository **Settings** → **Pages**
- Under **Build and deployment**, ensure **Source** is set to **GitHub Actions**.
