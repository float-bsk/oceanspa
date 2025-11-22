import { useEffect, useState } from "react"
import getBookingsData from "../../api/bookings"

type Bookings = {
  bookid:number,
  memid:number,
  starttime:string,
  slots:number
}[]

const BookingsPage = () => {
  const [data, setData] = useState<Bookings>();
  useEffect(()=>{
    async function load(){
      const res = await getBookingsData();
     if(res){
      setData(res)
     }
    }
    load();
  },[])
  return (
    <div className="pt-20 md:pt-12 overflow-auto">
    <h3>Bookings</h3>
      <table border={1} cellPadding={8} cellSpacing={8} className="overflow-auto">
        <thead>
          <tr>
            <th className="py-1 px-4 border text-left">Booking ID</th>
            <th className="py-1 px-4 border text-left">Member ID</th>
            <th className="py-1 px-4 border text-left">Start Time</th>
            <th className="py-1 px-4 border text-left">No. Slots</th>
          </tr>
        </thead>
        <tbody>
          {
           data && data.map((booking)=>              
              <tr key={booking.bookid}>
                <td className="py-1 px-4 border text-left">{booking.bookid}</td>
                <td className="py-1 px-4 border text-left">{booking.memid}</td>
                <td className="py-1 px-4 border text-left">{new Date(booking.starttime).toDateString()}</td>
                <td className="py-1 px-4 border text-left">{booking.slots}</td>
              </tr>            
            )
          }
        </tbody>
      </table>   
    </div>
  )
}

export default BookingsPage