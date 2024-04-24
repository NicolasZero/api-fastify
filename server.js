import Fastify from "fastify"
import routes from "./src/routes/routes.js"

const fastify = Fastify({
    logger: false
})

fastify.get('/', (req, rep)=>{
    rep.send({saludo:"Hola"})
})

fastify.register(routes)

const port = process.env.port

const start = async () => {
    try {
        await fastify.listen({port})
        console.log(`server running in http:localhost:${port}`)
    } catch (err) {
       fastify.log.error(err) 
    }
}

start()