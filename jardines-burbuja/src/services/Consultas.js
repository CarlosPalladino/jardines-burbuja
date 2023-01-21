export async function consultas(body) {
    try {
        let query = await fetch("http://localhost:4000/mensajes/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        })

        let data = await query.json()
        return data
    } catch (error) {
        console.log(error)
    }
}