const getRandomJokeJSON = (limit = 1) => {
  const qList = [];
  qList[0] = {
    q: 'What do you call a very small valentine?',
    a: 'A valen-tiny!!!',
  };
  qList[1] = {
    q: 'What did the dog say when he rubbed his tail on the sandpaper?',
    a: 'Ruff, Ruff!!!',
  };
  qList[2] = {
    q: "Why don't sharks like to eat clowns?",
    a: 'Because they taste funny!!!',
  };
  qList[3] = {
    q: 'What did the boy cat say to the girl cat?',
    a: "You're Purr-fect!!!",
  };
  qList[4] = {
    q: "What is a frog's favorite outdoor sport?",
    a: 'Fly Fishing!!!',
  };
  qList[5] = {
    q: 'I hate jokes about German sausages.',
    a: 'Theyre the wurst!!!',
  };
  qList[6] = {
    q: 'Did you hear about the cheese factory that exploded in France?',
    a: 'There was nothing left but de Brie!!!',
  };
  qList[7] = {
    q: 'Our wedding was so beautiful',
    a: 'Even the cake was in tiers!!!',
  };
  qList[8] = {
    q: 'Is this pool safe for diving?',
    a: 'It deep ends!!!',
  };
  qList[9] = {
    q: 'Dad, can you put my shoes on?',
    a: 'I dont think theyll fit me!!!',
  };
  const limit2 = Number(limit);
  if (limit2 === 1) {
    const responseObj = qList[Math.floor(Math.random() * 10)];
    return JSON.stringify(responseObj);
  }
  const responseObjList = [];
  for (let i = 0; i < limit2; i += 1) {
    const responseObj = qList[Math.floor(Math.random() * 10)];
    responseObjList[i] = responseObj;
    console.log('1');
  }
  return JSON.stringify(responseObjList);
};

const getRandomJokeResponse = (request, response, params) => {
  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(getRandomJokeJSON(params.limit));
  response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
