const backend = import.meta.env.VITE_BACKEND;
console.log(backend);
export async function getFacilitiesData(){
    const data = await fetch(backend +  "/" + "facilities");    
    return data.json();
}
