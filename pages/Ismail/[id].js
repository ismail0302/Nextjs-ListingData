import React from 'react'
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(ismail => {
        return {
            params: { id: ismail.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + id);
    const data = await res.json();
    return {
        props: { Ismail: data }
    }
}
function Detail({ Ismail }) {
    return (
        <div>
            <h1>{Ismail.name}</h1>
            <p>{Ismail.email}</p>
            <p>{Ismail.website}</p>
            <p>{Ismail.username}</p>
        </div>
    )
}

export default Detail
