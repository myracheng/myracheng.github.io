<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("submit").click(function(){
    $("form").hide(1000);
  });
});
</script>

<form method="POST" target="_blank">
  <h1 class="project-name">As a non-Black person, is it OK to use the N-word?</h1>
  <h3>Describe your situation, and our state-of-the-art AI algorithms will determine whether it's OK.</h3>
  <!-- <input type="email" name="email" placeholder="enter your email" required> -->
  <!-- <input type="text" name="name" placeholder="enter your name" required> -->
  <center>
  <textarea name="message" cols="30" rows="10" width="50%"></textarea>
  <br>
  <input type="submit" onclick="setTimeout(myFunction, 1000);"/>
     <!-- <script>
       function myFunction() {
         window.location.href="../no_n";
       }
     </script> -->
     </center>
</form>


<!-- <html>
<head> -->

<!-- </head>
<body>

<button>Hide</button>

<p>This is a paragraph with little content.</p>
<p>This is another small paragraph.</p>

</body> -->