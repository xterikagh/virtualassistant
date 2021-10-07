
     // Set  the CSS rules.
     const styleSet = window.WebChat.createStyleSet({
         rootHeight: '100%',
         rootWidth: '100%',
         backgroundColor: '#4F2651',
        /* bubbleBackground: '#fff',
        bubbleBorder: 'solid 1px #444',
        bubbleBorderRadius: 20,
        bubbleFromUserBackground: '#222',
        bubbleFromUserBorder: 'solid 1px #444',
        bubbleFromUserBorderRadius: 20,
        bubbleFromUserTextColor: 'White',
        bubbleTextColor: 'black'
        */
         
      });

    // Set the avatar options and icons. 
    const avatarOptions = {
    botAvatarImage: 'https://www.graphic.com.gh/images/2019/may/02/first_atlantic.png',
    botAvatarInitials: 'OH',
    userAvatarInitials: 'GH',
    hideUploadButton: true // Disable upload button
         };

    
    /*window.WebChat.renderWebChat({
          
        directLine: window.WebChat.createDirectLine({ token: '8zk_5f7eDYQ.0KsgURWPaFKdQEpHO--dOg77OvQdyRVVzbIRx04BqBY'}),
          
          styleSet,
          styleOptions: avatarOptions, // Enable Avatar icon.
     
    }, document.getElementById('webchat'));
    

    */

    (async function () {
           const res = await fetch('https://azurenewest.azurewebsites.net/directline/token', { method: 'POST' });
          const { token } = await res.json();
          window.WebChat.renderWebChat({
             directLine: window.WebChat.createDirectLine({ token }),
             styleSet,

          }, document.getElementById('webchat'));
         })();

