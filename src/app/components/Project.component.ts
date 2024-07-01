import { Component } from "@angular/core";

@Component({
    selector : 'ProjectComponent',
    template : `
     <div>
      <div class="flex items-center mb-20">
        <h1 class="text-2xl font-sans font-bold text-[#CCD6F6] mb-[2rem]">02. Project</h1>
        <div class="flex-grow border-t border-[#303C55] ml-4 mr-[34rem] "></div>
      </div>

      <div class="relative">
        <img class="w-6/12 " src="assets/img/teatro.png" alt="Imagen del teatro">
        <div class="bg-[#112240] w-5/12 h-3/12 z-10 p-5 absolute top-[3rem] left-[28rem]">
          <p class="text-[#6390B0]">Aplicacion web para gestion interna de empresa
            que abarca departamento de ventas,
            cobranza y seguimiento muy extensa y compleja con diversas funciones hecha en Angular y Laravel. 
            Trabaja con websockets, schedules, jobs de laravel,
            integraciones con wordpress, zadarma, liveconnect, etc.</p>
        </div>
      </div>
    </div>
    `

})
export class ProjectComponent{

}