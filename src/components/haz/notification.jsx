// WebSocketComponent.jsx
import Alert from './alert';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useTranslation } from 'react-i18next';




const WebSocketComponent = (props) => {
  const { t } = useTranslation();
  const [receivedMessages, setReceivedMessages] = useState([]);

  const synthesis = window.speechSynthesis;
  const opened = new SpeechSynthesisUtterance(t("openedCnxNotif"));
  const con_err = new SpeechSynthesisUtterance(t("conxErr"));
  const closed = new SpeechSynthesisUtterance(t("closedCnx"));
  const speakvoice=true
  const [messageCount, setMessageCount] = useState(0);
  
  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:8765');
    
   

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
      socket.send('Hello, server!');
      Swal.fire({
        title: 'opened connection!',
        text: t(" Thanks"),
        icon: 'success',
      });
      
      if(speakvoice){
        synthesis.speak(opened);
      }

    });

    // Set up event listeners
    socket.addEventListener('message', (event) => {
      const context_obj=JSON.parse(event.data)
      console.log('Received message from server:', context_obj);
      const danger = new SpeechSynthesisUtterance(context_obj.message);
      const messagebody=context_obj.message;
     

      if(speakvoice){
        synthesis.speak(danger);
      }
      
      if( context_obj.status == "danger"){
        setMessageCount((prevCount) => prevCount + 1);
        localStorage.setItem("setMessageDngCount",messageCount)
         console.log("danger",messageCount)
      }

      if(sendAlertAsEmail){
        const alertsAsEmail1 = {
          email:"salemsif2001@gmail.com",
          subject: "Alert Qareeb security",
          body: messagebody,
        };

         
          try {
            const  response =   fetch("http://127.0.0.1:8000/send-email/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(alertsAsEmail1),
            });
      
            // const data =   response.json();
            // console.log(data);
          } catch (error) {
            console.error("Error sending email:", error);
          }
    
      }

      if(popalert){
        Swal.fire({
          title: 'Qareeb!',
          text: event.data,
          icon: 'info',
        })
      }
      

      // Append the received message to the state
      setReceivedMessages((prevMessages) => [
        ...prevMessages,
        { message: context_obj.message, date: context_obj.date,status:context_obj.status },
      ]);
    });

    // Connection closed
    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
      Swal.fire({
        title: t("cnxFermé"),
        text: t("Thanks"),
        icon: t('error'),
      });
      if(speakvoice){
        synthesis.speak(closed);
      }
      
    });

    // Connection error
    socket.addEventListener('error', (event) => {
      Swal.fire({
        title: t('conxErr'),
        text: t(" Thanks"),
        icon: t('error'),
      });
      console.error('Connection error:', event);
      
      if(speakvoice){
        synthesis.speak(con_err);
      }
    });

    // Cleanup the WebSocket connection on component unmount
    // return () => {
    //   socket.close();
    // };
  }, [props.message,messageCount]);

  return (
    <div>
      
      <div>
        
        {/* Map over the received messages and render Alert components */}
        {receivedMessages.map((msg, index) => (
          <Alert key={index} date={msg.date} message={msg.message}  status={msg.status} />
        ))}
      </div>
    </div>
  );
};

export default WebSocketComponent;
