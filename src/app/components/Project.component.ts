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
     <div class="absolute top-1/2 transform -translate-y-1/2 left-[40%]  h-auto w-[50%] lg:w-[50%]">
        <div class="bg-[#112240]  p-5">
          <h2 class="text-[#CCD6F6] text-xl mb-4">Teatro Nacional (Boleteria)</h2>
          <p class="text-[#6390B0]  text-sm md:text-sm lg:text-sm xl:text-2xl" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">
            El sistema de boletería para el Teatro Nacional desarrollará una solución digital personalizada para la venta de entradas a eventos. Incluirá módulos para la venta en línea a través de un portal web transaccional y la opción de boletas físicas, permitiendo a la administración y producción un control total de las ventas.     
            <a class="text-blue-500 " href="https://boleteria.com.do/">Link Page</a>
           </p>
          </div>
          <p class="text-white text-md text-end font-bold mt-1">Angular, TypeScript, Angular Material, RxJS</p>
      </div>
  </div>

  <div class="relative mb-[5rem] flex justify-end  mr-[15%] ">
    <img class="w-6/12" src="assets/img/puncher.png" alt="Imagen del puncher">
    
    <div class="absolute top-1/2 transform -translate-y-1/2 right-[40%]  w-[80%] lg:w-[70%]">
      <div class=" bg-[#112240] h-auto p-5">
        <h2 class="text-[#CCD6F6] text-xl mb-4">Adm. de Poncheo</h2>
        <p ngClass="text-[#6390B0] text-sm md:text-md xl:text-sm" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">
        Adm Poncheo es una aplicación web diseñada para registrar la asistencia de empleados que trabajan en empresas externas. Su principal función es consolidar la información de los empleados que se encuentran en diferentes empresas. La aplicación permite agrupar a los empleados por empresa, proporcionando así una solución interna eficiente para la gestión de asistencia.    
       <a class="text-blue-500 " href="https://puncher-assitan-tng.vercel.app/">Link Page</a>
      </p>
      </div>
      <p class="text-white text-md mt-1 font-bold ">React, Tailwind CSS, C# .Net, JavaScript, RxJS</p>
    </div>
  </div>

  <div class="relative mb-[5rem] mr-[10rem]"> 
   <div class="relative w-[20%] h-2/3 overflow-hidden ml-[15%] rounded-xl">
     <div 
       class="carousel flex transition-transform duration-700 ease-in-out" 
       [ngStyle]="{'transform': 'translateX(' + translateX + '%)'}"
       style="width: 100%;" 
     >
       <img class="w-62 h-54 object-cover  flex-none" src="assets/img/orbining-react-native.png" alt="Imagen del teatro">
       <img class="w-62 h-54 object-cover  flex-none" src="assets/img/login-react-native.png" alt="Imagen del teatro">
       <img class="w-62 h-54 object-cover  flex-none" src="assets/img/home-react-native.png" alt="Imagen del teatro">
       <img class="w-62 h-54 object-cover  flex-none" src="assets/img/cart-react-native.png" alt="Imagen del teatro">
       <img class="w-62 h-54 object-cover  flex-none" src="assets/img/profile.png" alt="Imagen del teatro">
       <img class="w-62 h-54 object-cover  flex-none" src="assets/img/CartBuy.png" alt="Imagen del teatro">
     </div>
   </div>
   
   <div class="absolute top-1/2 transform -translate-y-1/2 left-[40%]  w-[60%] lg:w-[60%] p-5">
      <div  class="h-auto bg-[#112240]  p-5">
         <h2 class="text-[#CCD6F6] text-xl mb-4">App Courses (Aprendizaje)</h2>
           <p class="text-[#6390B0]  text-sm md:text-sm lg:text-md xl:text-2xl" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">
           Esta aplicación, desarrollada como parte de mi aprendizaje en React Native, ofrece una experiencia intuitiva y atractiva para los usuarios. A través de esta app, he aplicado conceptos fundamentales de React Native, como la gestión de estado, la navegación entre pantallas y el uso de componentes reutilizables. Este proyecto no solo me ha permitido mejorar mis habilidades técnicas, sino que también me ha enseñado sobre el diseño de interfaces y la optimización del rendimiento en aplicaciones móviles.
           <a class="text-blue-500 " href="https://drive.google.com/drive/folders/15Z51P83Vy4fNR9BnL0iwoN3o5oxbagMY?usp=sharing">Link App (Dowloand)</a>
          </p>
         </div>
         <p class="text-white text-md text-end font-bold">React Native, JavaScript, Tailwind CSS</p>
   </div>
 </div>

 
  <div class="relative mb-[5rem] mr-[10rem]"> 
    
   <div class="relative w-[50%] xl:w-[60%] h-full overflow-hidden ml-[48%] mr-[20%] ">
     <div 
       class="carousel flex transition-transform duration-700 ease-in-out" 
       [ngStyle]="{'transform': 'translateX(' + translateXtwo + '%)'}"
       style="width: 100%;" 
      >
       <img class="w-78 h-78  object-cover  flex-none" src="assets/img/modal-map-stamp.png" alt="Imagen del teatro">
       <img class="w-78 h-78  object-cover  flex-none" src="assets/img/login-map-stamp.png" alt="Imagen del teatro">
       <img class="w-78 h-78  object-cover  flex-none" src="assets/img/moreinfo-map-stamp.png" alt="Imagen del teatro">
       <img class="w-78 h-78  object-cover  flex-none" src="assets/img/pagemap-map-stamp.png" alt="Imagen del teatro">

     </div>
   </div>
   
   <div class="absolute top-1/2 transform -translate-y-1/2 -left-[9%]  w-[60%] lg:w-[65%] p-5">
      <div  class="h-auto bg-[#112240]  p-5">
         <h2 class="text-[#CCD6F6] text-xl mb-4">Map-Stamp</h2>
           <p class="text-[#6390B0]  text-sm md:text-sm lg:text-md xl:text-2xl" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">
           Map-Stamp está integrado con el sistema Stamp, lo que permite automatizar procesos y notificaciones relacionados con las obras. Esta integración facilita que los solicitantes visualicen sus certificados de obras notificadas y, del lado administrativo, ofrece un mapa interactivo para gestionar y monitorear las obras en proceso.           <a class="text-blue-500 " href="https://maps-stamp.vercel.app/map/asdn">Link Page </a>
          </p>
         </div>
         <p class="text-white text-md text-start font-bold">NextJs, TypeScript, Tailwind CSS</p>
     </div>
  </div>

  <div class="relative mb-[5rem] mr-[10rem] mt-[20rem]"> 
   <div class="relative e w-[50%] xl:w-[60%] h-full mr-[50%] overflow-hidden  rounded-xl">
     <div 
       class="carousel flex transition-transform duration-700 ease-in-out" 
       [ngStyle]="{'transform': 'translateX(' + translateXtwo + '%)'}"
       style="width: 100%;" 
     >
       <img class="w-full h-78 object-cover  flex-none" src="assets/img/imgLoterry1.png" alt="Imagen del teatro">
       <img class="w-full h-78 object-cover  flex-none" src="assets/img/imgLottery2.png" alt="Imagen del teatro">
       <img class="w-full h-78 object-cover  flex-none" src="assets/img/imgLottery3.png" alt="Imagen del teatro">
       <img class="w-full h-78 object-cover  flex-none" src="assets/img/imgLottery3.png" alt="Imagen del teatro">


     </div>
   </div>
   
   <div class="absolute top-1/2 transform -translate-y-1/2 left-[44%]  w-[60%] lg:w-[60%] p-5">
      <div  class="h-auto bg-[#112240]  p-5">
         <h2 class="text-[#CCD6F6] text-xl mb-4">Lottery Result (En conjunto)</h2>
           <p class="text-[#6390B0]  text-sm md:text-sm lg:text-md xl:text-2xl" [ngStyle]="{'font-size': resoution_display, 'line-height' : resolution_display_height}">
           Desarrollé junto a un compañero una página de resultados de lotería, combinando Next.js y Python. Utilizamos Next.js para construir una interfaz de usuario clara y eficiente que permitiera a los usuarios acceder rápidamente a los resultados de diversas loterías. Python se encargó del backend, gestionando la obtención y procesamiento de datos en tiempo real para mantener la información siempre actualizada y precisa     <a class="text-blue-500 " href="https://loteriahoy.com.do/">Link Page </a>      </p>
         </div>
         <p class="text-white text-md text-end font-bold">Next.js, TypeScript, Tailwind CSS, Python</p>
   </div>
 </div>


  
</div>


    `

})
export class ProjectComponent{
    
  constructor(){}
   
  
  ngOnInit(): void {
    this.updateResolutionMessage();
    this.startCarousel();
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

  translateX: number = 0; 
  translateXtwo: number = 0; 

  currentSlide: number = 0; 
  currentSlidetwo: number = 0;

   
  totalSlides: number = 6; 
  totalSlidesTwo: number = 4;

  intervalIdtwo: any;
  intervalId: any;



  ngOnDestroy(): void {
    clearInterval(this.intervalId); 
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides; 
      this.translateX = -this.currentSlide * 100; 
    }, 3000); 

    this.intervalIdtwo = setInterval(() => {
      this.currentSlidetwo = (this.currentSlidetwo + 1) % this.totalSlidesTwo; 
      this.translateXtwo = -this.currentSlidetwo * 100; 
    }, 3000); 
  }

}