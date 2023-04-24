# kesjus-react-projektas:

# stiliai
# npm install sass --save-dev
# npm i tailwind

npm install vite-plugin-eslint eslint eslint-config-react-app --save-dev
.eslintrc > {"extends": ["react-app"]}
vite.config.js >> import eslint from 'vite-plugin-eslint';
vite.config.js >> plugins: [react(), eslint()],