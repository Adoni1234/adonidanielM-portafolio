import { Component } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector : 'experienceComponent',
    template : `
     <body>
     <div class="flex items-center mb-20">
       <h1 class="text-2xl font-sans font-bold text-[#CCD6F6] mb-[2rem]">02. experience</h1>
       <div class="flex-grow border-t border-[#303C55] ml-4 mr-[34rem] "></div>
     </div>

      <div class="flex">
        <div class=" mr-8 border-l-2  border-[#303C55]">
            <ul class="mt-4 space-y-5 ml-4">
                <li><a (click)="Experience('inteel')" class=" text-[#8892b0] hover:text-[#62F9D6] text-md mb-5">Tema 1</a></li>
                <li><a (click)="Experience('')" class="text-[#8892b0] hover:text-[#62F9D6] text-md mb-5">Tema 2</a></li>
                <li><a (click)="Experience('')" class="text-[#8892b0] hover:text-[#62F9D6] text-md mb-5">Tema 3</a></li>
                <li><a (click)="Experience('')" class="text-[#8892b0] hover:text-[#62F9D6] text-md mb-5">Tema 4</a></li>
            </ul>
        </div>
         <div class="bg-transparent gap-2">
            <div class="">
                <div class="flex ">
                  <h1 class="text-[#CCD6F6] mr-2 text-lg ">Tema 1 /</h1>
                  <h1 class="text-[#64FFDA]  text-lg ">Global</h1> 
                </div>
                <h2 class="text-[#909BB9] text-left"> Frebrero 12 al 15 marzo</h2>
            </div>
             <p class="text-[#9CA7C4] text-md ml-4 text-left mt-2">{{texto}}</p>
         </div>
     </div>
     </body>
    `
})
export class ExperienceComponent {
      texto : String  = "";

    Experience(options : string){
        
        switch(options) {
        case 'inteel' :
           this. texto = `01. Implementacion de mejoras continuas, trabajando en frontend y backend.`
            break;
        case '' :
            this.texto = ''
            break;
      }
    
    }
}