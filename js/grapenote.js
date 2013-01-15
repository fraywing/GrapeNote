
(function($){
    var loaders = {
        circle : "data:image/gif;base64,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"
    };
    var icons = {
                white : "data:image/png;base64,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",
                black : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFAAAA////AAAAc8aDcQAAAAJ0Uk5TAAB2k804AAAAN0lEQVQY02MIhQIGfIxVYIDMWMAABFHIjKVwBkgPDgZINyqDSDUhqAygDAMqA8M9mAxMXxD2OwDSCGDapbaLnQAAAABJRU5ErkJggg==",
                yellow : "data:image/png;base64,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"
            };
    var defaults = {
            icon : "white",
            filter : false,
            size : "small",
            bgColor : "gray",
            bubbleColor : "white",
            dateStamp : true,
            noteAdding : true,
            width : "200px",
            height : "300px",
            searchClass : "grapeNote",
            grapeKey : "grapeID" //the id that will be the parent key of the key values on post
    }
    var methods = {
        GrapeNote : function(opts,self){ //creates the note item
            $('body').delegate('.grapeNote-outer,.grapeNote-inner', 'click', function(e){
                e.stopPropagation();
                });
             $(document).click(function(){
                $('.grapeNote').find('.grapeNote-outer').grapeHide();
                });
           $('.'+opts.searchClass).each(function(){  //goes through each grapenote class element
                var hasGrapes = self.findGrapes($(this)); //checks to see if it has grape attributes
                if(hasGrapes){ //if it does, grabes them as an object key value pair
                   var grapeObjects = self.getAttributes(hasGrapes,opts.grapeKey);
                   for(var x in grapeObjects){ //put them into jquery data
                   $(this).data()["id"] = x;
                   $(this).data().opts = opts;
                   $(this).data()["children"] = {};
                   for(var c in grapeObjects[x]){
                    var stripGrape = c.split('grape')[1];
                    $(this).data()["children"][stripGrape] = grapeObjects[x][c];
                   }
                   }
                   $(this).html("<img class='grapeNote-img' src='"+icons[opts.icon]+"'>");
                   var img = $(this).find('img');
                   img.css({"width" : methods.getSizes(opts)});
                 //  console.log($(this).data());
                   self.bind(opts,$(this));
                  //self.getHtml(grapeObjects,$(this)); //put the html in the holder for the note
                }
            });         
        },
        getSizes : function(opts){
          switch(opts.size){
                    case "large":
                        return "32px";
                    break;
                    case "small":
                        return "10px";
                    break;
                    case "medium":
                       return "23px";
                    break;
                   }  
            
        },
        bind : function(opts,el){
            var self = this;
           
            el.bind('click', function(e){
                e.stopPropagation();
                if(e.target.className == "grapeNote" || e.target.className == "grapeNote-img"){
                $(this).find('.grapeNote-img').hide(); //hide the note
                var s = this;
                var data = $(this).data();
                $(this).append("<img class='grapeNote-loader' width='"+methods.getSizes(data.opts)+"' src='"+loaders.circle+"'>"); //show a loader
                var def =  self.getNote(data); //get the note
                def.success(function(data){ //when its done, do a bunch of crap
                  
                    $(s).find('.grapeNote-loader').remove();
                    $(s).find('.grapeNote-img').show();
                   var prom = $('.grapeNote').find('.grapeNote-outer').grapeHide();
                   prom.done(function(mess){                   
                     $(s).find('.grapeNote-outer').remove();
                     if(data.title !== undefined){
                        var title = data.title;
                     }
                     $(s).prepend(self.getHtml(data,s));
                       if(title !== undefined){
                        $(s).find('.grapeNote-title').html(title);
                       }
                     var top = $(s).offset().top,
                     outer = $(s).find('.grapeNote-outer'),
                     maxH = $(s).find('.grapeNote-outer').css("height").split('px')[0],
                      outH = outer.css("height").split('px')[0],
                      outW = outer.css("width").split('px')[0];
                      outer.css({"left" : ~(outW/2)+'px'}); //center it
                      
                      $(s).find('.grapeNote-body').css({"max-height" : (outH-100)+'px'}); //reduce the thing
                     if(top < maxH){ //if the notes have reached the top of the screen, smash it down a bit
                       $(s).find('.grapeNote-outer').css({"bottom" : ~outH+'px'});
                   
                     }
                    var tim;
                    var jim;
                    tim = setTimeout(function(){
                        outer.addClass('grapeNote-easeIn');
                        jim = setTimeout(function(){
                              outer.addClass('grapeNote-easeOut');
                              clearTimeout(jim);
                            },120);
                        clearTimeout(tim);
                        },120);
                  });
                      $(s).find('.grapeNote-load').click(function(){ //when load more is hit, add more and append them
                        var par = $(this).parents('.grapeNote');
                          var data = par.data();
                          var opts = data.opts;
                          methods.getNote(data,par.find('.grapeNote-noteText:last-child').attr('value')).success(function(data){
                           par.find('.grapeNote-body').append(methods.getHtml(data,par,true));
                             par.find('.grapeNote-body').animate({scrollTop: par.find('.grapeNote-body')[0].scrollHeight}, 'slow'); //scrollHeight is cool!
                            });
                        });
                        $(s).find('.grapeNote-save').click(function(){ //when save is hit, send new value, get new rows
                        var par = $(this).parents('.grapeNote');
                        var val = par.find('textarea').val();
                          var data = par.data();
                          var opts = data.opts;
                          methods.saveNote(data,val).success(function(newID){ //just get all new rows at this point
                            methods.getNote(data).success(function(data){
                           par.find('.grapeNote-body').html(methods.getHtml(data,par,true));
                            });
                            });
                        
                        });
                    });
                 
                
                 }else{
                return false;
               }
                });
            
        },
        findGrapes : function(el){ //goes through each self element, then if nothing is found, travels up the DOM heirarchy until a grapetype attribute is found, returns the elemennt
            var attr = $(el)[0].attributes;
            var theGrape;
            $.each(attr,function(x,a){
                   var keyName = attr[x].nodeName;
                if(keyName.indexOf("grape") !== -1 &&  keyName.indexOf("class") == -1){
                    theGrape = el[0];
                }
                });
            if(theGrape !== undefined){
                return theGrape !== undefined ? theGrape : false;
            }
            var par = $(el).parents();
            $.each(par,function(x,p){
                var pAttr = p.attributes;
                $.each(pAttr,function(c,pA){
                 var keyName = pAttr[c].nodeName;
                if(keyName.indexOf("grape") !== -1 &&  keyName.indexOf("class") == -1){
                  theGrape = p;
                }     
                    });
                });
            return theGrape !== undefined ? theGrape : false;
        },
        getAttributes : function(el,key){ //extracts the key value pairs of grapetype attributes out of the html element and returns them as an object
            var attr = el.attributes;
       
            keyVal = "",
            rOb = {};
            nOb = {};
            for(var x in attr){
                if(attr[x].nodeName !== undefined && attr[x].nodeName !== "class"){
                var att = attr[x],
                keyName = attr[x].nodeName,
                valName = attr[x].nodeValue,
                aKey = keyName,
                aVal = valName;
               if(aKey.indexOf("grape") !== -1  &&  aKey.indexOf("class") == -1){
                 if(aKey.toLowerCase() == key.toLowerCase()){
                    keyVal = aVal.toLowerCase();
                 }else{
                    nOb[aKey] = aVal; 
                 }
               }
            }
            }
               rOb[keyVal] = {};
                rOb[keyVal] = nOb;

               return rOb;
        },
        hide : function(){
            var dfd = new $.Deferred();
            var outer = $('.grapeNote-outer');
  
            if(outer[0] !== undefined){
            $('.grapeNote-outer').removeClass('grapeNote-easeOut');
            var timr;
            timr = setTimeout(function(){
                 $('.grapeNote-outer').remove();
                dfd.resolve("done");
                }, 300);
            }else{
                 dfd.resolve("done");
                }
            
            return dfd.promise();
        },
        getHtml : function(o,el,justrows){ //insert the html into the grape thign and return the html for the popup
           var html = "";
           var data = $(el).data();
           console.log('asd', data);
           var firstDate = null; //should be the lastest date
            var title = data.title == true ? "<div class='grapenote-title'></div>" : '';
            if(o.title !== undefined){
                delete(o.title);
            }
           for(var x in o){
            var noteID = x,
            noteBody = escape(o[x].text),
            noteDate = escape(o[x].date),
            noteName = escape(o[x].name);
            if(!firstDate){
                firstDate = noteDate;
            }
            html += "<div class='grapeNote-noteText' value="+noteID+" name="+noteName+">\
                    <div class='grapeNote-date' >"+unescape(noteDate)+"</div>\
                    <span>"+unescape(noteBody)+"</span></div>";
            }
            if(justrows !== undefined){
                return html;
            }
           
            var noteArea = "<div class='grapeNote-outer' value="+firstDate+">\
                           <div class='grapeNote-inner' style=' width:"+data.opts.width+";'>"+title+
                           "<div class='grapeNote-load'>Load More...</div><div class='grapeNote-body'>"+html+"</div>\
                           <div class='grapeNote-addNote'><textarea class='grapeNote-textarea'></textarea><div class='grapeNote-saveButtons'>\
                           <div class='grapeNote-button grapeNote-save'>Save</div></div></div></div>";
            return noteArea;
        },
        saveNote : function(data,val){
            var d = {};
            d["id"] = data.id;
            d["options"] = data.children;
            d["content"] = val;
            var j = JSON.stringify(d);
            var p = $.post(data.opts.url, {"sendGrapeNotes" : j}, function(){
            },"json");
        return p;
        },
        getNote : function(data,lastRecordID){
       //     console.log(data,lastRecordID);
           var id = data.id,
           children = data.children,
           url = data.opts.getNotesFrom,
           saveOpts = data.opts;
           delete(data.opts);
           data.loadMore = lastRecordID;
          var j =  JSON.stringify(data);
            data.opts = saveOpts;
        var p = $.post(url, {"getGrapeNotes" : j}, function(){
            },"json");
        return p;
        }
        
    };
    
    $.grapeNote = function(opts){
        var rOpts = $.extend(defaults,opts);
        methods.GrapeNote.call(this,rOpts,methods);
    };
    $.fn.grapeHide = function(){
        return methods.hide.call(this);
    };
    
    }(jQuery));