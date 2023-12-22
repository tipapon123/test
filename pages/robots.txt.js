
import React, { Component } from "react";

export default class Robots extends Component {
    static getInitialProps({ res }) {
        res.setHeader("Content-Type", "text/plain");
        res.write(`User-agent: *      
Allow: /$
Allow: /css/
Allow: /js/
Allow: /images/
Disallow: /_next/
Disallow: /api/
Disallow: /public/
Sitemap: ${process.env.BASE_URL_DOMAIN}/sitemap.xml`);
        res.end();
    }
}
