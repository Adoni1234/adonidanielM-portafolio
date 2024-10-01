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

      <a href="https://drive.google.com/file/d/1SdkSQNQvRBX_NCrzQcLIYAeEIpPOEC6z/view?usp=sharing" >
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">
          RESUMEN
        </button>
      </a>
      <button (click)="toggleModal()" class="block ml-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        links
      </button>
    </div>


    <div *ngIf="isModalOpen" id="popup-modal" tabindex="-1" class="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-75">
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button (click)="toggleModal()" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4 md:p-5 text-center">
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Redes Sociales </h3>
             <a href="http://linkedin.com/in/adoni-d-martinez-brito-81535931a" >
              <button (click)="confirmDelete()" class="text-white bg-[#0A64BF] hover:bg-[#0A64BF] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                 linkedin
              </button>
             </a>
             <a href="https://github.com/Adoni1234" >
               <button (click)="toggleModal()" class="py-2.5 px-5 ms-3 text-sm font-medium text-black focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Github
               </button>
             </a>
          </div>
        </div>
      </div>
    </div>


    `
    
})

export class layoutPage {
   constructor(){}
   @ViewChild('elementoADesplazar') elementoADesplazar!: ElementRef;
    scroll_element(element : string){
        this.elementoADesplazar.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
       }

       isModalOpen = false;

       toggleModal() {
         this.isModalOpen = !this.isModalOpen;
       }
     
       confirmDelete() {
         console.log('Item deleted!');
         this.toggleModal(); // Close the modal after confirming
       }
     
}