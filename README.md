## Firefox Themes

Comfortable, elegant, and minimalist firefox themes

## Intructions 

### userChrome.css

1. On the firefox search bar, enter `about:config` and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true` to enable CSS customization. 

2. In your profile directory make 2 folders `startpage` and `chrome`, inside `chrome/`, paste the `userChrome.css` and ``userContent.css` files 

### Newtab as startpage

1. Choose a theme and paste the content from its corresponding folder from the repository to the `startpage` folder you just created 

2. Navigate to your firefox directory, under `default/prefs` create a `autoconfig.js` file
    ```javascript
    //
    pref("general.config.filename", "autoconfig.cfg");
    pref("general.config.obscure_value", 0);
    pref("general.config.sandbox_enabled", false); 
    ```
    paste this code in the file and save

3. Navigate one directory back to `defaults/` and create a `autoconfig.cfg` file
    ```javascript
    // 
    var {classes:Cc,interfaces:Ci,utils:Cu} = Components; var newTabURL = "file:///PATH_TO_YOUR_START_PAGE.html";
    aboutNewTabService = Cc["@mozilla.org/browser/aboutnewtab-service;1"].getService(Ci.nsIAboutNewTabService);
    aboutNewTabService.newTabURL = newTabURL; 
    ```
    make sure to put the path of the index.html file in your `startpage` folder

4. Change homepage under firefox settings to 'Custom URLs' and paste in the path. 

5. Restart Firefox. 


## Themes 

### Gratuitous

Preview:
![image](https://user-images.githubusercontent.com/91330011/210130702-6fb82055-fb88-4268-b335-0d04f3fe6817.png)

### Idyllic

Preview:
![image1](https://user-images.githubusercontent.com/91330011/162780403-f4b27beb-ea1c-4709-a179-bc70b1588140.png)
Check out cascade (for the one line look): https://github.com/andreasgrafen/cascade

### Cat

Preview:
![image2](https://user-images.githubusercontent.com/91330011/203773014-c2db8c2d-7010-419a-8dae-46dcd79bc996.png)

### F40

Preview
![image3](https://user-images.githubusercontent.com/91330011/204031110-fb0b9c54-cded-44b9-a545-66fb73c9c431.png)
