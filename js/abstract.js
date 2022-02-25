
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
    botAvatarImage: 'https://play-lh.googleusercontent.com/o_k5va4_2gnRh0PU-b2Y4rAPK69VaGnvARAW-VtBeo8yKH0mTlbBE7AbECUABZTYL6M',
    botAvatarInitials: 'OH',
    userAvatarImage: 'https://icons-for-free.com/iconfiles/png/512/avatar+human+male+man+men+people+person+profile+user+users-1320196163635839021.png',
    userAvatarInitials: 'GH',
    hideUploadButton: true // Disable upload button
         };

    window.WebChat.renderWebChat({
      directLine: window.WebChat.createDirectLine({
          token: 'odOC3a8Py5Q.iS5fwOydMrhmMA3r9WApwzgeeBmwQxOieDJbhCG2ENQ'}),
          styleSet,
          styleOptions: avatarOptions, // Enable Avatar icon.
     
    }, document.getElementById('webchat'));
    
