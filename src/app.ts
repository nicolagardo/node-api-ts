import express, { Application } from 'express'

const app: Application = express()

const port: number = 3000

app.get('/', (req, res) => {
    res.send(
        {
            data: 'Soy Express con TS',
        }
    )

})

app.listen(port,() => {

    console.log(`Tu app esta lista por el puerto ${port}`);
    
})