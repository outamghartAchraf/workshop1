function Trovel(N) {
    let position = 0;
    let moves = 0;
    let stockchemin = [position];

   
    if (N <= 0) {
        console.log("0");
      return;
    }

    while (position !== N) {
        if (N > position) {
            position += 2;
        } else {
            position -= 1;
        }

        moves++;
        stockchemin.push(position)
         
        if (position > N + 2) {
            position -= 1;
            stockchemin.push(position);
        }
        
    
    }
    
     console.log(`Chemin : ${stockchemin.join("-->")}`);
    console.log(`Etage: ${position} Nombre moves: ${moves}`);

}

Trovel(5)




// function minMoves(N) {
//     let position = 0;
//     let moves = 0;
//     let stockchemin = [position];  

 
//     if (N === 0) {
//         console.log("0");
//         return;
//     }

//     while (position !== N) {
//         if (N > position) {
          
//             position += 3;
//         } else {
           
//             position -= 2;
//         }

//         moves++;
//         stockchemin.push(position);  

     
//         if (position > N + 3) {
//             position -= 2;
//             path.push(position);
//         }
//     }

//     console.log(`Chemin : ${stockchemin.join(" --> ")}`);
//     console.log(`Étage : ${position}, Nombre moves : ${moves}`);
// }

//  minMoves(5)

