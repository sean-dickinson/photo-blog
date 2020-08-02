export default {
    inserted: (el: HTMLElement) => {
        function loadImage() {
            const element: Element | undefined = Array.from(el.children).find(
                (imgEl) => imgEl.nodeName === 'IMG',
            );
            if (element) {
                const imageElement = element as HTMLImageElement;
                imageElement.addEventListener('load', () => {
                    setTimeout(() => el.classList.add('loaded'), 100);
                });
                imageElement.addEventListener('error', () => console.log('error'));
                imageElement.src = imageElement.dataset.url as string;
            }
        }

        function handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            console.log(entries);
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(el);
                }
            });
        }

        function createObserver() {
            const options: IntersectionObserverInit = {
                root: null,
                threshold: .25,
            };
            const observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(el);
        }
        if ('IntersectionObserver' in window) {
            createObserver();
        } else {
            loadImage();
        }
    },
};
