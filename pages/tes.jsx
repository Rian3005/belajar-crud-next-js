import { useRouter } from 'next/router'
import { useState } from 'react';


export default function Tes() {
    const router = useRouter()
    const [formData, setFormData] = useState({});

    const saveData = async e => {
        e.preventDefault()
        try {
            await fetch('api/post', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            // await router.push('/coba')
            alert('data ditambah')
            e.target.reset();

        } catch (error) {
            console.error(error)
        }

    }



    return (
        <section className="bg-white">
            <div className="max-w-full sm:max-w-3xl mx-auto h-screen flex items-center">
                <form action="#" className="w-full sm:w-[250px] p-4 mx-auto flex flex-col bg-gray-200 rounded-md" onSubmit={saveData} >
                    <input type="text" placeholder="title" className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md" onChange={e => setFormData({ ...formData, title: e.target.value })} />
                    <input type="" placeholder="excerpt" className="px-3 py-2.5 border-2 border-gray-800 rounded-md" onChange={e => setFormData({ ...formData, excerpt: e.target.value })} />
                    <button className="px-2 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white mt-3" type="submit" >add data</button>
                </form>
            </div>
        </section>
    )
}