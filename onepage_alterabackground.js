<script>  
     $(document).ready(function(){
       $("body").prepend("<video playsinline autoplay muted loop id=\"myVideo\"><source src=\"LINK-DO-VIDEO.MP4\" type=\"video/mp4\"><source src=\"LINK-DO-VIDEO.OGV\" type=\"video/ogv\"></video>");
     })
</script>

<style>
#myVideo {
  position: fixed;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
}

.main {
position: relative;
}
</style>
