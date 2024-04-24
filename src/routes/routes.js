const routes = async (fastify, options) => {
    fastify.get("/pelota",(req, rep)=>{
        rep.send({saludo:"Pelota"})
    })
    fastify.get("/caja",(req, rep)=>{
        rep.send({saludo:"Caja"})
    })
}

export default routes