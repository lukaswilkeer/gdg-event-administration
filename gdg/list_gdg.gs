//
//
//   Script list GDG 
//
//   This script is to list all GDGs 
//
//
//   Autor Jacob@gtugs.org 
//   Date  01 05 2012
//   Version 0000
//   Services : Spreadsheet:  gdg  Sheet: gdg_sheet
//              id: 0AjHGZg_MuQ8KdFpMNE1wR3BtOXBwNjNHdjB4dTZMaFE
//              UI
//              Doclist
//              
//   Actually the script is not working correctly yet           
//              
//              
// 
function doGet() {


var app = UiApp.createApplication().setTitle("List GDG");
  
var _mainpanel = {
  "background-color":"white",
  //#0b3b0b#F2F2F2#F2F2F2
  "border":"solid 1px #C2C2C2",
  "border-top-left-radius":"10px 10px",
  "border-top-right-radius":"10px 10px",
  "border-bottom-left-radius":"10px 10px",
  "border-bottom-right-radius":"10px 10px",


  }
  
var _titelpanel = {
    // this one is in the script itself  
    //"background-image":"url(http://img67.imageshack.us/img67/6880/800pxnocoloniesblankworoc1.png)",
    "position": "relative",
    "width":"100%",
    "height":"56px",    
    "border-top-left-radius":"10px 10px",
    "border-top-right-radius":"10px 10px",
    "border-bottom-left-radius":"10px 10px",
    "border-bottom-right-radius":"10px 10px",
  }
  
var _titel = {
    "font-family":"verdana" ,    
    "font-size":"xx-large",
    "font-weight": "bold",
    "background-color":"none",
    "color": "#3D85C6",
    "position": "relative",
    "width":"100%"
  }
    
var _gdg_logo  = {
    "height":"70px",
    "width":"35px",
    "margin-left":"10px",
    "position": "relative",
 }        
    
var _arrow  = {
    "height":"20px",
    "width":"20px",
 }  

var _buttonarrow  = {
    "height":"20px",
    "width":"20px",
    "background":"none",
    "border":"0px",
    "opacity":"0,1",
 }      

var _mandatory = {
    "font-family":"verdana" ,    
    "font-size":"small",
    "font-weight": "normal",
    "background-color":"none",
    "color": "#E81A1D",
    "position": "relative",
    "width":"100px"
  }   

var _feedback = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "normal",
    "background":"none",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"420px"
  }       
        

//
// The help panel definition
//    
var _helppanel = {
    "background-color":"#ECE6D8",
    "color": "#0b3b0b",
    "position": "relative",
    "margin":"5px",  
    "width":"96%",
    "text-align":"left",
    "font-weight": "bold",
    "border":"solid 1px #666154",
    "border-top-left-radius":"5px 5px",
    "border-top-right-radius":"5px 5px",
    "border-bottom-left-radius":"5px 5px",
    "border-bottom-right-radius":"5px 5px",
  } 
    
var _helplabel = {
    "background-color":"none",
    "position": "relative",
    "color":"#666154",
    "margin-left":"5px",  
     "margin-top":"2px", 
    "text-align":"left",
  
  }          

var _helpbutton  = {
    "height":"34px",
    "width":"17px",
    "margin-left":"5px",
    "position": "relative",
    "color": "navyblue",
    "background":"none",
    "border":"0px",
    "opacity":"0,1",
 }      

var _helpgdg  = {
    "height":"36px",
    "width":"18px",
    "margin-left":"1px",
    "position": "relative",
 }        
    

var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"1px",
    "width":"6px"
  }  

var verPanel = app.createVerticalPanel().setVisible(true).setWidth('98%');
library.applyCSS(verPanel, _mainpanel);  

var abPanel = app.createAbsolutePanel().setId('abpanel').setWidth('99%').setHeight('400%').setVisible(true);

var titlePanel = app.createAbsolutePanel().setWidth('100%').setHeight('1.5%').setVisible(true).setId('titlepanel').setStyleAttribute('background-image', "url('https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/800pxnocoloniesblankworoc1.png?attachauth=ANoY7cqwL7TE9yoEbNf6fS4Z3LSHHiuvnDA4E6uOJmKaDV0Hr1oGBSJQX10e8gXtMct5ZhaIY5g2I7DZsV5pCxnH4_tMaZV6DeSoon798BtDdL4494LOlI5Wt70govu1US_LbkIn00lBZ4XZabEIhrXrtSPNCcwXGO2sQZ-LpAcX_8fEcIellBG-M5MbUoAGV41i-X1DG0echCPCZLA7lBRib7opOcjXGA%3D%3D&attredirects=0')");
library.applyCSS(titlePanel, _titelpanel);
var titleLabel = app.createLabel('GDGs').setId('titellabel').setVisible(true);
library.applyCSS(titleLabel, _titel);
var gdgLogo = app.createImage().setId('gdglogo').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
library.applyCSS(gdgLogo, _gdg_logo);
var upArrow = app.createImage().setId('upArrow').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/arrow-up-buttons.png?attachauth=ANoY7cqZw-9W6KTzMGoUrCFM1ti114aPpW59fE6-atvKhqvWXKAz9wpnxG2EhuwQRyb8aemLgiNW7SmSCxYGkZaRHbkmESREgexDACsx4hjQdxCkTSufnVcw_gg6uzq2KxtHctFMcZm8v6CTDtIMl36sH37lHoIOOrix6DEiD3GgkWiGSp5qh7m-0ntf68NcYy0nUVlgx3niSEoI6LiqVKErJvbyUACmsg%3D%3D&attredirects=0").setVisible(true);
library.applyCSS(upArrow, _arrow);
var upButton = app.createButton('' ).setId('upbutton').setVisible(true).setEnabled(true);
library.applyCSS(upButton,_buttonarrow);
var downArrow = app.createImage().setId('downArrow').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/down-arrow-button.png?attachauth=ANoY7coLSDQ6fTh0UtCd__fSutXPiejiaZfGngy4uXFZqDOhW2U8ts8VmY9PDgpxbI7sFnuIaddy-9BWxobBSeg4uH0BURQf5KJ-F1hurl_xqIsvRjEyqB78TOZsPOvYYDPAFFkKFur_ZhdrrfUUWWRgsPaWfkejoXgTT-z-cdb1Xyvn11zHFU2Za_ZGXRLiy0ONPOZOqQTdo0fU4Yt_2BuvbvRFT54q0g%3D%3D&attredirects=0").setVisible(true);
library.applyCSS(downArrow, _arrow);
var downButton = app.createButton('' ).setId('downbutton').setVisible(true).setEnabled(true);
library.applyCSS(downButton,_buttonarrow);
  
  
titlePanel.add(gdgLogo,0,-13);
titlePanel.add(titleLabel,50,20);  
titlePanel.add(upArrow,160,4);
titlePanel.add(upButton,160,4);
titlePanel.add(downArrow,160,30);
titlePanel.add(downButton,160,30);

//
// Handler to show the entire sheet 
// 
var clickHandlerExpand = app.createServerClickHandler("respondExpand");
downButton.addClickHandler(clickHandlerExpand);
clickHandlerExpand.addCallbackElement(verPanel);  

//
// Handler to hide the entire sheet 
// 
var clickHandlerColapse = app.createServerClickHandler("respondColapse");
upButton.addClickHandler(clickHandlerColapse);
clickHandlerColapse.addCallbackElement(verPanel);  
  

/////////////
//  
// Subtitle area    
//
var _subtitelpanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "width":"100%",
    "margin-bottom":"1px",
    "height":"22px",
    "text-align":"left",
}       

var _subtitel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"100%",
    "height":"19px",
}       


var subtitlePanel = app.createAbsolutePanel().setWidth('100%').setVisible(true).setId('subtitlepanel');
library.applyCSS(subtitlePanel, _subtitelpanel);
var subtitleLabel = app.createLabel('Current GDGs').setId('subtitellabel').setVisible(true);
library.applyCSS(subtitleLabel, _subtitel);


subtitlePanel.add(subtitleLabel,16,2);
  
//var file = DocsList.find("gdg");                    // Note: DocsList.find returns an array into your variable.
//var id =  file[0].getId();
var Id = '0AjHGZg_MuQ8KdFpMNE1wR3BtOXBwNjNHdjB4dTZMaFE'
var ss = SpreadsheetApp.openById(Id);
var sheet = ss.getSheetByName("gdg_sheet");

  // find out the number of rows and columns of the sheet.
var NumRows = sheet.getLastRow();
  

var _scrollpanel = {
    "background-color":"none",
    "position": "relative",
    "width":"100%",
    "height":"180px",
}  
    
var _gdgpanel = {
    "background-color":"none",
    "position": "relative",
    "width":"100%",
    "margin-bottom":"1px",
    "vertical-align":"top",    
}   
    
var _gdgpanelodd = {
    "background-color":"none",
    "position": "relative",  
    "width":"95%",
    "height":"20px",
    "text-align":"left", 
    "margin-left":"4px",
    "margin-top":"2px",
    "vertical-align":"top",
}          

var _gdgpaneleven = {
    "background-color":"#f2f2f2",
    "position": "relative",  
    "height":"20px",
    "width":"95%",
    "text-align":"left", 
    "margin-left":"4px",
    "margin-top":"2px",
    "vertical-align":"top",
}      
    
var _linegdg = {
    "background-color":"none",
  //  "position": "relative", 
    "height":"18px",
    "color": "#3D85C6",
    "font-weight": "bold",
    "font-family":"verdana" ,   
    "font-size":"small",
    "text-align":"left", 
    "vertical-align":"top",
    "margin-left":"2px",
}               
  
var    _worldicon = {
      "height":"18px",
      "text-align":"right",
       "margin-right":"2px",
       "margin-left":"5px",
}

var    _gdglogo = {
      "height":"18px",
       "margin-right":"2px",
       "margin-left":"5px",
}
        
        
var _linkgdg = {
    "height":"18px",
    "width":"18px",
    "background":"none",
    "text-decoration":"none",
    "border":"0px",
    "opacity":"0.1",
}  

var _logogdg = {
    "height":"18px",
    "width":"18px",
    "background":"none",
    "text-decoration":"none",
    "border":"0px",
    "opacity":"0.1",
}  
var scrollPanel = app.createScrollPanel().setWidth('100%').setVisible(true).setId('scrollpanel');
library.applyCSS(scrollPanel, _scrollpanel);
//var gdgMainPanel = app.createAbsolutePanel().setWidth('100%').setVisible(true).setId('gdgpanel');
var gdgMainPanel = app.createVerticalPanel().setVisible(true).setId('gdgmainpanel');
library.applyCSS(gdgMainPanel, _gdgpanel);

  
var gdgPanel = new Array();
var lineGdg = new Array();
var linkGdg = new Array();
var textlinegdg = new Array();
var worldIcon = new Array();
var gdgLogo =  new Array();
var logoGdg =  new Array();
for (var i = 1; i < NumRows ; i++) { 
       
     if (i%2 == 0) {    
       gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
      library.applyCSS(gdgPanel[i], _gdgpaneleven);        
       }
     else{
       gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
      library.applyCSS(gdgPanel[i], _gdgpanelodd); 
       }
       lineGdg[i] = app.createLabel(sheet.getRange( i+1, [6]).getValues().toString()).setId('linegdg' + [i]).setVisible(true);
      library.applyCSS(lineGdg[i], _linegdg );  
       
       gdgLogo[i] = app.createImage().setId('gdglogo'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
      library.applyCSS(gdgLogo[i], _gdglogo);
       logoGdg[i] = app.createAnchor('-', sheet.getRange( i+1, [16]).getValues().toString()).setName('logogdg'+ [i]).setId('logogdg' + [i]).setVisible(true);
      library.applyCSS(logoGdg[i], _logogdg );  
       
       worldIcon[i] = app.createImage().setId('worldicon'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/world.png?attachauth=ANoY7cpFL-3Z0VDB6cBePlMB2Oq77xoL8hsg4N4kHNNuWbXzJ4nTtEkkCf8UHFICAcXSwv6rmT8ZOlAdftP0F3W8uTw3NeWiH4uj7wAiCbsVuRXrUTY3-YPV8F5nhXYhaVUFllBk7-O-2MacQiyM3kwMwTypcIEL4uDtThbEOvCmSisZWNkJqSsfF3szsQPsASD8KAYWiRAG&attredirects=0").setVisible(true);
      library.applyCSS(worldIcon[i],_worldicon);
       linkGdg[i] = app.createAnchor('-', sheet.getRange( i+1, [13]).getValues().toString()).setName('linkgdg'+ [i]).setId('linkgdg' + [i]).setVisible(true);
      library.applyCSS(linkGdg[i], _linkgdg );  
    
    gdgPanel[i].add(lineGdg[i],0,0);
    gdgPanel[i].add(gdgLogo[i],120,0);
    gdgPanel[i].add(logoGdg[i],120,0);
    gdgPanel[i].add(worldIcon[i],150,0);
    gdgPanel[i].add(linkGdg[i],155,0);
    gdgMainPanel.add(gdgPanel[i]);    
}    
 
subtitlePanel.add(app.createTextBox().setValue(NumRows).setName('numberofRows').setId('numberofrows').setVisible(true).setStyleAttribute("width", "30px"));
subtitlePanel.add(app.createTextBox().setValue(NumRows).setName('maxRows').setId('maxrows').setVisible(true).setStyleAttribute("width", "30px")); 
  
  scrollPanel.add(gdgMainPanel);
  
var _refreshpanel = {
  "background-color":"#f2f2f2",
  "color": "#3D85C6",
  "position": "relative",
  "width":"100%",
  "margin-bottom":"1px",
  "height":"22px",
  "text-align":"left",
  "border-bottom-left-radius":"5px 5px",
  "border-bottom-right-radius":"5px 5px",
}       
      
var _refresh = {
  "width":"21px",
  "height":"21px",
}    
        
var _btnrefresh = {   
  "height":"22px",
  "width":"22px",
  "color": "none",
  "background":"none",
  "border":"0px",
  "opacity":"0,1", 
}

var refreshPanel = app.createAbsolutePanel().setWidth('100%').setVisible(true).setId('refreshpanel');
library.applyCSS(refreshPanel, _refreshpanel);
var refreshLabel = app.createLabel('Refresh').setId('refreshlabel').setVisible(true);
library.applyCSS(refreshLabel, _subtitel);
var imgRefresh = app.createImage().setId('caprefresh').setUrl("https://lh6.googleusercontent.com/-0bwtIEA560E/TuKG0v8d6II/AAAAAAAAAUA/0S_8WCjitgY/s128/refresh.png").setVisible(true);
library.applyCSS(imgRefresh, _refresh); 
var btnRefresh = app.createButton('-').setId('btnrefresh').setVisible(true)
library.applyCSS(btnRefresh, _btnrefresh);  

  
refreshPanel.add(refreshLabel,16,2);
refreshPanel.add(imgRefresh,165,0);
refreshPanel.add(btnRefresh,165,0);

var clickHandler = app.createServerClickHandler("refreshList");
btnRefresh.addClickHandler(clickHandler);
clickHandler.addCallbackElement(verPanel);
  
  
  
verPanel.add(titlePanel);
abPanel.add(subtitlePanel);
abPanel.add(scrollPanel);
abPanel.add(refreshPanel);
verPanel.add(abPanel);
app.add(verPanel);
  
  
  
return app.close();
}

//
//
// Function to hide the add panel
//
//
function respondColapse(e) {
var app = UiApp.getActiveApplication();
app.getElementById('abpanel').setVisible(false);
Logger.log(e + " loaded");
return app; 
}


//
//
// Function to show the add panel
//
//
function respondExpand(e) {
var app = UiApp.getActiveApplication();
app.getElementById('abpanel').setVisible(true);
return app; 
}


// 
//
// Refresh list function
//
//
// this script has to check wether there are actually more, equal or less 
// lines on the screen than in the spreadsheet. 
//
// The number of lines on the screen is stored in the text field 
// e.parameter.numberofrows
// 
// In the case the lines are equal just change the values of the screen. 
// 
// In the case there are more lines on the screen. 
// change the values of the existing values 
// add to the new lines to the gdgMainPanel
//
// In the case there are less lines on the screen than in the spreadsheet. 
// Change the values of the ones that exists 
// put to blank the ones that do not exist anymore. 
//
function refreshList(e){
  var app = UiApp.getActiveApplication();

// 
// Style sheet
//
var _gdgpanel = {
    "background-color":"none",
    "position": "relative",
    "width":"100%",
    "margin-bottom":"1px",
    "vertical-align":"top",    
  }   
    
var _gdgpanelodd = {
    "background-color":"none",
    "position": "relative",  
    "width":"95%",
    "height":"20px",
    "text-align":"left", 
    "margin-left":"4px",
    "margin-top":"2px",
    "vertical-align":"top",
    }          

var _gdgpaneleven = {
    "background-color":"#f2f2f2",
    "position": "relative",  
    "height":"20px",
    "width":"95%",
    "text-align":"left", 
    "margin-left":"4px",
    "margin-top":"2px",
    "vertical-align":"top",
    }      
    
var _linegdg = {
    "background-color":"none",
//  "position": "relative", 
    "height":"18px",
    "color": "#3D85C6",
    "font-weight": "bold",
    "font-family":"verdana" ,   
    "font-size":"small",
    "text-align":"left", 
    "vertical-align":"top",
    "margin-left":"2px",  
    }               
  
var _worldicon = {
    "height":"18px",
    "text-align":"right",
    "margin-right":"2px",
    "margin-left":"5px",
    }

var _gdglogo = {
     "height":"18px",
     "margin-right":"2px",
     "margin-left":"5px",
    }
        
 var _linkgdg = {
    "height":"18px",
    "width":"18px",
    "background":"none",
    "text-decoration":"none",
    "border":"0px",
    "opacity":"0.1",
 }  

var _logogdg = {
    "height":"18px",
    "width":"18px",
    "background":"none",
    "text-decoration":"none",
    "border":"0px",
    "opacity":"0.1",
 }  
  
var numberofrows = e.parameter.numberofRows;
var maxrows = e.parameter.maxRows; 
    
//var File = DocsList.find("gdg");     
//var Id =  File[0].getId();
var Id= '0AjHGZg_MuQ8KdFpMNE1wR3BtOXBwNjNHdjB4dTZMaFE';
var Ss = SpreadsheetApp.openById(Id);
var Sheet = Ss.getSheetByName("gdg_sheet");
var NumRows = Sheet.getLastRow();

//
// I The number of rows on the sheet equals the number of rows on the screen
//
if (numberofrows == NumRows ){
    for (var i = 1; i < NumRows ; i++) { 
       app.getElementById('linegdg' + [i]).setText(Sheet.getRange( i+1, [6]).getValues());
       app.getElementById('logogdg' + [i]).setHref(Sheet.getRange( i+1, [16]).getValues());
       app.getElementById('linkgdg' + [i]).setHref(Sheet.getRange( i+1, [13]).getValues());
     }
    app.getElementById('numberofrows').setText(numberofrows);
  } // I numberofrows == NumRows
//
//
// I  End
//
////////////////////////////////////////////////////////////////////////


  
  
// 
// II The number of rows on the sheet is smaller than the rows on the screen.
//
 if ( NumRows < numberofrows ){
     for (var i = 1; i < numberofrows  ; i++) { 
       if ( i< NumRows) {
         // Refresh the rows on the screen with the values of the spreadsheet.
         app.getElementById('linegdg' + [i]).setText(Sheet.getRange( i+1, [6]).getValues().toString());
         app.getElementById('gdglogo'+[i]).setHref(Sheet.getRange( i+1, [16]).getValues().toString());
         app.getElementById('linkgdg' + [i]).setHref(Sheet.getRange( i+1, [13]).getValues().toString());

       }
       else {
         // hide the lines on the screen which have have no data rows on the Sheet.
         app.getElementById('linegdg' + [i]).setText('');
         app.getElementById('logogdg' + [i]).setHref('');
         app.getElementById('linkgdg' + [i]).setHref('');
         app.getElementById('gdglogo' + [i]).setVisible(false);
         app.getElementById('worldicon' + [i]).setVisible(false);
         app.getElementById('gdgpanel' + [i]).setVisible(false);
       }  
     } // for loop 
   app.getElementById('numberofrows').setText(NumRows);  
 }  // NumRows < numberofrows
//
//
// II  End
//
////////////////////////////////////////////////////////////////////////


  

// 
// III The number of rows on the sheet is greather than the rows on the screen.
//
var gdgPanel = new Array();
var lineGdg = new Array();
var linkGdg = new Array();
var textlinegdg = new Array();
var worldIcon = new Array();
var gdgLogo =  new Array();
var logoGdg =  new Array();
//  
if ( NumRows > numberofrows ){     // III
    if (NumRows < maxrows){        // III A
        // 
        // III  A This means that the existing lines on the screen can be made visible with the new setText values from the spreadsheet.
        //
        //app.getElementById('numberofrows').setText(NumRows + maxrows+'a');
        for (var i = 1; i < NumRows  ; i++) {
            app.getElementById('linegdg' + [i]).setText(Sheet.getRange( i+1, [6]).getValues().toString());
            app.getElementById('gdglogo'+[i]).setHref(Sheet.getRange( i+1, [16]).getValues().toString());
            app.getElementById('linkgdg' + [i]).setHref(Sheet.getRange( i+1, [13]).getValues().toString());
            app.getElementById('gdglogo'+ [i]).setVisible(true);
            app.getElementById('worldicon' + [i]).setVisible(true);
            app.getElementById('gdgpanel' + [i]).setVisible(true);

            app.getElementById('numberofrows').setText(NumRows);
        }  
    }                              // III A 
//    
//    if (NumRows == maxrows ) {      // III B
//      
//    }
//  
//    if (NumRows > maxrows ) {      // III C
//      // 
//      // III  B This means that we have to check just about everything :-) 
//      //
//      for (var i = 1; i < NumRows + 1 ; i++) {
//        
//      if (i < numberofrows ){      // III C a
//            app.getElementById('linegdg' + [i]).setText(Sheet.getRange( i+1, [6]).getValues().toString());
//            app.getElementById('gdglogo'+[i]).setHref(Sheet.getRange( i+1, [16]).getValues().toString());
//            app.getElementById('linkgdg' + [i]).setHref(Sheet.getRange( i+1, [13]).getValues().toString());
//            app.getElementById('gdglogo'+ [i]).setVisible(true);
//            app.getElementById('worldicon' + [i]).setVisible(true);
//            app.getElementById('gdgpanel' + [i]).setVisible(true);
//       }                           // III C a
//
//
//      if (i == numberofrows ){       // III C b
//         if (i%2 == 0) {    
//            gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
//            library.applyCSS(gdgPanel[i], _gdgpaneleven);        
//           }
//         else{
//            gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
//            library.applyCSS(gdgPanel[i], _gdgpanelodd); 
//         }
//         
//         lineGdg[i] = app.createLabel(i + ' ' +Sheet.getRange( i+1, [6]).getValues().toString()).setId('linegdg' + [i]).setVisible(true);
//         library.applyCSS(lineGdg[i], _linegdg );  
//        
//         gdgLogo[i] = app.createImage().setId('gdglogo'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
//         library.applyCSS(gdgLogo[i], _gdglogo);
//         logoGdg[i] = app.createAnchor('-', Sheet.getRange( i+1, [16]).getValues().toString()).setName('logogdg'+ [i]).setId('logogdg' + [i]).setVisible(true);
//         library.applyCSS(logoGdg[i], _logogdg );  
//       
//         worldIcon[i] = app.createImage().setId('worldicon'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/world.png?attachauth=ANoY7cpFL-3Z0VDB6cBePlMB2Oq77xoL8hsg4N4kHNNuWbXzJ4nTtEkkCf8UHFICAcXSwv6rmT8ZOlAdftP0F3W8uTw3NeWiH4uj7wAiCbsVuRXrUTY3-YPV8F5nhXYhaVUFllBk7-O-2MacQiyM3kwMwTypcIEL4uDtThbEOvCmSisZWNkJqSsfF3szsQPsASD8KAYWiRAG&attredirects=0").setVisible(true);
//         library.applyCSS(worldIcon[i],_worldicon);
//         linkGdg[i] = app.createAnchor('-', Sheet.getRange( i+1, [13]).getValues().toString()).setName('linkgdg'+ [i]).setId('linkgdg' + [i]).setVisible(true);
//         library.applyCSS(linkGdg[i], _linkgdg );  
//    
//         gdgPanel[i].add(lineGdg[i],0,0);
//         gdgPanel[i].add(gdgLogo[i],120,0);
//         gdgPanel[i].add(logoGdg[i],120,0);
//         gdgPanel[i].add(worldIcon[i],150,0);
//         gdgPanel[i].add(linkGdg[i],155,0);
//        
//         
//         app.getElementById('gdgmainpanel').add(gdgPanel[i]);    
//         app.getElementById('numberofrows').setText(NumRows); 
//       }                           // III C b       
//
//
//     if (i > numberofrows & i < NumRows ){   // III C c
//       //
//       // In this case you will have to add a line to the sheet gdgfmainpanel
//       //
//         if (i%2 == 0) {    
//            gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
//            library.applyCSS(gdgPanel[i], _gdgpaneleven);        
//           }
//         else{
//            gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
//            library.applyCSS(gdgPanel[i], _gdgpanelodd); 
//         }
//         
//         lineGdg[i] = app.createLabel(i + ' ' + Sheet.getRange( i, [6]).getValues().toString()).setId('linegdg' + [i]).setVisible(true);
//         library.applyCSS(lineGdg[i], _linegdg );  
//        
//         gdgLogo[i] = app.createImage().setId('gdglogo'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
//         library.applyCSS(gdgLogo[i], _gdglogo);
//         logoGdg[i] = app.createAnchor('-', Sheet.getRange( i, [16]).getValues().toString()).setName('logogdg'+ [i]).setId('logogdg' + [i]).setVisible(true);
//         library.applyCSS(logoGdg[i], _logogdg );  
//       
//         worldIcon[i] = app.createImage().setId('worldicon'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/world.png?attachauth=ANoY7cpFL-3Z0VDB6cBePlMB2Oq77xoL8hsg4N4kHNNuWbXzJ4nTtEkkCf8UHFICAcXSwv6rmT8ZOlAdftP0F3W8uTw3NeWiH4uj7wAiCbsVuRXrUTY3-YPV8F5nhXYhaVUFllBk7-O-2MacQiyM3kwMwTypcIEL4uDtThbEOvCmSisZWNkJqSsfF3szsQPsASD8KAYWiRAG&attredirects=0").setVisible(true);
//         library.applyCSS(worldIcon[i],_worldicon);
//         linkGdg[i] = app.createAnchor('-', Sheet.getRange( i, [13]).getValues().toString()).setName('linkgdg'+ [i]).setId('linkgdg' + [i]).setVisible(true);
//         library.applyCSS(linkGdg[i], _linkgdg );  
//    
//         gdgPanel[i].add(lineGdg[i],0,0);
//         gdgPanel[i].add(gdgLogo[i],120,0);
//         gdgPanel[i].add(logoGdg[i],120,0);
//         gdgPanel[i].add(worldIcon[i],150,0);
//         gdgPanel[i].add(linkGdg[i],155,0);
//        
//         
//         app.getElementById('gdgmainpanel').add(gdgPanel[i]);    
//         app.getElementById('numberofrows').setText(NumRows); 
//       }                          // III C c   
//        
//        
//      }                            // for i
//    app.getElementById('maxrows').setText(NumRows);  
//    }                              // III C
//        
//
//    
//    
//                                                 
//         
app.getElementById('numberofrows').setText(NumRows);   

} //  NumRows > numberofrows                  III
//
//
// III  End
//
////////////////////////////////////////////////////////////////////////
  
  
  
  return app;
}





//      if (i == numberofrows ){
//         var a =  i.toString(); 
//         //app.getElementById('numberofrows').setText('hola' + a );  
//         if (i%2 == 0) {    
//            gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
//            applyCSS(gdgPanel[i], _gdgpaneleven);        
//           }
//         else{
//            gdgPanel[i] = app.createAbsolutePanel().setVisible(true).setId('gdgpanel'+[i]).setTag('gdgpanel'+[i]);
//            applyCSS(gdgPanel[i], _gdgpanelodd); 
//         }
//         
//         lineGdg[i] = app.createLabel(i + ' ' + Sheet.getRange( i+1, [6]).getValues().toString()).setId('linegdg' + [i]).setVisible(true);
//         applyCSS(lineGdg[i], _linegdg );  
//        
//       gdgLogo[i] = app.createImage().setId('gdglogo'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
//       applyCSS(gdgLogo[i], _gdglogo);
//       logoGdg[i] = app.createAnchor('-', Sheet.getRange( i+1, [16]).getValues().toString()).setName('logogdg'+ [i]).setId('logogdg' + [i]).setVisible(true);
//       applyCSS(logoGdg[i], _logogdg );  
//       
//       worldIcon[i] = app.createImage().setId('worldicon'+[i]).setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/world.png?attachauth=ANoY7cpFL-3Z0VDB6cBePlMB2Oq77xoL8hsg4N4kHNNuWbXzJ4nTtEkkCf8UHFICAcXSwv6rmT8ZOlAdftP0F3W8uTw3NeWiH4uj7wAiCbsVuRXrUTY3-YPV8F5nhXYhaVUFllBk7-O-2MacQiyM3kwMwTypcIEL4uDtThbEOvCmSisZWNkJqSsfF3szsQPsASD8KAYWiRAG&attredirects=0").setVisible(true);
//       applyCSS(worldIcon[i],_worldicon);
//       linkGdg[i] = app.createAnchor('-', Sheet.getRange( i+1, [13]).getValues().toString()).setName('linkgdg'+ [i]).setId('linkgdg' + [i]).setVisible(true);
//       applyCSS(linkGdg[i], _linkgdg );  
//    
//       gdgPanel[i].add(lineGdg[i],0,0);
//       gdgPanel[i].add(gdgLogo[i],120,0);
//       gdgPanel[i].add(logoGdg[i],120,0);
//       gdgPanel[i].add(worldIcon[i],150,0);
//       gdgPanel[i].add(linkGdg[i],155,0);
//        
//         //app.getElementById('gdgmainpanel').add(lineGdg[i]);    
//         app.getElementById('gdgmainpanel').add(gdgPanel[i]);    
//         app.getElementById('numberofrows').setText(NumRows); 
//      }
//      if (i > numberofrows ){
//         var a =  i.toString(); 
//         //app.getElementById('numberofrows').setText('hola' + a );  
//         lineGdg[i] = app.createLabel(i + Sheet.getRange( i+1, [6]).getValues().toString()).setId('linegdg' + [i]).setVisible(true);
//         applyCSS(lineGdg[i], _linegdg );  
//        
//         app.getElementById('gdgmainpanel').add(lineGdg[i]);    
//         app.getElementById('numberofrows').setText(NumRows); 
//      }
//} // the for loop 
//
// 