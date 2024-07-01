import { Component } from "@angular/core";

@Component({
    selector : "ContactComponent",
    template :  ` 
      <section class="flex flex-col items-center justify-center text-center h-screen bg-[#0a192f]">
          <p class="text-[#62F9D6] text-lg mb-4">05. Y... ¿Ahora?</p>
          <h1 class="text-4xl font-bold text-white mb-4">¡Salúdame!</h1>
          <p class="text-[#8892b0] text-md max-w-lg">
             Estaré encantado de recibir tu contacto si quieres conversar acerca de nuevas oportunidades.
             Escríbeme y te responderé tan pronto como vea tu mensaje.
          </p>
         <footer class="relative bottom-4 mt-24 text-[#8892b0] text-xs">
           Construido con Angular por Adoni Martinez <br>
           Diseñado por Jose
         </footer>
       </section>
    `

})
export class ContactComponent{

}