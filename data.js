function importantData(){
    let data = {
        title:'Alquimia básica',
        subtitle:'La cocina en la fantasía',
        description:'En un mundo de fantasía con mágia, brujería, criaturas ancestrales y monstruos inimaginables, la cocina debe ser un refugio no solo del cuerpo sino también del alma. ¿Cómo integrar el arte de la cocina en un mundo oscuro y perturvador como el descrito en la alta fantasía?'
    }
    return data
}

function baseHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Example</title>
        </head>
        <body>`
}

module.exports = {
    importantData,
    baseHTML
}