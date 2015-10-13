var headerImg=2,resturant=2,games=2,swimming=2,workout=2,rooms=2,medical=2,scroll_top,i=1,narrate=false;
$(document).ready(
function()
    {
        song();
        disableRightClick();
        //tagMeAlong();
        animateHeaderImgs();
        leftRightArrow();
        getScroll();
       headerImgSwap(); 
        gridImageSwap();
        $('#resturant,#gameparlour,#swimming,#workout,#rooms,#medical').mouseover(
        function()
            {
                
            });
        $('#resturant,#gameparlour,#swimming,#workout,#rooms,#medical').mouseout(
        function()
            {
              
            });
        
        
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
        var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        // At least Safari 3+: "[object HTMLElementConstructor]"
        var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
        var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
        
        
        if(isFirefox)
        {
            $('#featureAnchor').css('top',2*$(window).height()-0.07*$(window).height());
            $('#bookingAnchor').css('top',3*$(window).height()+0.04*$(window).height());
            $('#containerAnchor').css('top',1*$(window).height()-0.05*$(window).height());
        }
        else if(isChrome)
            {
                $('#featureAnchor').css('top',2*$(window).height()-0.2*$(window).height());
                $('#bookingAnchor').css('top',3*$(window).height()-0.15*$(window).height());
                $('#containerAnchor').css('top',1*$(window).height()-0.1*$(window).height());
            }
        else 
            if(isIE)
            {
                $('#featureAnchor').css('top',2*$(window).height()+0.05*$(window).height());
                $('#bookingAnchor').css('top',3*$(window).height()+0.2*$(window).height());
                $('#containerAnchor').css('top',1*$(window).height()+0*$(window).height());
            }
        else if(isOpera)
        {
            $('#featureAnchor').css('top',2*$(window).height()-0.15*$(window).height());
            $('#bookingAnchor').css('top',3*$(window).height()-0.1*$(window).height());
            $('#containerAnchor').css('top',1*$(window).height()-0.08*$(window).height());
        }
        else
        {
            $('#featureAnchor').css('top',2*$(window).height()+0*$(window).height());
            $('#bookingAnchor').css('top',3*$(window).height()+0*$(window).height());
            $('#containerAnchor').css('top',1*$(window).height()+0*$(window).height());
        }
        
        
        
    });

function headerImgSwap()
{   
    
    $('#myHeaderImages').fadeIn(500).delay(2500).fadeOut(600,function()
    {
        var src="images/img"+headerImg+".jpg";
    $('#myHeaderImages').attr('src',src);
    headerImg++;
    if(headerImg>5)headerImg=1;
    setTimeout(headerImgSwap,0);
    
    });
    
   
    
}

function gridImageSwap()
{
    var srcRest="images/restaurant/img"+resturant+".jpg";
    var srcGame="images/gameParlour/img"+games+".jpg";
    var srcSwim="images/swimming/img"+swimming+".jpg";
    var srcWork="images/workoutSection/img"+workout+".jpg";
    var srcRoom="images/rooms/img"+rooms+".jpg";
    var srcMed="images/medicalAids/img"+medical+".jpg";
    
    var rand=Math.floor((Math.random() * 6) + 1);
    switch(rand)
    {
        case 1:
                $('#restPic').attr('src',srcRest);
                $('#restPic').slideDown(1000,
                function()
                    {   
        
        resturant++;
        if(resturant>3)resturant=1;
         
        
    });

            break;
        case 2:
                $('#gamePic').attr('src',srcGame);
    $('#gamePic').slideDown(1000,
    function()
    {
       
            games++;
        if(games>3)games=1;
       
        
    });
            break;
        case 3:
            $('#swimPic').attr('src',srcSwim);
    $('#swimPic').slideDown(1000,
    function()
    {
    
            swimming++;
        if(swimming>3)swimming=1;
    
        
    });
            break;
        case 4:
            $('#medPic').attr('src',srcMed);
    $('#medPic').slideDown(1000,
    function()
    {
    
            medical++;
        if(medical>3)medical=1;
    
        
    });
            break;
        case 5:
            $('#workPic').attr('src',srcWork);
    $('#workPic').slideDown(1000,
    function()
    {
    
        workout++;
        if(workout>3)workout=1;
    
        
    });
            break;
        case 6:
            
    $('#roomPic').attr('src',srcRoom);
    $('#roomPic').slideDown(1000,
    function()
    {
    
            rooms++;
        if(rooms>3)rooms=1;
    
        
    }
    );
            break;
    }
        

    
    
    
    setTimeout(gridImageSwap,2000);
}

function getScroll()
{
    $(document).scroll(
    function()
        {
            scroll_top=$(document).scrollTop();
            //$('#log').text(scroll_top);
            if(scroll_top<($('#intro').height()+$('#features').height()-300))
                $('#gridRow1').fadeOut("fast");
            else
            {
                $('#gridRow1').fadeIn("slow");
                
            }
            if(scroll_top<($('#intro').height()+$('#features').height()))
                $('#gridRow2').fadeOut("fast");
            else
            {
                $('#gridRow2').fadeIn("slow");
            }
            if(scroll_top<110)
            {
                $('#features').fadeOut("fast");
            }
            else
            {
                $('#features').fadeIn("slow");
            }
            if(scroll_top<1480)
            {
                $('#booking').fadeOut("fast");
            }
            else
            {
                $('#booking').fadeIn("slow");
            }
            if(scroll_top>$('#header').height())
            {
                $('#menuBar').css('position','fixed').css('top','0');
            }
            else
            {
                $('#menuBar').css('position','absolute').css('top','25%');
            }
            
        });
}
function leftRightArrow()
{
    $('#leftArrow').click(
    function()
        {
            headerImg+=2;           
        });
    $('#rightArrow').click(
    function()
        {
            headerImg-=2;
        });
}
function animateHeaderImgs()
{
    if(i%2!=0)
        {
            $('#headerP1').animate({left:'33%'},2000);
            $('#headerP2').animate({left:'0%'},2000);
        }
    else
    {
            $('#headerP1').animate({left:'0%'},2000);
            $('#headerP2').animate({left:'33%'},2000);
    }
    i++;
    setTimeout(animateHeaderImgs,22000);
}
function tagMeAlong()
{
    $('#headerImage').mouseout(
    function()
        {
            $('#tagHeaderImage').css('display','none');
        });
    $('#features').mouseout(
    function()
        {
            $('#tagFeatures').css('display','none');
        });
    $('#grid').mouseout(
    function()
        {
            $('#tagFacilities').css('display','none');
        });
    $('#booking').mouseout(
    function()
        {
            $('#tagBook').css('display','none');
        });
    
    
    
    $('#headerImage').mouseover(
    function(e1)
        {
            $('#tagHeaderImage').css('display','block').css('top',e1.clientY + 10).css('left',e1.clientX+10);
        });
    $('#features').mouseover(
    function(e2)
        {
            $('#tagFeatures').css('display','block').css('top',e2.clientY + 10).css('left',e2.clientX+10);
        });
    $('#grid').mouseover(
    function(e3)
        {
            $('#tagFacilities').css('display','block').css('top',e3.clientY + 10).css('left',e3.clientX+10);
        });
    $('#booking').mouseover(
    function(e4)
        {
            $('#tagBook').css('display','block').css('top',e4.clientY + 10).css('left',e4.clientX+10);
        });
    setTimeout(tagMeAlong,100);
}
function disableRightClick()
{
    $('html,body').on("contextmenu",function(e)
                      {
                          e.preventDefault();
                          
                            return false;
                      });
}
function song()
{
    $('#narration').click(
    function()
        {
            if(narrate==false)
                {
                    $('#song').trigger('play');
                    $('#narration').text("Narration Stop");
                    narrate=true;
                }
            else if(narrate==true)
                {
                    $('#song').trigger('pause');
                    $('#narration').text("Narration Start");
                    narrate=false;
                }
        });
    
}