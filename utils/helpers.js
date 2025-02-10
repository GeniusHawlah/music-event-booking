
export function calculateCountdown({eventDate}) {
  const now = new Date();
  const eventTime = new Date(eventDate);
  const diff = eventTime - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, diff };
};

  export function formattedArtistes(arr) {
    if (arr.length === 0) return ""; // Handle empty array case
    if (arr.length === 1) return arr[0]; // Handle single item case
    if (arr.length === 2) return arr.join(" and "); // Handle two items
  
    const lastItem = arr.pop(); // Remove the last item
    return arr.join(", ") + " and " + lastItem; // Join with commas and add "and" before the last item
  };

  export   function getRandomFutureDate() {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30) + 1; // Random number between 1 and 30
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + randomDays);
    return futureDate.toISOString();
  };
