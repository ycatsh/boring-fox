![graphic](https://github.com/user-attachments/assets/e9941297-3e90-44bd-9fdb-0a584126d0b2)
<br>

Boring-Fox is primarily developed with [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). It offers a sophisticated and intuitive browsing experience for users seeking efficiency and convenience, and who are just a tad bit boring. With its minimal and retro design, Boring-Fox combines boring aesthetics with functionality seamlessly. The theme enhances your Firefox homepage by providing easy access to bookmarks, daily notes, weather widgets, as well as unit and currency conversion within a single, cohesive interface.
<br>
<br>
<div align="center">
    
![stars](https://img.shields.io/github/stars/ycatsh/Boring-Fox?&color=2e2e2f&labelColor=202020&style=for-the-badge)
![issues-closed](https://img.shields.io/github/issues-closed/ycatsh/Boring-Fox?color=2e2e2f&labelColor=202020&style=for-the-badge)
![issues-open](https://img.shields.io/github/issues/ycatsh/Boring-Fox?color=2e2e2f&labelColor=202020&style=for-the-badge)
    
</div>

## Features
Boring-Fox offers a window with tabs-like buttons to organise its functionality. It has a range of helpful features designed to elevate your browsing experience. They are not cluttered and all over the place; rather, they're thoughtfully placed with the intent of keeping your browser distraction-free to boost productivity. 

<br>

### Tab based bookmarks
![1](https://github.com/user-attachments/assets/b0207ce3-d3fd-4f9f-b3cb-752f800c5391)
<br>
Experience a visually stunning browsing interface with the theme's minimalist design and functional yet elegant features.

<br>

### Weather Information 
![2](https://github.com/user-attachments/assets/9a1a400d-3c34-4fe7-b8e9-9d92edc68e95)
<br>
Check the weather right on your Firefox homepage for convenient access to up-to-date information. To set this up make an account with [openweathermap](https://openweathermap.org/) and paste your API key in the `scripts/temp.js` file.

<br>

### Useful Tools 
![3](https://github.com/user-attachments/assets/f3400e3c-9651-44cc-b7e8-4d73c482bc5a)
<br>
Convert currencies and units whenever you want. To set up currency conversion make an account with [exchangerate-api](https://app.exchangerate-api.com/) and paste your API key in the `scripts/conv.js` file.

<br>

### Daily Note
![4](https://github.com/user-attachments/assets/7b3e6771-96cf-4e15-bf4c-80e6f3d73153)
<br>
Stay productive with the integrated daily note feature. Create and manage your tasks right from your start page.


<br>
<br>


## Configuration  
The theme can be configured and customized by editing the `scripts/tabs.js`, `scripts/temp.js`, `scripts/conv.js` files. It is pretty self explanatory but it allows you to update/add the following:  
1. API keys
2. Location information 
3. Bookmarks


<br>
<br>


## Instructions   
These instructions provide a step-by-step guide for downloading and applying themes to customize your Firefox. The process is divided into three parts: adding the necessary colors, styling the Firefox elements, and modifying the new tab and homepage with the custom theme.

### Colors

1. Download the [Firefox Color](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/) add-on. To use the default colors of the theme, click [here](https://color.firefox.com/?theme=XQAAAAKEAwAAAAAAAABBKYhm849SCicxcUUSqiuG_ebZUZXOFqq-xzYqmKAKYyDZnHmbjO_VoNYUbmDc3gyZbFcmGEcSMfG8ny6dpdlnCVFOUqWQLLOzXX9FMWXkGoYmv23LdNR0bxjv21c6KuertwF-2DfJrieaJoQiNFgzILPpf7JMvqJC3-4gCbd-jB8szjUT20cXTTEvNV51fgMppmUS9oPJ17SnB84E6hdIg0ll2YYSCofK4P2Komedrb2jIs6b2I2_217C1iobfQ8vbPNz5whJrWZPuzNOFL60yNcXibipXbZddNhCNiBUOfxwgsjHhJAOwGsvPRjpul33ZP4dYjkM1-8zDfX4JS4iS0xZcyahdrJi_th_tTbCnhfq3sfXFkNthF2fVUAyyU8fpCb6uVF3xaPr_Z2Be1xlSY_2pCchjmuvnVCoBOCyxxOBQ5ltOt5eskg0zSl47hr4LP9g8E1MyzfhxxGwW4zU5j1ZRW_bBajyUw3VDGublCv9KsT1) to add them to Firefox. You can also customize the colors to your liking. 

### Custom Styling

1. On the Firefox url bar, enter `about:config` and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true` to enable CSS customization. 

2. Enter `about:profiles` on the url bar and open the root directory under `deafult-release` to go to your profile folder 
   
3. Copy `chrome/` and `boring-fox` from this repo into the profile folder.

### Start Page

1. Find your Firefox directory corresponding to your operation system:
- Linux: output of `whereis firefox`
- Windows: `C:\Program Files\Mozilla Firefox`
- MacOS: `/Applications/Firefox.app/Contents/MacOS`
   
1. Under `default/prefs` create or update `autoconfig.js` and paste in the code below:
    ```javascript
    //
    pref("general.config.filename", "autoconfig.cfg");
    pref("general.config.obscure_value", 0);
    pref("general.config.sandbox_enabled", false); 
    ```

2. Navigate one directory back to `defaults/` and create `autoconfig.cfg` and paste in the code below:
    ```javascript
    //  
    var {classes:Cc,interfaces:Ci,utils:Cu} = Components;  
    
    try {  
    Cu.import("resource:///modules/AboutNewTab.jsm");  
    var newTabURL = "file:///PATH_TO_YOUR_START_PAGE.html";  
    AboutNewTab.newTabURL = newTabURL;  
    } catch(e){Cu.reportError(e);} // report errors in the Browser Console  
    ```

3. Change homepage under Firefox settings to 'Custom URLs' and paste in the path. 

4. Restart Firefox. 

<br>

## Fonts

The font files are already present in the theme. If you want to manually incorporate the required fonts into the theme, download [Minecraftia](https://www.dafont.com/minecraftia.font), [Fira Mono](https://fonts.google.com/specimen/Fira+Mono), and [Montserrat](https://fonts.google.com/specimen/Montserrat), then rename the font variables accordingly. Alternatively, you can choose any font by modifying the variables located at the top of the `style.css` file.

<br>

## ASCII Art

All ASCII art, except for the graph found on the currency converter tab, is not created by me. Please find the sources for them below:  

- **Retro Car**  
  Source: [asciiart.website](https://asciiart.website/index.php?art=transportation/cars) (#5 on the page)

- **Cat on Moon**  
  Source: [textArt.sh](https://textart.sh/topic/moon) (#16 on the page)

- **Book and Ink**  
  Source: [ascii.co.uk](https://ascii.co.uk/art/books) (#3 on the page)



<br>
<br>

## Other Themes 
If you're looking for a more streamlined and functional start page, you can find some themes from the `other/` directory. These themes feature a minimalist design and a simple yet elegant look, creating a comfortable browsing experience. Feel free to browse and choose from these themes to personalize your Firefox homepage according to your preferences and style.
