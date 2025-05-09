<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TULOGO | Soluciones Gráficas Personalizadas</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
    <style>
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .glitch-text {
            text-shadow: 2px 2px 0 orange, -2px -2px 0 red;
        }
        .hover-3d:hover {
            transform: perspective(500px) rotateX(5deg) rotateY(-5deg);
        }
        .category-card {
            transition: all 0.3s ease;
        }
        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body class="font-thin text-gray-700 bg-gray-50">
    <!-- Header -->
    <header class="fixed w-full z-50 bg-opacity-90 backdrop-blur-md py-3 px-6 bg-[#fcfdfc] border-b-gray-300 shadow-md">
        <div class="flex justify-center pb-4">
            <a href="#" class="text-2xl text-cyan-900 font-bold glitch-text">GS</a>
            <p class="text-neutral-700 text-2xl ml-2 mr-1">|</p>
            <p class="text-2xl font-light text-gray-800">Soluciones Gráficas</p>
        </div>

        <section class="container mx-auto justify-between items-center flex">
            <div class="flex justify-start">
                <button class="hover:text-[#00FFEE] hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
                   
            <nav class="hidden md:flex space-x-8 justify-center">                   
                <a href="#" class="hover:text-[#4d7294] font-semibold transition-all">HOME</a>
                <a href="#" class="hover:text-[#4d7294] font-normal transition-all">PRODUCTOS</a>
                <a href="#" class="hover:text-[#ce7e00] font-normal transition-all">EGRESADOS / MAYORISTAS</a>
                <a href="#" class="hover:text-[#ce7e00] font-normal transition-all">DISEÑOS CON TU LOGO</a>
                <a href="#" class="hover:text-[#ce7e00] font-normal transition-all">FAQ</a>
                <a href="#" class="hover:text-[#4d7294] font-normal transition-all">CONTACTO</a>
            </nav>
            
            <div class="flex justify-start">
                <button class="hover:text-[#00FFEE]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                <button class="hover:text-[#00FFEE] ml-4">
                    <a href="./login.html">
                        <img src="./btn.png" alt="" srcset="" class="h-6 w-6">
                    </a>
                </button>
            </div>
        </section>
    </header>

    <!-- Main Content -->
    <main class="pt-28 pb-16">
        <!-- Hero Banner -->
        <section class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
            <div class="rounded-xl overflow-hidden shadow-xl">
                <img src="./Captura de pantalla 2025-04-09 131125.png" class="w-full h-auto object-cover saturate-75" alt="Banner principal TULOGO"/>
            </div>
        </section>

        <!-- ¡NUEVOS INGRESOS! Section -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ¡NUEVOS INGRESOS!
                </h2>
                <p class="text-xl text-blue-600 font-medium">
                    Descubre nuestras últimas incorporaciones
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Product cards would go here -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                        <span class="text-5xl">🆕</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Nuevos Productos</h3>
                    </div>
                </div>
                <!-- Repeat for other products -->
            </div>
        </section>

        <!-- Category Sections -->
        <!-- Indumentaria de trabajo -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-xl shadow-sm">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    INDUMENTARIA DE TRABAJO
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Calidad y durabilidad para profesionales
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        <span class="text-5xl">👔</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Mamelucos</h3>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                        <span class="text-5xl">🧥</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Camperas</h3>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
                        <span class="text-5xl">🧤</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Guantes</h3>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                        <span class="text-5xl">🧢</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Gorras</h3>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <a href="#" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-colors shadow hover:shadow-xl">
                    VER TODA LA INDUMENTARIA
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </section>

        <!-- Indumentaria deportiva -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 bg-gray-50 rounded-xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    INDUMENTARIA DEPORTIVA
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Para equipos y deportistas
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                        <span class="text-5xl">⚽</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Fútbol</h3>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        <span class="text-5xl">🏀</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Básquet</h3>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                        <span class="text-5xl">🎽</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Running</h3>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 category-card">
                    <div class="h-40 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                        <span class="text-5xl">🏐</span>
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Vóley</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Egresados -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    EGRE<span class="text-blue-600">SADOS</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Todo para tu promoción con identidad
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">BANDERINES</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Personalizados con los colores de tu escuela</p>
                        <button class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            Ver opciones
                        </button>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">RECUERDOS</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Para que dure toda la vida</p>
                        <button class="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                            Ver catálogo
                        </button>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">PACKS</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Combos especiales para egresados</p>
                        <button class="w-full py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                            Ver promos
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Calzados -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    CALZADOS
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Seguridad y comodidad para tus pies
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group category-card">
                    <div class="h-64 bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center relative">
                        <span class="text-7xl">👞</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">CALZADO SEGURIDAD</h3>
                        <p class="text-gray-600 mb-4">Con protección y tu logo</p>
                        <button class="w-full py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors">
                            Ver modelos
                        </button>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group category-card">
                    <div class="h-64 bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center relative">
                        <span class="text-7xl">👟</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">CALZADO DEPORTIVO</h3>
                        <p class="text-gray-600 mb-4">Para equipos e instituciones</p>
                        <button class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            Ver modelos
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Regalería empresarial -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 bg-gray-100 rounded-xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    REGALERÍA EMPRESARIAL
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Detalles que marcan la diferencia
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
                        <span class="text-5xl">🖊️</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Bolígrafos</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        <span class="text-5xl">📒</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Agendas</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                        <span class="text-5xl">🍷</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Sets ejecutivos</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                        <span class="text-5xl">🎁</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Cajas regalo</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Artículos publicitarios -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ARTÍCULOS PUBLICITARIOS
                </h2>
                <p class="text-xl text-blue-600 font-medium">
                    Visibilidad para tu marca
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-orange-500 to-orange-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">BANDERAS</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Impresión full color • Materiales premium</p>
                        <button class="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors">
                            Ver productos
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">BANNERS</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Resistentes a la intemperie</p>
                        <button class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            Ver catálogo
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-green-500 to-green-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">ROLL UPS</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Prácticos y portátiles</p>
                        <button class="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                            Ver opciones
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Artículos para el hogar -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 bg-gray-50 rounded-xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ARTÍCULOS PARA EL HOGAR
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Funcionales y con estilo
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
                        <span class="text-5xl">🍽️</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Vajilla</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        <span class="text-5xl">🧴</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Hogar</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                        <span class="text-5xl">🧺</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Textiles</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                        <span class="text-5xl">🧽</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Limpieza</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Artículos hospitalarios -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 bg-white rounded-xl shadow-sm">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ARTÍCULOS HOSPITALARIOS
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Para el sector salud
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card border border-blue-100">
                    <div class="h-40 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                        <span class="text-5xl">💊</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Farmacia</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card border border-green-100">
                    <div class="h-40 bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
                        <span class="text-5xl">🏥</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Hospitales</span>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card border border-red-100">
                    <div class="h-40 bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
                        <span class="text-5xl">🩺</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Consultorios</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card border border-purple-100">
                    <div class="h-40 bg-gradient-to-br from-purple-50 to-white flex items-center justify-center">
                        <span class="text-5xl">🧪</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Laboratorios</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cartelería -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 bg-gray-100 rounded-xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    CARTELERÍA
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Señalización profesional
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-gray-500 to-gray-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">INTERIOR</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Para oficinas y espacios cerrados</p>
                        <button class="w-full py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                            Ver opciones
                        </button>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">EXTERIOR</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Resistentes a la intemperie</p>
                        <button class="w-full py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                            Ver catálogo
                        </button>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow category-card">
                    <div class="h-48 bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">FOTOLUMINISCENTE</span>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <p class="text-gray-600 mb-2">Para emergencias y seguridad</p>
                        <button class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            Ver productos
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Marroquineria -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    MARROQUINERÍA
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Elegancia y funcionalidad en cuero
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-brown-100 to-brown-50 flex items-center justify-center">
                        <span class="text-5xl">💼</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Portafolios</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-brown-100 to-brown-50 flex items-center justify-center">
                        <span class="text-5xl">👜</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Bolsos</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-brown-100 to-brown-50 flex items-center justify-center">
                        <span class="text-5xl">👝</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Carteras</h3>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md overflow-hidden category-card">
                    <div class="h-40 bg-gradient-to-br from-brown-100 to-brown-50 flex items-center justify-center">
                        <span class="text-5xl">👛</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg text-gray-800 text-center">Accesorios</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- ¡Quiénes nos eligen! -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    ¡QUIÉNES NOS ELIGEN!
                </h2>
                <p class="text-xl opacity-90 max-w-2xl mx-auto">
                    Empresas e instituciones que confían en nosotros
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-32">
                    <span class="text-2xl font-bold">LOGO 1</span>
                </div>
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-32">
                    <span class="text-2xl font-bold">LOGO 2</span>
                </div>
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-32">
                    <span class="text-2xl font-bold">LOGO 3</span>
                </div>
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-32">
                    <span class="text-2xl font-bold">LOGO 4</span>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <button class="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                    SER CLIENTE
                </button>
            </div>
        </section>

        <!-- Proceso de trabajo -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    CÓMO TRABAJAMOS
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Un proceso simple para resultados extraordinarios
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-blue-600 text-2xl font-bold">1</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-2">Consulta</h3>
                    <p class="text-gray-600 text-sm">Analizamos tus necesidades</p>
                </div>
                
                <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-blue-600 text-2xl font-bold">2</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-2">Diseño</h3>
                    <p class="text-gray-600 text-sm">Creamos propuestas personalizadas</p>
                </div>
                
                <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-blue-600 text-2xl font-bold">3</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-2">Entrega</h3>
                    <p class="text-gray-600 text-sm">Recibís tu producto terminado</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-16 pb-8">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4 text-blue-400">TULOGO</h3>
                <p class="text-gray-400">Soluciones gráficas personalizadas para tu marca.</p>
                <div class="mt-4 flex space-x-4">
                    <a href="#" class="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div>
                <h4 class="font-bold mb-4 text-lg">PRODUCTOS</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="#" class="hover:text-white transition-colors">Indumentaria</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Calzados</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Regalería</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Cartelería</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Marroquineria</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-bold mb-4 text-lg">EMPRESA</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="#" class="hover:text-white transition-colors">Nosotros</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Proceso</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Clientes</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Trabajá con nosotros</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-bold mb-4 text-lg">CONTACTO</h4>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        San Martín 4379, Neuquén
                    </li>
                    <li class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        0299 4453005
                    </li>
                    <li class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        consulogo@gspublicidad.com.ar
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="container mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2023 TULOGO - Soluciones Gráficas. Todos los derechos reservados.
        </div>
    </footer>

    <!-- WhatsApp Float -->
    <a href="https://wa.me/5492994024762" target="_blank" class="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition transform hover:scale-110 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
    </a>

    <script>
        // Product cards functionality would go here
        const PRODUCTS = [
            { 
                name: "Remera Sahiora",
                isNew: true,
                image: "https://i.postimg.cc/6yz6SGZF/sahiora-e1499094483742.jpg"
            },
            // ... other products
        ];

        // You would implement similar functionality to render products as needed
    </script>
</body>
</html>