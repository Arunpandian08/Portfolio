// @refresh reset

import Lenis from 'lenis';
import { memo, useEffect, useRef, useState } from 'react';

export function useLenisScroll() {
    const [lenis, setLenis] = useState(null);
    const lenisRef = useRef(null);

    useEffect(() => {
        if (!lenisRef.current) {
            lenisRef.current = new Lenis({
                duration: 1.2,
                easing: (t) => Math.sin((t * Math.PI) / 2),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });


            function raf(time) {
                lenisRef.current.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            setLenis(lenisRef.current);
        }

        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
        };
    }, []);

    return lenis;
};

export default memo(useLenisScroll);