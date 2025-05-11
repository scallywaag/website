const floatingIcons = document.querySelectorAll('.floating-icon');
const totalDuration = 30;
const steps = 20;

floatingIcons.forEach((icon, index) => {
    const animationName = `complexFloat${index}`;
    let keyframeString = `@keyframes ${animationName} {\n  0% { transform: translate(0, 0); }\n`;

    for (let i = 1; i <= steps; i++) {
        const percentage = (i / steps) * 500;
        const translateX = (Math.random() - 0.5) * 300;
        const translateY = (Math.random() - 0.5) * 250;

        keyframeString += `  ${percentage.toFixed(2)}% { transform: translate(${translateX}px, ${translateY}px); }\n`;
    }

    keyframeString += `  100% { transform: translate(0, 0); }\n}`;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = keyframeString;
    document.head.appendChild(styleSheet);

    icon.style.animationName = animationName;
    icon.style.animationDuration = `${totalDuration}s`;
    icon.style.animationIterationCount = 'infinite';
    icon.style.animationDirection = 'alternate';
    // icon.style.animationTimingFunction = 'linear'; 
});
