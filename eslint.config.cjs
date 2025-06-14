module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["react", "@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    rules: {
        "no-unused-vars": "error",
        "prefer-arrow-callback": "error"
    }
};
