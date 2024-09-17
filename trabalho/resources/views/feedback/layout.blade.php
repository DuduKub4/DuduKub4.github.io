<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Feedback</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #ecf0f1; 
            color: #2c3e50; 
        }
        header {
            background-color: #4a90e2; 
            padding: 2rem;
        }
        header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: white; 
        }
        footer {
            background-color: #2c3e50; 
            color: #bdc3c7; 
        }
        .btn-primary {
            background-color: #4a90e2; 
            border-color: #4a90e2;
            transition: all 0.3s ease;
        }
        .btn-primary:hover {
            background-color: #357abf; 
            border-color: #357abf;
        }
        .alert-success {
            background-color: #27ae60; 
            color: white;
        }
        .alert-danger {
            background-color: #e74c3c; 
            color: white;
        }
        .card {
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border: none;
            background-color: white; 
        }
        .form-control {
            border-radius: 0.5rem;
            border: 1px solid #bdc3c7; 
        }
        .list-group-item {
            border: none;
            background-color: #ffffff;
            margin-bottom: 0.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        }
    </style>
</head>
<body>
    <header class="text-white text-center">
        <h1>Sistema de Feedback</h1>
    </header>

    <main class="container my-5">
        @yield('content')
    </main>

    <footer class="text-center py-4">
        <p>&copy; {{ date('Y') }} - Sistema de Feedback</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
