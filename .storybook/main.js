module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@storybook/addon-styling-webpack',
      ({
        name: "@storybook/addon-styling-webpack",

        options: {
          rules: [{
        test: /\.css$/,
        sideEffects: true,
        use: [
            require.resolve("style-loader"),
            {
                loader: require.resolve("css-loader"),
                options: {
                    
                    importLoaders: 1,
                },
            },{
      loader: require.resolve("postcss-loader"),
      options: {
      implementation: require.resolve("postcss"),
      },
      },
        ],
      },],
        }
      })
    ],

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  framework: {
    name: "@storybook/react-webpack5",
      options: {
          postCss: true,
    }
  },

  docs: {
    autodocs: true
  }
};
