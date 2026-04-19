<template>
    <div class="flex justify-center py-6">
        <div class="popover relative max-w-lg bg-white border border-gray-200 rounded-xl p-5">

            <span
                class="badge inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Vitest
            </span>

            <p class="text-sm font-medium text-gray-900 mb-2">Running your tests</p>

            <p class="text-sm text-gray-500 leading-relaxed mb-4">
                This is for Vitest purposes only. Type the command in your terminal to start the test runner.
            </p>

            <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 flex flex-col gap-2">
                <code class="text-xs font-mono text-emerald-700">
                    <span class="text-gray-400 select-none">$ </span>npm run test
                </code>
            </div>

            
            <div class="mt-4">
                <img src="../assets/test-image.png" alt="">
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.popover {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>