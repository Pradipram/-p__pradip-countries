import terser from "@rollup/plugin-terser";

const devMode = process.env.NODE_ENV === "development";

export default [
    {
        input: "src/index.js",
        output: {
            file: "dist/index.js",
            format: "es",
            sourcemap: devMode ? "inline" : false,
        },
        plugins: [
            // babel({
            //     exclude: "node_modules/**",
            //     babelHelpers: "bundled",
            //     presets: ["@babel/preset-react", "@babel/preset-env"],
            // }),
            terser({
                ecma: 2020,
                mangle: { toplevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: !devMode,
                    drop_debugger: !devMode,
                },
                output: { quote_style: 1 },
            }),
        ],
    },
];
