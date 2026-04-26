<template>
  <section class="relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300 py-16 lg:py-24 border-b border-gray-200 dark:border-slate-800">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-indigo-100 dark:bg-cyan-900/20 blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"></div>
      <div class="absolute bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-purple-100 dark:bg-blue-900/20 blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"></div>
      <!-- Technical grid background -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1MSwgNjUsIDg1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Left Side: Content -->
        <div class="flex flex-col justify-center items-start space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 dark:bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 dark:bg-cyan-500"></span>
            </span>
            <span class="text-xs font-semibold tracking-wider text-indigo-700 dark:text-cyan-400 uppercase">Commercial Grade Equipment</span>
          </div>
          
          <div class="space-y-4">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Future of <br/>
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">Propulsion</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-lg border-l-4 border-indigo-500 dark:border-cyan-400 pl-4">
              Antigravity & Creative Tech
            </p>
          </div>
          
          <p class="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
            Engineered for precision, designed for the future. Experience the next generation of industrial machineries with state-of-the-art antigravity capabilities and commercial-grade durability.
          </p>

          <div class="flex flex-wrap gap-4 pt-2">
            <button class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-900 font-bold rounded-lg shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
              View Products
            </button>
            <button class="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm transition-all duration-300">
              Technical Specs
            </button>
          </div>
          
          <!-- Metrics -->
          <div class="grid grid-cols-3 gap-6 pt-8 w-full max-w-md border-t border-gray-100 dark:border-slate-800 mt-8">
            <div>
              <p class="text-3xl font-bold text-indigo-600 dark:text-cyan-400">99<span class="text-lg">%</span></p>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Efficiency</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-indigo-600 dark:text-cyan-400">0<span class="text-lg">G</span></p>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Friction</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-indigo-600 dark:text-cyan-400">24<span class="text-lg">/7</span></p>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Support</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Image Placeholder -->
        <div class="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-100 dark:border-slate-700">
          <div class="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent dark:from-cyan-900/40 dark:to-transparent z-10 mix-blend-overlay"></div>
          <!-- Corner Accents -->
          <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-indigo-500 dark:border-cyan-400 z-20 m-4 rounded-tl-lg opacity-50"></div>
          <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-indigo-500 dark:border-cyan-400 z-20 m-4 rounded-br-lg opacity-50"></div>
          
          <img 
            src="/futuristic-machine.png" 
            alt="Futuristic Antigravity Machine" 
            class="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          <!-- Technical Overlay -->
          <div class="absolute bottom-6 left-6 right-6 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-slate-700/50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-xs text-indigo-600 dark:text-cyan-400 font-bold uppercase tracking-wider mb-1">Model X-7</p>
                <p class="text-sm text-slate-800 dark:text-slate-200 font-medium">Levitation Engine Core</p>
              </div>
              <div class="h-8 w-8 rounded-full bg-indigo-100 dark:bg-slate-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero component logic
</script>
