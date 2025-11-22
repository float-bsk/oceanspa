
export default async function getMembersData(){
    const backendUrl = import.meta.env.VITE_BACKEND;
    const data = await fetch(backendUrl + "/" + 'members');
    return data.json();
}