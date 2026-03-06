'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
   const name = formData.get('name') as string
   const company = formData.get('company') as string
   const email = formData.get('email') as string
   const subject = formData.get('subject') as string
   const message = formData.get('message') as string

   if (!name || !email || !subject || !message) {
      return { success: false, error: 'Faltan campos obligatorios' }
   }

   try {
      const data = await resend.emails.send({
         from: 'PORTFOLIO MESSAGE <hi@contact.lautarofullone.dev>',
         to: 'lautarofullone@gmail.com',
         subject: `Nuevo mensaje de tu portfolio: ${subject}`,
         replyTo: email,
         html: `
            <!DOCTYPE html>
            <html>
            <head>
               <meta charset="utf-8">
            </head>
            <body style="background-color: #1a1915 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; margin: 0;">
               <div style="max-width: 600px; margin: 0 auto; background-color: #262624; border: 1px solid #222; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.5);">
                     
                     <!-- Header -->
                     <div style="background-color: #262624; border-bottom: 1px solid #222; padding: 16px 24px;">
                        <div style="font-family: 'Jetbrains Mono', Courier, monospace; font-size: 13px; color: #888; letter-spacing: 1px; text-transform: uppercase;">
                           <span style="color: #d97757;">●</span> NUEVA RESPUESTA DEL FORMULARIO DE CONTACTO
                        </div>
                     </div>

                     <!-- Content -->
                     <div style="padding: 32px 24px;">
                        <h2 style="margin-top: 0; font-size: 20px; font-weight: 500; color: #fff; margin-bottom: 24px;">Información</h2>
                        
                        <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
                           <tr>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; width: 100px;">
                                    <span style="font-family: 'Jetbrains Mono', Courier, monospace; font-size: 12px; color: #f5f4ee; text-transform: uppercase;">Nombre</span>
                                 </td>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #c3c0b6; font-size: 15px;">
                                    ${name}
                                 </td>
                           </tr>
                           <tr>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a;">
                                    <span style="font-family: 'Jetbrains Mono', Courier, monospace; font-size: 12px; color: #f5f4ee; text-transform: uppercase;">Email</span>
                                 </td>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #c3c0b6; font-size: 15px;">
                                    <a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a>
                                 </td>
                           </tr>
                           <tr>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a;">
                                    <span style="font-family: 'Jetbrains Mono', Courier, monospace; font-size: 12px; color: #f5f4ee; text-transform: uppercase;">Empresa</span>
                                 </td>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #c3c0b6; font-size: 15px;">
                                    ${company || '<span style="color: #444;">N/A</span>'}
                                 </td>
                           </tr>
                           <tr>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a;">
                                    <span style="font-family: 'Jetbrains Mono', Courier, monospace; font-size: 12px; color: #f5f4ee; text-transform: uppercase;">Asunto</span>
                                 </td>
                                 <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #c3c0b6; font-size: 15px; font-weight: 500;">
                                    ${subject}
                                 </td>
                           </tr>
                        </table>

                        <div style="font-family: 'Jetbrains Mono', Courier, monospace; font-size: 12px; color: #f5f4ee; text-transform: uppercase; margin-bottom: 12px;">Mensaje</div>
                        
                        <!-- Block -->
                        <div style="background-color: #262624; border: 1px solid #222; border-radius: 6px; padding: 20px; color: #c3c0b6; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                        
                     </div>
                     
                     <!-- Footer -->
                     <div style="background-color: #262624; border-top: 1px solid #222; padding: 16px 24px; text-align: center;">
                        <div style="font-family: 'Jetbrains Mono', Courier, monospace; font-size: 11px; color: #555;">
                           <a href="https://lautarofullone.dev" style="color: #f5f4ee; text-decoration: underline;">lautarofullone.dev</a>
                        </div>
                     </div>
                     
               </div>
            </body>
            </html>
         `,
      })

      if (data.error) {
         return { success: false, error: data.error.message }
      }

      return { success: true, data }
   } catch (error) {
      return { success: false, error: 'Ocurrió un error al enviar el correo' }
   }
}
