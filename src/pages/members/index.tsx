import { useState, useEffect } from "react"


import getMembersData from "../../api/members"
const MembersPage = () => {

  type Members = {
    memid: number,
    surname: string,
    firstname: string,
    address: string,
    zipcode: number,
    telephone: string,
    recommendedby: number,
    joindate: EpochTimeStamp
  }[]
  
  const [data, setData] = useState<Members>();

  //fetch members list from backend express
  useEffect(() => {
    getMembersData()
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <div className="pt-20 md:pt-12 overflow-auto">
      <h2 className="font-bold text-left underline my-2 italic text-sm">List of Members:</h2>

      <table border={1} cellPadding={8} cellSpacing={8} className="text-sm">
        <thead className="bg-zinc-600">
          <tr>
            <th className="py-1 px-4 border text-left">Member Id</th>
            <th className="py-1 px-4 border text-left">Lastname</th>
            <th className="py-1 px-4 border text-left">Firstname</th>
            <th className="py-1 px-4 border text-left">Address</th>
            <th className="py-1 px-4 border text-left">Zipcode</th>
            <th className="py-1 px-4 border text-left">Telephone</th>
            <th className="py-1 px-4 border text-left">Recommended By</th>
            <th className="py-1 px-4 border text-left">Join Date</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((member) =>
              <tr key={member.memid}>
                <td className="py-1 px-4 border text-left">{member.memid}</td>
                <td className="py-1 px-4 border text-left">{member.surname}</td>
                <td className="py-1 px-4 border text-left">{member.firstname}</td>
                <td className="py-1 px-4 border text-left">{member.address}</td>
                <td className="py-1 px-4 border text-left">{member.zipcode}</td>
                <td className="py-1 px-4 border text-left">{member.telephone}</td>
                <td className="py-1 px-4 border text-left">{member.recommendedby}</td>
                <td className="py-1 px-4 border text-left">{new Date(member.joindate).toDateString()}</td>

              </tr>
            )
          }
        </tbody>
      </table>
     
    </div>

  )
}

export default MembersPage