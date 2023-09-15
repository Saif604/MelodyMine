export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'inr',
    }).format(number/100);
    return newNumber;
}

export const getUniqueValues = (items, belong) => {
    if(belong !== 'colors')
    return ['all',...new Set(items.map(item=> item[belong]))];

    return [...new Set(items.reduce((acc,curr)=>{
        return [...acc,...curr[belong]];
    },['all']))]
}
