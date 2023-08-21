![graphic](https://github.com/ycatsh/smart-fox/assets/91330011/8872af68-711f-480b-9b7e-2304402c0c42)
<br>

Smart-Fox is primarily developed with [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). It offers a sophisticated and intuitive browsing experience for users seeking efficiency and convenience. With its minimal design and relevant features, Smart-Fox combines aesthetics with functionality seamlessly. The Smart-Fox theme enhances your Firefox homepage by providing easy access to music control (under development), bookmarks, daily notes, and weather widgets within a single, cohesive interface.
<br>
<br>
<div align="center">
    
![stars](https://img.shields.io/github/stars/ycatsh/smart-fox?&color=3b3d3f&labelColor=1d1e1f&style=for-the-badge)
![issues-closed](https://img.shields.io/github/issues-closed/ycatsh/smart-fox?color=3b3d3f&labelColor=1d1e1f&style=for-the-badge)
![issues-open](https://img.shields.io/github/issues/ycatsh/smart-fox?color=3b3d3f&labelColor=1d1e1f&style=for-the-badge)
    
</div>

## Features
Smart-Fox offers a window with tabs-like buttons to organise its functionality. It has a range of helpful features designed to elevate your browsing experience. They are not cluttered and all over the place; rather, they're thoughtfully placed with the intent of keeping your browser distraction-free to boost productivity. 

<br>

### Tab based bookmarks
![1](https://github.com/ycatsh/smart-fox/assets/91330011/30429133-6bb3-4734-b4e6-1ae1274cc4bb)
<br>
Experience a visually stunning browsing interface with the theme's minimalist design and functional yet elegant features.

<br>

### Daily Note
![2](https://github.com/ycatsh/smart-fox/assets/91330011/9337426b-3144-44da-a1be-ec9dd33bac55)
<br>
Stay productive with the integrated daily note feature. Create and manage your tasks right from your start page.

<br>

### Weather Information 
![3](https://github.com/ycatsh/smart-fox/assets/91330011/4e98d673-1f33-4d5d-b20c-426116ae58c3)
<br>
Check the weather right on your Firefox homepage for convenient access to up-to-date information. To set this up make an account with [openweathermap](https://openweathermap.org/) and use your API key in `temp.js`.

<br>

### Useful Tools 
![4](https://github.com/ycatsh/smart-fox/assets/91330011/ac75ab68-a842-4ce3-baf2-0286e4178713)
<br>
Convert currencies whenever you want. To set conversion up make an account with [exchangerate-api](https://app.exchangerate-api.com/) and use your API key in `conv/curr.js`.


<br>
<br>

## Instructions   
These instructions provide a step-by-step guide for downloading and applying themes to customize your Firefox. The process is divided into three parts: adding the necessary colors, styling the Firefox elements, and modifying the new tab and homepage with the custom theme.

### Colors

1. Download the [Firefox Color](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/) add-on. To use the default colors of the theme, click [here](https://color.firefox.com/?theme=XQAAAAKEAwAAAAAAAABBKYhm849SCicxcUUSqiuG_ebZUZXOFqqYn_O4akhBDGiaWd0FjBOq31N1Flo2QaWxtQ6soXvQmPL_Upd3YVaTP-QTAEKfKo8_hUfLueZP0k-rmfVo_jfFNFb9HyVOXU-NXjQTv-zSu7Kg9-Tq4byjMV_kXKgDR38tZi2Sj_zhU8Yx8VVEDTHPt_Hrq_c76cKBmBJ7cdswAG8dWDtuxHy-h8_3x4rFOA9xicLWh1BQYBcy6btytJVQesYC7-wijAstUFJCME_7oZf8zWtJwxFNeZWnIlN0udLKf9nEhZ8dGv2LxOyfB9o6IxUESTxlqTIxJd6KXPKluMOGt7dQEEFyS5cdLcpkX0tJ0783fdze03GDAFjNR4SgEdnTOyL2G7UFsfP7SQmn35SPgaMXALaNe85AqRcMUx1yZ2OW8sLmiCDaoXA9kWgKSBae2ugq6SbaAT2Zft0--OQgTJtn8Y9Vonp3a7JRa-8kQBDrF880_ff6Cg) to add them to Firefox. You can also customize the colors to your liking. 

### Custom Styling

1. On the Firefox url bar, enter `about:config` and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true` to enable CSS customization. 

2. Enter `about:profiles` on the url bar and open the root directory under `deafult-release` to go to your profile folder 
   
3. Copy `chrome/` and `smart-fox` from this repo into the profile folder.

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

To incorporate the required fonts into the theme, download [Minecraftia](https://www.dafont.com/minecraftia.font) and [Coder's Crux](https://www.dafont.com/coders-crux.font). Alternatively, you can choose any font by modifying the variables located at the top of the `style.css` file.

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
If you're looking for a more streamlined and functional start page, you can find some themes from the `themes/` directory. These themes feature a minimalist design and a simple yet elegant look, creating a comfortable browsing experience. Feel free to browse and choose from these themes to personalize your Firefox homepage according to your preferences and style.
