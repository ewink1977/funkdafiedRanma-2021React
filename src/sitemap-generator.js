require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require("../src/Routes.js").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
    new Sitemap(router)
        .build("https://funkdafied.douglasavenue.com")
        .save("sitemap.xml")
    );
}

generateSitemap();