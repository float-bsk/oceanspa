const backend = import.meta.env.VITE_BACKEND;

export default async function getBookingsData(){
    const data = await fetch(`${backend}/bookings`);    
    return data.json();
}