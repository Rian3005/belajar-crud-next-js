import { useRouter } from 'next/router'
import { useState } from 'react';
import Layout from '../components/Layout';


export default function Edit() {
    const router = useRouter()
    const [formData, setFormData] = useState({});

    const saveData = async e => {
        e.preventDefault()
        try {
            await fetch(`api/post/${id}`, {
                method: 'PUT',
                body: JSON
            })
            await router.push('/coba')
            alert('data ditambah')


        } catch (error) {
            console.error(error)
        }
    }



    return (
        <Layout>
            <div className="page">
                <form>
                    <h1>Signup user</h1>
                    <input
                        autoFocus
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        type="text"
                    // value={name}
                    />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email address"
                        type="text"
                    // value={email}
                    />
                    <input
                        // disabled={!name || !email}
                        type="submit"
                        value="Signup"
                    />
                    <a className="back" href="#" onClick={() => Router.push('/')}>
                        or Cancel
                    </a>
                </form>
            </div>
            <style jsx>{`
      .page {
        background: white;
        padding: 3rem;
        display: flex;
        justify-content: center;
      }

      input[type='text'] {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }

      input[type='submit'] {
        background: #ececec;
        border: 0;
        padding: 1rem 2rem;
      }

      .back {
        margin-left: 1rem;
      }
    `}</style>
        </Layout>
    )
}