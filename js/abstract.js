
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
    botAvatarImage: 'https://raw.githubusercontent.com/leewest0/internet-banking/master/img/fablogo2.png?token=GHSAT0AAAAAABQRIJ7CU4IUHGAV3RDKWOMMYQX666A',
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
    
