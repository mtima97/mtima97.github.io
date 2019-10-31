<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="c-skeleton">
        <p class="c-skeleton__text">Hello Tima</p>
    </div>

    <script>
        console.time('speed');
        window.onload = () => console.timeEnd('speed');
    </script>
    <script src="/dist/main.js"></script>
</body>
</html>