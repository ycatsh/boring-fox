![graphic](./.github/assets/main.png)
<br>

Boring-Fox is primarily developed with [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). It offers a sophisticated and convenient start page for users who are just a tad bit boring. With its minimal and retro design, Boring-Fox combines boring aesthetics with functionality. The theme enhances your Firefox homepage by providing easy access to bookmarks, weather widgets, as well as unit and currency conversion within a single, cohesive interface.
<br>
<br>
<div align="center">
    
![stars](https://img.shields.io/github/stars/ycatsh/Boring-Fox?&color=2e2e2f&labelColor=202020&style=for-the-badge)
![issues-closed](https://img.shields.io/github/issues-closed/ycatsh/Boring-Fox?color=2e2e2f&labelColor=202020&style=for-the-badge)
![issues-open](https://img.shields.io/github/issues/ycatsh/Boring-Fox?color=2e2e2f&labelColor=202020&style=for-the-badge)
    
</div>

## Features
Boring-Fox offers a window with tabs-like buttons to organise its functionality. It isn't cluttered; rather, thoughtfully placed with the intent of keeping your homepage distraction-free. 

<br>

### Tab based bookmarks
![1](./.github/assets/tabs.png)
<br>
Organize your several bookmarks efficiently via tabs. To customize your bookmarks, open `scripts/tabs.js` and edit the links as required. The bookmarks are formatted in json format in the file for easy modification.

<br>

### Weather Information 
![2](./.github/assets/temp.png)
<br>
Check the weather right on your Firefox homepage for convenient access to up-to-date information. To set this up make an account with [openweathermap](https://openweathermap.org/) and paste your API key in the `scripts/temp.js` file.

<br>

### Useful Tools 
![3](./.github/assets/conv.png)
<br>
Convert currencies and units whenever you want. To set up currency conversion make an account with [exchangerate-api](https://app.exchangerate-api.com/) and paste your API key in the `scripts/conv.js` file.


<br>
<br>


## Configuration  
The theme can be configured and customized by editing the `scripts/tabs.js`, `scripts/temp.js`, `scripts/conv.js` files. It is pretty self explanatory but it allows you to update/add the following:  
1. `tabs.js`: Add and customize bookmarks.
2. `temp.js`: API key and location information.
3. `conv.js`: API key and add/change currencies (use ISO 4217 currency codes).


<br>
<br>


## Instructions   
The below step-by-step guide is divided into three parts: modifying the new tab and homepage, userChrome.css mods, and colors. If you want the same look as the screenshots, follow all three; otherwise, you can choose to use your own colors or skip the userChrome.css mods as needed.

### Custom Firefox Styling (userChrome.css mods)

1. On the Firefox url bar, enter `about:config` and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true` to enable CSS customization. 

2. Enter `about:profiles` on the url bar and open the root directory under `deafult-release` to go to your profile folder 
   
3. Copy `chrome/` and `boring-fox/` from this repo into the profile folder.

### Custom homepage/startpage (as newtab too)

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

2. Navigate two directories back to the Firefox directory and create `autoconfig.cfg` and paste in the code below. Make sure to pass the path of the `boring-fox/index.html` file into `newTabURL` (it should look something like this: `file:///<path_to_firefox_dir>/boring-fox/index.html`):  
    ```javascript
    //  
    var {classes:Cc,interfaces:Ci,utils:Cu} = Components;  
    
    try {  
    ChromeUtils.defineESModuleGetters(this, {
      AboutNewTab: "resource:///modules/AboutNewTab.sys.mjs",
    });  
    var newTabURL = "file:///PATH_TO_YOUR_INDEX.html"; // Add the path to your index.html file here
    AboutNewTab.newTabURL = newTabURL;  
    } catch(e){Cu.reportError(e);} // report errors in the Browser Console  
    ```

3. Change homepage under Firefox settings to 'Custom URLs' and paste in the same path (to the index.html) as step 2.

4. Restart Firefox. 

### Colors

1. Download the [Firefox Color](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/) add-on. To use the default colors of the theme, click [here](https://color.firefox.com/?theme=XQAAAAKEAwAAAAAAAABBKYhm849SCicxcUUSqiuG_ebZUZXOFqq-xzYqmKAKYyDZnHmbjO_VoNYUbmDc3gyZbFcmGEcSMfG8ny6dpdlnCVFOUqWQLLOzXX9FMWXkGoYmv23LdNR0bxjv21c6KuertwF-2DfJrieaJoQiNFgzILPpf7JMvqJC3-4gCbd-jB8szjUT20cXTTEvNV51fgMppmUS9oPJ17SnB84E6hdIg0ll2YYSCofK4P2Komedrb2jIs6b2I2_217C1iobfQ8vbPNz5whJrWZPuzNOFL60yNcXibipXbZddNhCNiBUOfxwgsjHhJAOwGsvPRjpul33ZP4dYjkM1-8zDfX4JS4iS0xZcyahdrJi_th_tTbCnhfq3sfXFkNthF2fVUAyyU8fpCb6uVF3xaPr_Z2Be1xlSY_2pCchjmuvnVCoBOCyxxOBQ5ltOt5eskg0zSl47hr4LP9g8E1MyzfhxxGwW4zU5j1ZRW_bBajyUw3VDGublCv9KsT1) to add them to Firefox. You can also customize the colors to your liking. 

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
If you're looking for a more streamlined and simple start page, you can find some of my older themes in the `other-themes/` directory. These are relatively simple and lightweight. Feel free to browse and choose from these themes.