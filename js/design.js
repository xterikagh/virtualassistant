
     // Set  the CSS rules.
     const styleSet = window.WebChat.createStyleSet({
         rootHeight: '100%',
         rootWidth: '100%',
         backgroundColor: '#4F2651',
         
      });

    // Set the avatar options and icons. 
    const avatarOptions = {
    botAvatarImage: 'https://www.graphic.com.gh/images/2019/may/02/first_atlantic.png',
    botAvatarInitials: 'OH',
    userAvatarImage: 'https://icons-for-free.com/iconfiles/png/512/avatar+human+male+man+men+people+person+profile+user+users-1320196163635839021.png',
    userAvatarInitials: 'GH',
    hideUploadButton: true // Disable upload button
         };

    window.WebChat.renderWebChat({
      directLine: window.WebChat.createDirectLine({
          token: 'Ng3Ci7HCDZE.-38t612x0jmvOFAT1CEzx0wesntMoLOg5L5MU-3zZ2Q'}),
          styleSet,
          styleOptions: avatarOptions, // Enable Avatar icon.
     
    }, document.getElementById('webchat'));
    
