<!DOCTYPE html>
<html>

   <head>
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
      <title>@yield('title', config('app.name'))</title>

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
         crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

      @stack('header')
   </head>

   <body>

      @yield('content')

      <!-- DEVELOPMENT -->
      <script id="__bs_script__">//<![CDATA[
         document.write("<script async src='http://localhost:3000/browser-sync/browser-sync-client.js?v=2.18.12'><\/script>");
        //]]></script>

      <script src="{{ asset('js/app.js') }}"></script>
      @stack('footer')

   </body>

</html>
