export const exerciseOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': '13d077f662msh997627b1c95d7dep1afb49jsnbd8d2e2bfb97',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options)=>{
    const response = await fetch(url, options)
    const data = await response.json();
    return data;    
}

