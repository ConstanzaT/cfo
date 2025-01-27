
    // Hero background animado
    const heroSection = document.querySelector('.hero-section');
    let isGrowing = true;
    let scaleValue = 100;

    setInterval(() => {
        if (isGrowing) {
            scaleValue += 0.2;
            if (scaleValue >= 105) isGrowing = false;
        } else {
            scaleValue -= 0.2;
            if (scaleValue <= 100) isGrowing = true;
        }
        heroSection.style.backgroundSize = `${scaleValue}%`;
    }, 50);