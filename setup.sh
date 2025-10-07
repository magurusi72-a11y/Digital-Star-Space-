#!/bin/bash

echo "🚀 Starting cleanup and setup for Digital Star Space..."

# 1. Delete old folders and files
rm -rf src public node_modules package-lock.json
rm -f package.json tailwind.config.js postcss.config.js

# 2. Create new folders
mkdir -p src/{components,pages,styles,config}
mkdir -p public

# 3. Create new package.json
cat <<EOF > package.json
{
  "name": "digital-star-space",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.1.6",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "^3.3.4",
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.27",
    "react-modal": "^3.16.1",
    "nodemailer": "^6.9.5"
  }
}
EOF

# 4. Tailwind config
cat <<EOF > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOF

# 5. PostCSS config
cat <<EOF > postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# 6. Create main index page
cat <<EOF > src/pages/index.js
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-2xl font-bold">
      🚀 Digital Star Space is Live!
    </div>
  );
}
EOF

# 7. Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete! Run 'npm run dev' to start your project."