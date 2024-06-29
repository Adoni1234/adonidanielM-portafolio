import { Component } from "@angular/core";

@Component({
    selector : "AboutComponent",
    template : `
    <div>
        <h1 class="text-2xl font-sans font-bold text-[#CCD6F6] mb-[2rem]">01. About Me</h1>
        <div class="flex"> 
            <div>
              <p class="text-[#6390B0]">
                 Tengo 
                 <span class="text-white"> 1 años de experiencia </span> en desarrollando sistemas en Angular y c# .Net <br>
                 Mi principal enfoque es implementar nuevas soluciones para  <br> satisfacer diversas necesidades. Además, tengo experiencia  <br> en trabajar con tecnologías de transacciones, <br>  especialmente la implementación con CardNet. Mi objetivo es <br> utilizar mis habilidades y experiencia  para crear <br> soluciones innovadoras y eficientes que impulsen el 
                 <br> éxito de mis clientes y proyectos.
               </p>

               <div class="container mx-auto p-4">
                <div class="grid grid-cols-2 gap-4">
                 <div class="col-span-1">
                     <h2 class="text-lg text-white mb-2"><i class="fa-solid fa-code text-sm"></i> TypeScript</h2>
                     <h2 class="text-lg text-white mb-2"><i class="fa-solid fa-code text-sm"></i> C# (.NET)</h2>
                     <h2 class="text-lg text-white mb-2"><i class="fa-solid fa-code text-sm"></i> Angular</h2>
                 </div>
                 <div class="col-span-1">
                    <h2 class="text-lg text-white mb-2"><i class="fa-solid fa-code text-sm"></i> React</h2>
                    <h2 class="text-lg text-white mb-2"><i class="fa-solid fa-code text-sm"></i> JavaScript</h2>
                    <h2 class="text-lg text-white mb-2"><i class="fa-solid fa-code text-sm"></i> PHP</h2>
                </div>
                 </div>
              </div>
             </div>
          <img class="rounded-full w-96 h-[30rem]" src="https://lh3.googleusercontent.com/pw/AP1GczORnuj7MdW525lGK8g5AzNJ0Jy85v9vZpKnjST9UtaaB1NsT32sT-_Z0xIW3Um77WHMfII4oP2DHWllhvOHekMehMliZvDG6OfA0pjWWi-ZuIOhtOi7EQAuQCheHlNVbo8ZU9IWN84MouZMW65IQuhimU-fORSeXrea_mp0Lf7tXuQBIATocKlmoZM2kpLoHydSwpml2HRgHdlGl8Co7ZameiBWgapWefGkzlq5T0IDe2w59yuT89XLJGrtvamp1TjCdAGiW4CvqPk0tIZ1sK1CCu93RzyBo8eAFJ2GjhQTlOJw8U3eyPOZhFU2QiTi3lYhY2EzyPt2xycJrWjL1euVlCdNebi36T2Xs1Q4eQdky-DbhP2LjZCugfWGfy0ZTpK27pQZQwwKgxCjHwjNEAgtNDtA8Z98SLvf--h9fwh59k9PHA8Av7E4UMeKayY5V4yhgLQYOmd2KLwItPE2zzPUmG8sjvIhWmE5MqLDkG1VdLf2zWPDD1AkDzv8HuUO3-Q-X5wTTm19QujmFXj6PfYRjG8Yhrj6thLnH11-LRlBCv_L4sQR9oMmU99ZfGyKORLgF5JJZuJ6zoFDnt1BX5qYoFkcxO5CXLzSwYrvrYvM3abF9A73FlecBmFFty2pYSJk0YKduiKCIcogO08FessnJXR8ZGYdqOm9lB02UeDs6VwRQ-8XEXLjhZ-X7cFbkW7pAE4MqmV0w64XOs-rKO7MNcWuGfMTIaLAS-1dSdKU0FMsARLDMtd8tjNjYMkpV4BWkVnCnN_qPK0NnhidY_IUrV1MAy9PqrRdXvEoiTsR_VcfU2sLhWZc4O1R6-9M4soveT_MAlVkofrKRkE-nuGqT4o9I3FC9cZSLh4_8sKJ8BXuTqkQmvUqUX2S1wQG-2joXFj6LlGXfwYJl5Ociefl=w591-h827-s-no-gm?authuser=0" alt="image description">
        </div>
    </div>
    `
})
export class AboutComponent {

}