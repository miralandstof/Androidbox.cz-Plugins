jQuery(function($){
  $(document).on('click','.ab-media',function(e){e.preventDefault();var b=$(this),input=b.closest('.ab-media-row').find('[data-ab-media-input]');var frame=wp.media({title:'Vybrat obrázek',button:{text:'Použít obrázek'},multiple:false});frame.on('select',function(){var a=frame.state().get('selection').first().toJSON();input.val(a.url);});frame.open();});
});
