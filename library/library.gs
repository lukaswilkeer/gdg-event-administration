/**
*
* Make sure to include the library itselve in the resources
*
*/

/**
* name: ApplyCSS 
* function: Apply a style to a certain UI element. 
* input: 
* @param {string} the UI element you want to give a css style.
* @param {string} the UI element you want to apply. 
* output: 
* none 
* Example: 
* var _titel = {"font-family":"verdana","font-size":"1.6em" }
* var titleLabel = app.createLabel('Title')
* library.applyCSS(titleLabel, _titel)
* Note: This comes from https://sites.google.com/site/scriptsexamples/gs-interactive
*       James Fereira
*/
function applyCSS(element, style){
  for (var key in style){
    element.setStyleAttribute(key, style[key]); 
  }  
}

/**
* name: proper
* function: Make all first letters after a space upper case
*           make the rest lower case remove trailing blanks
* input: 
* @param {string} the string you want to format.
* output: 
* {string} with the proper format.
* Example: 
* var titel = "pedro jiminez ";
* library.proper(titel);
* app.createLabel(titel);
* shows #Pedro Jiminez#
* Note: this comes from https://plus.google.com/u/0/107878721593199153684/about
*       Henrique Gonçalves Abreu
*/
function proper(string) {
  return string.replace(/\w\S*/g, function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();});
}

/**
* name: lower
* function: Make all letters lower case
*           remove trailing blanks
* input: 
* @param {string} the string you want to format to lower case
* output: 
* {string} in lower case.
* Example: 
* var titel = "Pedro Jiminez ";
* library.lower(titel);
* app.createLabel(titel);
* shows #pedro jiminez#
* Note: this comes from https://plus.google.com/u/0/107878721593199153684/about
*       Henrique Gonçalves Abreu
*/
function lower(string) {
  return string.replace(/\w\S*/g, function(t){return t.toLowerCase();});
}

/**
* name: upperC
* function: Make all letters upper case
*           remove trailing blanks
* input: 
* @param {string} the string you want to format to upper case
* output: 
* {string} in upper case.
* Example: 
* var titel = "Pedro Jiminez ";
* library.lower(titel);
* app.createLabel(titel);
* shows #PEDRO JIMINEZ#
* Note: this comes from https://plus.google.com/u/0/107878721593199153684/about
*       Henrique Gonçalves Abreu
*/
function upperC(string) {
 return string.replace(/\w\S*/g, function(t){return t.toUpperCase();}); 
}

/**
* name: genTimestamp
* function: Genarates a javascript date formated with GAS utilities 
* input: 
* none
* output: 
* {string} Formated date corresponding Brasilian time (GMT-2) .
* Example: 
* var date = library.genTimestamp();
* app.createLabel(date);
* shows #08/06/2012T22:33:55Z#
*/
function genTimestamp(){
 return Utilities.formatDate(new Date(), "GMT-2", "MM/dd/yyyy'T'HH:mm:ss'Z'");
}  


/**
* name: isNotEmpty
* function: To check if a string has some kind of usefull value.
* input: 
* {string} A value (most likely some variable gained from input)
* output: 
* {Bolean} True if not emplty, False when empty.
* 
* 
* 
* 
*/
function isNotEmpty(string) 
    {
        
        if(!string)             return false;         
        if(string == '')        return false;
        if(string === false)    return false; 
        if(string === null)     return false; 
        if(string == undefined) return false;
        string = string+' '; // check for a bunch of whitespace
        if('' == (string.replace(/^\s\s*/, '').replace(/\s\s*$/, ''))) return false;       
        return true;        
    }



/**
* name: idGenerator
* function: Generate a 10 number random number which can serve as a ID. 
* input: 
* none
* output:  
* {string} 10 numbers.
* Example: 
* var Localizer = library.idGenerator()
* Note: A '1' is added at the begining as in google docs spreadsheet o 
* starting '0' is ignored and therefor will not show up in search results.
*
*/
function idGenerator()
    {
          var idl= 9;
          var pos = new Array();
          var id  = '';
          for (var i = 1; i < idl ; i++) { 
              pos[i] =  Math.round(Math.random()*10);
              var id = id+ pos[i];
          }    
          return '1'+ id;    
   }  

/**
* name: whoIs
* function:Get the email of the current user (active user). 
* input: 
* none
* output:  
* {string} email address or "Unknown"
* Example: 
* 
* Note: 
*
*/
function whoIs(){
  var whoIs = Session.getActiveUser().getEmail();
  if (library.isNotEmpty(whoIs)) {
  return whoIs
  }
  else {return "Unknown"}
}