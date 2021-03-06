(function(){
    var link=document.createElement('link');
    link.rel='stylesheet';
    link.href='tweaks/popup-tabs/style.css';
    document.head.appendChild(link);
}());

(function(){
    'use strict';
    window.addEventListener('load',function(){
        var panelswitch=document.querySelector('#switch');

        var tabbutton=document.createElement('button');
        tabbutton.className='button-toolbar tabs';
        panelswitch.appendChild(tabbutton);

        var tabbar=document.querySelector('#tabs-container');
        var timeout=null;

        var show=function(){
            if(!tabbar.parentElement){
                tabbar=document.querySelector('#tabs-container');
                tabbar.addEventListener('mouseleave',hide);
            }
            tabbar.classList.add('tweak-show');
            tabbar.style.zIndex=1;
            tabbutton.classList.add('hoveractive');
            if(timeout){
                clearTimeout(timeout);
            }
        };
        var hide=function(e){
            if(!e.toElement) return;
            if(!e.toElement.parentElement) return;
            if(e.which) return;
            tabbar.classList.remove('tweak-show');
            tabbutton.classList.remove('hoveractive');
            timeout=setTimeout(function(){
                tabbar.style.zIndex=-1;
            },200);
        };
        tabbutton.addEventListener('mouseenter',show);
        tabbar.addEventListener('mouseleave',hide);
    });
}());
