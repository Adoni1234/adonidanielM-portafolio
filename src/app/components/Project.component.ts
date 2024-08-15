import { Component, HostListener } from "@angular/core";

@Component({
    selector : 'ProjectComponent',
    template : `
<div class="">
  <div class="flex items-center mb-20">
    <h1 class="text-2xl font-sans font-bold text-[#CCD6F6] mb-[2rem]">02. Project</h1>
    <div class="flex-grow border-t border-[#303C55] ml-4 mr-[20rem]"></div>
  </div>

  <div class="relative mb-[5rem] mr[10rem]">
    <img class="w-6/12" src="assets/img/teatro.png" alt="Imagen del teatro">
    <div class="absolute top-1/2 transform -translate-y-1/2 left-[40%] bg-[#112240] h-[75%] w-[50%] lg:w-[50%] p-5">
      <h2 class="text-[#CCD6F6] text-xl mb-4">Teatro Nacional (Boleteria)</h2>
      <p class="text-[#6390B0]  text-sm md:text-sm lg:text-sm xl:text-2xl" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">
      El sistema de boletería para el Teatro Nacional desarrollará una solución digital personalizada para la venta de entradas a eventos. Incluirá módulos para la venta en línea a través de un portal web transaccional y la opción de boletas físicas, permitiendo a la administración y producción un control total de las ventas.      </p>
      <p class="text-white text-md text-end  mt-4">Angular, TypeScript, Angular Material, RxJS</p>
    </div>
  </div>

  <div class="relative mb-[5rem] flex justify-end  mr-[15%] ">
    <img class="w-6/12" src="assets/img/puncher.png" alt="Imagen del puncher">
    <div class="absolute top-1/2 transform -translate-y-1/2 right-[40%] bg-[#112240] h-[85%] w-[80%] lg:w-[70%] p-5">
      <h2 class="text-[#CCD6F6] text-xl mb-4">Adm. de Poncheo</h2>
      <p ngClass="text-[#6390B0] text-sm md:text-md xl:text-sm" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">
      Adm Poncheo es una aplicación web diseñada para registrar la asistencia de empleados que trabajan en empresas externas. Su principal función es consolidar la información de los empleados que se encuentran en diferentes empresas. La aplicación permite agrupar a los empleados por empresa, proporcionando así una solución interna eficiente para la gestión de asistencia.      </p>
      <p class="text-white text-md mt-4 ">React, Tailwind CSS, C# .Net, JavaScript, RxJS</p>
    </div>
  </div>

</div>


    `

})
export class ProjectComponent{
    
  constructor(){}
   
  
  ngOnInit(): void {
    this.updateResolutionMessage();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateResolutionMessage();
  }
  
  resoution_display? : string
  resolution_display_height? : string
  updateResolutionMessage() : void{
    const width = window.innerWidth
    
    this.resoution_display = (width >= 320 && width <= 736)? '0.875rem' 
                               :(width >= 768 && width <= 1024)? '0.875rem'
                                 : (width >= 1280 && width <= 1600)? '0.875rem'
                                  : (width >= 1920 && width <= 3840)? '1.50rem'
                                   : undefined

    
    this.resolution_display_height = (width >= 320 && width <= 736) ? '1.25rem'
                                      : (width >= 768 && width <= 1024) ? '1.25rem'
                                        : (width >= 1280 && width <= 1600) ? '1.25rem'
                                         : (width >= 1920 && width <= 3840)? '1.90rem'
                                          : undefined
     
  }

}