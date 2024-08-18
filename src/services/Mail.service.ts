import { CONFIG } from '@/app/config';
import nodemailer, { Transport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
export class MailService {
    private _mailService: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
    private static instance: MailService;
    constructor() {
        this._mailService = nodemailer.createTransport({
            host: CONFIG.MAIL_SETTINGS.SMTP_HOST,
            port: +CONFIG.MAIL_SETTINGS.SMTP_HOST_PORT,
            auth: {
                user: CONFIG.MAIL_SETTINGS.SMTP_HOST_USER,
                pass: CONFIG.MAIL_SETTINGS.SMTP_HOST_PASS
            }
        })

    }
    public static getInstance() {
        if (!this.instance) {
            this.instance = new MailService();
        }
        return this.instance;

    }
    public async SendMail(mailOptions: Mail.Options): Promise<SMTPTransport.SentMessageInfo> {
        return this._mailService.sendMail(mailOptions);
    }
}