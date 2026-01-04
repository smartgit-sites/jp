(function() {
    function fetchBuildNumber(buildUrl, versionElement) {
        fetch(buildUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(jsonData => {
                const buildNumber = jsonData.build;
                if (buildNumber) {
                    const buildSpan = versionElement.parentElement.querySelector('.build-number');
                    if (buildSpan) {
                        buildSpan.textContent = ' (build ' + buildNumber + ')';
                        buildSpan.style.display = 'inline';
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching build number:', error);
            });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const versionElements = document.querySelectorAll('.version-title[data-build-url]');
        
        versionElements.forEach(function(element) {
            const buildUrl = element.getAttribute('data-build-url');
            if (buildUrl) {
                fetchBuildNumber(buildUrl, element);
            }
        });
    });
})();