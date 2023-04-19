

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
  organization: ''
});
const openai = new OpenAIApi(configuration);

async function getGPTResponse(text) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: text,
    temperature: 1,
    max_tokens: 4000
  });
  if (response.status != 200) return 'Deu erro aqui zé';
  console.log(response.data.choices);
  return response.data.choices.map(({ text }) => text).join(' ').trim();
}

async function getImageDalle(text) {
  const response = await openai.createImage({
    prompt: text,
    n: 1,
    size: '1024x1024'
  });
  if (response.status != 200) return 'Deu erro aqui zé';
  return response.data.data[0].url;
}

module.exports = {
 getGPTResponse,
 getImageDalle
}