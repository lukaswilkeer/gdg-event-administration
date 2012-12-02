//
//
//   Script Add GDG 
//
//   This script is to add a GDG to the event administration
//
//
//   Autor Jacob@gtugs.org 
//   Date  01 05 2012
//   Version 0001
//   Services : Spreadsheet:  gdg  Sheet: gdg_sheet
//              UI
//              Doclist
//              mailapp
//              contact
//              sites
//              
// 


//
// Global variable
// 
//var gdg_doc_id ='0AjHGZg_MuQ8KdFpMNE1wR3BtOXBwNjNHdjB4dTZMaFE'

function doGet() {

var app = UiApp.createApplication().setTitle("Add GDG");

  
  ///////////////////////////////////////////////////////////////////////////////////////
//
//
//  Style Sheet
//
//
//////////////////////////////////////////////////

var _vermainpanel = {
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
    "margin-left":"25px",
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
    
  var verMainPanel = app.createVerticalPanel().setWidth('98%').setVisible(true);
  library.applyCSS(verMainPanel, _vermainpanel);  
  
  var abPanel = app.createAbsolutePanel().setId('abpanel').setWidth('100%').setHeight('400%').setVisible(false);
  //applyCSS(abPanel, _mainpanel);
 
  
  
//  var abPanel = app.createAbsolutePanel().setWidth('100%').setHeight('54px').setVisible(true);
//  library.applyCSS(abPanel, _mainpanel);

  var titlePanel = app.createAbsolutePanel().setWidth('100%').setHeight('1.5%').setVisible(true).setId('titlepanel').setStyleAttribute('background-image', "url('https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/800pxnocoloniesblankworoc1.png?attachauth=ANoY7cqwL7TE9yoEbNf6fS4Z3LSHHiuvnDA4E6uOJmKaDV0Hr1oGBSJQX10e8gXtMct5ZhaIY5g2I7DZsV5pCxnH4_tMaZV6DeSoon798BtDdL4494LOlI5Wt70govu1US_LbkIn00lBZ4XZabEIhrXrtSPNCcwXGO2sQZ-LpAcX_8fEcIellBG-M5MbUoAGV41i-X1DG0echCPCZLA7lBRib7opOcjXGA%3D%3D&attredirects=0')");
  library.applyCSS(titlePanel, _titelpanel);
  var titleLabel = app.createLabel('Add GDG').setId('titellabel').setVisible(true);
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
  titlePanel.add(titleLabel,80,20);  
  titlePanel.add(upArrow,410,4);
  titlePanel.add(upButton,410,4);
  titlePanel.add(downArrow,410,30);
  titlePanel.add(downButton,410,30);
  
  
  //
  // Handler to show the entire sheet 
  // 
  var clickHandlerExpand = app.createServerClickHandler("respondExpand");
  downButton.addClickHandler(clickHandlerExpand);
  clickHandlerExpand.addCallbackElement(abPanel);  

  //
  // Handler to hide the entire sheet 
  // 
  var clickHandlerColapse = app.createServerClickHandler("respondColapse");
  upButton.addClickHandler(clickHandlerColapse);
  clickHandlerColapse.addCallbackElement(abPanel);  
  
  
  var mandatoryGrid = app.createGrid(1, 1).setId('mandatorygrid');  
  var mandatoryLabel = app.createLabel("* Required").setId('mandatorylabel').setVisible(true);
  library.applyCSS(mandatoryLabel, _mandatory);
  mandatoryGrid.setWidget(0, 0,mandatoryLabel);
  
  var feedBackLabel = app.createLabel("Feedback").setId('feedbacklabel').setVisible(false);
  library.applyCSS(feedBackLabel,_feedback)

  /////////////
  //  
  // name area    
  //
var _namepanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _namelabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"80px",
    "margin":"4px",
    "height":"19px",
  }       

var _nametextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"120px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _gdgdescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"350px"
  } 
    
var _nameqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _namebuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // name PANEL
  //  
  var verGdgPanel = app.createVerticalPanel().setId('vergdgpanel').setWidth('100%').setVisible(true);
  var namePanel = app.createAbsolutePanel().setId('namepanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(namePanel, _namepanel);
      
  var nameLabel = app.createLabel("GDG:").setId('namelabel').setVisible(true);
  library.applyCSS(nameLabel, _namelabel);
  var nameTextBox = app.createTextBox().setName('nametextbox').setId('nametextbox').setVisible(true);
  library.applyCSS(nameTextBox, _nametextbox);  
  var nameMandatory = app.createLabel("*").setId('namemandatory').setVisible(true);
  library.applyCSS(nameMandatory, _mandatorystar);
  var gdgDescription = app.createLabel("GDG BH, GDG Cairo, GDG Tokio ").setId('gdghelp').setVisible(true);
  library.applyCSS(gdgDescription, _gdgdescription);
  var nameQMark = app.createImage().setId('nameqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(nameQMark,_nameqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var nameButtonQMark = app.createButton('_',showhelpHandler ).setId('namebuttonQMark').setVisible(true);;
  library.applyCSS(nameButtonQMark,_namebuttonqmark);

  //
  // Put parents and childs together for the name family
  //
  namePanel.add(nameLabel,0,0);
  namePanel.add(nameTextBox,75,0);
  namePanel.add(nameMandatory,200,0);
  namePanel.add(gdgDescription,75,22);
  namePanel.add(nameQMark,415,22);
  namePanel.add(nameButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // name help Panel
  //
  var nameHelpPanel = app.createAbsolutePanel().setId('namehelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(nameHelpPanel,_helppanel);
  var gdgHelpLabel = app.createLabel("HELP,  The name of the gdg you want to add.").setId('namehelplabel').setVisible(true);
  library.applyCSS(gdgHelpLabel,_helplabel);
  var gdgHelpGdg = app.createImage().setId('gdghelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(gdgHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var nameHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('namehelpbutton').setVisible(true);;
  library.applyCSS(nameHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help name family
  //
  nameHelpPanel.add(gdgHelpLabel,0,0);
  nameHelpPanel.add(gdgHelpGdg,400,2);
  nameHelpPanel.add(nameHelpButton,400,0); // Button has to go after the image
  
  //namePanel.add(nameHelpPanel,0,40);     
  verGdgPanel.add(namePanel);  
  verGdgPanel.add(nameHelpPanel); 
  
  /////////////
  //  
  // cont1name area    
  //
var _cont1namepanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _cont1namelabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"110px",
    "margin":"4px",
    "height":"19px",
  }       

var _cont1nametextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"120px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _cont1namedescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"300px"
  } 
    
var _cont1nameqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _cont1namebuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // cont1name PANEL
  //  
  var verCont1Panel = app.createVerticalPanel().setId('vernamepanel').setWidth('100%').setVisible(true);
  var cont1namePanel = app.createAbsolutePanel().setId('cont1namepanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(cont1namePanel, _cont1namepanel);
      
  var cont1nameLabel = app.createLabel("Name:").setId('cont1namelabel').setVisible(true);
  library.applyCSS(cont1nameLabel, _cont1namelabel);
  var cont1nameTextBox = app.createTextBox().setName('cont1nametextbox').setId('cont1nametextbox').setVisible(true);
  library.applyCSS(cont1nameTextBox, _cont1nametextbox);  
  var cont1nameMandatory = app.createLabel("*").setId('cont1namemandatory').setVisible(true);
  library.applyCSS(cont1nameMandatory, _mandatorystar);
  var cont1nameDescription = app.createLabel("Peter Sulivan, Abdul Razak, Yukio Hayashi").setId('cont1namehelp').setVisible(true);
  library.applyCSS(cont1nameDescription, _cont1namedescription);
  var cont1nameQMark = app.createImage().setId('cont1nameqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(cont1nameQMark,_cont1nameqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var cont1nameButtonQMark = app.createButton('_',showhelpHandler ).setId('cont1namebuttonQMark').setVisible(true);;
  library.applyCSS(cont1nameButtonQMark,_cont1namebuttonqmark);

  //
  // Put parents and childs together for the cont1name family
  //
  cont1namePanel.add(cont1nameLabel,0,0);
  cont1namePanel.add(cont1nameTextBox,75,0);
  cont1namePanel.add(cont1nameMandatory,200,0);
  cont1namePanel.add(cont1nameDescription,75,22);
  cont1namePanel.add(cont1nameQMark,415,22);
  cont1namePanel.add(cont1nameButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // cont1name help Panel
  //
  var cont1nameHelpPanel = app.createAbsolutePanel().setId('cont1namehelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(cont1nameHelpPanel,_helppanel);
  var cont1nameHelpLabel = app.createLabel("HELP,  The contact to the gdg you want to add.").setId('cont1namehelplabel').setVisible(true);
  library.applyCSS(cont1nameHelpLabel,_helplabel);
  var cont1nameHelpGdg = app.createImage().setId('cont1namehelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(cont1nameHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var cont1nameHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('cont1namehelpbutton').setVisible(true);;
  library.applyCSS(cont1nameHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help cont1name family
  //
  cont1nameHelpPanel.add(cont1nameHelpLabel,0,0);
  cont1nameHelpPanel.add(cont1nameHelpGdg,400,2);
  cont1nameHelpPanel.add(cont1nameHelpButton,400,0); // Button has to go after the image
  
  //cont1namePanel.add(cont1nameHelpPanel,0,40);     
  verCont1Panel.add(cont1namePanel);  
  verCont1Panel.add(cont1nameHelpPanel);  
 
  
  
  /////////////
  //  
  // surname area    
  //
var _surnamepanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _surnamelabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"110px",
    "margin":"4px",
    "height":"19px",
  }       

var _surnametextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"120px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _surnamedescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"300px"
  } 
    
var _surnameqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _surnamebuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // surname PANEL
  //  
  var versurnamePanel = app.createVerticalPanel().setId('versurnamepanel').setWidth('100%').setVisible(true);
  var surnamePanel = app.createAbsolutePanel().setId('surnamepanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(surnamePanel, _surnamepanel);
      
  var surnameLabel = app.createLabel("Surname:").setId('surnamelabel').setVisible(true);
  library.applyCSS(surnameLabel, _surnamelabel);
  var surnameTextBox = app.createTextBox().setName('surnametextbox').setId('surnametextbox').setVisible(true);
  library.applyCSS(surnameTextBox, _surnametextbox);  
  var surnameMandatory = app.createLabel("*").setId('surnamemandatory').setVisible(true);
  library.applyCSS(surnameMandatory, _mandatorystar);
  var surnameDescription = app.createLabel("Sulivan, Razak, Hayashi").setId('surnamehelp').setVisible(true);
  library.applyCSS(surnameDescription, _surnamedescription);
  var surnameQMark = app.createImage().setId('surnameqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(surnameQMark,_surnameqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var surnameButtonQMark = app.createButton('_',showhelpHandler ).setId('surnamebuttonQMark').setVisible(true);;
  library.applyCSS(surnameButtonQMark,_surnamebuttonqmark);

  //
  // Put parents and childs together for the surname family
  //
  surnamePanel.add(surnameLabel,0,0);
  surnamePanel.add(surnameTextBox,75,0);
  surnamePanel.add(surnameMandatory,200,0);
  surnamePanel.add(surnameDescription,75,22);
  surnamePanel.add(surnameQMark,415,22);
  surnamePanel.add(surnameButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // surname help Panel
  //
  var surnameHelpPanel = app.createAbsolutePanel().setId('surnamehelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(surnameHelpPanel,_helppanel);
  var surnameHelpLabel = app.createLabel("HELP,  The surname of the contact of the gdg you want to add.").setId('surnamehelplabel').setVisible(true);
  library.applyCSS(surnameHelpLabel,_helplabel);
  var surnameHelpGdg = app.createImage().setId('surnamehelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(surnameHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var surnameHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('surnamehelpbutton').setVisible(true);;
  library.applyCSS(surnameHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help surname family
  //
  surnameHelpPanel.add(surnameHelpLabel,0,0);
  surnameHelpPanel.add(surnameHelpGdg,400,2);
  surnameHelpPanel.add(surnameHelpButton,400,0); // Button has to go after the image
  
  //surnamePanel.add(surnameHelpPanel,0,40);     
  versurnamePanel.add(surnamePanel);  
  versurnamePanel.add(surnameHelpPanel);  
  
  /////////////
  //  
  // email area    
  //
var _emailpanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _emaillabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"90px",
    "margin":"4px",
    "height":"19px",
  }       
var _remaillabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"110px",
    "margin":"4px",
    "height":"19px",
  }       
    
var _emailtextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"120px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _emaildescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"360px"
  } 
    
var _emailqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _emailbuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // email PANEL
  //  
  var verEmailPanel = app.createVerticalPanel().setId('veremailpanel').setWidth('100%').setVisible(true);
  var emailPanel = app.createAbsolutePanel().setId('emailpanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(emailPanel, _emailpanel);
      
  var emailLabel = app.createLabel("Email:").setId('emaillabel').setVisible(true);
  library.applyCSS(emailLabel, _namelabel);
  var emailTextBox = app.createTextBox().setName('emailtextbox').setId('emailtextbox').setVisible(true);
  library.applyCSS(emailTextBox, _emailtextbox);  
  var emailMandatory = app.createLabel("*").setId('emailmandatory').setVisible(true);
  library.applyCSS(emailMandatory, _mandatorystar);

  var remailLabel = app.createLabel("Repeat email:").setId('remaillabel').setVisible(true);
  library.applyCSS(remailLabel, _remaillabel);
  var remailTextBox = app.createTextBox().setName('remailtextbox').setId('remailtextbox').setVisible(true);
  library.applyCSS(remailTextBox, _emailtextbox);  
  var remailMandatory = app.createLabel("*").setId('remailmandatory').setVisible(true);
  library.applyCSS(remailMandatory, _mandatorystar);
  
  var emailDescription = app.createLabel("peter@gtugs.org, abdul@gtugs.org, yukio@gtugs.org").setId('emailhelp').setVisible(true);
  library.applyCSS(emailDescription, _emaildescription);
  var emailQMark = app.createImage().setId('emailqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(emailQMark,_emailqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var emailButtonQMark = app.createButton('_',showhelpHandler ).setId('emailbuttonQMark').setVisible(true);;
  library.applyCSS(emailButtonQMark,_emailbuttonqmark);

  //
  // Put parents and childs together for the email family
  //
  emailPanel.add(emailLabel,0,0);
  emailPanel.add(emailTextBox,48,0);
  emailPanel.add(emailMandatory,173,0);
  
  emailPanel.add(remailLabel,190,0);
  emailPanel.add(remailTextBox,293,0);
  emailPanel.add(remailMandatory,417,0);
  
  emailPanel.add(emailDescription,40,22);
  emailPanel.add(emailQMark,415,22);
  emailPanel.add(emailButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // email help Panel
  //
  var emailHelpPanel = app.createAbsolutePanel().setId('emailhelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(emailHelpPanel,_helppanel);
  var emailHelpLabel = app.createLabel("HELP,  The  email of the contact to the gdg.").setId('emailhelplabel').setVisible(true);
  library.applyCSS(emailHelpLabel,_helplabel);
  var emailHelpGdg = app.createImage().setId('emailhelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(emailHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var emailHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('emailhelpbutton').setVisible(true);;
  library.applyCSS(emailHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help email family
  //
  emailHelpPanel.add(emailHelpLabel,0,0);
  emailHelpPanel.add(emailHelpGdg,400,2);
  emailHelpPanel.add(emailHelpButton,400,0); // Button has to go after the image
  
  //emailPanel.add(emailHelpPanel,0,40);     
  verEmailPanel.add(emailPanel);  
  verEmailPanel.add(emailHelpPanel);  

  
  
  /////////////
  //  
  // country area    
  //
var _countrypanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _countrylabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"90px",
    "margin":"4px",
    "height":"19px",
  }       
var _rcountrylabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"110px",
    "margin":"4px",
    "height":"19px",
  }       
    
var _countrytextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"120px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _countrydescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"360px"
  } 
    
var _countryqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _countrybuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // country PANEL
  //  
  var vercountryPanel = app.createVerticalPanel().setId('vercountrypanel').setWidth('100%').setVisible(true);
  var countryPanel = app.createAbsolutePanel().setId('countrypanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(countryPanel, _countrypanel);
      
  var countryLabel = app.createLabel("Country:").setId('countrylabel').setVisible(true);
  library.applyCSS(countryLabel, _namelabel);
  var countryTextBox = app.createTextBox().setName('countrytextbox').setId('countrytextbox').setVisible(true);
  library.applyCSS(countryTextBox, _countrytextbox);  
  var countryMandatory = app.createLabel("*").setId('countrymandatory').setVisible(true);
  library.applyCSS(countryMandatory, _mandatorystar);
  
  var countryDescription = app.createLabel("England, Egypt, Japan").setId('countryhelp').setVisible(true);
  library.applyCSS(countryDescription, _countrydescription);
  var countryQMark = app.createImage().setId('countryqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(countryQMark,_countryqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var countryButtonQMark = app.createButton('_',showhelpHandler ).setId('countrybuttonQMark').setVisible(true);;
  library.applyCSS(countryButtonQMark,_countrybuttonqmark);

  //
  // Put parents and childs together for the country family
  //
  countryPanel.add(countryLabel,0,0);
  countryPanel.add(countryTextBox,65,0);
  countryPanel.add(countryMandatory,195,0);
  
  
  countryPanel.add(countryDescription,65,22);
  countryPanel.add(countryQMark,415,22);
  countryPanel.add(countryButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // country help Panel
  //
  var countryHelpPanel = app.createAbsolutePanel().setId('countryhelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(countryHelpPanel,_helppanel);
  var countryHelpLabel = app.createLabel("HELP,  The  country of the gdg.").setId('countryhelplabel').setVisible(true);
  library.applyCSS(countryHelpLabel,_helplabel);
  var countryHelpGdg = app.createImage().setId('countryhelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(countryHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var countryHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('countryhelpbutton').setVisible(true);;
  library.applyCSS(countryHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help country family
  //
  countryHelpPanel.add(countryHelpLabel,0,0);
  countryHelpPanel.add(countryHelpGdg,400,2);
  countryHelpPanel.add(countryHelpButton,400,0); // Button has to go after the image
  

  vercountryPanel.add(countryPanel);  
  vercountryPanel.add(countryHelpPanel);  
 
  
  /////////////
  //  
  // Region area    
  //
var _regionpanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _regionlabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"90px",
    "margin":"4px",
    "height":"19px",
  }       
var _rregionlabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"110px",
    "margin":"4px",
    "height":"19px",
  }       
    
var _regiontextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"120px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _regiondescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"360px"
  } 
    
var _regionqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _regionbuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // region PANEL
  //  
  var verregionPanel = app.createVerticalPanel().setId('verregionpanel').setWidth('100%').setVisible(true);
  var regionPanel = app.createAbsolutePanel().setId('regionpanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(regionPanel, _regionpanel);
      
  var regionLabel = app.createLabel("Region:").setId('regionlabel').setVisible(true);
  library.applyCSS(regionLabel, _namelabel);
  var regionTextBox = app.createTextBox().setName('regiontextbox').setId('regiontextbox').setVisible(true);
  library.applyCSS(regionTextBox, _regiontextbox);  
  var regionMandatory = app.createLabel("*").setId('regionmandatory').setVisible(true);
  library.applyCSS(regionMandatory, _mandatorystar);
  
  var regionDescription = app.createLabel("Oxfordshire, Cairo, Kanto").setId('regionhelp').setVisible(true);
  library.applyCSS(regionDescription, _regiondescription);
  var regionQMark = app.createImage().setId('regionqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(regionQMark,_regionqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var regionButtonQMark = app.createButton('_',showhelpHandler ).setId('regionbuttonQMark').setVisible(true);;
  library.applyCSS(regionButtonQMark,_regionbuttonqmark);

  //
  // Put parents and childs together for the region family
  //
  regionPanel.add(regionLabel,0,0);
  regionPanel.add(regionTextBox,65,0);
  regionPanel.add(regionMandatory,195,0);
  
  
  regionPanel.add(regionDescription,65,22);
  regionPanel.add(regionQMark,415,22);
  regionPanel.add(regionButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // region help Panel
  //
  var regionHelpPanel = app.createAbsolutePanel().setId('regionhelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(regionHelpPanel,_helppanel);
  var regionHelpLabel = app.createLabel("HELP,  The  region where this gdg acts.").setId('regionhelplabel').setVisible(true);
  library.applyCSS(regionHelpLabel,_helplabel);
  var regionHelpGdg = app.createImage().setId('regionhelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(regionHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var regionHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('regionhelpbutton').setVisible(true);;
  library.applyCSS(regionHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help region family
  //
  regionHelpPanel.add(regionHelpLabel,0,0);
  regionHelpPanel.add(regionHelpGdg,400,2);
  regionHelpPanel.add(regionHelpButton,400,0); // Button has to go after the image
  

  verregionPanel.add(regionPanel);  
  verregionPanel.add(regionHelpPanel);  
  
    /////////////
  //  
  // city area    
  //
var _citypanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _citylabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"90px",
    "margin":"4px",
    "height":"19px",
  }       
var _rcitylabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"110px",
    "margin":"4px",
    "height":"19px",
  }       
    
var _citytextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"120px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _citydescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"360px"
  } 
    
var _cityqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _citybuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // city PANEL
  //  
  var vercityPanel = app.createVerticalPanel().setId('vercitypanel').setWidth('100%').setVisible(true);
  var cityPanel = app.createAbsolutePanel().setId('citypanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(cityPanel, _citypanel);
      
  var cityLabel = app.createLabel("City:").setId('citylabel').setVisible(true);
  library.applyCSS(cityLabel, _namelabel);
  var cityTextBox = app.createTextBox().setName('citytextbox').setId('citytextbox').setVisible(true);
  library.applyCSS(cityTextBox, _citytextbox);  
  var cityMandatory = app.createLabel("*").setId('citymandatory').setVisible(true);
  library.applyCSS(cityMandatory, _mandatorystar);
  
  var cityDescription = app.createLabel("Oxford, Cairo, Tokyo").setId('cityhelp').setVisible(true);
  library.applyCSS(cityDescription, _citydescription);
  var cityQMark = app.createImage().setId('cityqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(cityQMark,_cityqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var cityButtonQMark = app.createButton('_',showhelpHandler ).setId('citybuttonQMark').setVisible(true);;
  library.applyCSS(cityButtonQMark,_citybuttonqmark);

  //
  // Put parents and childs together for the city family
  //
  cityPanel.add(cityLabel,0,0);
  cityPanel.add(cityTextBox,65,0);
  cityPanel.add(cityMandatory,195,0);
  
  
  cityPanel.add(cityDescription,65,22);
  cityPanel.add(cityQMark,415,22);
  cityPanel.add(cityButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // city help Panel
  //
  var cityHelpPanel = app.createAbsolutePanel().setId('cityhelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(cityHelpPanel,_helppanel);
  var cityHelpLabel = app.createLabel("HELP,  The  city where this gdg acts.").setId('cityhelplabel').setVisible(true);
  library.applyCSS(cityHelpLabel,_helplabel);
  var cityHelpGdg = app.createImage().setId('cityhelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(cityHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var cityHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('cityhelpbutton').setVisible(true);;
  library.applyCSS(cityHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help city family
  //
  cityHelpPanel.add(cityHelpLabel,0,0);
  cityHelpPanel.add(cityHelpGdg,400,2);
  cityHelpPanel.add(cityHelpButton,400,0); // Button has to go after the image
  

  vercityPanel.add(cityPanel);  
  vercityPanel.add(cityHelpPanel);  

  
  /////////////
  //  
  // site area    
  //
var _sitepanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _sitelabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"90px",
    "margin":"4px",
    "height":"19px",
  }       

    
var _sitetextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"360px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _sitedescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"370px"
  } 
    
var _siteqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _sitebuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // site PANEL
  //  
  var versitePanel = app.createVerticalPanel().setId('versitepanel').setWidth('100%').setVisible(true);
  var sitePanel = app.createAbsolutePanel().setId('sitepanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(sitePanel, _sitepanel);
      
  var siteLabel = app.createLabel("site:").setId('sitelabel').setVisible(true);
  library.applyCSS(siteLabel, _namelabel);
  var siteTextBox = app.createTextBox().setName('sitetextbox').setId('sitetextbox').setVisible(true);
  library.applyCSS(siteTextBox, _sitetextbox);  
  var siteMandatory = app.createLabel("*").setId('sitemandatory').setVisible(true);
  library.applyCSS(siteMandatory, _mandatorystar);
  
  var siteDescription = app.createLabel("http://oxford.gdg.org, http://cairo.gdg.org, http://tokyo.gdg.org").setId('sitehelp').setVisible(true);
  library.applyCSS(siteDescription, _sitedescription);
  var siteQMark = app.createImage().setId('siteqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(siteQMark,_siteqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var siteButtonQMark = app.createButton('_',showhelpHandler ).setId('sitebuttonQMark').setVisible(true);;
  library.applyCSS(siteButtonQMark,_sitebuttonqmark);

  //
  // Put parents and childs together for the site family
  //
  sitePanel.add(siteLabel,0,0);
  sitePanel.add(siteTextBox,40,0);
  //sitePanel.add(siteMandatory,195,0);
  
  
  sitePanel.add(siteDescription,40,22);
  sitePanel.add(siteQMark,415,22);
  sitePanel.add(siteButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // site help Panel
  //
  var siteHelpPanel = app.createAbsolutePanel().setId('sitehelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(siteHelpPanel,_helppanel);
  var siteHelpLabel = app.createLabel("HELP,  The  site of this gdg.").setId('sitehelplabel').setVisible(true);
  library.applyCSS(siteHelpLabel,_helplabel);
  var siteHelpGdg = app.createImage().setId('sitehelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy&attredirects=0").setVisible(true);
  library.applyCSS(siteHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var siteHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('sitehelpbutton').setVisible(true);;
  library.applyCSS(siteHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help site family
  //
  siteHelpPanel.add(siteHelpLabel,0,0);
  siteHelpPanel.add(siteHelpGdg,400,2);
  siteHelpPanel.add(siteHelpButton,400,0); // Button has to go after the image
  

  versitePanel.add(sitePanel);  
  versitePanel.add(siteHelpPanel);  



  /////////////
  //  
  // logo area    
  //
var _logopanel = {
    "background-color":"#f2f2f2",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"2px",  
    "width":"99%",
   
    "text-align":"left",
  }       

var _logolabel = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "color": "#3D85C6",
    "position": "relative",
    "width":"90px",
    "margin":"4px",
    "height":"19px",
  }       

    
var _logotextbox = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "margin":"4px",
    "width":"360px",
    "height":"19px",
  }      

    var _mandatorystar = {
    "font-family":"verdana" ,    
    "font-size":"normal",
    "font-weight": "bold",
    "background-color":"transparant",
    "color": "#E81A1D",
    "position": "relative",
    "margin":"2px",
    "width":"8px",
  }   
    
var _logodescription = {
    "font-family":"verdana" ,    
    "font-size":"0.8em",
    "font-weight": "normal",
    "color": "#666154",
    "position": "relative",
    "margin":"2px",    
    "width":"370px"
  } 
    
var _logoqmark  = {
    "height":"16px",
    "width":"16px",
    "position": "relative",
    "margin":"2px",    
 }        
    
var _logobuttonqmark  = {
    "height":"16px",
    "width":"16px",
    "margin":"7px",
    "position": "relative",
    "color": "#f2fcf3",
    "background":"none",
    "border":"0px",
 }  
    
  //
  // logo PANEL
  //  
  var verlogoPanel = app.createVerticalPanel().setId('verlogopanel').setWidth('100%').setVisible(true);
  var logoPanel = app.createAbsolutePanel().setId('logopanel').setWidth('100%').setHeight('46px').setVisible(true);
  library.applyCSS(logoPanel, _logopanel);
      
  var logoLabel = app.createLabel("logo:").setId('logolabel').setVisible(true);
  library.applyCSS(logoLabel, _namelabel);
  var logoTextBox = app.createTextBox().setName('logotextbox').setId('logotextbox').setVisible(true);
  library.applyCSS(logoTextBox, _logotextbox);  
  var logoMandatory = app.createLabel("*").setId('logomandatory').setVisible(true);
  library.applyCSS(logoMandatory, _mandatorystar);
  
  var logoDescription = app.createLabel("http://oxford.gdg.org/oxgdg.png, http://cairo.gdg.org/cairo.jpg").setId('logohelp').setVisible(true);
  library.applyCSS(logoDescription, _logodescription);
  var logoQMark = app.createImage().setId('logoqmark').setUrl("https://lh3.googleusercontent.com/-rSnaGU0nFKM/TraxEc2n53I/AAAAAAAAAWs/mdCksfeVnXY/s128/questionmark.png").setVisible(true);
  library.applyCSS(logoQMark,_logoqmark);
  var showhelpHandler = app.createServerClickHandler("showHideHelp");
  var logoButtonQMark = app.createButton('_',showhelpHandler ).setId('logobuttonQMark').setVisible(true);;
  library.applyCSS(logoButtonQMark,_logobuttonqmark);

  //
  // Put parents and childs together for the logo family
  //
  logoPanel.add(logoLabel,0,0);
  logoPanel.add(logoTextBox,40,0);
  //logoPanel.add(logoMandatory,195,0);
  
  
  logoPanel.add(logoDescription,40,22);
  logoPanel.add(logoQMark,415,22);
  logoPanel.add(logoButtonQMark,410,18);    // Button has to go after the image 
  
  //
  // logo help Panel
  //
  var logoHelpPanel = app.createAbsolutePanel().setId('logohelppanel').setHeight('46px').setVisible(false); 
  library.applyCSS(logoHelpPanel,_helppanel);
  var logoHelpLabel = app.createLabel("HELP,  The  url to the logo of this gdg.").setId('logohelplabel').setVisible(true);
  library.applyCSS(logoHelpLabel,_helplabel);
  var logHelpGdg = app.createImage().setId('loghelpgdg').setUrl("https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth=ANoY7crYj2gHeZnMImsbt0VSfylsspMlRH6Ecyb0_Zse_I3xx_8loF32trhzi3mz6iqG185wbyZkw_Njfm9r-tCPlEnBj5eAlNwOuosWaCeJImvFKuiXsSU0ZvZ8HlNtK7_5etcLQkf-rQQqBJvu5vBW3SdKfQifev_bPtkys5IY79f7beYQDEYIkMUvNx2HXt-SDC9vin12&attredirects=0").setVisible(true);
  library.applyCSS(logHelpGdg,_helpgdg);
  var hidehelpHandler = app.createServerClickHandler("showHideHelp");  
  var logoHelpButton = app.createButton('&nbsp;',hidehelpHandler).setId('logohelpbutton').setVisible(true);;
  library.applyCSS(logoHelpButton,_helpbutton);
  
  //
  // Put parents and childs together for the help logo family
  //
  logoHelpPanel.add(logoHelpLabel,0,0);
  logoHelpPanel.add(logHelpGdg,400,2);
  logoHelpPanel.add(logoHelpButton,400,0); // Button has to go after the image
  

  verlogoPanel.add(logoPanel);  
  verlogoPanel.add(logoHelpPanel);  
  
  /////////////
  //  
  // Button area    
  //
  //
  // button style sheet
  //
  var _butpanel = {
    "background-color":"none",
    "color": "#3D85C6",
    "position": "relative",
    "margin":"5px",  
    "width":"99%",
    "height":"34px",
    "text-align":"left",
  }       

 var _button  = {
    "height":"20px",
    "width":"100px",
    "margin-left":"5px",
    "position": "relative",
    "color": "#3D85C6",
    "background":"none",
    "border":"1px solid #7EB5E6",
    "font-weight": "bold",
    "font-size": "x-small",

 }         
  

  var buttonPanel = app.createAbsolutePanel().setId('butpanel').setWidth('100%').setHeight('40px').setVisible(true);
  library.applyCSS(buttonPanel, _butpanel);

  var addButton = app.createButton('Add' ).setId('addbutton').setVisible(true).setEnabled(true);
  library.applyCSS(addButton,_button);

  var canButton = app.createButton('Cancel' ).setId('canbutton').setVisible(true).setEnabled(true);
  library.applyCSS(canButton,_button);
  

  buttonPanel.add(addButton,10,10);
  buttonPanel.add(canButton,130,10);

  /////////////
  //
  // HANDLER AREA 
  //
  
  //
  // Handler to cancel all the input and clean the input 
  // 
  var clickHandlerCan = app.createServerClickHandler("respondToCancel");
  canButton.addClickHandler(clickHandlerCan);
  clickHandlerCan.addCallbackElement(buttonPanel);

  //
  // Handler to submit the formula 
  // 
  var clickHandlerAdd = app.createServerClickHandler("respondToAdd");
  addButton.addClickHandler(clickHandlerAdd);
  clickHandlerAdd.addCallbackElement(verMainPanel);  
  
  
  verMainPanel.add(titlePanel);
  abPanel.add(mandatoryGrid);
  abPanel.add(feedBackLabel);
  abPanel.add(verGdgPanel);
  abPanel.add(verCont1Panel);
  abPanel.add(versurnamePanel);
  abPanel.add(verEmailPanel);
  abPanel.add(vercountryPanel);
  abPanel.add(verregionPanel);
  abPanel.add(vercityPanel);
  abPanel.add(versitePanel);
  abPanel.add(verlogoPanel);
  abPanel.add(buttonPanel);
  
  verMainPanel.add(abPanel);


  app.add(verMainPanel);
  
  return app;
} 

  
//
//
// Function to SHOW the HELP texts
//
//
function showHideHelp(e) {
 var app = UiApp.getActiveApplication();
 var QButtons = new Array("namebuttonQMark","cont1namebuttonQMark","surnamebuttonQMark","emailbuttonQMark","countrybuttonQMark","regionbuttonQMark","citybuttonQMark","sitebuttonQMark","logobuttonQMark");
 var helpButtons = new Array("namehelpbutton", "cont1namehelpbutton","surnamehelpbutton","emailhelpbutton","countryhelpbutton","regionhelpbutton","cityhelpbutton","sitehelpbutton","logohelpbutton");
 var helpPanels = new Array("namehelppanel", "cont1namehelppanel","surnamehelppanel", "emailhelppanel", "countryhelppanel", "regionhelppanel", "cityhelppanel", "sitehelppanel", "logohelppanel");  
   for (var i = 0; i < QButtons.length ; i++) { 
       if( e.parameter.source == QButtons[i]){                 
           app.getElementById(helpPanels[i]).setVisible(true);
       }     
   }
   for (var i = 0; i < helpButtons.length ; i++) { 
        if( e.parameter.source == helpButtons[i]){      
            app.getElementById(helpPanels[i]).setVisible(false);
        }
   } 
 return app; 
}

//
//
// Function to CANCEL the input and get the fuck off!
//
//
function respondToCancel(e){  
  var app = UiApp.getActiveApplication();
  app.getElementById('feedbacklabel').setVisible(false).setText("");
  app.getElementById('nametextbox').setVisible(true).setValue("");
  app.getElementById('cont1nametextbox').setVisible(true).setText("");
  app.getElementById('surnametextbox').setVisible(true).setText("");
  app.getElementById('emailtextbox').setVisible(true).setValue("");
  app.getElementById('remailtextbox').setVisible(true).setValue("");
  app.getElementById('countrytextbox').setVisible(true).setValue("");
  app.getElementById('regiontextbox').setVisible(true).setValue("");
  app.getElementById('citytextbox').setVisible(true).setValue("");
  app.getElementById('sitetextbox').setVisible(true).setValue("");
  app.getElementById('logotextbox').setVisible(true).setValue("");
  app.getElementById('abpanel').setVisible(false);
  
   var helpPanels = new Array("namehelppanel", "cont1namehelppanel","surnamehelppanel", "emailhelppanel", "countryhelppanel", "regionhelppanel", "cityhelppanel", "sitehelppanel", "logohelppanel");  
   for (var i = 0; i < helpPanels.length ; i++) { 
            app.getElementById(helpPanels[i]).setVisible(false);
   }
return app;
}  


//
//
// Function to hide the add panel
//
//

function respondColapse(e) {
 var app = UiApp.getActiveApplication();
     app.getElementById('abpanel').setVisible(false);
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
// Function to submit the input 
//
//
function respondToAdd(e){
  var app = UiApp.getActiveApplication();
  
  var name = library.upperC(e.parameter.nametextbox);
  var cont1 = library.proper(e.parameter.cont1nametextbox);
  var surname = library.proper(e.parameter.surnametextbox);
  var email = library.proper(e.parameter.emailtextbox);
  var remail = library.proper(e.parameter.remailtextbox);
  var country = library.proper(e.parameter.countrytextbox);
  var region = library.proper(e.parameter.regiontextbox);
  var city = library.proper(e.parameter.citytextbox);
  var site = library.proper(e.parameter.sitetextbox);
  var logo = library.proper(e.parameter.logotextbox);
  var gdgid = library.idGenerator();
  
    if ( library.isNotEmpty(name)) {
      if (doesExists(name)) {
           // 
           // 
           // This GDG already exists in the spreadsheet.
           //
           //
        app.getElementById('feedbacklabel').setVisible(true).setText("It seems This name: "+ name + " is already in use.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');
         }
      else { // GDG already exists
        if ( library.isNotEmpty(cont1)) {
          
          if (email != remail) {
            //
            // Diference in the emails
            //
            app.getElementById('feedbacklabel').setVisible(true).setText("Error in the email.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');
            }
          else  {// diference in emails
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (email != '' & emailPattern.test(email) == true){
            
        
        if (library.isNotEmpty(country)) {              
          
        if (library.isNotEmpty(region)) {                        
          
        if (library.isNotEmpty(city)) {  
        
   
          
        // disable the submit button a moment
                app.getElementById('addbutton').setEnabled(false);
                

        //
        // lock this part of the script 
        // 
        //  
        var lock = LockService.getPublicLock();
        if (lock.tryLock(10000))  {
        //
        // Got the lock can do the sheet stuff now
        //
         //var File = DocsList.find("gdg");                    // Note: DocsList.find returns an array into your variable.
         //var Id =  File[0].getId();
         //var Id = '0AjHGZg_MuQ8KdFhMRDlhUkVNWkpZTmNaREVCb2tTRkE';
         var Id = '0AjHGZg_MuQ8KdFpMNE1wR3BtOXBwNjNHdjB4dTZMaFE'; 
         var Ss = SpreadsheetApp.openById(Id);
         var Sheet = Ss.getSheetByName("gdg_sheet");

         // find out the number of rows and columns of the sheet.
         var NumRows = Sheet.getLastRow();
         var newRow = NumRows + 1;
        
         Sheet.getRange([newRow],[1]).setValue(library.genTimestamp());
         Sheet.getRange([newRow],[2]).setValue(library.whoIs());
         Sheet.getRange([newRow],[3]).setValue(library.genTimestamp()); 
         Sheet.getRange([newRow],[4]).setValue(library.whoIs());  
         Sheet.getRange([newRow],[5]).setValue(gdgid);    
         Sheet.getRange([newRow],[6]).setValue(name);
         Sheet.getRange([newRow],[7]).setValue(country); 
         Sheet.getRange([newRow],[8]).setValue(region); 
         Sheet.getRange([newRow],[9]).setValue(city); 
         Sheet.getRange([newRow],[10]).setValue(cont1);
         Sheet.getRange([newRow],[11]).setValue(surname); 
         Sheet.getRange([newRow],[12]).setValue(email);
         Sheet.getRange([newRow],[13]).setValue(site); 
         Sheet.getRange([newRow],[14]).setValue(logo);  
         Sheet.getRange([newRow],[15]).setValue(gdgid);         
                  
        } else {  // lock 
        //
        // I couldn’t get the lock, now for plan B :(
        //
        app.getElementById('feedbacklabel').setVisible(true).setText( "An error ocurred, please try again.");
    
        }
        lock.releaseLock();
                
        //
        // clean up the sheet and leave a message
        //  
        app.getElementById('addbutton').setEnabled(true);     
        var site = SitesApp.getActiveSite();              
              
        app.getElementById('feedbacklabel').setVisible(true).setText("GDG: " + name + " added corectly."+ site).setStyleAttribute("color", "green").setStyleAttribute('font-size', '14px');      
      
        app.getElementById('nametextbox').setVisible(true).setValue("");  
        app.getElementById('cont1nametextbox').setVisible(true).setText("");
        app.getElementById('surnametextbox').setVisible(true).setText("");  
        app.getElementById('emailtextbox').setVisible(true).setValue("");
        app.getElementById('remailtextbox').setVisible(true).setValue("");  
        app.getElementById('countrytextbox').setVisible(true).setValue("");  
        app.getElementById('countrytextbox').setVisible(true).setValue("");          
        app.getElementById('regiontextbox').setVisible(true).setValue("");                
        app.getElementById('citytextbox').setVisible(true).setValue("");      
        app.getElementById('sitetextbox').setVisible(true).setValue("");      
        app.getElementById('logotextbox').setVisible(true).setValue(""); 
              
         
          
         //
         // 
         // 
         // Send an email to the people within GDG interested in this contact. 
         //
          
         MailApp.sendEmail('jacob@gtugs.org'
                           ,'[GDG-BH], GDG: '+ name +' added.' 
                           ,'textBody', {htmlBody: 'Hi Everybody,' +
                            '<br><br>GDG: <b>'+ name + 
                            '</b>&nbsp;Has been added to the system<br>By: <b>'+ cont1 + ' ' + surname +
                            '</b><br>Email: <b>'+ email +  
                            '</b><br>This GDG is from: <b>'+ country +', ' +  city +
                            '</b><br><br> Greets,<br><br> ' +
                            '<div name="background" style="background-image: url(https://static-focus-opensocial.googleusercontent.com/gadgets/proxy?url=https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/800pxnocoloniesblankworoc1.png?attachauth%3DANoY7cqwL7TE9yoEbNf6fS4Z3LSHHiuvnDA4E6uOJmKaDV0Hr1oGBSJQX10e8gXtMct5ZhaIY5g2I7DZsV5pCxnH4_tMaZV6DeSoon798BtDdL4494LOlI5Wt70govu1US_LbkIn00lBZ4XZabEIhrXrtSPNCcwXGO2sQZ-LpAcX_8fEcIellBG-M5MbUoAGV41i-X1DG0echCPCZLA7lBRib7opOcjXGA%253D%253D%26attredirects%3D0&amp;container=focus&amp;gadget=AppsScriptb605eab590c360c2&amp;rewriteMime=image/*&amp;no_expand=1&amp;refresh=60);  width: 100%; height: 62px; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; ">'+
                            '<div name="text" style="margin-left:10px;display:inline;vertical-align:middle;font-family: verdana; font-size: xx-large; font-weight: bold; color: grey">GDG BH'+
                            '</div>'+
                            '<div name="text" style="display:inline;vertical-align:middle;">'+
                            '<img  src="https://static-focus-opensocial.googleusercontent.com/gadgets/proxy?url=https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth%3DANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy%26attredirects%3D0&amp;container=focus&amp;gadget=AppsScriptb605eab590c360c2&amp;rewriteMime=image/*&amp;no_expand=1&amp;refresh=60" style="height: 60px; width: 30px; margin-left: 10px;display:inline;vertical-align:middle;  ">'+
                            '</div>'
                           ,replyTo: 'jacob@gtugs.org'});

         //
         // 
         // 
         // Send an email to the contact of the new GDG. 
         //
          
         MailApp.sendEmail(email
                           ,'[GDG-BH], GDG: '+ name +' added.' 
                           ,'textBody', {htmlBody: 'Hi ' + cont1 + ', ' +
                            '<br><br>Thanks for adding the GDG: <b>'+ name + 
                            '</b><br><br>The primary contact for this GDG is: <b>'+ cont1 + ' ' + surname +
                            '</b><br>The contact email is: <b>'+ email +  
                            '</b><br>The GDG location is: <b>'+ country +', ' + region+', ' +   city +
                            '</b><br><br><br> The GDG Locator is: <b>' +  gdgid +'</b>' +
                                         '</b><br><div style="font-size:0.8em" >Save this Locater for future use.</div>'  +             
                            '</b><br><br> With kind Regards,<br><br> ' +
                            '<div name="background" style="background-image: url(https://static-focus-opensocial.googleusercontent.com/gadgets/proxy?url=https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/800pxnocoloniesblankworoc1.png?attachauth%3DANoY7cqwL7TE9yoEbNf6fS4Z3LSHHiuvnDA4E6uOJmKaDV0Hr1oGBSJQX10e8gXtMct5ZhaIY5g2I7DZsV5pCxnH4_tMaZV6DeSoon798BtDdL4494LOlI5Wt70govu1US_LbkIn00lBZ4XZabEIhrXrtSPNCcwXGO2sQZ-LpAcX_8fEcIellBG-M5MbUoAGV41i-X1DG0echCPCZLA7lBRib7opOcjXGA%253D%253D%26attredirects%3D0&amp;container=focus&amp;gadget=AppsScriptb605eab590c360c2&amp;rewriteMime=image/*&amp;no_expand=1&amp;refresh=60);  width: 100%; height: 62px; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; ">'+
                            '<div name="text" style="margin-left:10px;display:inline;vertical-align:middle;font-family: verdana; font-size: xx-large; font-weight: bold; color: grey">GDG'+
                            '</div>'+
                            '<div name="text" style="display:inline;vertical-align:middle;">'+
                            '<img  src="https://static-focus-opensocial.googleusercontent.com/gadgets/proxy?url=https://b253654b-a-906ce31e-s-sites.googlegroups.com/a/gtugs.org/bh/gdg_logo.png?attachauth%3DANoY7cpcz4cicRU3Uaql0Ejhpd78gHjW7kHsAglUQItFnNZb6vsetXeiav2LRF3Jb8oE6IRdC_EHzLgEhC3mv0leC-vgFcLcLY_kiBzcnK53HixqrbSxJdu96wp9wZO0vyvT_RCZcbl4B0iFHe1aEHJDDtPO3Oxz7RJdGl5n91_W1N077KUn4SG3TCDWMpyEn5H_Z1YsYmsy%26attredirects%3D0&amp;container=focus&amp;gadget=AppsScriptb605eab590c360c2&amp;rewriteMime=image/*&amp;no_expand=1&amp;refresh=60" style="height: 60px; width: 30px; margin-left: 10px;display:inline;vertical-align:middle;  ">'+
                            '</div>'
                           ,noReply: true});

          //
          //
          // Add this contact to a list in GDG contacts
          //
          //
          if(ContactsApp.findContactGroup("GDGlist")==null){
             ContactsApp.createContactGroup("GDGlist");
          }
  
          if ( ContactsApp.getContact(email)== null) { 
                    // add the contact
                    ContactsApp.createContact(cont1,surname,email);    
                    // add the email data to the contacts and to the mail list.
                    var group = ContactsApp.findContactGroup("GDGlist")
                    var myContact = ContactsApp.getContact(email);    
                    myContact.addCompany(name, 'GDG');
                    myContact.addUrl('Site', site);
                    myContact.addCustomField('Country', country);
                    myContact.addCustomField('Region', region);
                    myContact.addCustomField('City', city);
                    group.addContact(myContact);
                   
        }
          
        // 
        // add a page for this gdg 
        //
        var site = SitesApp.getSite('gtugs.org', 'bh');
        var targetParent = site.getChildByName('test');
        var gdgPageTemplate = site.getTemplates()[3];
        
//        for (var i = 1; i < gdgPageTemplate.length  ; i++) { 
//               if ( gdgPageTemplate[i] == 'gdg_page'  ) {
//               var template = gdgPageTemplate[i] 
//                    }
//           }    
         
          var templateUrl = site.getChildByName('GDG_page');

          var clean = library.blanksToUnderscore(name);
          var html = SitesApp.getPageByUrl('https://sites.google.com/a/gtugs.org/bh/test/gdg_page_dummy').getHtmlContent();
          var add = targetParent.createWebPage(clean, clean, html );     
          var newUrl =  'https://sites.google.com/a/gtugs.org/bh/test/' + clean
          Sheet.getRange([newRow],[16]).setValue(newUrl); 

   // }    

//}  
         
          
        }  // City empty
        else {
        app.getElementById('feedbacklabel').setVisible(true).setText( "Please enter a City.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');
        }         
              
        }  // Region empty
        else {
        app.getElementById('feedbacklabel').setVisible(true).setText( "Please enter a Region.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');
        }         
        }  // Country empty
        else {
        app.getElementById('feedbacklabel').setVisible(true).setText( "Please enter a country.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');
        }   
        }  // email patern
        else {
        app.getElementById('feedbacklabel').setVisible(true).setText( "Please enter a valid email.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');            
             } 
        }  // diference in email  
        }  // Cont1 empty
      else {
        app.getElementById('feedbacklabel').setVisible(true).setText( "Please enter a contact.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');
      }
      } //name allready in use 
      
        
       }  // name empty
  else {   // name empty
      app.getElementById('feedbacklabel').setVisible(true).setText( "Please enter a name.").setStyleAttribute("color", "#E81A1D").setStyleAttribute('font-size', '14px');
  }

  
  return app;
}

/////////////
//  
// Utilities area    
//
//
//
function doesExists(name){
//var File = DocsList.find("gdg");                    // Note: DocsList.find returns an array into your variable.
//var Id =  File[0].getId();
//var Id = '0AjHGZg_MuQ8KdFhMRDlhUkVNWkpZTmNaREVCb2tTRkE  ';
var Id= '0AjHGZg_MuQ8KdFpMNE1wR3BtOXBwNjNHdjB4dTZMaFE';  
var Ss = SpreadsheetApp.openById(Id);
var Sheet = Ss.getSheetByName("gdg_sheet");
var NumRows = Sheet.getLastRow(); 
//var name = library.proper(name);
  
for (var i = 1; i < NumRows+1 ; i++) { 
     if ( Sheet.getRange( [i], [6]).getValues()== name  ) {
        return true;
        }
    }    
}    
  
// 
// 
// Format string to proper case 
// this comes from http://www.google.com/support/forum/p/apps-script/thread?tid=32bc3464b80f6bf2&hl=en
// Henrique Abreu 
//
//
//function proper(string) {
//  return string.replace(/\w\S*/g, function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();});
//}

//function upperC(string) {
//  return string.toUpperCase();
//}
//function lowerC(string) {
// return string.toUpperCase();
//}
//
//function blanksToUnderscore(string) {
//  string = string.replace(/^\s+|\s+$/g,""); //remove white space before and after
//  string = string.replace(/\s/g,  "_");
//  return string;  
//}
//

//function genTimestamp(){
// return Utilities.formatDate(new Date(), "GMT-2", "MM/dd/yyyy'T'HH:mm:ss'Z'");
//}  
//
//function whoIs(){
//  var whoIs = Session.getActiveUser().getEmail();
//  if (library.isNotEmpty(whoIs)) {
//  return whoIs
//  }
//  else {return "Unknown"}
//    
//}
//

//
// This comes from http://www.google.com/support/forum/p/apps-script/thread?tid=37f6b2089a6a96a6&hl=en
// App Salad
//
//function library.isNotEmpty(string) 
//    {
//        
//        if(!string)             return false;         
//        if(string == '')        return false;
//        if(string === false)    return false; 
//        if(string === null)     return false; 
//        if(string == undefined) return false;
//        string = string+' '; // check for a bunch of whitespace
//        if('' == (string.replace(/^\s\s*/, '').replace(/\s\s*$/, ''))) return false;       
//        return true;        
//    }

// This comes from https://sites.google.com/site/scriptsexamples/gs-interactive
// James Fereira 
//
//function library.applyCSS(element, style){
//  for (var key in style){
//    element.setStyleAttribute(key, style[key]); 
//  }  
//}

//function idGenerator(){
//  var idl= 9;
//  var pos = new Array();
//  var id  = '';
//  for (var i = 1; i < idl ; i++) { 
//    pos[i] =  Math.round(Math.random()*10);
//    var id = id+ pos[i];
//}    
//  
//      
// // var id = col;
//  return id;    
//  }  
//