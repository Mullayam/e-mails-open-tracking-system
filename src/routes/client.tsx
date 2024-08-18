import { Hono } from 'hono'
import { hc } from 'hono/client'
import { render } from 'hono/jsx/dom'
import RootLayout from '../utils/resources/jsx/index';
import { MyComponent } from '../utils/resources/jsx/app/test';
import Analytics from '../utils/resources/jsx/app/analytics';
import { IN_MEMORY_DB } from '../controllers/test.controller';

const app = new Hono()


const routes = app.get('/', (c) => c.html(<RootLayout title='ENJOYS' >
    <MyComponent title='test' />
</RootLayout>))

app.get('/analytics', (c) => {

    return c.html(<RootLayout title='Mail Analytics'>
        <Analytics data={IN_MEMORY_DB} />
    </RootLayout>)
})

export type AppType = typeof routes
const rpc = hc<AppType>("http://localhost:7145/api") // RPC client
// rpc.index.$url
export default app