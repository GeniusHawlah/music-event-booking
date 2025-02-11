# MUSIC EVENT BOOKING APP  

### GitHub Link:  
[music-event-booking](#) *(https://github.com/GeniusHawlah/music-event-booking)*  

I don't think the code will work locally unless I expose the database string, email credentials, and other backend-sensitive information. Therefore, as suggested in the instruction document for the test, below is the link to the live demo.  

### Live Demo:  
[Music Event Booking App](https://fobework-music-event-booking.vercel.app)  

---

## 📖 Documentation  

### 🎟 Homepage  
- Below the hero section, there is a grid of **popular events** (events with the highest bookings), retrieved from a MongoDB database and sorted by event dates (earliest first).  
- The nav bar has a **search feature** (icon on mobile, input field on larger screens) allows users to search by **event title, description, genre, or artist name**.  

### 📌 Event Details Page  
- Clicking on an event leads to the **event details page**, displaying more detailed event relevant details.  
- A seat selection system shows serialized seats, based on the number of seats set when creating an event.
- **Seat Availability:**  
  - Available seats are green.  
  - Booked seats are red, disabled, and have a forbidden mouse event.  
- Clicking an available seat triggers a **booking form** where users input their name and email before clicking Book Seat.  
- On booking, the system updates the database, marking the seat as booked and updating the **event attendees list**.  This attendee list isn't displayed anywhere in this submission, it's just to take record of the list of people attending an event.

### 🔄 Real-Time Seat Updates  
- Booked seats turn red in real-time, ensuring other users see the updated status.  
- Seats refresh every five seconds for near-instant updates.  
- If for some reasons, an already booked seat that's yet to update on frontend is selected by a user, the backend handles it gracefully, preventing conflicts. Even for deleted events and some nearly impossible scenarios.

### ⏳ Event Countdown & Notifications  
- Each event has a countdown timer, retrieved from the backend and updated periodically.  
- A notification icon on the navbar to inform users about event cancellations or reschedulings.  

### 📱 Responsiveness & Design  
- The entire platform is fully responsive, supporting **cross-device and cross-browser compatibility**.  
- **Theme:** A **neon light and cosmic-inspired design** (space dark color with star-like lights).  

### 🛠️ Tech Stack  
- **Next.js 15 App Router**  
- **TailwindCSS** (styling)  
- **Flowbite React** (some basic UI components)  
- **MongoDB** (database)  
- **Prisma** (ODM & schema enforcement)  
- **Zod** (input validation)  
- **Zustand** (frontend state management)  

### 🔍 SEO & Metadata  
- The event details page is pre-generated using Next.js **dynamic segments**, ensuring SEO optimization.  
- Each event page has unique metadata, allowing proper preview when shared on social media (title, description, and image).  

### 🚧 Challenges Faced  
1. **Static vs. Dynamic Rendering**:  
   - I initially struggled whether to utilize `generateStaticParams` for event pages or a state-based approach. I chose `generateStaticParams` for SEO benefits.  

2. **Color Combination Challenges**:  
   - As I'm used to pre-designed Figma projects, making color-combination decisions from scratch led to unnecessary indecision.  

---
