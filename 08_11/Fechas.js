const daysTillNewYear = () => {
    const date = new Date()
    let arrDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`.split('/')
    const newYear = new Date(date.getFullYear(), '11', '31')
    let arrNewYear = `${newYear.getFullYear()}/${newYear.getMonth()+1}/${newYear.getDate()}`.split('/')

    if(arrDate === arrNewYear){
        console.log('Hoy es año nuevo');
    } else {
        const remaingDays = {months: (arrNewYear[1]-arrDate[1]), days: (arrNewYear[2])-arrDate[2]}
        console.log(`Quedan ${remaingDays.months} meses y ${remaingDays.days} dias para año nuevo`)
    }

}
daysTillNewYear()