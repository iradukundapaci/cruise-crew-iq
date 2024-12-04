export const dockLocationNotificationTemplate = (
  name: string,
  dockLocation: string,
  dockingTime: string,
  departureTime: string,
): string => {
  const template = `
  <!DOCTYPE html>
  <html>
   <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="shortcut icon" href="${process.env.ADMIN_WEB_PORTAL_URL}/email_assets/Cruise-Crew-IQ-logo.png">
    <title>Dock Location Notification</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin: 0; padding: 32px;">
   <table align="center" border="1" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; max-width: 600px; border-color: #E3E9ED;">
  
    <tr>
     <td align="left" style="padding: 24px 32px; background-image: linear-gradient( rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7) ), url('${process.env.ADMIN_WEB_PORTAL_URL}/email_assets/bg.jpg'); background-size: 60%; background-position: center right; background-repeat: no-repeat;">
      <img src="${process.env.ADMIN_WEB_PORTAL_URL}/email_assets/Cruise-Crew-IQ-logo.png" height="72px">
     </td>
    </tr>
  
    <tr>
     <td bgcolor="#FFFFFF">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
       <tr>
        <td style="color: black; font-family: 'open sans', sans-serif; font-weight: 300; font-size: 32px; padding: 96px 32px 0px 32px;">
          Dock Location Update<br><br>
        <b style="color:#D50057; font-weight: 700; font-size: 24px">${name},</b><br>
        <span style="font-size: 18px; font-weight: 400; line-height: 18px;">
          We are excited to welcome you on board! The hotel boat will be docked at the following location:<br><br>
          <b>${dockLocation}</b><br><br>
          <b>Docking Time:</b> ${dockingTime}<br>
          <b>Departure Time:</b> ${departureTime}
        </span><br>
        </td>
       </tr>
       <tr>
        <td style="color: black; font-family: 'open sans', sans-serif; font-weight: 300; font-size: 18px; padding: 32px;">
          <span style="color:#8C9091; line-height: 22px;">
            If you have any questions or need assistance finding the dock, feel free to contact our team. We look forward to seeing you soon!<br><br>
          </span>
        </td>
       </tr>
      </table>
     </td>
    </tr>
  
    <tr>
     <td bgcolor="#E3E9ED" style="padding: 32px;">
       <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                  <tr>
                    <td width="70%" valign="top" style="padding: 8px; font-family: 'open sans MS', sans-serif; color: #383838; font-weight: bold; font-size: 12px;">
                      Reach us:
                    </td>
                    <td width="10%" valign="top" style="text-align: right; padding: 8px; font-family: 'open sans MS', sans-serif; color: #80888d; font-size: 12px;">
                      <a href="https://Cruise-Crew-IQ.com/en/home-english/" style="color: #D50057">Website</a>
                    </td>
                    <td width="10%" valign="top" style="text-align: right; padding: 8px; font-family: 'open sans MS', sans-serif; color: #80888d; font-size: 12px;">
                      <a href="https://Cruise-Crew-IQ.com/en/home-english/" style="color: #D50057">LinkedIn</a>
                    </td>
                    <td width="10%" valign="top" style="text-align: right; padding: 8px; font-family: 'open sans MS', sans-serif; color: #80888d; font-size: 12px;">
                      <a href="https://twitter.com/Cruise-Crew-IQ" style="color: #D50057">Twitter</a>
                    </td>
                    <td width="10%" valign="top" style="text-align: right; padding: 8px; font-family: 'open sans MS', sans-serif; color: #80888d; font-size: 12px;">
                      <a href="https://www.facebook.com/Cruise-Crew-IQ" style="color: #D50057">Facebook</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
       </table>
     </td>
    </tr>
  
   </table>
  </body>
  </html>
  `;
  return template;
};
