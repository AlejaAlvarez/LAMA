import "../styles/global.css";
import React from 'react';

interface HeadProps {
    title: string;
    description?: string;
    favicon?: string;
    charset?: string;
    viewport?: string;
}

const Head: React.FC<HeadProps> = ({
    title,
    description = "Mi sitio web personal",
    favicon = "/logo lama.svg",
    charset = "UTF-8",
    viewport = "width=device-width"
}) => {
    return (
        
        <>
            <meta charSet={charset} />
            <meta name="viewport" content={viewport} />
            <link rel="icon" type="image/svg+xml" href={favicon} />
            <meta name="description" content={description} />
            <meta name="generator" content="Astro" />
            <title>{title}</title>
        </>
        
    );
};

export default Head;
