const staticUrl = "/images/";

const classPatterns = [
    ["sg", "sg-"],
    ["sgb", "sg-"]
];

async function injectSVGsByPatterns(patterns, pathClass = 'svg-path', strokeClass = 'svg-stroke') {
    const elements = document.querySelectorAll('*');
    const svgForms = ['rect', 'path', 'd', 'polygon'];

    for (const el of elements) {
        for (const [groupClass, prefix] of patterns) {
            if (el.classList.contains(groupClass)) {
                const iconClass = Array.from(el.classList).find(cls =>
                    cls.startsWith(prefix)
                );

                if (iconClass) {
                    const url = `${staticUrl}${iconClass}.svg`;
                    const colors = getColors(el, 'data-sg');
                    const strokeColors = getColors(el, 'data-sg-stroke');

                    try {
                        const response = await fetch(url);
                        const svgText = await response.text();
                        const parser = new DOMParser();
                        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
                        const svgEl = svgDoc.querySelector('svg');

                        svgEl.querySelectorAll('[fill]').forEach(e => {
                            if(e.getAttribute('fill') !== 'none') e.removeAttribute('fill')
                        });

                        for (const svgForm of svgForms) {
                            svgEl.querySelectorAll(svgForm).forEach(f => {
                                for(const [i, c] of colors.entries()){
                                    if(f.classList.contains(`e${i}`)){
                                        f.classList.add(c);
                                    }
                                }
                                if(f.getAttribute('stroke') ){
                                    if(strokeColors.length > 1) {
                                        for (const [i, c] of strokeColors.entries()) {
                                            if (f.classList.contains(`e${i}`)) {
                                                f.setAttribute('style', 'stroke:' + c);
                                                f.removeAttribute('stroke');
                                                break;
                                            }
                                        }
                                    }else{
                                        f.setAttribute('style', 'stroke:'+strokeColors[0]);
                                        f.removeAttribute('stroke');
                                    }
                                }
                                if(f.getAttribute('fill') !== 'none') f.classList.add(pathClass)
                            });
                        }

                        el.classList.add('icon');
                        el.appendChild(svgEl);
                        fitViewBox(svgEl);
                    } catch (err) {
                        console.error(`Failed to load ${url}:`, err);
                    }

                    break; // Done for this element
                }
            }
        }
    }
}

function fitViewBox(svg) {
    const bbox = svg.getBBox();
    const padding = 1; // optional padding
    const minX = bbox.x - padding;
    const minY = bbox.y - padding;
    const width = bbox.width + padding * 2;
    const height = bbox.height + padding * 2;
    svg.setAttribute('viewBox', `${minX} ${minY} ${width} ${height}`);
}

function getColors(e, attr) {
    const colors = e.getAttribute(attr);
    if(!colors) return [];
    if(colors.indexOf(",") === -1) return [colors];
    return colors.split(",");
}

injectSVGsByPatterns(classPatterns);