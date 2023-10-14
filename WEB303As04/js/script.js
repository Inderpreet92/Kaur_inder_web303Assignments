/*
    Assignment #4
    Inderpreet Kaur
*/
$(function () {
    // Function to get the user's location
    function getUserLocation() {
        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => resolve(position),
                    (error) => reject(error)
                );
            } else {
                reject("Geolocation is not available in your browser.");
            }
        });
    }

// Function to use the Haversine formula to determine the separation between two coordinates.
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in kilometer
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c * 1000; // Distance in meters
        return distance;
    }

    // Function to handle location and storage
    async function handleLocationAndStorage() {
        try {
            const position = await getUserLocation();
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const locationHere = document.getElementById("locationhere");
            locationHere.textContent = `Current Location: Latitude ${latitude}, Longitude ${longitude}`;

            const storedLocation = localStorage.getItem("userLocation");

            if (storedLocation) {
                const [storedLat, storedLon] = storedLocation.split(",");
                const distance = calculateDistance(latitude, longitude, parseFloat(storedLat), parseFloat(storedLon));

                const welcomeMessage = document.getElementById("welcomeMessage");
                welcomeMessage.textContent = "Welcome back to the page!";

                const distanceTravelled = document.getElementById("distanceTravelled");
                distanceTravelled.textContent = `You traveled ${distance.toFixed(2)} meters since your last visit.`;
            } else {
                const welcomeMessage = document.getElementById("welcomeMessage");
                welcomeMessage.textContent = "Welcome to the page for the first time!";
                localStorage.setItem("userLocation", `${latitude},${longitude}`);
            }
        } catch (error) {
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.textContent = error;
        }
    }

    handleLocationAndStorage();
});
