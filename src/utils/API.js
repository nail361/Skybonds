export const recieveData = async (period) => {
  return await getData(period);
}

const getData = (period) => {
  return new Promise( (resolve) => {
    let endIndex = 0;
    switch(period){
      case 'week': endIndex = 7; break;
      case 'month': endIndex = 30; break;
      case 'quarter': endIndex = 90; break;
      case 'year': endIndex = 365; break;
      case 'max': endIndex = 500; break;
      default: endIndex = 6; break;
    }

    const data = [];
    for(let i = 0; i < endIndex; i++ ) {
      data.push({
        name: i,
        yield: Math.floor(Math.random() * 1000) / 100,
        price: Math.floor(Math.random() * 100) / 10,
        spread: Math.floor(Math.random() * 50) / 10,
      });
    }

    setTimeout( ()=>{ return resolve({status:'ok', data}); }, 1500);
    
  });
}