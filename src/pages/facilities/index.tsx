import { useEffect, useState } from "react"
import { getFacilitiesData } from "../../api/facilities";

type Facility = {
  facid:number,
  name:string,
  membercost:number,
  guestcost:number,
  initialoutlay:number,
  monthlymaintenance:number
}[]

const FacilitiesPage = () => {
  const [data, setData] = useState<Facility>();

  useEffect(() => {
    async function load() {
      const res = await getFacilitiesData();
      if (res) {
        setData(res)
      }
    }
    load();
  }, [])
  return (
    <div className="pt-20 md:pt-12 overflow-auto">
      <h3>Facilities</h3>
      <table border={1} cellPadding={8} cellSpacing={8} align="left" >
        <thead>
          <tr>
            <th className="py-1 px-4 border text-left">Facility ID</th>
            <th className="py-1 px-4 border text-left">Name</th>
            <th className="py-1 px-4 border text-left">Member Cost</th>
            <th className="py-1 px-4 border text-left">Guest Cost</th>
            <th className="py-1 px-4 border text-left">Initial Outlay</th>
            <th className="py-1 px-4 border text-left">Monthly Maintenance</th>
          </tr>
        </thead>
        <tbody>

          {data && data.map((facility) =>
            <tr key={facility.facid}>
              <th className="py-1 px-4 border text-left">{facility.facid}</th>
              <th className="py-1 px-4 border text-left">{facility.name}</th>
              <th className="py-1 px-4 border text-left">{facility.membercost}</th>
              <th className="py-1 px-4 border text-left">{facility.guestcost}</th>
              <th className="py-1 px-4 border text-left">{facility.initialoutlay}</th>
              <th className="py-1 px-4 border text-left">{facility.monthlymaintenance}</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default FacilitiesPage