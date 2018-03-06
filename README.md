# shailpatels.github.io
<!DOCTYPE html>
<html>
<body>
  <h1>Blog Posts</h1>
  <p>My work on submitty so far </p>
  <br>
  <h2>Uploading Files with strange chars Issue</h2>
  <p>Issue: uploading filenames with '+' (and other special chars like &, #. %..etc) would be saved incorrectly which would 
  cause mysql errors when trying to dispay a pdf on Submitty, downloading a file with a broken filename would also download a pdf that       could not be opened.
  <p>This ended up being a much harder issue than at first glance. Submitty would encode file names using PHP but then would need to decode them using Javascript. This caused many of the issues as the encoding protocals was slightly different, this caused '+' to be turned into a space and vice versa, breaking both the path and filename</p>
  <p>Most of the issues were corrected by using rawURLencode with decodeURI on the JS side which handled spaces and + signs better. A new issue was that specific strings would still break Submitty's filenames. It appeared that certain strings would not be recognized as UTF-8 format and would cause decodeURIcomponent to throw an error</p>
  <p>At this point I was lost as to what to do, and the solution was developed by Andrew Aikens. His method used htmlspecialchars() which would encode HTML chars to be read literally by converting & to amp for example. This solved some more issues, but a greater underlying issue was the method in which information was being passed around through Submitty. When filenames were sent using PHP's superglobal: $_REQUEST, the filename would arrive already decoded but incorrectly. By changing this to $_GET, the filename that was correctly rawURLencoded and htmlspecialchars encoded would arrive, allowing it to be deocoded correctly.
  </p>
  <br>
  <h2>Request Regrade interface</h2>
  <p>A larger project I've been working on for the majority of the time is to implement an interface for students to request regrades and discuss the issue with a TA or instructor all through Submitty</p>
  </body>
</html>
