function harvest (input) {

        let grapeYard = Number(input[0]);
        let grapePerSqMtr = Number(input[1]);
        let wineNorm = Number(input[2]);
        let workersCnt = Number(input[3]); 
    
        let totalGrapeQty = grapeYard * grapePerSqMtr;
        let wineLiters = (totalGrapeQty *0.4) / 2.5;

        if (wineLiters < wineNorm) {
               let shortageWine = wineNorm - wineLiters;
               console.log(`It will be a tough winter! More ${Math.floor(shortageWine)} liters wine needed.`); 
        } else {
                let wineOver = wineLiters - wineNorm;
                let distribution = wineOver / workersCnt;
                console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
                console.log(`${Math.ceil(wineOver)} liters left -> ${Math.ceil(distribution)} liters per person.`);
        }
    }

harvest(['650', '2', '175', '3']);