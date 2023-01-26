import { useState } from "react";

export const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return width;
}