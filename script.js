document.addEventListener('DOMContentLoaded', () => {
    // Select all progress fills
    const progressFills = document.querySelectorAll('.progress-fill');

    // Function to animate progress bars
    const animateBars = () => {
        progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-value') + '%';
            // Determine the metric value element associated with this bar
            // Assuming the structure: .metric-item > .progress-bar-container > .progress-fill
            // And .metric-item > .metric-value
            const parent = fill.closest('.metric-item');
            const valueText = parent.querySelector('.metric-value');
            
            // Set width for animation
            setTimeout(() => {
                fill.style.width = targetWidth;
            }, 300); // Slight delay for visual effect on load

            // Animate text counter
            if (valueText) {
                const targetValue = parseInt(fill.getAttribute('data-value'));
                let currentValue = 0;
                const duration = 1500; // Animation duration in ms
                const stepTime = Math.abs(Math.floor(duration / targetValue));
                
                const timer = setInterval(() => {
                    currentValue += 1;
                    valueText.textContent = currentValue + "%";
                    if (currentValue >= targetValue) {
                        clearInterval(timer);
                    }
                }, stepTime);
            }
        });
    };

    // Run animation
    animateBars();
});
