export const getCurrentDate = async () => {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/America/Denver');
        const data = await response.json();
        const currentDate = new Date(data.datetime);
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        document.getElementById('calendar').textContent = `${formattedDate}`;
    } catch (error) {
        console.error('Error fetching date:', error);
    }
}

getCurrentDate();