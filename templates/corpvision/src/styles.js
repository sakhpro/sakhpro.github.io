/*======================================================================*\
|| #################################################################### ||
|| # Package - Joomla Template based on YJSimpleGrid Framework          ||
|| # Copyright (C) 2010  Youjoomla.com. All Rights Reserved.            ||
|| # Authors - Dragan Todorovic and Constantin Boiangiu                 ||
|| # license - PHP files are licensed under  GNU/GPL V2                 ||
|| # license - CSS  - JS - IMAGE files  are Copyrighted material        ||
|| # bound by Proprietary License of Youjoomla.com                      ||
|| # for more information visit http://www.youjoomla.com/license.html   ||
|| # Redistribution and  modification of this software                  ||
|| # is bounded by its licenses                                         ||
|| # websites - http://www.youjoomla.com | http://www.yjsimplegrid.com  ||
|| #################################################################### ||
\*======================================================================*/
window.addEvent("domready", function() {
 var getScrollLinks   = $$('ul.menunav a.yjscroll'); 
    getScrollLinks.each(function (el) {
    el.set('href',getSiteDomain + el.get('href'));
 });
});
window.addEvent("load", function() {
   //Slider button
   $$('a.template_readmore').each(function (el) {
	  el.set('morph', {
		duration: 300
	  });   
	  el.addEvents({
		mouseenter: function(){this.morph({'padding-right': 90});},
		mouseleave: function(){this.morph({'padding-right': 70});}
      }); 
   });   
   //Custom icons
   $$('.icon_holder').each(function (el) {
	  var title			= el.getElement('h1');
	  title.set('morph', {
		duration: 300
	  });   
	  el.addEvents({
		mouseenter: function(){title.morph({'margin-top': 255 });},
		mouseleave: function(){title.morph({'margin-top': 190 });}
      });   
   });   
   //Bricks readmore
   $$('.cvbricks a#yjbricks_getmore').each(function (el) {
	  el.set('morph', {
		duration: 300
	  });   
	  el.addEvents({
		mouseenter: function(){el.morph({'padding-left':20,'padding-right':20 });},
		mouseleave: function(){el.morph({'padding-left':0,'padding-right':0 });}
      });   
   });   
   //Module engine
   $$('.cvengine .yjme_item a.item_readmore,a.subCategoryMore').each(function (el) {
	  el.set('morph', {
		duration: 300
	  });   
	  el.addEvents({
		mouseenter: function(){this.morph({'padding-right': 70});},
		mouseleave: function(){this.morph({'padding-right': 60});}
      }); 
   });   
   //Custom module button
   $$('a.template_readmore2').each(function (el) {
	  el.set('morph', {
		duration: 300
	  });   
	  el.addEvents({
		mouseenter: function(){el.morph({'padding-left':55,'padding-right':55 });},
		mouseleave: function(){el.morph({'padding-left':35,'padding-right':35 });}
      });   
   });  
   //Custom module button
   $$('a.template_readmore3,.cvcontactus span.submit,.button,.validate,a.readon,div.catItemReadMore a,div.itemReadMore a').each(function (el) {
	  el.set('morph', {
		duration: 300
	  });   
	  el.addEvents({
		mouseenter: function(){el.morph({'padding-left':25,'padding-right':25 });},
		mouseleave: function(){el.morph({'padding-left':15,'padding-right':15 });}
      });   
   });  
   //Members
   $$('.cvengine.team .yjme_item').each(function (el) {
	var image			= el.getElement('img');
	var title			= el.getElement('a.item_title');
	var holder			= el.getElement('.team_holder');
    var fx = new Fx.Morph(image, {
      duration: 300,
      'link': 'cancel',
	  transition: Fx.Transitions.linear
    });
    var fx2 = new Fx.Morph(title, {
      duration: 200,
      'link': 'cancel',
	  transition: Fx.Transitions.linear
    });
    var fx3 = new Fx.Morph(holder, {
      duration: 200,
      'link': 'cancel',
	  transition: Fx.Transitions.linear
    });
    el.addEvents({
      mouseenter: function () {
        fx.start({
			'opacity':0.2
        });
        fx2.start({
			'top':40
        });
        fx3.start({
			'bottom':80,
			'opacity':1
        });
      },
      mouseleave: function () {
        fx.start({
			'opacity':1
        });
        fx2.start({
			'top':-100
        });
        fx3.start({
			'bottom':-150,
			'opacity':0
        });
      }
    });
  });  
   //Hover effect
   $$('.yj_hover_effect').each(function (el) {
	var parent_width	= el.getParent().getSize().x;
	var parent_height	= el.getParent().getSize().y;
	var image			= el.getElement('img');
	var title			= el.getElement('.yj_hover_title');
	var intro			= el.getElement('.yj_hover_intro');
	var more			= el.getElement('.yj_hover_more');
	el.setStyles({
		width:parent_width,
		height:parent_height,
		'display':'block'
	});
	title.setStyles({
		width:parent_width,
		height:parent_height/5,
		top:-parent_height/2,
		'line-height':parent_height/5,
		'display':'block'
	});
	intro.setStyles({
		width:parent_width,
		top:parent_height/3,
		'display':'block',
		'opacity':0
	});
	more.setStyles({
		width:parent_width,
		bottom:-parent_height/2,
		'display':'block'
	});
	var fx = new Fx.Morph(image, {
      duration: 300,
      'link': 'cancel',
	  transition: Fx.Transitions.linear
    });
	var fx2 = new Fx.Morph(title, {
      duration: 200,
      'link': 'cancel',
	  transition: Fx.Transitions.linear
    });
	var fx3 = new Fx.Morph(intro, {
      duration: 250,
      'link': 'cancel',
	  transition: Fx.Transitions.linear
    });
	var fx4= new Fx.Morph(more, {
      duration: 200,
      'link': 'cancel',
	  transition: Fx.Transitions.linear
    });
    el.addEvents({
      mouseenter: function () {
        fx.start({
			'opacity':0.2
        });
        fx2.start({
			top:parent_height/10
        });
        fx3.start({
			'opacity':1
        });
        fx4.start({
			bottom:parent_height/8,
        });
      },
      mouseleave: function () {
        fx.start({
			'opacity':1
        });
        fx2.start({
			top:-parent_height/2
        });
        fx3.start({
			'opacity':0
        });
        fx4.start({
			bottom:-parent_height/2
        });
      }
    });
  });
  /* K2 Hover effect */
  /* yjk2bloc */
  $$('div.catItemView,div.itemView,div.latestItemView').addEvents({
	  mouseenter: function () {
		  $(this).getElement('.yjk2_block').morph({'padding-left':255});
	  },
	  mouseleave: function () {
		  $(this).getElement('.yjk2_block').morph({'padding-left':125});
	  }
  });
  /* yjk2bloc author */
  $$('div.catItemView,div.itemView').addEvents({
	  mouseenter: function () {
		  $(this).getElement('span.catItemAuthor,span.itemAuthor').morph({'opacity':1,top:81});
		  $(this).getElement('div.catItemHitsBlock,span.itemHits').morph({'opacity':1,top:128});
		  $(this).getElement('div.catItemCategory,div.itemCategory').morph({'opacity':1,top:203});
		  $(this).getElement('div.catItemCommentsLink,a.itemCommentsLink').morph({'opacity':1,top:257});
	  },
	  mouseleave: function () {
		  $(this).getElement('span.catItemAuthor,span.itemAuthor').morph({'opacity':0,top:0});
		  $(this).getElement('div.catItemHitsBlock,span.itemHits').morph({'opacity':0,top:80});
		  $(this).getElement('div.catItemCategory,div.itemCategory').morph({'opacity':0,top:128});
		  $(this).getElement('div.catItemCommentsLink,a.itemCommentsLink').morph({'opacity':0,top:208});
	  }
  });
  $$('.tagView div.itemView,.userView div.itemView,div.latestItemView,div.genericView div.itemView').addEvents({
	  mouseenter: function () {
		  $(this).getElement('div.itemCategory,div.catItemCategory').morph({'opacity':1,top:81});
		  $(this).getElement('div.itemCommentsLink,div.catItemCommentsLink').morph({'opacity':1,top:128});
	  },
	  mouseleave: function () {
		  $(this).getElement('div.itemCategory,div.catItemCategory').morph({'opacity':0,top:0});
		  $(this).getElement('div.itemCommentsLink,div.catItemCommentsLink').morph({'opacity':0,top:80});
	  }
  });
  
});
if (typeof jQuery != 'undefined') {
	// Bricks info animation */
	jQuery.noConflict();
	(function($) {
	  $(function() {
			jQuery(document).ready(function($) {
					$(".yj_hover_effect2").live("mouseenter", function(el){
						  $(this).find('img').animate({opacity:0.2}, 300);
						  $(this).find('.yj_hover_more2').animate({bottom:102}, 300);
					});
					$(".yj_hover_effect2").live("mouseleave", function(el){
						  $(this).find('img').animate({opacity:1}, 300);
						  $(this).find('.yj_hover_more2').animate({bottom:-96}, 300);
					});
			 });
	  });
	   // console.log(('.yj_hover_effect').size());
	})(jQuery);
}