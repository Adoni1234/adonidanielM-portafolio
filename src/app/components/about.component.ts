import { Component } from "@angular/core";

@Component({
    selector: "AboutComponent",
    template: `
    <div class="p-4">
        <h1 class="text-2xl font-sans font-bold text-[#CCD6F6] mb-8">01. About Me</h1>
        <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <p class="text-[#6390B0]">
                    <span class="text-white">Soy desarrollador de software</span> con experiencia en 
                    administración de bases de datos en SQL Server y MySQL, donde he estado 
                    estudiando activamente durante los últimos 2 años para mejorar mis habilidades 
                    en la gestión de datos. Además, tengo sólidos conocimientos en C# y en lenguajes de 
                    frontend como TypeScript y JavaScript, trabajando con frameworks como Angular, 
                    Next.js y React. Actualmente, estoy ampliando mis conocimientos en el ITLA, donde 
                    estudio la carrera de Software, combinando mi formación académica con experiencia 
                    práctica en el desarrollo de aplicaciones y sistemas.
                </p>

                <div class="container mx-auto p-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h2 class="text-lg text-white mb-2">
                                <i class="fa-solid fa-code text-sm"></i> TypeScript
                            </h2>
                            <h2 class="text-lg text-white mb-2">
                                <i class="fa-solid fa-code text-sm"></i> C# (.NET)
                            </h2>
                            <h2 class="text-lg text-white mb-2">
                                <i class="fa-solid fa-code text-sm"></i> Angular
                            </h2>
                        </div>
                        <div>
                            <h2 class="text-lg text-white mb-2">
                                <i class="fa-solid fa-code text-sm"></i> React
                            </h2>
                            <h2 class="text-lg text-white mb-2">
                                <i class="fa-solid fa-code text-sm"></i> JavaScript
                            </h2>
                            <h2 class="text-lg text-white mb-2">
                                <i class="fa-solid fa-code text-sm"></i> PHP
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <img class="rounded-xl w-full md:w-auto h-[29rem] mr-0 md:mr-8" src="assets/img/Personal.jpg" alt="image description">
        </div>
    </div>
    `
})
export class AboutComponent {}
