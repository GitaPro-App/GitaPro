fetch('https://vedicscriptures.github.io/slok/2/4')
  .then(response => response.json())
  .then(data => {
    const extractedData = {
      slok: data.slok,
      transliteration: data.transliteration,
      translation: data.siva.et, 
      ramanuja: data.raman.ec
    };
    console.log(extractedData);
  })
  .catch(error => console.error('Error:', error));
