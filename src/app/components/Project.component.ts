import { Component, HostListener } from "@angular/core";

@Component({
    selector : 'ProjectComponent',
    template : `
     <div class="">
      <div class="flex items-center mb-20">
        <h1 class="text-2xl font-sans font-bold text-[#CCD6F6] mb-[2rem]">02. Project</h1>
        <div class="flex-grow border-t border-[#303C55] ml-4 mr-[34rem] "></div>
      </div>


      <div class="relative mb-[5rem]">
        <img class="w-6/12 " src="assets/img/teatro.png" alt="Imagen del teatro">
        <h2 class="text-[#CCD6F6] text-xl z-20 absolute top-[1rem] left-[46rem] ">Teatro Nacional</h2>
        <h2 class="text-white text-sm z-20 absolute top-[13rem] left-[33rem] ">Angular, Tailwind css, C# .Net, Angular Material, RxJS</h2>

        <div class="bg-[#112240] w-full h-full sm:w-5/12 md:w-5/12 sm:h-3/12 md:h-3/12 lg:h-2/3 z-10 p-5 absolute top-[3rem] left-[28rem]">
          <p class="text-[#6390B0] text-sm md:text-sm lg:text-sm xl:text-2xl" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">Aplicacion web para gestion interna de empresa
            que abarca departamento de ventas,
            cobranza y seguimiento muy extensa y compleja con diversas funciones hecha en Angular y Laravel. 
            Trabaja con websockets, schedules, jobs de laravel,
            integraciones con wordpress, zadarma, liveconnect, etc.</p>
        </div>
      </div>

      <div class="relative">
        <img class="w-6/12 relative left-[20rem] " src="assets/img/puncher.png" alt="Imagen del teatro">
        <h2 class="text-[#CCD6F6] text-xl z-20 absolute top-[1rem] right-[55rem] ">Adm. de Poncheo</h2>
        <h2 class="text-white text-sm z-20 absolute top-[13rem] right-[49rem] "> React, Tailwind css, C# .Net, javaScript, RxJS</h2>

        <div class="bg-[#112240] w-full h-full sm:w-5/12 md:w-5/12 sm:h-3/12 md:h-3/12 lg:h-2/3 z-10 p-5 absolute top-[3rem]  right-[38rem]">
          <p class="text-[#6390B0] text-sm md:text-sm lg:text-sm xl:text-2xl" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">Aplicacion web para gestion interna de empresa
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
    
  constructor(){}
   
  resoution_display? : string
  resolution_display_height? : string

  ngOnInit(): void {
    this.updateResolutionMessage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateResolutionMessage();
  }

  updateResolutionMessage() : void{
    const width = window.innerWidth
    
    this.resoution_display = (width >= 320 && width <= 736)? '0.875rem' 
                               :(width >= 768 && width <= 1024)? '0.875rem'
                                 : (width >= 1280 && width <= 1600)? '0.875rem'
                                  : (width >= 1920 && width <= 3840)? '1.75rem'
                                   : undefined

    
    this.resolution_display_height = (width >= 320 && width <= 736) ? '1.25rem'
                                      : (width >= 768 && width <= 1024) ? '1.25rem'
                                        : (width >= 1280 && width <= 1600) ? '1.25rem'
                                         : (width >= 1920 && width <= 3840)? '2rem'
                                          : undefined
     
  }

}