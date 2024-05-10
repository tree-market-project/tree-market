"use client"

export function useInitializeWorker(){
    
    const initializeWorker = async (): Promise<Worker> => {
        return new Promise((resolve) => {
          const worker = new Worker('worker.js');
          worker.onmessage = (event) => {
            if (event.data.type === 'initialized') {
              console.log('Worker initialized');
              resolve(worker);
            }
          };
          worker.postMessage({ type: 'initialize' });
        });
        
      };
      

   

    

       
        
          

    return initializeWorker
}