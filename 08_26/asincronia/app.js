const btn = document.querySelector("#btn");
const dataContainer = document.querySelector("#data-container");

const fetchData = async (resource) => {
  const response = await fetch(resource);
  return await response.text();
};
const getDataFromResourses = async () => {
  const resources = ["/robots.txt", "/index.css", "/index.js"];

  try {
    const responses = await Promise.all(resources.map(fetchData))
    return responses
  } catch (e){
    console.log('Error fetching data: ', e);
    return []
  }
};

btn.addEventListener("click", async () => {
    dataContainer.innerHTML = 'Recolectando datos...'

    const responses = await getDataFromResourses()
    if(responses.length > 0){
        dataContainer.innerHTML = '<h4>Datos recogidos:</h4>'
        responses.forEach((data, i)=>{
            const resourceTitle = resources[i]
            const dateElemnt = document.createElement('pre')
            dateElemnt.innerText = `${resourceTitle}:\n${data}`
            dataContainer.appendChild(dateElemnt)
        })
    } else {
        dataContainer.innerHTML = '<p>Error al recolectar los datos</p>'
    }
});
