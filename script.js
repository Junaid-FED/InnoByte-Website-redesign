document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 150; // Adjust this value to control the speed

        let count = 0;
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count) + '+';
                setTimeout(updateCount, 10); // Adjust timing for smoother animation
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCount();
    });
});
