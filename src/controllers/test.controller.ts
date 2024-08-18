import { Context } from "hono";
import { MailService } from '../services/Mail.service';
import { Helpers } from '../utils/helpers/index';
export const IN_MEMORY_DB = new Map<string, any>();
class TestController {

    constructor(private _mailService: MailService) { }
    public async SendMail(c: Context) {
        try {
            const host = c.req.header("host")
            const baseUrl = `${host!.includes("localhost") ? "http://" : "https://"}${c.req.header("host")}`
            const trackingID = Date.now().toString(36)
            const HOST_URL = `${baseUrl}/api/track/${trackingID}`

            IN_MEMORY_DB.set(trackingID, {
                opened: false,
                opened_times: 0
            })
            const messageInfo = await new MailService().SendMail({
                from: 'Hono <su@enjoys.in>',
                to: 'mullayam06@gmail.com',
                subject: 'Hono Email Tracking',
                html: `
                <h1>Hono Test </h1>
                <img style="display:none" src="${HOST_URL}">                
                `,
            })
            return c.json({
                success: true,
                message: 'Mail sent',
                result: { tracking_url: HOST_URL, ...messageInfo },

            })
        } catch (error) {
            console.log(error)
            return c.json({
                success: false,
                message: 'Something went wrong',
                result: null,
            })
        }
    }
    public TrackMail(c: Context) {
        const tracking_id = c.req.param("tracking_id")
        const data = IN_MEMORY_DB.get(tracking_id)
        data.opened = true
        data.opened_times += 1
        IN_MEMORY_DB.set(tracking_id, data)
        const image = Buffer.from(Helpers.getImageBase64(), 'base64').toString('utf-8')

        return new Response(image, {
            headers: {
                'Content-Type': 'image/png',
                "Content-length": image.length.toString()
            }
        })

    }
    public LoadData(c: Context) {
        return c.json(IN_MEMORY_DB)
    }
}
export default new TestController(new MailService())