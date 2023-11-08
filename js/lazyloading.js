const objects = document.getElementsByClassName("animation")

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function() {
    let animatedDivs = [].slice.call(document.querySelectorAll(".animated"));

    if ("IntersectionObserver" in window) {
        let animationObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let animatedDiv = entry.target;
                    for (const object of objects) {
                        animateValue(object, 0, object.innerHTML, 5000);
                    }
                    animationObserver.unobserve(animatedDiv);
                }
            });
        });

        animatedDivs.forEach(function(animatedDiv) {
            animationObserver.observe(animatedDiv);
        });
    }
});

function startAnimation(element) {
    // Tu código de animación aquí
}
