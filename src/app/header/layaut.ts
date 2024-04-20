import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector : 'layoutPage',
    template: `
   <div class="flex justify-center items-center py-4 px-6">
       <div class="flex items-center">
          <span class="text-white font-bold text-5xl mr-32">A</span>
          <nav>
              <ul class="flex space-x-[4rem]">
                  <li>
                      <a href="#" class="text-gray-300 text-sm hover:text-white">01 .About me</a>
                  </li>
                  <li>
                      <a href="#" class="text-gray-300 text-sm hover:text-white">02 .Experience</a>
                  </li>
                  <li>
                      <a href="#" class="text-gray-300 text-sm hover:text-white">03 .Projects</a>
                  </li>
                  <li>
                      <a href="#" class="text-gray-300 text-sm hover:text-white">04 .Contact</a>
                  </li>
              </ul>
          </nav>
      </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">
        RESUMEN
    </button>
</div>
    `
    
})

export class layoutPage {
   constructor(){}
   @ViewChild('elementoADesplazar') elementoADesplazar!: ElementRef;
    scroll_element(element : string){
        this.elementoADesplazar.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
       }
}