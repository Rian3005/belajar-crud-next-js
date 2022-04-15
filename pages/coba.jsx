import { useState } from "react";
import { useRouter } from "next/router";


import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient;



export async function getStaticProps() {
    const posts = await prisma.post.findMany();
    return {
        props: { data: posts }
    }
}
export default function Coba({ data }) {
    const router = useRouter();

    async function hapus(id) {
        await fetch(`api/post/${id}`, {
            method: 'DELETE',
        })
        location.reload()

    }
    return (
        <>
            <div className="mx-auto w-32">
                <a href="/tes">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                        Add +
                    </button>
                </a>
            </div>
            <div className="flex flex-wrap mx-auto">
                {data.map(post => (
                    <div className="p-10" key={post.id} >

                        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                            <img className="w-full" src="https://images.unsplash.com/photo-1649452815098-687edf2fd7fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Mountain" />
                            <div className="px-6 py-4">
                                <a href="">
                                    <h1 className="font-bold text-xl mb-2">{post.title}</h1>
                                    <p className="text-gray-700 text-base">
                                        {post.excerpt}
                                    </p>
                                </a>
                            </div>
                            <div className="flex justify-between py-5 px-2">
                                <a href="/edit">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </button>
                                </a>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => hapus(post.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}