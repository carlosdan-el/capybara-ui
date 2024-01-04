module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
};