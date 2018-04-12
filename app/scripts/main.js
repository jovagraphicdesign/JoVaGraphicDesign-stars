$(document).ready(function(){
    
    //stars background

    var stars=900;
    var $stars=$(".stars");
    var r=800;

    for(var i=0; i<stars;i++){
        var $star=$("<div/>").addClass('star');
        $stars.append($star);
    }

    $(".star").each(function(){
        var cur=$(this);
        var s=0.2+(Math.random()*1);
        var curR=r+(Math.random()*300);
        cur.css({
            transformOrigin:"0 0 "+curR+"px",
            transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
        });
    });

    // menu toggle

    var Menu = {
        el: {
            menu: $('.menu'),
            menuTop: $('.menu-top'),
            menuClose: $('.menu-close'),
            menuMiddle: $('.menu-middle'),
            menuBottom: $('.menu-bottom'),
            menu4: $('.menu-4'),
            menu5: $('.menu-5'),
            menuText: $('.menu-text')
            },
        
            init: function(){
                Menu.bindUIactions();
                },

            bindUIactions: function(){
                Menu.el.menu.on('click', function(event){
                        Menu.activateMenu(event);
                        event.preventDefault();
                        }
                    );
                },
        
            activateMenu: function(){
                Menu.el.menuTop.toggleClass('menu-top-expand expand');
                Menu.el.menuMiddle.toggleClass('menu-middle-expand expand');
                Menu.el.menuBottom.toggleClass('menu-bottom-expand expand');
                Menu.el.menu4.toggleClass('menu-4-expand expand');
                Menu.el.menu5.toggleClass('menu-5-expand expand');
                Menu.el.menuText.toggleClass('menu-text-expand');
                Menu.el.menuClose.toggleClass('menu-close-visible');
                }
        };

        //stop menu item click closing the menu
        $(".menu .menu-global").click(function(e){
            e.stopPropagation();
        });

        Menu.init();




});